/* compact [
	../prive/javascript/jquery.js?1551954343
	../prive/javascript/jquery-migrate-3.0.1.js?1551954343
	../prive/javascript/jquery.form.js?1551954343
	../prive/javascript/jquery.autosave.js?1551954343
	../prive/javascript/jquery.placeholder-label.js?1551954343
	../prive/javascript/ajaxCallback.js?1551954343
	../prive/javascript/js.cookie.js?1551954343
	../prive/javascript/jquery.cookie.js?1551954343
	../prive/javascript/spip_barre.js?1551954343
	../prive/javascript/layer.js?1551954343
	../prive/javascript/presentation.js?1551954343
	../prive/javascript/gadgets.js?1551954343
	../plugins-dist/jquery_ui/prive/javascript/ui/jquery-ui.js
	../plugins-dist/mediabox/javascript/jquery.colorbox.js?1551954394
	../plugins-dist/mediabox/javascript/spip.mediabox.js?1551954394
	../plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1551954377
	../plugins-dist/porte_plume/javascript/jquery.previsu_spip.js?1551954377
	../local/cache-js/jsdyn-javascript_porte_plume_start_js-7b14a507.js?1551957526
	../plugins-dist/porte_plume/javascript/porte_plume_forcer_hauteur.js?1551954377
] 61.7% */

/* ../prive/javascript/jquery.js?1551954343 */

(function(global,factory){
"use strict";
if(typeof module==="object"&&typeof module.exports==="object"){
module.exports=global.document?
factory(global,true):
function(w){
if(!w.document){
throw new Error("jQuery requires a window with a document");
}
return factory(w);
};
}else{
factory(global);
}
})(typeof window!=="undefined"?window:this,function(window,noGlobal){
"use strict";
var arr=[];
var document=window.document;
var getProto=Object.getPrototypeOf;
var slice=arr.slice;
var concat=arr.concat;
var push=arr.push;
var indexOf=arr.indexOf;
var class2type={};
var toString=class2type.toString;
var hasOwn=class2type.hasOwnProperty;
var fnToString=hasOwn.toString;
var ObjectFunctionString=fnToString.call(Object);
var support={};
function DOMEval(code,doc){
doc=doc||document;
var script=doc.createElement("script");
script.text=code;
doc.head.appendChild(script).parentNode.removeChild(script);
}
var
version="3.2.1",
jQuery=function(selector,context){
return new jQuery.fn.init(selector,context);
},
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
rmsPrefix=/^-ms-/,
rdashAlpha=/-([a-z])/g,
fcamelCase=function(all,letter){
return letter.toUpperCase();
};
jQuery.fn=jQuery.prototype={
jquery:version,
constructor:jQuery,
length:0,
toArray:function(){
return slice.call(this);
},
get:function(num){
if(num==null){
return slice.call(this);
}
return num<0?this[num+this.length]:this[num];
},
pushStack:function(elems){
var ret=jQuery.merge(this.constructor(),elems);
ret.prevObject=this;
return ret;
},
each:function(callback){
return jQuery.each(this,callback);
},
map:function(callback){
return this.pushStack(jQuery.map(this,function(elem,i){
return callback.call(elem,i,elem);
}));
},
slice:function(){
return this.pushStack(slice.apply(this,arguments));
},
first:function(){
return this.eq(0);
},
last:function(){
return this.eq(-1);
},
eq:function(i){
var len=this.length,
j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[]);
},
end:function(){
return this.prevObject||this.constructor();
},
push:push,
sort:arr.sort,
splice:arr.splice
};
jQuery.extend=jQuery.fn.extend=function(){
var options,name,src,copy,copyIsArray,clone,
target=arguments[0]||{},
i=1,
length=arguments.length,
deep=false;
if(typeof target==="boolean"){
deep=target;
target=arguments[i]||{};
i++;
}
if(typeof target!=="object"&&!jQuery.isFunction(target)){
target={};
}
if(i===length){
target=this;
i--;
}
for(;i<length;i++){
if((options=arguments[i])!=null){
for(name in options){
src=target[name];
copy=options[name];
if(target===copy){
continue;
}
if(deep&&copy&&(jQuery.isPlainObject(copy)||
(copyIsArray=Array.isArray(copy)))){
if(copyIsArray){
copyIsArray=false;
clone=src&&Array.isArray(src)?src:[];
}else{
clone=src&&jQuery.isPlainObject(src)?src:{};
}
target[name]=jQuery.extend(deep,clone,copy);
}else if(copy!==undefined){
target[name]=copy;
}
}
}
}
return target;
};
jQuery.extend({
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),
isReady:true,
error:function(msg){
throw new Error(msg);
},
noop:function(){},
isFunction:function(obj){
return jQuery.type(obj)==="function";
},
isWindow:function(obj){
return obj!=null&&obj===obj.window;
},
isNumeric:function(obj){
var type=jQuery.type(obj);
return(type==="number"||type==="string")&&
!isNaN(obj-parseFloat(obj));
},
isPlainObject:function(obj){
var proto,Ctor;
if(!obj||toString.call(obj)!=="[object Object]"){
return false;
}
proto=getProto(obj);
if(!proto){
return true;
}
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;
return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;
},
isEmptyObject:function(obj){
var name;
for(name in obj){
return false;
}
return true;
},
type:function(obj){
if(obj==null){
return obj+"";
}
return typeof obj==="object"||typeof obj==="function"?
class2type[toString.call(obj)]||"object":
typeof obj;
},
globalEval:function(code){
DOMEval(code);
},
camelCase:function(string){
return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);
},
each:function(obj,callback){
var length,i=0;
if(isArrayLike(obj)){
length=obj.length;
for(;i<length;i++){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}else{
for(i in obj){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}
return obj;
},
trim:function(text){
return text==null?
"":
(text+"").replace(rtrim,"");
},
makeArray:function(arr,results){
var ret=results||[];
if(arr!=null){
if(isArrayLike(Object(arr))){
jQuery.merge(ret,
typeof arr==="string"?
[arr]:arr
);
}else{
push.call(ret,arr);
}
}
return ret;
},
inArray:function(elem,arr,i){
return arr==null?-1:indexOf.call(arr,elem,i);
},
merge:function(first,second){
var len=+second.length,
j=0,
i=first.length;
for(;j<len;j++){
first[i++]=second[j];
}
first.length=i;
return first;
},
grep:function(elems,callback,invert){
var callbackInverse,
matches=[],
i=0,
length=elems.length,
callbackExpect=!invert;
for(;i<length;i++){
callbackInverse=!callback(elems[i],i);
if(callbackInverse!==callbackExpect){
matches.push(elems[i]);
}
}
return matches;
},
map:function(elems,callback,arg){
var length,value,
i=0,
ret=[];
if(isArrayLike(elems)){
length=elems.length;
for(;i<length;i++){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}else{
for(i in elems){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}
return concat.apply([],ret);
},
guid:1,
proxy:function(fn,context){
var tmp,args,proxy;
if(typeof context==="string"){
tmp=fn[context];
context=fn;
fn=tmp;
}
if(!jQuery.isFunction(fn)){
return undefined;
}
args=slice.call(arguments,2);
proxy=function(){
return fn.apply(context||this,args.concat(slice.call(arguments)));
};
proxy.guid=fn.guid=fn.guid||jQuery.guid++;
return proxy;
},
now:Date.now,
support:support
});
if(typeof Symbol==="function"){
jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];
}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
function(i,name){
class2type["[object "+name+"]"]=name.toLowerCase();
});
function isArrayLike(obj){
var length=!!obj&&"length"in obj&&obj.length,
type=jQuery.type(obj);
if(type==="function"||jQuery.isWindow(obj)){
return false;
}
return type==="array"||length===0||
typeof length==="number"&&length>0&&(length-1)in obj;
}
var Sizzle=
(function(window){
var i,
support,
Expr,
getText,
isXML,
tokenize,
compile,
select,
outermostContext,
sortInput,
hasDuplicate,
setDocument,
document,
docElem,
documentIsHTML,
rbuggyQSA,
rbuggyMatches,
matches,
contains,
expando="sizzle"+1*new Date(),
preferredDoc=window.document,
dirruns=0,
done=0,
classCache=createCache(),
tokenCache=createCache(),
compilerCache=createCache(),
sortOrder=function(a,b){
if(a===b){
hasDuplicate=true;
}
return 0;
},
hasOwn=({}).hasOwnProperty,
arr=[],
pop=arr.pop,
push_native=arr.push,
push=arr.push,
slice=arr.slice,
indexOf=function(list,elem){
var i=0,
len=list.length;
for(;i<len;i++){
if(list[i]===elem){
return i;
}
}
return-1;
},
booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
whitespace="[\\x20\\t\\r\\n\\f]",
identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+
"*([*^$|!~]?=)"+whitespace+
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+
"*\\]",
pseudos=":("+identifier+")(?:\\(("+
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+
".*"+
")\\)|)",
rwhitespace=new RegExp(whitespace+"+","g"),
rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),
rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),
rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),
rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),
rpseudo=new RegExp(pseudos),
ridentifier=new RegExp("^"+identifier+"$"),
matchExpr={
"ID":new RegExp("^#("+identifier+")"),
"CLASS":new RegExp("^\\.("+identifier+")"),
"TAG":new RegExp("^("+identifier+"|[*])"),
"ATTR":new RegExp("^"+attributes),
"PSEUDO":new RegExp("^"+pseudos),
"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+
"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+
"*(\\d+)|))"+whitespace+"*\\)|)","i"),
"bool":new RegExp("^(?:"+booleans+")$","i"),
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")
},
rinputs=/^(?:input|select|textarea|button)$/i,
rheader=/^h\d$/i,
rnative=/^[^{]+\{\s*\[native \w/,
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
rsibling=/[+~]/,
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),
funescape=function(_,escaped,escapedWhitespace){
var high="0x"+escaped-0x10000;
return high!==high||escapedWhitespace?
escaped:
high<0?
String.fromCharCode(high+0x10000):
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);
},
rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
fcssescape=function(ch,asCodePoint){
if(asCodePoint){
if(ch==="\0"){
return"\uFFFD";
}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";
}
return"\\"+ch;
},
unloadHandler=function(){
setDocument();
},
disabledAncestor=addCombinator(
function(elem){
return elem.disabled===true&&("form"in elem||"label"in elem);
},
{dir:"parentNode",next:"legend"}
);
try{
push.apply(
(arr=slice.call(preferredDoc.childNodes)),
preferredDoc.childNodes
);
arr[preferredDoc.childNodes.length].nodeType;
}catch(e){
push={apply:arr.length?
function(target,els){
push_native.apply(target,slice.call(els));
}:
function(target,els){
var j=target.length,
i=0;
while((target[j++]=els[i++])){}
target.length=j-1;
}
};
}
function Sizzle(selector,context,results,seed){
var m,i,elem,nid,match,groups,newSelector,
newContext=context&&context.ownerDocument,
nodeType=context?context.nodeType:9;
results=results||[];
if(typeof selector!=="string"||!selector||
nodeType!==1&&nodeType!==9&&nodeType!==11){
return results;
}
if(!seed){
if((context?context.ownerDocument||context:preferredDoc)!==document){
setDocument(context);
}
context=context||document;
if(documentIsHTML){
if(nodeType!==11&&(match=rquickExpr.exec(selector))){
if((m=match[1])){
if(nodeType===9){
if((elem=context.getElementById(m))){
if(elem.id===m){
results.push(elem);
return results;
}
}else{
return results;
}
}else{
if(newContext&&(elem=newContext.getElementById(m))&&
contains(context,elem)&&
elem.id===m){
results.push(elem);
return results;
}
}
}else if(match[2]){
push.apply(results,context.getElementsByTagName(selector));
return results;
}else if((m=match[3])&&support.getElementsByClassName&&
context.getElementsByClassName){
push.apply(results,context.getElementsByClassName(m));
return results;
}
}
if(support.qsa&&
!compilerCache[selector+" "]&&
(!rbuggyQSA||!rbuggyQSA.test(selector))){
if(nodeType!==1){
newContext=context;
newSelector=selector;
}else if(context.nodeName.toLowerCase()!=="object"){
if((nid=context.getAttribute("id"))){
nid=nid.replace(rcssescape,fcssescape);
}else{
context.setAttribute("id",(nid=expando));
}
groups=tokenize(selector);
i=groups.length;
while(i--){
groups[i]="#"+nid+" "+toSelector(groups[i]);
}
newSelector=groups.join(",");
newContext=rsibling.test(selector)&&testContext(context.parentNode)||
context;
}
if(newSelector){
try{
push.apply(results,
newContext.querySelectorAll(newSelector)
);
return results;
}catch(qsaError){
}finally{
if(nid===expando){
context.removeAttribute("id");
}
}
}
}
}
}
return select(selector.replace(rtrim,"$1"),context,results,seed);
}
function createCache(){
var keys=[];
function cache(key,value){
if(keys.push(key+" ")>Expr.cacheLength){
delete cache[keys.shift()];
}
return(cache[key+" "]=value);
}
return cache;
}
function markFunction(fn){
fn[expando]=true;
return fn;
}
function assert(fn){
var el=document.createElement("fieldset");
try{
return!!fn(el);
}catch(e){
return false;
}finally{
if(el.parentNode){
el.parentNode.removeChild(el);
}
el=null;
}
}
function addHandle(attrs,handler){
var arr=attrs.split("|"),
i=arr.length;
while(i--){
Expr.attrHandle[arr[i]]=handler;
}
}
function siblingCheck(a,b){
var cur=b&&a,
diff=cur&&a.nodeType===1&&b.nodeType===1&&
a.sourceIndex-b.sourceIndex;
if(diff){
return diff;
}
if(cur){
while((cur=cur.nextSibling)){
if(cur===b){
return-1;
}
}
}
return a?1:-1;
}
function createInputPseudo(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type===type;
};
}
function createButtonPseudo(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return(name==="input"||name==="button")&&elem.type===type;
};
}
function createDisabledPseudo(disabled){
return function(elem){
if("form"in elem){
if(elem.parentNode&&elem.disabled===false){
if("label"in elem){
if("label"in elem.parentNode){
return elem.parentNode.disabled===disabled;
}else{
return elem.disabled===disabled;
}
}
return elem.isDisabled===disabled||
elem.isDisabled!==!disabled&&
disabledAncestor(elem)===disabled;
}
return elem.disabled===disabled;
}else if("label"in elem){
return elem.disabled===disabled;
}
return false;
};
}
function createPositionalPseudo(fn){
return markFunction(function(argument){
argument=+argument;
return markFunction(function(seed,matches){
var j,
matchIndexes=fn([],seed.length,argument),
i=matchIndexes.length;
while(i--){
if(seed[(j=matchIndexes[i])]){
seed[j]=!(matches[j]=seed[j]);
}
}
});
});
}
function testContext(context){
return context&&typeof context.getElementsByTagName!=="undefined"&&context;
}
support=Sizzle.support={};
isXML=Sizzle.isXML=function(elem){
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false;
};
setDocument=Sizzle.setDocument=function(node){
var hasCompare,subWindow,
doc=node?node.ownerDocument||node:preferredDoc;
if(doc===document||doc.nodeType!==9||!doc.documentElement){
return document;
}
document=doc;
docElem=document.documentElement;
documentIsHTML=!isXML(document);
if(preferredDoc!==document&&
(subWindow=document.defaultView)&&subWindow.top!==subWindow){
if(subWindow.addEventListener){
subWindow.addEventListener("unload",unloadHandler,false);
}else if(subWindow.attachEvent){
subWindow.attachEvent("onunload",unloadHandler);
}
}
support.attributes=assert(function(el){
el.className="i";
return!el.getAttribute("className");
});
support.getElementsByTagName=assert(function(el){
el.appendChild(document.createComment(""));
return!el.getElementsByTagName("*").length;
});
support.getElementsByClassName=rnative.test(document.getElementsByClassName);
support.getById=assert(function(el){
docElem.appendChild(el).id=expando;
return!document.getElementsByName||!document.getElementsByName(expando).length;
});
if(support.getById){
Expr.filter["ID"]=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
return elem.getAttribute("id")===attrId;
};
};
Expr.find["ID"]=function(id,context){
if(typeof context.getElementById!=="undefined"&&documentIsHTML){
var elem=context.getElementById(id);
return elem?[elem]:[];
}
};
}else{
Expr.filter["ID"]=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
var node=typeof elem.getAttributeNode!=="undefined"&&
elem.getAttributeNode("id");
return node&&node.value===attrId;
};
};
Expr.find["ID"]=function(id,context){
if(typeof context.getElementById!=="undefined"&&documentIsHTML){
var node,i,elems,
elem=context.getElementById(id);
if(elem){
node=elem.getAttributeNode("id");
if(node&&node.value===id){
return[elem];
}
elems=context.getElementsByName(id);
i=0;
while((elem=elems[i++])){
node=elem.getAttributeNode("id");
if(node&&node.value===id){
return[elem];
}
}
}
return[];
}
};
}
Expr.find["TAG"]=support.getElementsByTagName?
function(tag,context){
if(typeof context.getElementsByTagName!=="undefined"){
return context.getElementsByTagName(tag);
}else if(support.qsa){
return context.querySelectorAll(tag);
}
}:
function(tag,context){
var elem,
tmp=[],
i=0,
results=context.getElementsByTagName(tag);
if(tag==="*"){
while((elem=results[i++])){
if(elem.nodeType===1){
tmp.push(elem);
}
}
return tmp;
}
return results;
};
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){
if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){
return context.getElementsByClassName(className);
}
};
rbuggyMatches=[];
rbuggyQSA=[];
if((support.qsa=rnative.test(document.querySelectorAll))){
assert(function(el){
docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+
"<select id='"+expando+"-\r\\' msallowcapture=''>"+
"<option selected=''></option></select>";
if(el.querySelectorAll("[msallowcapture^='']").length){
rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");
}
if(!el.querySelectorAll("[selected]").length){
rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");
}
if(!el.querySelectorAll("[id~="+expando+"-]").length){
rbuggyQSA.push("~=");
}
if(!el.querySelectorAll(":checked").length){
rbuggyQSA.push(":checked");
}
if(!el.querySelectorAll("a#"+expando+"+*").length){
rbuggyQSA.push(".#.+[+~]");
}
});
assert(function(el){
el.innerHTML="<a href='' disabled='disabled'></a>"+
"<select disabled='disabled'><option/></select>";
var input=document.createElement("input");
input.setAttribute("type","hidden");
el.appendChild(input).setAttribute("name","D");
if(el.querySelectorAll("[name=d]").length){
rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");
}
if(el.querySelectorAll(":enabled").length!==2){
rbuggyQSA.push(":enabled",":disabled");
}
docElem.appendChild(el).disabled=true;
if(el.querySelectorAll(":disabled").length!==2){
rbuggyQSA.push(":enabled",":disabled");
}
el.querySelectorAll("*,:x");
rbuggyQSA.push(",.*:");
});
}
if((support.matchesSelector=rnative.test((matches=docElem.matches||
docElem.webkitMatchesSelector||
docElem.mozMatchesSelector||
docElem.oMatchesSelector||
docElem.msMatchesSelector)))){
assert(function(el){
support.disconnectedMatch=matches.call(el,"*");
matches.call(el,"[s!='']:x");
rbuggyMatches.push("!=",pseudos);
});
}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));
rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));
hasCompare=rnative.test(docElem.compareDocumentPosition);
contains=hasCompare||rnative.test(docElem.contains)?
function(a,b){
var adown=a.nodeType===9?a.documentElement:a,
bup=b&&b.parentNode;
return a===bup||!!(bup&&bup.nodeType===1&&(
adown.contains?
adown.contains(bup):
a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16
));
}:
function(a,b){
if(b){
while((b=b.parentNode)){
if(b===a){
return true;
}
}
}
return false;
};
sortOrder=hasCompare?
function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(compare){
return compare;
}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?
a.compareDocumentPosition(b):
1;
if(compare&1||
(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){
return-1;
}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){
return 1;
}
return sortInput?
(indexOf(sortInput,a)-indexOf(sortInput,b)):
0;
}
return compare&4?-1:1;
}:
function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var cur,
i=0,
aup=a.parentNode,
bup=b.parentNode,
ap=[a],
bp=[b];
if(!aup||!bup){
return a===document?-1:
b===document?1:
aup?-1:
bup?1:
sortInput?
(indexOf(sortInput,a)-indexOf(sortInput,b)):
0;
}else if(aup===bup){
return siblingCheck(a,b);
}
cur=a;
while((cur=cur.parentNode)){
ap.unshift(cur);
}
cur=b;
while((cur=cur.parentNode)){
bp.unshift(cur);
}
while(ap[i]===bp[i]){
i++;
}
return i?
siblingCheck(ap[i],bp[i]):
ap[i]===preferredDoc?-1:
bp[i]===preferredDoc?1:
0;
};
return document;
};
Sizzle.matches=function(expr,elements){
return Sizzle(expr,null,null,elements);
};
Sizzle.matchesSelector=function(elem,expr){
if((elem.ownerDocument||elem)!==document){
setDocument(elem);
}
expr=expr.replace(rattributeQuotes,"='$1']");
if(support.matchesSelector&&documentIsHTML&&
!compilerCache[expr+" "]&&
(!rbuggyMatches||!rbuggyMatches.test(expr))&&
(!rbuggyQSA||!rbuggyQSA.test(expr))){
try{
var ret=matches.call(elem,expr);
if(ret||support.disconnectedMatch||
elem.document&&elem.document.nodeType!==11){
return ret;
}
}catch(e){}
}
return Sizzle(expr,document,null,[elem]).length>0;
};
Sizzle.contains=function(context,elem){
if((context.ownerDocument||context)!==document){
setDocument(context);
}
return contains(context,elem);
};
Sizzle.attr=function(elem,name){
if((elem.ownerDocument||elem)!==document){
setDocument(elem);
}
var fn=Expr.attrHandle[name.toLowerCase()],
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?
fn(elem,name,!documentIsHTML):
undefined;
return val!==undefined?
val:
support.attributes||!documentIsHTML?
elem.getAttribute(name):
(val=elem.getAttributeNode(name))&&val.specified?
val.value:
null;
};
Sizzle.escape=function(sel){
return(sel+"").replace(rcssescape,fcssescape);
};
Sizzle.error=function(msg){
throw new Error("Syntax error, unrecognized expression: "+msg);
};
Sizzle.uniqueSort=function(results){
var elem,
duplicates=[],
j=0,
i=0;
hasDuplicate=!support.detectDuplicates;
sortInput=!support.sortStable&&results.slice(0);
results.sort(sortOrder);
if(hasDuplicate){
while((elem=results[i++])){
if(elem===results[i]){
j=duplicates.push(i);
}
}
while(j--){
results.splice(duplicates[j],1);
}
}
sortInput=null;
return results;
};
getText=Sizzle.getText=function(elem){
var node,
ret="",
i=0,
nodeType=elem.nodeType;
if(!nodeType){
while((node=elem[i++])){
ret+=getText(node);
}
}else if(nodeType===1||nodeType===9||nodeType===11){
if(typeof elem.textContent==="string"){
return elem.textContent;
}else{
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
ret+=getText(elem);
}
}
}else if(nodeType===3||nodeType===4){
return elem.nodeValue;
}
return ret;
};
Expr=Sizzle.selectors={
cacheLength:50,
createPseudo:markFunction,
match:matchExpr,
attrHandle:{},
find:{},
relative:{
">":{dir:"parentNode",first:true},
" ":{dir:"parentNode"},
"+":{dir:"previousSibling",first:true},
"~":{dir:"previousSibling"}
},
preFilter:{
"ATTR":function(match){
match[1]=match[1].replace(runescape,funescape);
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);
if(match[2]==="~="){
match[3]=" "+match[3]+" ";
}
return match.slice(0,4);
},
"CHILD":function(match){
match[1]=match[1].toLowerCase();
if(match[1].slice(0,3)==="nth"){
if(!match[3]){
Sizzle.error(match[0]);
}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));
match[5]=+((match[7]+match[8])||match[3]==="odd");
}else if(match[3]){
Sizzle.error(match[0]);
}
return match;
},
"PSEUDO":function(match){
var excess,
unquoted=!match[6]&&match[2];
if(matchExpr["CHILD"].test(match[0])){
return null;
}
if(match[3]){
match[2]=match[4]||match[5]||"";
}else if(unquoted&&rpseudo.test(unquoted)&&
(excess=tokenize(unquoted,true))&&
(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){
match[0]=match[0].slice(0,excess);
match[2]=unquoted.slice(0,excess);
}
return match.slice(0,3);
}
},
filter:{
"TAG":function(nodeNameSelector){
var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();
return nodeNameSelector==="*"?
function(){return true;}:
function(elem){
return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;
};
},
"CLASS":function(className){
var pattern=classCache[className+" "];
return pattern||
(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&
classCache(className,function(elem){
return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");
});
},
"ATTR":function(name,operator,check){
return function(elem){
var result=Sizzle.attr(elem,name);
if(result==null){
return operator==="!=";
}
if(!operator){
return true;
}
result+="";
return operator==="="?result===check:
operator==="!="?result!==check:
operator==="^="?check&&result.indexOf(check)===0:
operator==="*="?check&&result.indexOf(check)>-1:
operator==="$="?check&&result.slice(-check.length)===check:
operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:
operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":
false;
};
},
"CHILD":function(type,what,argument,first,last){
var simple=type.slice(0,3)!=="nth",
forward=type.slice(-4)!=="last",
ofType=what==="of-type";
return first===1&&last===0?
function(elem){
return!!elem.parentNode;
}:
function(elem,context,xml){
var cache,uniqueCache,outerCache,node,nodeIndex,start,
dir=simple!==forward?"nextSibling":"previousSibling",
parent=elem.parentNode,
name=ofType&&elem.nodeName.toLowerCase(),
useCache=!xml&&!ofType,
diff=false;
if(parent){
if(simple){
while(dir){
node=elem;
while((node=node[dir])){
if(ofType?
node.nodeName.toLowerCase()===name:
node.nodeType===1){
return false;
}
}
start=dir=type==="only"&&!start&&"nextSibling";
}
return true;
}
start=[forward?parent.firstChild:parent.lastChild];
if(forward&&useCache){
node=parent;
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
cache=uniqueCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex&&cache[2];
node=nodeIndex&&parent.childNodes[nodeIndex];
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if(node.nodeType===1&&++diff&&node===elem){
uniqueCache[type]=[dirruns,nodeIndex,diff];
break;
}
}
}else{
if(useCache){
node=elem;
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
cache=uniqueCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex;
}
if(diff===false){
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if((ofType?
node.nodeName.toLowerCase()===name:
node.nodeType===1)&&
++diff){
if(useCache){
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
uniqueCache[type]=[dirruns,diff];
}
if(node===elem){
break;
}
}
}
}
}
diff-=last;
return diff===first||(diff%first===0&&diff/first>=0);
}
};
},
"PSEUDO":function(pseudo,argument){
var args,
fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||
Sizzle.error("unsupported pseudo: "+pseudo);
if(fn[expando]){
return fn(argument);
}
if(fn.length>1){
args=[pseudo,pseudo,"",argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?
markFunction(function(seed,matches){
var idx,
matched=fn(seed,argument),
i=matched.length;
while(i--){
idx=indexOf(seed,matched[i]);
seed[idx]=!(matches[idx]=matched[i]);
}
}):
function(elem){
return fn(elem,0,args);
};
}
return fn;
}
},
pseudos:{
"not":markFunction(function(selector){
var input=[],
results=[],
matcher=compile(selector.replace(rtrim,"$1"));
return matcher[expando]?
markFunction(function(seed,matches,context,xml){
var elem,
unmatched=matcher(seed,null,xml,[]),
i=seed.length;
while(i--){
if((elem=unmatched[i])){
seed[i]=!(matches[i]=elem);
}
}
}):
function(elem,context,xml){
input[0]=elem;
matcher(input,null,xml,results);
input[0]=null;
return!results.pop();
};
}),
"has":markFunction(function(selector){
return function(elem){
return Sizzle(selector,elem).length>0;
};
}),
"contains":markFunction(function(text){
text=text.replace(runescape,funescape);
return function(elem){
return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;
};
}),
"lang":markFunction(function(lang){
if(!ridentifier.test(lang||"")){
Sizzle.error("unsupported lang: "+lang);
}
lang=lang.replace(runescape,funescape).toLowerCase();
return function(elem){
var elemLang;
do{
if((elemLang=documentIsHTML?
elem.lang:
elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){
elemLang=elemLang.toLowerCase();
return elemLang===lang||elemLang.indexOf(lang+"-")===0;
}
}while((elem=elem.parentNode)&&elem.nodeType===1);
return false;
};
}),
"target":function(elem){
var hash=window.location&&window.location.hash;
return hash&&hash.slice(1)===elem.id;
},
"root":function(elem){
return elem===docElem;
},
"focus":function(elem){
return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);
},
"enabled":createDisabledPseudo(false),
"disabled":createDisabledPseudo(true),
"checked":function(elem){
var nodeName=elem.nodeName.toLowerCase();
return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);
},
"selected":function(elem){
if(elem.parentNode){
elem.parentNode.selectedIndex;
}
return elem.selected===true;
},
"empty":function(elem){
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
if(elem.nodeType<6){
return false;
}
}
return true;
},
"parent":function(elem){
return!Expr.pseudos["empty"](elem);
},
"header":function(elem){
return rheader.test(elem.nodeName);
},
"input":function(elem){
return rinputs.test(elem.nodeName);
},
"button":function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type==="button"||name==="button";
},
"text":function(elem){
var attr;
return elem.nodeName.toLowerCase()==="input"&&
elem.type==="text"&&
((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");
},
"first":createPositionalPseudo(function(){
return[0];
}),
"last":createPositionalPseudo(function(matchIndexes,length){
return[length-1];
}),
"eq":createPositionalPseudo(function(matchIndexes,length,argument){
return[argument<0?argument+length:argument];
}),
"even":createPositionalPseudo(function(matchIndexes,length){
var i=0;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
"odd":createPositionalPseudo(function(matchIndexes,length){
var i=1;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
"lt":createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;--i>=0;){
matchIndexes.push(i);
}
return matchIndexes;
}),
"gt":createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;++i<length;){
matchIndexes.push(i);
}
return matchIndexes;
})
}
};
Expr.pseudos["nth"]=Expr.pseudos["eq"];
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){
Expr.pseudos[i]=createInputPseudo(i);
}
for(i in{submit:true,reset:true}){
Expr.pseudos[i]=createButtonPseudo(i);
}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;
Expr.setFilters=new setFilters();
tokenize=Sizzle.tokenize=function(selector,parseOnly){
var matched,match,tokens,type,
soFar,groups,preFilters,
cached=tokenCache[selector+" "];
if(cached){
return parseOnly?0:cached.slice(0);
}
soFar=selector;
groups=[];
preFilters=Expr.preFilter;
while(soFar){
if(!matched||(match=rcomma.exec(soFar))){
if(match){
soFar=soFar.slice(match[0].length)||soFar;
}
groups.push((tokens=[]));
}
matched=false;
if((match=rcombinators.exec(soFar))){
matched=match.shift();
tokens.push({
value:matched,
type:match[0].replace(rtrim," ")
});
soFar=soFar.slice(matched.length);
}
for(type in Expr.filter){
if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||
(match=preFilters[type](match)))){
matched=match.shift();
tokens.push({
value:matched,
type:type,
matches:match
});
soFar=soFar.slice(matched.length);
}
}
if(!matched){
break;
}
}
return parseOnly?
soFar.length:
soFar?
Sizzle.error(selector):
tokenCache(selector,groups).slice(0);
};
function toSelector(tokens){
var i=0,
len=tokens.length,
selector="";
for(;i<len;i++){
selector+=tokens[i].value;
}
return selector;
}
function addCombinator(matcher,combinator,base){
var dir=combinator.dir,
skip=combinator.next,
key=skip||dir,
checkNonElements=base&&key==="parentNode",
doneName=done++;
return combinator.first?
function(elem,context,xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
return matcher(elem,context,xml);
}
}
return false;
}:
function(elem,context,xml){
var oldCache,uniqueCache,outerCache,
newCache=[dirruns,doneName];
if(xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
if(matcher(elem,context,xml)){
return true;
}
}
}
}else{
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
outerCache=elem[expando]||(elem[expando]={});
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});
if(skip&&skip===elem.nodeName.toLowerCase()){
elem=elem[dir]||elem;
}else if((oldCache=uniqueCache[key])&&
oldCache[0]===dirruns&&oldCache[1]===doneName){
return(newCache[2]=oldCache[2]);
}else{
uniqueCache[key]=newCache;
if((newCache[2]=matcher(elem,context,xml))){
return true;
}
}
}
}
}
return false;
};
}
function elementMatcher(matchers){
return matchers.length>1?
function(elem,context,xml){
var i=matchers.length;
while(i--){
if(!matchers[i](elem,context,xml)){
return false;
}
}
return true;
}:
matchers[0];
}
function multipleContexts(selector,contexts,results){
var i=0,
len=contexts.length;
for(;i<len;i++){
Sizzle(selector,contexts[i],results);
}
return results;
}
function condense(unmatched,map,filter,context,xml){
var elem,
newUnmatched=[],
i=0,
len=unmatched.length,
mapped=map!=null;
for(;i<len;i++){
if((elem=unmatched[i])){
if(!filter||filter(elem,context,xml)){
newUnmatched.push(elem);
if(mapped){
map.push(i);
}
}
}
}
return newUnmatched;
}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){
if(postFilter&&!postFilter[expando]){
postFilter=setMatcher(postFilter);
}
if(postFinder&&!postFinder[expando]){
postFinder=setMatcher(postFinder,postSelector);
}
return markFunction(function(seed,results,context,xml){
var temp,i,elem,
preMap=[],
postMap=[],
preexisting=results.length,
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),
matcherIn=preFilter&&(seed||!selector)?
condense(elems,preMap,preFilter,context,xml):
elems,
matcherOut=matcher?
postFinder||(seed?preFilter:preexisting||postFilter)?
[]:
results:
matcherIn;
if(matcher){
matcher(matcherIn,matcherOut,context,xml);
}
if(postFilter){
temp=condense(matcherOut,postMap);
postFilter(temp,[],context,xml);
i=temp.length;
while(i--){
if((elem=temp[i])){
matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);
}
}
}
if(seed){
if(postFinder||preFilter){
if(postFinder){
temp=[];
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])){
temp.push((matcherIn[i]=elem));
}
}
postFinder(null,(matcherOut=[]),temp,xml);
}
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])&&
(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){
seed[temp]=!(results[temp]=elem);
}
}
}
}else{
matcherOut=condense(
matcherOut===results?
matcherOut.splice(preexisting,matcherOut.length):
matcherOut
);
if(postFinder){
postFinder(null,results,matcherOut,xml);
}else{
push.apply(results,matcherOut);
}
}
});
}
function matcherFromTokens(tokens){
var checkContext,matcher,j,
len=tokens.length,
leadingRelative=Expr.relative[tokens[0].type],
implicitRelative=leadingRelative||Expr.relative[" "],
i=leadingRelative?1:0,
matchContext=addCombinator(function(elem){
return elem===checkContext;
},implicitRelative,true),
matchAnyContext=addCombinator(function(elem){
return indexOf(checkContext,elem)>-1;
},implicitRelative,true),
matchers=[function(elem,context,xml){
var ret=(!leadingRelative&&(xml||context!==outermostContext))||(
(checkContext=context).nodeType?
matchContext(elem,context,xml):
matchAnyContext(elem,context,xml));
checkContext=null;
return ret;
}];
for(;i<len;i++){
if((matcher=Expr.relative[tokens[i].type])){
matchers=[addCombinator(elementMatcher(matchers),matcher)];
}else{
matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);
if(matcher[expando]){
j=++i;
for(;j<len;j++){
if(Expr.relative[tokens[j].type]){
break;
}
}
return setMatcher(
i>1&&elementMatcher(matchers),
i>1&&toSelector(
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})
).replace(rtrim,"$1"),
matcher,
i<j&&matcherFromTokens(tokens.slice(i,j)),
j<len&&matcherFromTokens((tokens=tokens.slice(j))),
j<len&&toSelector(tokens)
);
}
matchers.push(matcher);
}
}
return elementMatcher(matchers);
}
function matcherFromGroupMatchers(elementMatchers,setMatchers){
var bySet=setMatchers.length>0,
byElement=elementMatchers.length>0,
superMatcher=function(seed,context,xml,results,outermost){
var elem,j,matcher,
matchedCount=0,
i="0",
unmatched=seed&&[],
setMatched=[],
contextBackup=outermostContext,
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),
dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),
len=elems.length;
if(outermost){
outermostContext=context===document||context||outermost;
}
for(;i!==len&&(elem=elems[i])!=null;i++){
if(byElement&&elem){
j=0;
if(!context&&elem.ownerDocument!==document){
setDocument(elem);
xml=!documentIsHTML;
}
while((matcher=elementMatchers[j++])){
if(matcher(elem,context||document,xml)){
results.push(elem);
break;
}
}
if(outermost){
dirruns=dirrunsUnique;
}
}
if(bySet){
if((elem=!matcher&&elem)){
matchedCount--;
}
if(seed){
unmatched.push(elem);
}
}
}
matchedCount+=i;
if(bySet&&i!==matchedCount){
j=0;
while((matcher=setMatchers[j++])){
matcher(unmatched,setMatched,context,xml);
}
if(seed){
if(matchedCount>0){
while(i--){
if(!(unmatched[i]||setMatched[i])){
setMatched[i]=pop.call(results);
}
}
}
setMatched=condense(setMatched);
}
push.apply(results,setMatched);
if(outermost&&!seed&&setMatched.length>0&&
(matchedCount+setMatchers.length)>1){
Sizzle.uniqueSort(results);
}
}
if(outermost){
dirruns=dirrunsUnique;
outermostContext=contextBackup;
}
return unmatched;
};
return bySet?
markFunction(superMatcher):
superMatcher;
}
compile=Sizzle.compile=function(selector,match){
var i,
setMatchers=[],
elementMatchers=[],
cached=compilerCache[selector+" "];
if(!cached){
if(!match){
match=tokenize(selector);
}
i=match.length;
while(i--){
cached=matcherFromTokens(match[i]);
if(cached[expando]){
setMatchers.push(cached);
}else{
elementMatchers.push(cached);
}
}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));
cached.selector=selector;
}
return cached;
};
select=Sizzle.select=function(selector,context,results,seed){
var i,tokens,token,type,find,
compiled=typeof selector==="function"&&selector,
match=!seed&&tokenize((selector=compiled.selector||selector));
results=results||[];
if(match.length===1){
tokens=match[0]=match[0].slice(0);
if(tokens.length>2&&(token=tokens[0]).type==="ID"&&
context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){
context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];
if(!context){
return results;
}else if(compiled){
context=context.parentNode;
}
selector=selector.slice(tokens.shift().value.length);
}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;
while(i--){
token=tokens[i];
if(Expr.relative[(type=token.type)]){
break;
}
if((find=Expr.find[type])){
if((seed=find(
token.matches[0].replace(runescape,funescape),
rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context
))){
tokens.splice(i,1);
selector=seed.length&&toSelector(tokens);
if(!selector){
push.apply(results,seed);
return results;
}
break;
}
}
}
}
(compiled||compile(selector,match))(
seed,
context,
!documentIsHTML,
results,
!context||rsibling.test(selector)&&testContext(context.parentNode)||context
);
return results;
};
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;
support.detectDuplicates=!!hasDuplicate;
setDocument();
support.sortDetached=assert(function(el){
return el.compareDocumentPosition(document.createElement("fieldset"))&1;
});
if(!assert(function(el){
el.innerHTML="<a href='#'></a>";
return el.firstChild.getAttribute("href")==="#";
})){
addHandle("type|href|height|width",function(elem,name,isXML){
if(!isXML){
return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);
}
});
}
if(!support.attributes||!assert(function(el){
el.innerHTML="<input/>";
el.firstChild.setAttribute("value","");
return el.firstChild.getAttribute("value")==="";
})){
addHandle("value",function(elem,name,isXML){
if(!isXML&&elem.nodeName.toLowerCase()==="input"){
return elem.defaultValue;
}
});
}
if(!assert(function(el){
return el.getAttribute("disabled")==null;
})){
addHandle(booleans,function(elem,name,isXML){
var val;
if(!isXML){
return elem[name]===true?name.toLowerCase():
(val=elem.getAttributeNode(name))&&val.specified?
val.value:
null;
}
});
}
return Sizzle;
})(window);
jQuery.find=Sizzle;
jQuery.expr=Sizzle.selectors;
jQuery.expr[":"]=jQuery.expr.pseudos;
jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;
jQuery.text=Sizzle.getText;
jQuery.isXMLDoc=Sizzle.isXML;
jQuery.contains=Sizzle.contains;
jQuery.escapeSelector=Sizzle.escape;
var dir=function(elem,dir,until){
var matched=[],
truncate=until!==undefined;
while((elem=elem[dir])&&elem.nodeType!==9){
if(elem.nodeType===1){
if(truncate&&jQuery(elem).is(until)){
break;
}
matched.push(elem);
}
}
return matched;
};
var siblings=function(n,elem){
var matched=[];
for(;n;n=n.nextSibling){
if(n.nodeType===1&&n!==elem){
matched.push(n);
}
}
return matched;
};
var rneedsContext=jQuery.expr.match.needsContext;
function nodeName(elem,name){
return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();
};
var rsingleTag=(/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);
var risSimple=/^.[^:#\[\.,]*$/;
function winnow(elements,qualifier,not){
if(jQuery.isFunction(qualifier)){
return jQuery.grep(elements,function(elem,i){
return!!qualifier.call(elem,i,elem)!==not;
});
}
if(qualifier.nodeType){
return jQuery.grep(elements,function(elem){
return(elem===qualifier)!==not;
});
}
if(typeof qualifier!=="string"){
return jQuery.grep(elements,function(elem){
return(indexOf.call(qualifier,elem)>-1)!==not;
});
}
if(risSimple.test(qualifier)){
return jQuery.filter(qualifier,elements,not);
}
qualifier=jQuery.filter(qualifier,elements);
return jQuery.grep(elements,function(elem){
return(indexOf.call(qualifier,elem)>-1)!==not&&elem.nodeType===1;
});
}
jQuery.filter=function(expr,elems,not){
var elem=elems[0];
if(not){
expr=":not("+expr+")";
}
if(elems.length===1&&elem.nodeType===1){
return jQuery.find.matchesSelector(elem,expr)?[elem]:[];
}
return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){
return elem.nodeType===1;
}));
};
jQuery.fn.extend({
find:function(selector){
var i,ret,
len=this.length,
self=this;
if(typeof selector!=="string"){
return this.pushStack(jQuery(selector).filter(function(){
for(i=0;i<len;i++){
if(jQuery.contains(self[i],this)){
return true;
}
}
}));
}
ret=this.pushStack([]);
for(i=0;i<len;i++){
jQuery.find(selector,self[i],ret);
}
return len>1?jQuery.uniqueSort(ret):ret;
},
filter:function(selector){
return this.pushStack(winnow(this,selector||[],false));
},
not:function(selector){
return this.pushStack(winnow(this,selector||[],true));
},
is:function(selector){
return!!winnow(
this,
typeof selector==="string"&&rneedsContext.test(selector)?
jQuery(selector):
selector||[],
false
).length;
}
});
var rootjQuery,
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
init=jQuery.fn.init=function(selector,context,root){
var match,elem;
if(!selector){
return this;
}
root=root||rootjQuery;
if(typeof selector==="string"){
if(selector[0]==="<"&&
selector[selector.length-1]===">"&&
selector.length>=3){
match=[null,selector,null];
}else{
match=rquickExpr.exec(selector);
}
if(match&&(match[1]||!context)){
if(match[1]){
context=context instanceof jQuery?context[0]:context;
jQuery.merge(this,jQuery.parseHTML(
match[1],
context&&context.nodeType?context.ownerDocument||context:document,
true
));
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){
for(match in context){
if(jQuery.isFunction(this[match])){
this[match](context[match]);
}else{
this.attr(match,context[match]);
}
}
}
return this;
}else{
elem=document.getElementById(match[2]);
if(elem){
this[0]=elem;
this.length=1;
}
return this;
}
}else if(!context||context.jquery){
return(context||root).find(selector);
}else{
return this.constructor(context).find(selector);
}
}else if(selector.nodeType){
this[0]=selector;
this.length=1;
return this;
}else if(jQuery.isFunction(selector)){
return root.ready!==undefined?
root.ready(selector):
selector(jQuery);
}
return jQuery.makeArray(selector,this);
};
init.prototype=jQuery.fn;
rootjQuery=jQuery(document);
var rparentsprev=/^(?:parents|prev(?:Until|All))/,
guaranteedUnique={
children:true,
contents:true,
next:true,
prev:true
};
jQuery.fn.extend({
has:function(target){
var targets=jQuery(target,this),
l=targets.length;
return this.filter(function(){
var i=0;
for(;i<l;i++){
if(jQuery.contains(this,targets[i])){
return true;
}
}
});
},
closest:function(selectors,context){
var cur,
i=0,
l=this.length,
matched=[],
targets=typeof selectors!=="string"&&jQuery(selectors);
if(!rneedsContext.test(selectors)){
for(;i<l;i++){
for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){
if(cur.nodeType<11&&(targets?
targets.index(cur)>-1:
cur.nodeType===1&&
jQuery.find.matchesSelector(cur,selectors))){
matched.push(cur);
break;
}
}
}
}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);
},
index:function(elem){
if(!elem){
return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;
}
if(typeof elem==="string"){
return indexOf.call(jQuery(elem),this[0]);
}
return indexOf.call(this,
elem.jquery?elem[0]:elem
);
},
add:function(selector,context){
return this.pushStack(
jQuery.uniqueSort(
jQuery.merge(this.get(),jQuery(selector,context))
)
);
},
addBack:function(selector){
return this.add(selector==null?
this.prevObject:this.prevObject.filter(selector)
);
}
});
function sibling(cur,dir){
while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;
}
jQuery.each({
parent:function(elem){
var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null;
},
parents:function(elem){
return dir(elem,"parentNode");
},
parentsUntil:function(elem,i,until){
return dir(elem,"parentNode",until);
},
next:function(elem){
return sibling(elem,"nextSibling");
},
prev:function(elem){
return sibling(elem,"previousSibling");
},
nextAll:function(elem){
return dir(elem,"nextSibling");
},
prevAll:function(elem){
return dir(elem,"previousSibling");
},
nextUntil:function(elem,i,until){
return dir(elem,"nextSibling",until);
},
prevUntil:function(elem,i,until){
return dir(elem,"previousSibling",until);
},
siblings:function(elem){
return siblings((elem.parentNode||{}).firstChild,elem);
},
children:function(elem){
return siblings(elem.firstChild);
},
contents:function(elem){
if(nodeName(elem,"iframe")){
return elem.contentDocument;
}
if(nodeName(elem,"template")){
elem=elem.content||elem;
}
return jQuery.merge([],elem.childNodes);
}
},function(name,fn){
jQuery.fn[name]=function(until,selector){
var matched=jQuery.map(this,fn,until);
if(name.slice(-5)!=="Until"){
selector=until;
}
if(selector&&typeof selector==="string"){
matched=jQuery.filter(selector,matched);
}
if(this.length>1){
if(!guaranteedUnique[name]){
jQuery.uniqueSort(matched);
}
if(rparentsprev.test(name)){
matched.reverse();
}
}
return this.pushStack(matched);
};
});
var rnothtmlwhite=(/[^\x20\t\r\n\f]+/g);
function createOptions(options){
var object={};
jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){
object[flag]=true;
});
return object;
}
jQuery.Callbacks=function(options){
options=typeof options==="string"?
createOptions(options):
jQuery.extend({},options);
var
firing,
memory,
fired,
locked,
list=[],
queue=[],
firingIndex=-1,
fire=function(){
locked=locked||options.once;
fired=firing=true;
for(;queue.length;firingIndex=-1){
memory=queue.shift();
while(++firingIndex<list.length){
if(list[firingIndex].apply(memory[0],memory[1])===false&&
options.stopOnFalse){
firingIndex=list.length;
memory=false;
}
}
}
if(!options.memory){
memory=false;
}
firing=false;
if(locked){
if(memory){
list=[];
}else{
list="";
}
}
},
self={
add:function(){
if(list){
if(memory&&!firing){
firingIndex=list.length-1;
queue.push(memory);
}
(function add(args){
jQuery.each(args,function(_,arg){
if(jQuery.isFunction(arg)){
if(!options.unique||!self.has(arg)){
list.push(arg);
}
}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){
add(arg);
}
});
})(arguments);
if(memory&&!firing){
fire();
}
}
return this;
},
remove:function(){
jQuery.each(arguments,function(_,arg){
var index;
while((index=jQuery.inArray(arg,list,index))>-1){
list.splice(index,1);
if(index<=firingIndex){
firingIndex--;
}
}
});
return this;
},
has:function(fn){
return fn?
jQuery.inArray(fn,list)>-1:
list.length>0;
},
empty:function(){
if(list){
list=[];
}
return this;
},
disable:function(){
locked=queue=[];
list=memory="";
return this;
},
disabled:function(){
return!list;
},
lock:function(){
locked=queue=[];
if(!memory&&!firing){
list=memory="";
}
return this;
},
locked:function(){
return!!locked;
},
fireWith:function(context,args){
if(!locked){
args=args||[];
args=[context,args.slice?args.slice():args];
queue.push(args);
if(!firing){
fire();
}
}
return this;
},
fire:function(){
self.fireWith(this,arguments);
return this;
},
fired:function(){
return!!fired;
}
};
return self;
};
function Identity(v){
return v;
}
function Thrower(ex){
throw ex;
}
function adoptValue(value,resolve,reject,noValue){
var method;
try{
if(value&&jQuery.isFunction((method=value.promise))){
method.call(value).done(resolve).fail(reject);
}else if(value&&jQuery.isFunction((method=value.then))){
method.call(value,resolve,reject);
}else{
resolve.apply(undefined,[value].slice(noValue));
}
}catch(value){
reject.apply(undefined,[value]);
}
}
jQuery.extend({
Deferred:function(func){
var tuples=[
["notify","progress",jQuery.Callbacks("memory"),
jQuery.Callbacks("memory"),2],
["resolve","done",jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"),0,"resolved"],
["reject","fail",jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"),1,"rejected"]
],
state="pending",
promise={
state:function(){
return state;
},
always:function(){
deferred.done(arguments).fail(arguments);
return this;
},
"catch":function(fn){
return promise.then(null,fn);
},
pipe:function(){
var fns=arguments;
return jQuery.Deferred(function(newDefer){
jQuery.each(tuples,function(i,tuple){
var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];
deferred[tuple[1]](function(){
var returned=fn&&fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){
returned.promise()
.progress(newDefer.notify)
.done(newDefer.resolve)
.fail(newDefer.reject);
}else{
newDefer[tuple[0]+"With"](
this,
fn?[returned]:arguments
);
}
});
});
fns=null;
}).promise();
},
then:function(onFulfilled,onRejected,onProgress){
var maxDepth=0;
function resolve(depth,deferred,handler,special){
return function(){
var that=this,
args=arguments,
mightThrow=function(){
var returned,then;
if(depth<maxDepth){
return;
}
returned=handler.apply(that,args);
if(returned===deferred.promise()){
throw new TypeError("Thenable self-resolution");
}
then=returned&&
(typeof returned==="object"||
typeof returned==="function")&&
returned.then;
if(jQuery.isFunction(then)){
if(special){
then.call(
returned,
resolve(maxDepth,deferred,Identity,special),
resolve(maxDepth,deferred,Thrower,special)
);
}else{
maxDepth++;
then.call(
returned,
resolve(maxDepth,deferred,Identity,special),
resolve(maxDepth,deferred,Thrower,special),
resolve(maxDepth,deferred,Identity,
deferred.notifyWith)
);
}
}else{
if(handler!==Identity){
that=undefined;
args=[returned];
}
(special||deferred.resolveWith)(that,args);
}
},
process=special?
mightThrow:
function(){
try{
mightThrow();
}catch(e){
if(jQuery.Deferred.exceptionHook){
jQuery.Deferred.exceptionHook(e,
process.stackTrace);
}
if(depth+1>=maxDepth){
if(handler!==Thrower){
that=undefined;
args=[e];
}
deferred.rejectWith(that,args);
}
}
};
if(depth){
process();
}else{
if(jQuery.Deferred.getStackHook){
process.stackTrace=jQuery.Deferred.getStackHook();
}
window.setTimeout(process);
}
};
}
return jQuery.Deferred(function(newDefer){
tuples[0][3].add(
resolve(
0,
newDefer,
jQuery.isFunction(onProgress)?
onProgress:
Identity,
newDefer.notifyWith
)
);
tuples[1][3].add(
resolve(
0,
newDefer,
jQuery.isFunction(onFulfilled)?
onFulfilled:
Identity
)
);
tuples[2][3].add(
resolve(
0,
newDefer,
jQuery.isFunction(onRejected)?
onRejected:
Thrower
)
);
}).promise();
},
promise:function(obj){
return obj!=null?jQuery.extend(obj,promise):promise;
}
},
deferred={};
jQuery.each(tuples,function(i,tuple){
var list=tuple[2],
stateString=tuple[5];
promise[tuple[1]]=list.add;
if(stateString){
list.add(
function(){
state=stateString;
},
tuples[3-i][2].disable,
tuples[0][2].lock
);
}
list.add(tuple[3].fire);
deferred[tuple[0]]=function(){
deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);
return this;
};
deferred[tuple[0]+"With"]=list.fireWith;
});
promise.promise(deferred);
if(func){
func.call(deferred,deferred);
}
return deferred;
},
when:function(singleValue){
var
remaining=arguments.length,
i=remaining,
resolveContexts=Array(i),
resolveValues=slice.call(arguments),
master=jQuery.Deferred(),
updateFunc=function(i){
return function(value){
resolveContexts[i]=this;
resolveValues[i]=arguments.length>1?slice.call(arguments):value;
if(!(--remaining)){
master.resolveWith(resolveContexts,resolveValues);
}
};
};
if(remaining<=1){
adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject,
!remaining);
if(master.state()==="pending"||
jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)){
return master.then();
}
}
while(i--){
adoptValue(resolveValues[i],updateFunc(i),master.reject);
}
return master.promise();
}
});
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
jQuery.Deferred.exceptionHook=function(error,stack){
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){
window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);
}
};
jQuery.readyException=function(error){
window.setTimeout(function(){
throw error;
});
};
var readyList=jQuery.Deferred();
jQuery.fn.ready=function(fn){
readyList
.then(fn)
.catch(function(error){
jQuery.readyException(error);
});
return this;
};
jQuery.extend({
isReady:false,
readyWait:1,
ready:function(wait){
if(wait===true?--jQuery.readyWait:jQuery.isReady){
return;
}
jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){
return;
}
readyList.resolveWith(document,[jQuery]);
}
});
jQuery.ready.then=readyList.then;
function completed(){
document.removeEventListener("DOMContentLoaded",completed);
window.removeEventListener("load",completed);
jQuery.ready();
}
if(document.readyState==="complete"||
(document.readyState!=="loading"&&!document.documentElement.doScroll)){
window.setTimeout(jQuery.ready);
}else{
document.addEventListener("DOMContentLoaded",completed);
window.addEventListener("load",completed);
}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){
var i=0,
len=elems.length,
bulk=key==null;
if(jQuery.type(key)==="object"){
chainable=true;
for(i in key){
access(elems,fn,i,key[i],true,emptyGet,raw);
}
}else if(value!==undefined){
chainable=true;
if(!jQuery.isFunction(value)){
raw=true;
}
if(bulk){
if(raw){
fn.call(elems,value);
fn=null;
}else{
bulk=fn;
fn=function(elem,key,value){
return bulk.call(jQuery(elem),value);
};
}
}
if(fn){
for(;i<len;i++){
fn(
elems[i],key,raw?
value:
value.call(elems[i],i,fn(elems[i],key))
);
}
}
}
if(chainable){
return elems;
}
if(bulk){
return fn.call(elems);
}
return len?fn(elems[0],key):emptyGet;
};
var acceptData=function(owner){
return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);
};
function Data(){
this.expando=jQuery.expando+Data.uid++;
}
Data.uid=1;
Data.prototype={
cache:function(owner){
var value=owner[this.expando];
if(!value){
value={};
if(acceptData(owner)){
if(owner.nodeType){
owner[this.expando]=value;
}else{
Object.defineProperty(owner,this.expando,{
value:value,
configurable:true
});
}
}
}
return value;
},
set:function(owner,data,value){
var prop,
cache=this.cache(owner);
if(typeof data==="string"){
cache[jQuery.camelCase(data)]=value;
}else{
for(prop in data){
cache[jQuery.camelCase(prop)]=data[prop];
}
}
return cache;
},
get:function(owner,key){
return key===undefined?
this.cache(owner):
owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)];
},
access:function(owner,key,value){
if(key===undefined||
((key&&typeof key==="string")&&value===undefined)){
return this.get(owner,key);
}
this.set(owner,key,value);
return value!==undefined?value:key;
},
remove:function(owner,key){
var i,
cache=owner[this.expando];
if(cache===undefined){
return;
}
if(key!==undefined){
if(Array.isArray(key)){
key=key.map(jQuery.camelCase);
}else{
key=jQuery.camelCase(key);
key=key in cache?
[key]:
(key.match(rnothtmlwhite)||[]);
}
i=key.length;
while(i--){
delete cache[key[i]];
}
}
if(key===undefined||jQuery.isEmptyObject(cache)){
if(owner.nodeType){
owner[this.expando]=undefined;
}else{
delete owner[this.expando];
}
}
},
hasData:function(owner){
var cache=owner[this.expando];
return cache!==undefined&&!jQuery.isEmptyObject(cache);
}
};
var dataPriv=new Data();
var dataUser=new Data();
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
rmultiDash=/[A-Z]/g;
function getData(data){
if(data==="true"){
return true;
}
if(data==="false"){
return false;
}
if(data==="null"){
return null;
}
if(data===+data+""){
return+data;
}
if(rbrace.test(data)){
return JSON.parse(data);
}
return data;
}
function dataAttr(elem,key,data){
var name;
if(data===undefined&&elem.nodeType===1){
name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){
try{
data=getData(data);
}catch(e){}
dataUser.set(elem,key,data);
}else{
data=undefined;
}
}
return data;
}
jQuery.extend({
hasData:function(elem){
return dataUser.hasData(elem)||dataPriv.hasData(elem);
},
data:function(elem,name,data){
return dataUser.access(elem,name,data);
},
removeData:function(elem,name){
dataUser.remove(elem,name);
},
_data:function(elem,name,data){
return dataPriv.access(elem,name,data);
},
_removeData:function(elem,name){
dataPriv.remove(elem,name);
}
});
jQuery.fn.extend({
data:function(key,value){
var i,name,data,
elem=this[0],
attrs=elem&&elem.attributes;
if(key===undefined){
if(this.length){
data=dataUser.get(elem);
if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){
i=attrs.length;
while(i--){
if(attrs[i]){
name=attrs[i].name;
if(name.indexOf("data-")===0){
name=jQuery.camelCase(name.slice(5));
dataAttr(elem,name,data[name]);
}
}
}
dataPriv.set(elem,"hasDataAttrs",true);
}
}
return data;
}
if(typeof key==="object"){
return this.each(function(){
dataUser.set(this,key);
});
}
return access(this,function(value){
var data;
if(elem&&value===undefined){
data=dataUser.get(elem,key);
if(data!==undefined){
return data;
}
data=dataAttr(elem,key);
if(data!==undefined){
return data;
}
return;
}
this.each(function(){
dataUser.set(this,key,value);
});
},null,value,arguments.length>1,null,true);
},
removeData:function(key){
return this.each(function(){
dataUser.remove(this,key);
});
}
});
jQuery.extend({
queue:function(elem,type,data){
var queue;
if(elem){
type=(type||"fx")+"queue";
queue=dataPriv.get(elem,type);
if(data){
if(!queue||Array.isArray(data)){
queue=dataPriv.access(elem,type,jQuery.makeArray(data));
}else{
queue.push(data);
}
}
return queue||[];
}
},
dequeue:function(elem,type){
type=type||"fx";
var queue=jQuery.queue(elem,type),
startLength=queue.length,
fn=queue.shift(),
hooks=jQuery._queueHooks(elem,type),
next=function(){
jQuery.dequeue(elem,type);
};
if(fn==="inprogress"){
fn=queue.shift();
startLength--;
}
if(fn){
if(type==="fx"){
queue.unshift("inprogress");
}
delete hooks.stop;
fn.call(elem,next,hooks);
}
if(!startLength&&hooks){
hooks.empty.fire();
}
},
_queueHooks:function(elem,type){
var key=type+"queueHooks";
return dataPriv.get(elem,key)||dataPriv.access(elem,key,{
empty:jQuery.Callbacks("once memory").add(function(){
dataPriv.remove(elem,[type+"queue",key]);
})
});
}
});
jQuery.fn.extend({
queue:function(type,data){
var setter=2;
if(typeof type!=="string"){
data=type;
type="fx";
setter--;
}
if(arguments.length<setter){
return jQuery.queue(this[0],type);
}
return data===undefined?
this:
this.each(function(){
var queue=jQuery.queue(this,type,data);
jQuery._queueHooks(this,type);
if(type==="fx"&&queue[0]!=="inprogress"){
jQuery.dequeue(this,type);
}
});
},
dequeue:function(type){
return this.each(function(){
jQuery.dequeue(this,type);
});
},
clearQueue:function(type){
return this.queue(type||"fx",[]);
},
promise:function(type,obj){
var tmp,
count=1,
defer=jQuery.Deferred(),
elements=this,
i=this.length,
resolve=function(){
if(!(--count)){
defer.resolveWith(elements,[elements]);
}
};
if(typeof type!=="string"){
obj=type;
type=undefined;
}
type=type||"fx";
while(i--){
tmp=dataPriv.get(elements[i],type+"queueHooks");
if(tmp&&tmp.empty){
count++;
tmp.empty.add(resolve);
}
}
resolve();
return defer.promise(obj);
}
});
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");
var cssExpand=["Top","Right","Bottom","Left"];
var isHiddenWithinTree=function(elem,el){
elem=el||elem;
return elem.style.display==="none"||
elem.style.display===""&&
jQuery.contains(elem.ownerDocument,elem)&&
jQuery.css(elem,"display")==="none";
};
var swap=function(elem,options,callback,args){
var ret,name,
old={};
for(name in options){
old[name]=elem.style[name];
elem.style[name]=options[name];
}
ret=callback.apply(elem,args||[]);
for(name in options){
elem.style[name]=old[name];
}
return ret;
};
function adjustCSS(elem,prop,valueParts,tween){
var adjusted,
scale=1,
maxIterations=20,
currentValue=tween?
function(){
return tween.cur();
}:
function(){
return jQuery.css(elem,prop,"");
},
initial=currentValue(),
unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),
initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&
rcssNum.exec(jQuery.css(elem,prop));
if(initialInUnit&&initialInUnit[3]!==unit){
unit=unit||initialInUnit[3];
valueParts=valueParts||[];
initialInUnit=+initial||1;
do{
scale=scale||".5";
initialInUnit=initialInUnit/scale;
jQuery.style(elem,prop,initialInUnit+unit);
}while(
scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations
);
}
if(valueParts){
initialInUnit=+initialInUnit||+initial||0;
adjusted=valueParts[1]?
initialInUnit+(valueParts[1]+1)*valueParts[2]:
+valueParts[2];
if(tween){
tween.unit=unit;
tween.start=initialInUnit;
tween.end=adjusted;
}
}
return adjusted;
}
var defaultDisplayMap={};
function getDefaultDisplay(elem){
var temp,
doc=elem.ownerDocument,
nodeName=elem.nodeName,
display=defaultDisplayMap[nodeName];
if(display){
return display;
}
temp=doc.body.appendChild(doc.createElement(nodeName));
display=jQuery.css(temp,"display");
temp.parentNode.removeChild(temp);
if(display==="none"){
display="block";
}
defaultDisplayMap[nodeName]=display;
return display;
}
function showHide(elements,show){
var display,elem,
values=[],
index=0,
length=elements.length;
for(;index<length;index++){
elem=elements[index];
if(!elem.style){
continue;
}
display=elem.style.display;
if(show){
if(display==="none"){
values[index]=dataPriv.get(elem,"display")||null;
if(!values[index]){
elem.style.display="";
}
}
if(elem.style.display===""&&isHiddenWithinTree(elem)){
values[index]=getDefaultDisplay(elem);
}
}else{
if(display!=="none"){
values[index]="none";
dataPriv.set(elem,"display",display);
}
}
}
for(index=0;index<length;index++){
if(values[index]!=null){
elements[index].style.display=values[index];
}
}
return elements;
}
jQuery.fn.extend({
show:function(){
return showHide(this,true);
},
hide:function(){
return showHide(this);
},
toggle:function(state){
if(typeof state==="boolean"){
return state?this.show():this.hide();
}
return this.each(function(){
if(isHiddenWithinTree(this)){
jQuery(this).show();
}else{
jQuery(this).hide();
}
});
}
});
var rcheckableType=(/^(?:checkbox|radio)$/i);
var rtagName=(/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);
var rscriptType=(/^$|\/(?:java|ecma)script/i);
var wrapMap={
option:[1,"<select multiple='multiple'>","</select>"],
thead:[1,"<table>","</table>"],
col:[2,"<table><colgroup>","</colgroup></table>"],
tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
_default:[0,"",""]
};
wrapMap.optgroup=wrapMap.option;
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
function getAll(context,tag){
var ret;
if(typeof context.getElementsByTagName!=="undefined"){
ret=context.getElementsByTagName(tag||"*");
}else if(typeof context.querySelectorAll!=="undefined"){
ret=context.querySelectorAll(tag||"*");
}else{
ret=[];
}
if(tag===undefined||tag&&nodeName(context,tag)){
return jQuery.merge([context],ret);
}
return ret;
}
function setGlobalEval(elems,refElements){
var i=0,
l=elems.length;
for(;i<l;i++){
dataPriv.set(
elems[i],
"globalEval",
!refElements||dataPriv.get(refElements[i],"globalEval")
);
}
}
var rhtml=/<|&#?\w+;/;
function buildFragment(elems,context,scripts,selection,ignored){
var elem,tmp,tag,wrap,contains,j,
fragment=context.createDocumentFragment(),
nodes=[],
i=0,
l=elems.length;
for(;i<l;i++){
elem=elems[i];
if(elem||elem===0){
if(jQuery.type(elem)==="object"){
jQuery.merge(nodes,elem.nodeType?[elem]:elem);
}else if(!rhtml.test(elem)){
nodes.push(context.createTextNode(elem));
}else{
tmp=tmp||fragment.appendChild(context.createElement("div"));
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();
wrap=wrapMap[tag]||wrapMap._default;
tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];
j=wrap[0];
while(j--){
tmp=tmp.lastChild;
}
jQuery.merge(nodes,tmp.childNodes);
tmp=fragment.firstChild;
tmp.textContent="";
}
}
}
fragment.textContent="";
i=0;
while((elem=nodes[i++])){
if(selection&&jQuery.inArray(elem,selection)>-1){
if(ignored){
ignored.push(elem);
}
continue;
}
contains=jQuery.contains(elem.ownerDocument,elem);
tmp=getAll(fragment.appendChild(elem),"script");
if(contains){
setGlobalEval(tmp);
}
if(scripts){
j=0;
while((elem=tmp[j++])){
if(rscriptType.test(elem.type||"")){
scripts.push(elem);
}
}
}
}
return fragment;
}
(function(){
var fragment=document.createDocumentFragment(),
div=fragment.appendChild(document.createElement("div")),
input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("checked","checked");
input.setAttribute("name","t");
div.appendChild(input);
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
div.innerHTML="<textarea>x</textarea>";
support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;
})();
var documentElement=document.documentElement;
var
rkeyEvent=/^key/,
rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,
rtypenamespace=/^([^.]*)(?:\.(.+)|)/;
function returnTrue(){
return true;
}
function returnFalse(){
return false;
}
function safeActiveElement(){
try{
return document.activeElement;
}catch(err){}
}
function on(elem,types,selector,data,fn,one){
var origFn,type;
if(typeof types==="object"){
if(typeof selector!=="string"){
data=data||selector;
selector=undefined;
}
for(type in types){
on(elem,type,selector,data,types[type],one);
}
return elem;
}
if(data==null&&fn==null){
fn=selector;
data=selector=undefined;
}else if(fn==null){
if(typeof selector==="string"){
fn=data;
data=undefined;
}else{
fn=data;
data=selector;
selector=undefined;
}
}
if(fn===false){
fn=returnFalse;
}else if(!fn){
return elem;
}
if(one===1){
origFn=fn;
fn=function(event){
jQuery().off(event);
return origFn.apply(this,arguments);
};
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);
}
return elem.each(function(){
jQuery.event.add(this,types,fn,data,selector);
});
}
jQuery.event={
global:{},
add:function(elem,types,handler,data,selector){
var handleObjIn,eventHandle,tmp,
events,t,handleObj,
special,handlers,type,namespaces,origType,
elemData=dataPriv.get(elem);
if(!elemData){
return;
}
if(handler.handler){
handleObjIn=handler;
handler=handleObjIn.handler;
selector=handleObjIn.selector;
}
if(selector){
jQuery.find.matchesSelector(documentElement,selector);
}
if(!handler.guid){
handler.guid=jQuery.guid++;
}
if(!(events=elemData.events)){
events=elemData.events={};
}
if(!(eventHandle=elemData.handle)){
eventHandle=elemData.handle=function(e){
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?
jQuery.event.dispatch.apply(elem,arguments):undefined;
};
}
types=(types||"").match(rnothtmlwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
continue;
}
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=jQuery.event.special[type]||{};
handleObj=jQuery.extend({
type:type,
origType:origType,
data:data,
handler:handler,
guid:handler.guid,
selector:selector,
needsContext:selector&&jQuery.expr.match.needsContext.test(selector),
namespace:namespaces.join(".")
},handleObjIn);
if(!(handlers=events[type])){
handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||
special.setup.call(elem,data,namespaces,eventHandle)===false){
if(elem.addEventListener){
elem.addEventListener(type,eventHandle);
}
}
}
if(special.add){
special.add.call(elem,handleObj);
if(!handleObj.handler.guid){
handleObj.handler.guid=handler.guid;
}
}
if(selector){
handlers.splice(handlers.delegateCount++,0,handleObj);
}else{
handlers.push(handleObj);
}
jQuery.event.global[type]=true;
}
},
remove:function(elem,types,handler,selector,mappedTypes){
var j,origCount,tmp,
events,t,handleObj,
special,handlers,type,namespaces,origType,
elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);
if(!elemData||!(events=elemData.events)){
return;
}
types=(types||"").match(rnothtmlwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
for(type in events){
jQuery.event.remove(elem,type+types[t],handler,selector,true);
}
continue;
}
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
handlers=events[type]||[];
tmp=tmp[2]&&
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");
origCount=j=handlers.length;
while(j--){
handleObj=handlers[j];
if((mappedTypes||origType===handleObj.origType)&&
(!handler||handler.guid===handleObj.guid)&&
(!tmp||tmp.test(handleObj.namespace))&&
(!selector||selector===handleObj.selector||
selector==="**"&&handleObj.selector)){
handlers.splice(j,1);
if(handleObj.selector){
handlers.delegateCount--;
}
if(special.remove){
special.remove.call(elem,handleObj);
}
}
}
if(origCount&&!handlers.length){
if(!special.teardown||
special.teardown.call(elem,namespaces,elemData.handle)===false){
jQuery.removeEvent(elem,type,elemData.handle);
}
delete events[type];
}
}
if(jQuery.isEmptyObject(events)){
dataPriv.remove(elem,"handle events");
}
},
dispatch:function(nativeEvent){
var event=jQuery.event.fix(nativeEvent);
var i,j,ret,matched,handleObj,handlerQueue,
args=new Array(arguments.length),
handlers=(dataPriv.get(this,"events")||{})[event.type]||[],
special=jQuery.event.special[event.type]||{};
args[0]=event;
for(i=1;i<arguments.length;i++){
args[i]=arguments[i];
}
event.delegateTarget=this;
if(special.preDispatch&&special.preDispatch.call(this,event)===false){
return;
}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);
i=0;
while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){
event.currentTarget=matched.elem;
j=0;
while((handleObj=matched.handlers[j++])&&
!event.isImmediatePropagationStopped()){
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){
event.handleObj=handleObj;
event.data=handleObj.data;
ret=((jQuery.event.special[handleObj.origType]||{}).handle||
handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){
if((event.result=ret)===false){
event.preventDefault();
event.stopPropagation();
}
}
}
}
}
if(special.postDispatch){
special.postDispatch.call(this,event);
}
return event.result;
},
handlers:function(event,handlers){
var i,handleObj,sel,matchedHandlers,matchedSelectors,
handlerQueue=[],
delegateCount=handlers.delegateCount,
cur=event.target;
if(delegateCount&&
cur.nodeType&&
!(event.type==="click"&&event.button>=1)){
for(;cur!==this;cur=cur.parentNode||this){
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){
matchedHandlers=[];
matchedSelectors={};
for(i=0;i<delegateCount;i++){
handleObj=handlers[i];
sel=handleObj.selector+" ";
if(matchedSelectors[sel]===undefined){
matchedSelectors[sel]=handleObj.needsContext?
jQuery(sel,this).index(cur)>-1:
jQuery.find(sel,this,null,[cur]).length;
}
if(matchedSelectors[sel]){
matchedHandlers.push(handleObj);
}
}
if(matchedHandlers.length){
handlerQueue.push({elem:cur,handlers:matchedHandlers});
}
}
}
}
cur=this;
if(delegateCount<handlers.length){
handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});
}
return handlerQueue;
},
addProp:function(name,hook){
Object.defineProperty(jQuery.Event.prototype,name,{
enumerable:true,
configurable:true,
get:jQuery.isFunction(hook)?
function(){
if(this.originalEvent){
return hook(this.originalEvent);
}
}:
function(){
if(this.originalEvent){
return this.originalEvent[name];
}
},
set:function(value){
Object.defineProperty(this,name,{
enumerable:true,
configurable:true,
writable:true,
value:value
});
}
});
},
fix:function(originalEvent){
return originalEvent[jQuery.expando]?
originalEvent:
new jQuery.Event(originalEvent);
},
special:{
load:{
noBubble:true
},
focus:{
trigger:function(){
if(this!==safeActiveElement()&&this.focus){
this.focus();
return false;
}
},
delegateType:"focusin"
},
blur:{
trigger:function(){
if(this===safeActiveElement()&&this.blur){
this.blur();
return false;
}
},
delegateType:"focusout"
},
click:{
trigger:function(){
if(this.type==="checkbox"&&this.click&&nodeName(this,"input")){
this.click();
return false;
}
},
_default:function(event){
return nodeName(event.target,"a");
}
},
beforeunload:{
postDispatch:function(event){
if(event.result!==undefined&&event.originalEvent){
event.originalEvent.returnValue=event.result;
}
}
}
}
};
jQuery.removeEvent=function(elem,type,handle){
if(elem.removeEventListener){
elem.removeEventListener(type,handle);
}
};
jQuery.Event=function(src,props){
if(!(this instanceof jQuery.Event)){
return new jQuery.Event(src,props);
}
if(src&&src.type){
this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||
src.defaultPrevented===undefined&&
src.returnValue===false?
returnTrue:
returnFalse;
this.target=(src.target&&src.target.nodeType===3)?
src.target.parentNode:
src.target;
this.currentTarget=src.currentTarget;
this.relatedTarget=src.relatedTarget;
}else{
this.type=src;
}
if(props){
jQuery.extend(this,props);
}
this.timeStamp=src&&src.timeStamp||jQuery.now();
this[jQuery.expando]=true;
};
jQuery.Event.prototype={
constructor:jQuery.Event,
isDefaultPrevented:returnFalse,
isPropagationStopped:returnFalse,
isImmediatePropagationStopped:returnFalse,
isSimulated:false,
preventDefault:function(){
var e=this.originalEvent;
this.isDefaultPrevented=returnTrue;
if(e&&!this.isSimulated){
e.preventDefault();
}
},
stopPropagation:function(){
var e=this.originalEvent;
this.isPropagationStopped=returnTrue;
if(e&&!this.isSimulated){
e.stopPropagation();
}
},
stopImmediatePropagation:function(){
var e=this.originalEvent;
this.isImmediatePropagationStopped=returnTrue;
if(e&&!this.isSimulated){
e.stopImmediatePropagation();
}
this.stopPropagation();
}
};
jQuery.each({
altKey:true,
bubbles:true,
cancelable:true,
changedTouches:true,
ctrlKey:true,
detail:true,
eventPhase:true,
metaKey:true,
pageX:true,
pageY:true,
shiftKey:true,
view:true,
"char":true,
charCode:true,
key:true,
keyCode:true,
button:true,
buttons:true,
clientX:true,
clientY:true,
offsetX:true,
offsetY:true,
pointerId:true,
pointerType:true,
screenX:true,
screenY:true,
targetTouches:true,
toElement:true,
touches:true,
which:function(event){
var button=event.button;
if(event.which==null&&rkeyEvent.test(event.type)){
return event.charCode!=null?event.charCode:event.keyCode;
}
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){
if(button&1){
return 1;
}
if(button&2){
return 3;
}
if(button&4){
return 2;
}
return 0;
}
return event.which;
}
},jQuery.event.addProp);
jQuery.each({
mouseenter:"mouseover",
mouseleave:"mouseout",
pointerenter:"pointerover",
pointerleave:"pointerout"
},function(orig,fix){
jQuery.event.special[orig]={
delegateType:fix,
bindType:fix,
handle:function(event){
var ret,
target=this,
related=event.relatedTarget,
handleObj=event.handleObj;
if(!related||(related!==target&&!jQuery.contains(target,related))){
event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix;
}
return ret;
}
};
});
jQuery.fn.extend({
on:function(types,selector,data,fn){
return on(this,types,selector,data,fn);
},
one:function(types,selector,data,fn){
return on(this,types,selector,data,fn,1);
},
off:function(types,selector,fn){
var handleObj,type;
if(types&&types.preventDefault&&types.handleObj){
handleObj=types.handleObj;
jQuery(types.delegateTarget).off(
handleObj.namespace?
handleObj.origType+"."+handleObj.namespace:
handleObj.origType,
handleObj.selector,
handleObj.handler
);
return this;
}
if(typeof types==="object"){
for(type in types){
this.off(type,selector,types[type]);
}
return this;
}
if(selector===false||typeof selector==="function"){
fn=selector;
selector=undefined;
}
if(fn===false){
fn=returnFalse;
}
return this.each(function(){
jQuery.event.remove(this,types,fn,selector);
});
}
});
var
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
rnoInnerhtml=/<script|<style|<link/i,
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,
rscriptTypeMasked=/^true\/(.*)/,
rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function manipulationTarget(elem,content){
if(nodeName(elem,"table")&&
nodeName(content.nodeType!==11?content:content.firstChild,"tr")){
return jQuery(">tbody",elem)[0]||elem;
}
return elem;
}
function disableScript(elem){
elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;
return elem;
}
function restoreScript(elem){
var match=rscriptTypeMasked.exec(elem.type);
if(match){
elem.type=match[1];
}else{
elem.removeAttribute("type");
}
return elem;
}
function cloneCopyEvent(src,dest){
var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;
if(dest.nodeType!==1){
return;
}
if(dataPriv.hasData(src)){
pdataOld=dataPriv.access(src);
pdataCur=dataPriv.set(dest,pdataOld);
events=pdataOld.events;
if(events){
delete pdataCur.handle;
pdataCur.events={};
for(type in events){
for(i=0,l=events[type].length;i<l;i++){
jQuery.event.add(dest,type,events[type][i]);
}
}
}
}
if(dataUser.hasData(src)){
udataOld=dataUser.access(src);
udataCur=jQuery.extend({},udataOld);
dataUser.set(dest,udataCur);
}
}
function fixInput(src,dest){
var nodeName=dest.nodeName.toLowerCase();
if(nodeName==="input"&&rcheckableType.test(src.type)){
dest.checked=src.checked;
}else if(nodeName==="input"||nodeName==="textarea"){
dest.defaultValue=src.defaultValue;
}
}
function domManip(collection,args,callback,ignored){
args=concat.apply([],args);
var fragment,first,scripts,hasScripts,node,doc,
i=0,
l=collection.length,
iNoClone=l-1,
value=args[0],
isFunction=jQuery.isFunction(value);
if(isFunction||
(l>1&&typeof value==="string"&&
!support.checkClone&&rchecked.test(value))){
return collection.each(function(index){
var self=collection.eq(index);
if(isFunction){
args[0]=value.call(this,index,self.html());
}
domManip(self,args,callback,ignored);
});
}
if(l){
fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);
first=fragment.firstChild;
if(fragment.childNodes.length===1){
fragment=first;
}
if(first||ignored){
scripts=jQuery.map(getAll(fragment,"script"),disableScript);
hasScripts=scripts.length;
for(;i<l;i++){
node=fragment;
if(i!==iNoClone){
node=jQuery.clone(node,true,true);
if(hasScripts){
jQuery.merge(scripts,getAll(node,"script"));
}
}
callback.call(collection[i],node,i);
}
if(hasScripts){
doc=scripts[scripts.length-1].ownerDocument;
jQuery.map(scripts,restoreScript);
for(i=0;i<hasScripts;i++){
node=scripts[i];
if(rscriptType.test(node.type||"")&&
!dataPriv.access(node,"globalEval")&&
jQuery.contains(doc,node)){
if(node.src){
if(jQuery._evalUrl){
jQuery._evalUrl(node.src);
}
}else{
DOMEval(node.textContent.replace(rcleanScript,""),doc);
}
}
}
}
}
}
return collection;
}
function remove(elem,selector,keepData){
var node,
nodes=selector?jQuery.filter(selector,elem):elem,
i=0;
for(;(node=nodes[i])!=null;i++){
if(!keepData&&node.nodeType===1){
jQuery.cleanData(getAll(node));
}
if(node.parentNode){
if(keepData&&jQuery.contains(node.ownerDocument,node)){
setGlobalEval(getAll(node,"script"));
}
node.parentNode.removeChild(node);
}
}
return elem;
}
jQuery.extend({
htmlPrefilter:function(html){
return html.replace(rxhtmlTag,"<$1></$2>");
},
clone:function(elem,dataAndEvents,deepDataAndEvents){
var i,l,srcElements,destElements,
clone=elem.cloneNode(true),
inPage=jQuery.contains(elem.ownerDocument,elem);
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&
!jQuery.isXMLDoc(elem)){
destElements=getAll(clone);
srcElements=getAll(elem);
for(i=0,l=srcElements.length;i<l;i++){
fixInput(srcElements[i],destElements[i]);
}
}
if(dataAndEvents){
if(deepDataAndEvents){
srcElements=srcElements||getAll(elem);
destElements=destElements||getAll(clone);
for(i=0,l=srcElements.length;i<l;i++){
cloneCopyEvent(srcElements[i],destElements[i]);
}
}else{
cloneCopyEvent(elem,clone);
}
}
destElements=getAll(clone,"script");
if(destElements.length>0){
setGlobalEval(destElements,!inPage&&getAll(elem,"script"));
}
return clone;
},
cleanData:function(elems){
var data,elem,type,
special=jQuery.event.special,
i=0;
for(;(elem=elems[i])!==undefined;i++){
if(acceptData(elem)){
if((data=elem[dataPriv.expando])){
if(data.events){
for(type in data.events){
if(special[type]){
jQuery.event.remove(elem,type);
}else{
jQuery.removeEvent(elem,type,data.handle);
}
}
}
elem[dataPriv.expando]=undefined;
}
if(elem[dataUser.expando]){
elem[dataUser.expando]=undefined;
}
}
}
}
});
jQuery.fn.extend({
detach:function(selector){
return remove(this,selector,true);
},
remove:function(selector){
return remove(this,selector);
},
text:function(value){
return access(this,function(value){
return value===undefined?
jQuery.text(this):
this.empty().each(function(){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
this.textContent=value;
}
});
},null,value,arguments.length);
},
append:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.appendChild(elem);
}
});
},
prepend:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.insertBefore(elem,target.firstChild);
}
});
},
before:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this);
}
});
},
after:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this.nextSibling);
}
});
},
empty:function(){
var elem,
i=0;
for(;(elem=this[i])!=null;i++){
if(elem.nodeType===1){
jQuery.cleanData(getAll(elem,false));
elem.textContent="";
}
}
return this;
},
clone:function(dataAndEvents,deepDataAndEvents){
dataAndEvents=dataAndEvents==null?false:dataAndEvents;
deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;
return this.map(function(){
return jQuery.clone(this,dataAndEvents,deepDataAndEvents);
});
},
html:function(value){
return access(this,function(value){
var elem=this[0]||{},
i=0,
l=this.length;
if(value===undefined&&elem.nodeType===1){
return elem.innerHTML;
}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&
!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){
value=jQuery.htmlPrefilter(value);
try{
for(;i<l;i++){
elem=this[i]||{};
if(elem.nodeType===1){
jQuery.cleanData(getAll(elem,false));
elem.innerHTML=value;
}
}
elem=0;
}catch(e){}
}
if(elem){
this.empty().append(value);
}
},null,value,arguments.length);
},
replaceWith:function(){
var ignored=[];
return domManip(this,arguments,function(elem){
var parent=this.parentNode;
if(jQuery.inArray(this,ignored)<0){
jQuery.cleanData(getAll(this));
if(parent){
parent.replaceChild(elem,this);
}
}
},ignored);
}
});
jQuery.each({
appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"
},function(name,original){
jQuery.fn[name]=function(selector){
var elems,
ret=[],
insert=jQuery(selector),
last=insert.length-1,
i=0;
for(;i<=last;i++){
elems=i===last?this:this.clone(true);
jQuery(insert[i])[original](elems);
push.apply(ret,elems.get());
}
return this.pushStack(ret);
};
});
var rmargin=(/^margin/);
var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");
var getStyles=function(elem){
var view=elem.ownerDocument.defaultView;
if(!view||!view.opener){
view=window;
}
return view.getComputedStyle(elem);
};
(function(){
function computeStyleTests(){
if(!div){
return;
}
div.style.cssText=
"box-sizing:border-box;"+
"position:relative;display:block;"+
"margin:auto;border:1px;padding:1px;"+
"top:1%;width:50%";
div.innerHTML="";
documentElement.appendChild(container);
var divStyle=window.getComputedStyle(div);
pixelPositionVal=divStyle.top!=="1%";
reliableMarginLeftVal=divStyle.marginLeft==="2px";
boxSizingReliableVal=divStyle.width==="4px";
div.style.marginRight="50%";
pixelMarginRightVal=divStyle.marginRight==="4px";
documentElement.removeChild(container);
div=null;
}
var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,
container=document.createElement("div"),
div=document.createElement("div");
if(!div.style){
return;
}
div.style.backgroundClip="content-box";
div.cloneNode(true).style.backgroundClip="";
support.clearCloneStyle=div.style.backgroundClip==="content-box";
container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+
"padding:0;margin-top:1px;position:absolute";
container.appendChild(div);
jQuery.extend(support,{
pixelPosition:function(){
computeStyleTests();
return pixelPositionVal;
},
boxSizingReliable:function(){
computeStyleTests();
return boxSizingReliableVal;
},
pixelMarginRight:function(){
computeStyleTests();
return pixelMarginRightVal;
},
reliableMarginLeft:function(){
computeStyleTests();
return reliableMarginLeftVal;
}
});
})();
function curCSS(elem,name,computed){
var width,minWidth,maxWidth,ret,
style=elem.style;
computed=computed||getStyles(elem);
if(computed){
ret=computed.getPropertyValue(name)||computed[name];
if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){
ret=jQuery.style(elem,name);
}
if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){
width=style.width;
minWidth=style.minWidth;
maxWidth=style.maxWidth;
style.minWidth=style.maxWidth=style.width=ret;
ret=computed.width;
style.width=width;
style.minWidth=minWidth;
style.maxWidth=maxWidth;
}
}
return ret!==undefined?
ret+"":
ret;
}
function addGetHookIf(conditionFn,hookFn){
return{
get:function(){
if(conditionFn()){
delete this.get;
return;
}
return(this.get=hookFn).apply(this,arguments);
}
};
}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,
rcustomProp=/^--/,
cssShow={position:"absolute",visibility:"hidden",display:"block"},
cssNormalTransform={
letterSpacing:"0",
fontWeight:"400"
},
cssPrefixes=["Webkit","Moz","ms"],
emptyStyle=document.createElement("div").style;
function vendorPropName(name){
if(name in emptyStyle){
return name;
}
var capName=name[0].toUpperCase()+name.slice(1),
i=cssPrefixes.length;
while(i--){
name=cssPrefixes[i]+capName;
if(name in emptyStyle){
return name;
}
}
}
function finalPropName(name){
var ret=jQuery.cssProps[name];
if(!ret){
ret=jQuery.cssProps[name]=vendorPropName(name)||name;
}
return ret;
}
function setPositiveNumber(elem,value,subtract){
var matches=rcssNum.exec(value);
return matches?
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):
value;
}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){
var i,
val=0;
if(extra===(isBorderBox?"border":"content")){
i=4;
}else{
i=name==="width"?1:0;
}
for(;i<4;i+=2){
if(extra==="margin"){
val+=jQuery.css(elem,extra+cssExpand[i],true,styles);
}
if(isBorderBox){
if(extra==="content"){
val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
}
if(extra!=="margin"){
val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}else{
val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
if(extra!=="padding"){
val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}
}
return val;
}
function getWidthOrHeight(elem,name,extra){
var valueIsBorderBox,
styles=getStyles(elem),
val=curCSS(elem,name,styles),
isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";
if(rnumnonpx.test(val)){
return val;
}
valueIsBorderBox=isBorderBox&&
(support.boxSizingReliable()||val===elem.style[name]);
if(val==="auto"){
val=elem["offset"+name[0].toUpperCase()+name.slice(1)];
}
val=parseFloat(val)||0;
return(val+
augmentWidthOrHeight(
elem,
name,
extra||(isBorderBox?"border":"content"),
valueIsBorderBox,
styles
)
)+"px";
}
jQuery.extend({
cssHooks:{
opacity:{
get:function(elem,computed){
if(computed){
var ret=curCSS(elem,"opacity");
return ret===""?"1":ret;
}
}
}
},
cssNumber:{
"animationIterationCount":true,
"columnCount":true,
"fillOpacity":true,
"flexGrow":true,
"flexShrink":true,
"fontWeight":true,
"lineHeight":true,
"opacity":true,
"order":true,
"orphans":true,
"widows":true,
"zIndex":true,
"zoom":true
},
cssProps:{
"float":"cssFloat"
},
style:function(elem,name,value,extra){
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){
return;
}
var ret,type,hooks,
origName=jQuery.camelCase(name),
isCustomProp=rcustomProp.test(name),
style=elem.style;
if(!isCustomProp){
name=finalPropName(origName);
}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(value!==undefined){
type=typeof value;
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){
value=adjustCSS(elem,name,ret);
type="number";
}
if(value==null||value!==value){
return;
}
if(type==="number"){
value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");
}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){
style[name]="inherit";
}
if(!hooks||!("set"in hooks)||
(value=hooks.set(elem,value,extra))!==undefined){
if(isCustomProp){
style.setProperty(name,value);
}else{
style[name]=value;
}
}
}else{
if(hooks&&"get"in hooks&&
(ret=hooks.get(elem,false,extra))!==undefined){
return ret;
}
return style[name];
}
},
css:function(elem,name,extra,styles){
var val,num,hooks,
origName=jQuery.camelCase(name),
isCustomProp=rcustomProp.test(name);
if(!isCustomProp){
name=finalPropName(origName);
}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(hooks&&"get"in hooks){
val=hooks.get(elem,true,extra);
}
if(val===undefined){
val=curCSS(elem,name,styles);
}
if(val==="normal"&&name in cssNormalTransform){
val=cssNormalTransform[name];
}
if(extra===""||extra){
num=parseFloat(val);
return extra===true||isFinite(num)?num||0:val;
}
return val;
}
});
jQuery.each(["height","width"],function(i,name){
jQuery.cssHooks[name]={
get:function(elem,computed,extra){
if(computed){
return rdisplayswap.test(jQuery.css(elem,"display"))&&
(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?
swap(elem,cssShow,function(){
return getWidthOrHeight(elem,name,extra);
}):
getWidthOrHeight(elem,name,extra);
}
},
set:function(elem,value,extra){
var matches,
styles=extra&&getStyles(elem),
subtract=extra&&augmentWidthOrHeight(
elem,
name,
extra,
jQuery.css(elem,"boxSizing",false,styles)==="border-box",
styles
);
if(subtract&&(matches=rcssNum.exec(value))&&
(matches[3]||"px")!=="px"){
elem.style[name]=value;
value=jQuery.css(elem,name);
}
return setPositiveNumber(elem,value,subtract);
}
};
});
jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,
function(elem,computed){
if(computed){
return(parseFloat(curCSS(elem,"marginLeft"))||
elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){
return elem.getBoundingClientRect().left;
})
)+"px";
}
}
);
jQuery.each({
margin:"",
padding:"",
border:"Width"
},function(prefix,suffix){
jQuery.cssHooks[prefix+suffix]={
expand:function(value){
var i=0,
expanded={},
parts=typeof value==="string"?value.split(" "):[value];
for(;i<4;i++){
expanded[prefix+cssExpand[i]+suffix]=
parts[i]||parts[i-2]||parts[0];
}
return expanded;
}
};
if(!rmargin.test(prefix)){
jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;
}
});
jQuery.fn.extend({
css:function(name,value){
return access(this,function(elem,name,value){
var styles,len,
map={},
i=0;
if(Array.isArray(name)){
styles=getStyles(elem);
len=name.length;
for(;i<len;i++){
map[name[i]]=jQuery.css(elem,name[i],false,styles);
}
return map;
}
return value!==undefined?
jQuery.style(elem,name,value):
jQuery.css(elem,name);
},name,value,arguments.length>1);
}
});
function Tween(elem,options,prop,end,easing){
return new Tween.prototype.init(elem,options,prop,end,easing);
}
jQuery.Tween=Tween;
Tween.prototype={
constructor:Tween,
init:function(elem,options,prop,end,easing,unit){
this.elem=elem;
this.prop=prop;
this.easing=easing||jQuery.easing._default;
this.options=options;
this.start=this.now=this.cur();
this.end=end;
this.unit=unit||(jQuery.cssNumber[prop]?"":"px");
},
cur:function(){
var hooks=Tween.propHooks[this.prop];
return hooks&&hooks.get?
hooks.get(this):
Tween.propHooks._default.get(this);
},
run:function(percent){
var eased,
hooks=Tween.propHooks[this.prop];
if(this.options.duration){
this.pos=eased=jQuery.easing[this.easing](
percent,this.options.duration*percent,0,1,this.options.duration
);
}else{
this.pos=eased=percent;
}
this.now=(this.end-this.start)*eased+this.start;
if(this.options.step){
this.options.step.call(this.elem,this.now,this);
}
if(hooks&&hooks.set){
hooks.set(this);
}else{
Tween.propHooks._default.set(this);
}
return this;
}
};
Tween.prototype.init.prototype=Tween.prototype;
Tween.propHooks={
_default:{
get:function(tween){
var result;
if(tween.elem.nodeType!==1||
tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){
return tween.elem[tween.prop];
}
result=jQuery.css(tween.elem,tween.prop,"");
return!result||result==="auto"?0:result;
},
set:function(tween){
if(jQuery.fx.step[tween.prop]){
jQuery.fx.step[tween.prop](tween);
}else if(tween.elem.nodeType===1&&
(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||
jQuery.cssHooks[tween.prop])){
jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);
}else{
tween.elem[tween.prop]=tween.now;
}
}
}
};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={
set:function(tween){
if(tween.elem.nodeType&&tween.elem.parentNode){
tween.elem[tween.prop]=tween.now;
}
}
};
jQuery.easing={
linear:function(p){
return p;
},
swing:function(p){
return 0.5-Math.cos(p*Math.PI)/2;
},
_default:"swing"
};
jQuery.fx=Tween.prototype.init;
jQuery.fx.step={};
var
fxNow,inProgress,
rfxtypes=/^(?:toggle|show|hide)$/,
rrun=/queueHooks$/;
function schedule(){
if(inProgress){
if(document.hidden===false&&window.requestAnimationFrame){
window.requestAnimationFrame(schedule);
}else{
window.setTimeout(schedule,jQuery.fx.interval);
}
jQuery.fx.tick();
}
}
function createFxNow(){
window.setTimeout(function(){
fxNow=undefined;
});
return(fxNow=jQuery.now());
}
function genFx(type,includeWidth){
var which,
i=0,
attrs={height:type};
includeWidth=includeWidth?1:0;
for(;i<4;i+=2-includeWidth){
which=cssExpand[i];
attrs["margin"+which]=attrs["padding"+which]=type;
}
if(includeWidth){
attrs.opacity=attrs.width=type;
}
return attrs;
}
function createTween(value,prop,animation){
var tween,
collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),
index=0,
length=collection.length;
for(;index<length;index++){
if((tween=collection[index].call(animation,prop,value))){
return tween;
}
}
}
function defaultPrefilter(elem,props,opts){
var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,
isBox="width"in props||"height"in props,
anim=this,
orig={},
style=elem.style,
hidden=elem.nodeType&&isHiddenWithinTree(elem),
dataShow=dataPriv.get(elem,"fxshow");
if(!opts.queue){
hooks=jQuery._queueHooks(elem,"fx");
if(hooks.unqueued==null){
hooks.unqueued=0;
oldfire=hooks.empty.fire;
hooks.empty.fire=function(){
if(!hooks.unqueued){
oldfire();
}
};
}
hooks.unqueued++;
anim.always(function(){
anim.always(function(){
hooks.unqueued--;
if(!jQuery.queue(elem,"fx").length){
hooks.empty.fire();
}
});
});
}
for(prop in props){
value=props[prop];
if(rfxtypes.test(value)){
delete props[prop];
toggle=toggle||value==="toggle";
if(value===(hidden?"hide":"show")){
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){
hidden=true;
}else{
continue;
}
}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);
}
}
propTween=!jQuery.isEmptyObject(props);
if(!propTween&&jQuery.isEmptyObject(orig)){
return;
}
if(isBox&&elem.nodeType===1){
opts.overflow=[style.overflow,style.overflowX,style.overflowY];
restoreDisplay=dataShow&&dataShow.display;
if(restoreDisplay==null){
restoreDisplay=dataPriv.get(elem,"display");
}
display=jQuery.css(elem,"display");
if(display==="none"){
if(restoreDisplay){
display=restoreDisplay;
}else{
showHide([elem],true);
restoreDisplay=elem.style.display||restoreDisplay;
display=jQuery.css(elem,"display");
showHide([elem]);
}
}
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){
if(jQuery.css(elem,"float")==="none"){
if(!propTween){
anim.done(function(){
style.display=restoreDisplay;
});
if(restoreDisplay==null){
display=style.display;
restoreDisplay=display==="none"?"":display;
}
}
style.display="inline-block";
}
}
}
if(opts.overflow){
style.overflow="hidden";
anim.always(function(){
style.overflow=opts.overflow[0];
style.overflowX=opts.overflow[1];
style.overflowY=opts.overflow[2];
});
}
propTween=false;
for(prop in orig){
if(!propTween){
if(dataShow){
if("hidden"in dataShow){
hidden=dataShow.hidden;
}
}else{
dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});
}
if(toggle){
dataShow.hidden=!hidden;
}
if(hidden){
showHide([elem],true);
}
anim.done(function(){
if(!hidden){
showHide([elem]);
}
dataPriv.remove(elem,"fxshow");
for(prop in orig){
jQuery.style(elem,prop,orig[prop]);
}
});
}
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);
if(!(prop in dataShow)){
dataShow[prop]=propTween.start;
if(hidden){
propTween.end=propTween.start;
propTween.start=0;
}
}
}
}
function propFilter(props,specialEasing){
var index,name,easing,value,hooks;
for(index in props){
name=jQuery.camelCase(index);
easing=specialEasing[name];
value=props[index];
if(Array.isArray(value)){
easing=value[1];
value=props[index]=value[0];
}
if(index!==name){
props[name]=value;
delete props[index];
}
hooks=jQuery.cssHooks[name];
if(hooks&&"expand"in hooks){
value=hooks.expand(value);
delete props[name];
for(index in value){
if(!(index in props)){
props[index]=value[index];
specialEasing[index]=easing;
}
}
}else{
specialEasing[name]=easing;
}
}
}
function Animation(elem,properties,options){
var result,
stopped,
index=0,
length=Animation.prefilters.length,
deferred=jQuery.Deferred().always(function(){
delete tick.elem;
}),
tick=function(){
if(stopped){
return false;
}
var currentTime=fxNow||createFxNow(),
remaining=Math.max(0,animation.startTime+animation.duration-currentTime),
temp=remaining/animation.duration||0,
percent=1-temp,
index=0,
length=animation.tweens.length;
for(;index<length;index++){
animation.tweens[index].run(percent);
}
deferred.notifyWith(elem,[animation,percent,remaining]);
if(percent<1&&length){
return remaining;
}
if(!length){
deferred.notifyWith(elem,[animation,1,0]);
}
deferred.resolveWith(elem,[animation]);
return false;
},
animation=deferred.promise({
elem:elem,
props:jQuery.extend({},properties),
opts:jQuery.extend(true,{
specialEasing:{},
easing:jQuery.easing._default
},options),
originalProperties:properties,
originalOptions:options,
startTime:fxNow||createFxNow(),
duration:options.duration,
tweens:[],
createTween:function(prop,end){
var tween=jQuery.Tween(elem,animation.opts,prop,end,
animation.opts.specialEasing[prop]||animation.opts.easing);
animation.tweens.push(tween);
return tween;
},
stop:function(gotoEnd){
var index=0,
length=gotoEnd?animation.tweens.length:0;
if(stopped){
return this;
}
stopped=true;
for(;index<length;index++){
animation.tweens[index].run(1);
}
if(gotoEnd){
deferred.notifyWith(elem,[animation,1,0]);
deferred.resolveWith(elem,[animation,gotoEnd]);
}else{
deferred.rejectWith(elem,[animation,gotoEnd]);
}
return this;
}
}),
props=animation.props;
propFilter(props,animation.opts.specialEasing);
for(;index<length;index++){
result=Animation.prefilters[index].call(animation,elem,props,animation.opts);
if(result){
if(jQuery.isFunction(result.stop)){
jQuery._queueHooks(animation.elem,animation.opts.queue).stop=
jQuery.proxy(result.stop,result);
}
return result;
}
}
jQuery.map(props,createTween,animation);
if(jQuery.isFunction(animation.opts.start)){
animation.opts.start.call(elem,animation);
}
animation
.progress(animation.opts.progress)
.done(animation.opts.done,animation.opts.complete)
.fail(animation.opts.fail)
.always(animation.opts.always);
jQuery.fx.timer(
jQuery.extend(tick,{
elem:elem,
anim:animation,
queue:animation.opts.queue
})
);
return animation;
}
jQuery.Animation=jQuery.extend(Animation,{
tweeners:{
"*":[function(prop,value){
var tween=this.createTween(prop,value);
adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);
return tween;
}]
},
tweener:function(props,callback){
if(jQuery.isFunction(props)){
callback=props;
props=["*"];
}else{
props=props.match(rnothtmlwhite);
}
var prop,
index=0,
length=props.length;
for(;index<length;index++){
prop=props[index];
Animation.tweeners[prop]=Animation.tweeners[prop]||[];
Animation.tweeners[prop].unshift(callback);
}
},
prefilters:[defaultPrefilter],
prefilter:function(callback,prepend){
if(prepend){
Animation.prefilters.unshift(callback);
}else{
Animation.prefilters.push(callback);
}
}
});
jQuery.speed=function(speed,easing,fn){
var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{
complete:fn||!fn&&easing||
jQuery.isFunction(speed)&&speed,
duration:speed,
easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing
};
if(jQuery.fx.off){
opt.duration=0;
}else{
if(typeof opt.duration!=="number"){
if(opt.duration in jQuery.fx.speeds){
opt.duration=jQuery.fx.speeds[opt.duration];
}else{
opt.duration=jQuery.fx.speeds._default;
}
}
}
if(opt.queue==null||opt.queue===true){
opt.queue="fx";
}
opt.old=opt.complete;
opt.complete=function(){
if(jQuery.isFunction(opt.old)){
opt.old.call(this);
}
if(opt.queue){
jQuery.dequeue(this,opt.queue);
}
};
return opt;
};
jQuery.fn.extend({
fadeTo:function(speed,to,easing,callback){
return this.filter(isHiddenWithinTree).css("opacity",0).show()
.end().animate({opacity:to},speed,easing,callback);
},
animate:function(prop,speed,easing,callback){
var empty=jQuery.isEmptyObject(prop),
optall=jQuery.speed(speed,easing,callback),
doAnimation=function(){
var anim=Animation(this,jQuery.extend({},prop),optall);
if(empty||dataPriv.get(this,"finish")){
anim.stop(true);
}
};
doAnimation.finish=doAnimation;
return empty||optall.queue===false?
this.each(doAnimation):
this.queue(optall.queue,doAnimation);
},
stop:function(type,clearQueue,gotoEnd){
var stopQueue=function(hooks){
var stop=hooks.stop;
delete hooks.stop;
stop(gotoEnd);
};
if(typeof type!=="string"){
gotoEnd=clearQueue;
clearQueue=type;
type=undefined;
}
if(clearQueue&&type!==false){
this.queue(type||"fx",[]);
}
return this.each(function(){
var dequeue=true,
index=type!=null&&type+"queueHooks",
timers=jQuery.timers,
data=dataPriv.get(this);
if(index){
if(data[index]&&data[index].stop){
stopQueue(data[index]);
}
}else{
for(index in data){
if(data[index]&&data[index].stop&&rrun.test(index)){
stopQueue(data[index]);
}
}
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&
(type==null||timers[index].queue===type)){
timers[index].anim.stop(gotoEnd);
dequeue=false;
timers.splice(index,1);
}
}
if(dequeue||!gotoEnd){
jQuery.dequeue(this,type);
}
});
},
finish:function(type){
if(type!==false){
type=type||"fx";
}
return this.each(function(){
var index,
data=dataPriv.get(this),
queue=data[type+"queue"],
hooks=data[type+"queueHooks"],
timers=jQuery.timers,
length=queue?queue.length:0;
data.finish=true;
jQuery.queue(this,type,[]);
if(hooks&&hooks.stop){
hooks.stop.call(this,true);
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&timers[index].queue===type){
timers[index].anim.stop(true);
timers.splice(index,1);
}
}
for(index=0;index<length;index++){
if(queue[index]&&queue[index].finish){
queue[index].finish.call(this);
}
}
delete data.finish;
});
}
});
jQuery.each(["toggle","show","hide"],function(i,name){
var cssFn=jQuery.fn[name];
jQuery.fn[name]=function(speed,easing,callback){
return speed==null||typeof speed==="boolean"?
cssFn.apply(this,arguments):
this.animate(genFx(name,true),speed,easing,callback);
};
});
jQuery.each({
slideDown:genFx("show"),
slideUp:genFx("hide"),
slideToggle:genFx("toggle"),
fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}
},function(name,props){
jQuery.fn[name]=function(speed,easing,callback){
return this.animate(props,speed,easing,callback);
};
});
jQuery.timers=[];
jQuery.fx.tick=function(){
var timer,
i=0,
timers=jQuery.timers;
fxNow=jQuery.now();
for(;i<timers.length;i++){
timer=timers[i];
if(!timer()&&timers[i]===timer){
timers.splice(i--,1);
}
}
if(!timers.length){
jQuery.fx.stop();
}
fxNow=undefined;
};
jQuery.fx.timer=function(timer){
jQuery.timers.push(timer);
jQuery.fx.start();
};
jQuery.fx.interval=13;
jQuery.fx.start=function(){
if(inProgress){
return;
}
inProgress=true;
schedule();
};
jQuery.fx.stop=function(){
inProgress=null;
};
jQuery.fx.speeds={
slow:600,
fast:200,
_default:400
};
jQuery.fn.delay=function(time,type){
time=jQuery.fx?jQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,hooks){
var timeout=window.setTimeout(next,time);
hooks.stop=function(){
window.clearTimeout(timeout);
};
});
};
(function(){
var input=document.createElement("input"),
select=document.createElement("select"),
opt=select.appendChild(document.createElement("option"));
input.type="checkbox";
support.checkOn=input.value!=="";
support.optSelected=opt.selected;
input=document.createElement("input");
input.value="t";
input.type="radio";
support.radioValue=input.value==="t";
})();
var boolHook,
attrHandle=jQuery.expr.attrHandle;
jQuery.fn.extend({
attr:function(name,value){
return access(this,jQuery.attr,name,value,arguments.length>1);
},
removeAttr:function(name){
return this.each(function(){
jQuery.removeAttr(this,name);
});
}
});
jQuery.extend({
attr:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(typeof elem.getAttribute==="undefined"){
return jQuery.prop(elem,name,value);
}
if(nType!==1||!jQuery.isXMLDoc(elem)){
hooks=jQuery.attrHooks[name.toLowerCase()]||
(jQuery.expr.match.bool.test(name)?boolHook:undefined);
}
if(value!==undefined){
if(value===null){
jQuery.removeAttr(elem,name);
return;
}
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
elem.setAttribute(name,value+"");
return value;
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
ret=jQuery.find.attr(elem,name);
return ret==null?undefined:ret;
},
attrHooks:{
type:{
set:function(elem,value){
if(!support.radioValue&&value==="radio"&&
nodeName(elem,"input")){
var val=elem.value;
elem.setAttribute("type",value);
if(val){
elem.value=val;
}
return value;
}
}
}
},
removeAttr:function(elem,value){
var name,
i=0,
attrNames=value&&value.match(rnothtmlwhite);
if(attrNames&&elem.nodeType===1){
while((name=attrNames[i++])){
elem.removeAttribute(name);
}
}
}
});
boolHook={
set:function(elem,value,name){
if(value===false){
jQuery.removeAttr(elem,name);
}else{
elem.setAttribute(name,name);
}
return name;
}
};
jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){
var getter=attrHandle[name]||jQuery.find.attr;
attrHandle[name]=function(elem,name,isXML){
var ret,handle,
lowercaseName=name.toLowerCase();
if(!isXML){
handle=attrHandle[lowercaseName];
attrHandle[lowercaseName]=ret;
ret=getter(elem,name,isXML)!=null?
lowercaseName:
null;
attrHandle[lowercaseName]=handle;
}
return ret;
};
});
var rfocusable=/^(?:input|select|textarea|button)$/i,
rclickable=/^(?:a|area)$/i;
jQuery.fn.extend({
prop:function(name,value){
return access(this,jQuery.prop,name,value,arguments.length>1);
},
removeProp:function(name){
return this.each(function(){
delete this[jQuery.propFix[name]||name];
});
}
});
jQuery.extend({
prop:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(nType!==1||!jQuery.isXMLDoc(elem)){
name=jQuery.propFix[name]||name;
hooks=jQuery.propHooks[name];
}
if(value!==undefined){
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
return(elem[name]=value);
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
return elem[name];
},
propHooks:{
tabIndex:{
get:function(elem){
var tabindex=jQuery.find.attr(elem,"tabindex");
if(tabindex){
return parseInt(tabindex,10);
}
if(
rfocusable.test(elem.nodeName)||
rclickable.test(elem.nodeName)&&
elem.href
){
return 0;
}
return-1;
}
}
},
propFix:{
"for":"htmlFor",
"class":"className"
}
});
if(!support.optSelected){
jQuery.propHooks.selected={
get:function(elem){
var parent=elem.parentNode;
if(parent&&parent.parentNode){
parent.parentNode.selectedIndex;
}
return null;
},
set:function(elem){
var parent=elem.parentNode;
if(parent){
parent.selectedIndex;
if(parent.parentNode){
parent.parentNode.selectedIndex;
}
}
}
};
}
jQuery.each([
"tabIndex",
"readOnly",
"maxLength",
"cellSpacing",
"cellPadding",
"rowSpan",
"colSpan",
"useMap",
"frameBorder",
"contentEditable"
],function(){
jQuery.propFix[this.toLowerCase()]=this;
});
function stripAndCollapse(value){
var tokens=value.match(rnothtmlwhite)||[];
return tokens.join(" ");
}
function getClass(elem){
return elem.getAttribute&&elem.getAttribute("class")||"";
}
jQuery.fn.extend({
addClass:function(value){
var classes,elem,cur,curValue,clazz,j,finalValue,
i=0;
if(jQuery.isFunction(value)){
return this.each(function(j){
jQuery(this).addClass(value.call(this,j,getClass(this)));
});
}
if(typeof value==="string"&&value){
classes=value.match(rnothtmlwhite)||[];
while((elem=this[i++])){
curValue=getClass(elem);
cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");
if(cur){
j=0;
while((clazz=classes[j++])){
if(cur.indexOf(" "+clazz+" ")<0){
cur+=clazz+" ";
}
}
finalValue=stripAndCollapse(cur);
if(curValue!==finalValue){
elem.setAttribute("class",finalValue);
}
}
}
}
return this;
},
removeClass:function(value){
var classes,elem,cur,curValue,clazz,j,finalValue,
i=0;
if(jQuery.isFunction(value)){
return this.each(function(j){
jQuery(this).removeClass(value.call(this,j,getClass(this)));
});
}
if(!arguments.length){
return this.attr("class","");
}
if(typeof value==="string"&&value){
classes=value.match(rnothtmlwhite)||[];
while((elem=this[i++])){
curValue=getClass(elem);
cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");
if(cur){
j=0;
while((clazz=classes[j++])){
while(cur.indexOf(" "+clazz+" ")>-1){
cur=cur.replace(" "+clazz+" "," ");
}
}
finalValue=stripAndCollapse(cur);
if(curValue!==finalValue){
elem.setAttribute("class",finalValue);
}
}
}
}
return this;
},
toggleClass:function(value,stateVal){
var type=typeof value;
if(typeof stateVal==="boolean"&&type==="string"){
return stateVal?this.addClass(value):this.removeClass(value);
}
if(jQuery.isFunction(value)){
return this.each(function(i){
jQuery(this).toggleClass(
value.call(this,i,getClass(this),stateVal),
stateVal
);
});
}
return this.each(function(){
var className,i,self,classNames;
if(type==="string"){
i=0;
self=jQuery(this);
classNames=value.match(rnothtmlwhite)||[];
while((className=classNames[i++])){
if(self.hasClass(className)){
self.removeClass(className);
}else{
self.addClass(className);
}
}
}else if(value===undefined||type==="boolean"){
className=getClass(this);
if(className){
dataPriv.set(this,"__className__",className);
}
if(this.setAttribute){
this.setAttribute("class",
className||value===false?
"":
dataPriv.get(this,"__className__")||""
);
}
}
});
},
hasClass:function(selector){
var className,elem,
i=0;
className=" "+selector+" ";
while((elem=this[i++])){
if(elem.nodeType===1&&
(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){
return true;
}
}
return false;
}
});
var rreturn=/\r/g;
jQuery.fn.extend({
val:function(value){
var hooks,ret,isFunction,
elem=this[0];
if(!arguments.length){
if(elem){
hooks=jQuery.valHooks[elem.type]||
jQuery.valHooks[elem.nodeName.toLowerCase()];
if(hooks&&
"get"in hooks&&
(ret=hooks.get(elem,"value"))!==undefined
){
return ret;
}
ret=elem.value;
if(typeof ret==="string"){
return ret.replace(rreturn,"");
}
return ret==null?"":ret;
}
return;
}
isFunction=jQuery.isFunction(value);
return this.each(function(i){
var val;
if(this.nodeType!==1){
return;
}
if(isFunction){
val=value.call(this,i,jQuery(this).val());
}else{
val=value;
}
if(val==null){
val="";
}else if(typeof val==="number"){
val+="";
}else if(Array.isArray(val)){
val=jQuery.map(val,function(value){
return value==null?"":value+"";
});
}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){
this.value=val;
}
});
}
});
jQuery.extend({
valHooks:{
option:{
get:function(elem){
var val=jQuery.find.attr(elem,"value");
return val!=null?
val:
stripAndCollapse(jQuery.text(elem));
}
},
select:{
get:function(elem){
var value,option,i,
options=elem.options,
index=elem.selectedIndex,
one=elem.type==="select-one",
values=one?null:[],
max=one?index+1:options.length;
if(index<0){
i=max;
}else{
i=one?index:0;
}
for(;i<max;i++){
option=options[i];
if((option.selected||i===index)&&
!option.disabled&&
(!option.parentNode.disabled||
!nodeName(option.parentNode,"optgroup"))){
value=jQuery(option).val();
if(one){
return value;
}
values.push(value);
}
}
return values;
},
set:function(elem,value){
var optionSet,option,
options=elem.options,
values=jQuery.makeArray(value),
i=options.length;
while(i--){
option=options[i];
if(option.selected=
jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1
){
optionSet=true;
}
}
if(!optionSet){
elem.selectedIndex=-1;
}
return values;
}
}
}
});
jQuery.each(["radio","checkbox"],function(){
jQuery.valHooks[this]={
set:function(elem,value){
if(Array.isArray(value)){
return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);
}
}
};
if(!support.checkOn){
jQuery.valHooks[this].get=function(elem){
return elem.getAttribute("value")===null?"on":elem.value;
};
}
});
var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;
jQuery.extend(jQuery.event,{
trigger:function(event,data,elem,onlyHandlers){
var i,cur,tmp,bubbleType,ontype,handle,special,
eventPath=[elem||document],
type=hasOwn.call(event,"type")?event.type:event,
namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
cur=tmp=elem=elem||document;
if(elem.nodeType===3||elem.nodeType===8){
return;
}
if(rfocusMorph.test(type+jQuery.event.triggered)){
return;
}
if(type.indexOf(".")>-1){
namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort();
}
ontype=type.indexOf(":")<0&&"on"+type;
event=event[jQuery.expando]?
event:
new jQuery.Event(type,typeof event==="object"&&event);
event.isTrigger=onlyHandlers?2:3;
event.namespace=namespaces.join(".");
event.rnamespace=event.namespace?
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):
null;
event.result=undefined;
if(!event.target){
event.target=elem;
}
data=data==null?
[event]:
jQuery.makeArray(data,[event]);
special=jQuery.event.special[type]||{};
if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){
return;
}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){
bubbleType=special.delegateType||type;
if(!rfocusMorph.test(bubbleType+type)){
cur=cur.parentNode;
}
for(;cur;cur=cur.parentNode){
eventPath.push(cur);
tmp=cur;
}
if(tmp===(elem.ownerDocument||document)){
eventPath.push(tmp.defaultView||tmp.parentWindow||window);
}
}
i=0;
while((cur=eventPath[i++])&&!event.isPropagationStopped()){
event.type=i>1?
bubbleType:
special.bindType||type;
handle=(dataPriv.get(cur,"events")||{})[event.type]&&
dataPriv.get(cur,"handle");
if(handle){
handle.apply(cur,data);
}
handle=ontype&&cur[ontype];
if(handle&&handle.apply&&acceptData(cur)){
event.result=handle.apply(cur,data);
if(event.result===false){
event.preventDefault();
}
}
}
event.type=type;
if(!onlyHandlers&&!event.isDefaultPrevented()){
if((!special._default||
special._default.apply(eventPath.pop(),data)===false)&&
acceptData(elem)){
if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){
tmp=elem[ontype];
if(tmp){
elem[ontype]=null;
}
jQuery.event.triggered=type;
elem[type]();
jQuery.event.triggered=undefined;
if(tmp){
elem[ontype]=tmp;
}
}
}
}
return event.result;
},
simulate:function(type,elem,event){
var e=jQuery.extend(
new jQuery.Event(),
event,
{
type:type,
isSimulated:true
}
);
jQuery.event.trigger(e,null,elem);
}
});
jQuery.fn.extend({
trigger:function(type,data){
return this.each(function(){
jQuery.event.trigger(type,data,this);
});
},
triggerHandler:function(type,data){
var elem=this[0];
if(elem){
return jQuery.event.trigger(type,data,elem,true);
}
}
});
jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup contextmenu").split(" "),
function(i,name){
jQuery.fn[name]=function(data,fn){
return arguments.length>0?
this.on(name,null,data,fn):
this.trigger(name);
};
});
jQuery.fn.extend({
hover:function(fnOver,fnOut){
return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);
}
});
support.focusin="onfocusin"in window;
if(!support.focusin){
jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){
var handler=function(event){
jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));
};
jQuery.event.special[fix]={
setup:function(){
var doc=this.ownerDocument||this,
attaches=dataPriv.access(doc,fix);
if(!attaches){
doc.addEventListener(orig,handler,true);
}
dataPriv.access(doc,fix,(attaches||0)+1);
},
teardown:function(){
var doc=this.ownerDocument||this,
attaches=dataPriv.access(doc,fix)-1;
if(!attaches){
doc.removeEventListener(orig,handler,true);
dataPriv.remove(doc,fix);
}else{
dataPriv.access(doc,fix,attaches);
}
}
};
});
}
var location=window.location;
var nonce=jQuery.now();
var rquery=(/\?/);
jQuery.parseXML=function(data){
var xml;
if(!data||typeof data!=="string"){
return null;
}
try{
xml=(new window.DOMParser()).parseFromString(data,"text/xml");
}catch(e){
xml=undefined;
}
if(!xml||xml.getElementsByTagName("parsererror").length){
jQuery.error("Invalid XML: "+data);
}
return xml;
};
var
rbracket=/\[\]$/,
rCRLF=/\r?\n/g,
rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,
rsubmittable=/^(?:input|select|textarea|keygen)/i;
function buildParams(prefix,obj,traditional,add){
var name;
if(Array.isArray(obj)){
jQuery.each(obj,function(i,v){
if(traditional||rbracket.test(prefix)){
add(prefix,v);
}else{
buildParams(
prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",
v,
traditional,
add
);
}
});
}else if(!traditional&&jQuery.type(obj)==="object"){
for(name in obj){
buildParams(prefix+"["+name+"]",obj[name],traditional,add);
}
}else{
add(prefix,obj);
}
}
jQuery.param=function(a,traditional){
var prefix,
s=[],
add=function(key,valueOrFunction){
var value=jQuery.isFunction(valueOrFunction)?
valueOrFunction():
valueOrFunction;
s[s.length]=encodeURIComponent(key)+"="+
encodeURIComponent(value==null?"":value);
};
if(Array.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){
jQuery.each(a,function(){
add(this.name,this.value);
});
}else{
for(prefix in a){
buildParams(prefix,a[prefix],traditional,add);
}
}
return s.join("&");
};
jQuery.fn.extend({
serialize:function(){
return jQuery.param(this.serializeArray());
},
serializeArray:function(){
return this.map(function(){
var elements=jQuery.prop(this,"elements");
return elements?jQuery.makeArray(elements):this;
})
.filter(function(){
var type=this.type;
return this.name&&!jQuery(this).is(":disabled")&&
rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&
(this.checked||!rcheckableType.test(type));
})
.map(function(i,elem){
var val=jQuery(this).val();
if(val==null){
return null;
}
if(Array.isArray(val)){
return jQuery.map(val,function(val){
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};
});
}
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};
}).get();
}
});
var
r20=/%20/g,
rhash=/#.*$/,
rantiCache=/([?&])_=[^&]*/,
rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
rnoContent=/^(?:GET|HEAD)$/,
rprotocol=/^\/\//,
prefilters={},
transports={},
allTypes="*/".concat("*"),
originAnchor=document.createElement("a");
originAnchor.href=location.href;
function addToPrefiltersOrTransports(structure){
return function(dataTypeExpression,func){
if(typeof dataTypeExpression!=="string"){
func=dataTypeExpression;
dataTypeExpression="*";
}
var dataType,
i=0,
dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];
if(jQuery.isFunction(func)){
while((dataType=dataTypes[i++])){
if(dataType[0]==="+"){
dataType=dataType.slice(1)||"*";
(structure[dataType]=structure[dataType]||[]).unshift(func);
}else{
(structure[dataType]=structure[dataType]||[]).push(func);
}
}
}
};
}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){
var inspected={},
seekingTransport=(structure===transports);
function inspect(dataType){
var selected;
inspected[dataType]=true;
jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){
var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
if(typeof dataTypeOrTransport==="string"&&
!seekingTransport&&!inspected[dataTypeOrTransport]){
options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false;
}else if(seekingTransport){
return!(selected=dataTypeOrTransport);
}
});
return selected;
}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");
}
function ajaxExtend(target,src){
var key,deep,
flatOptions=jQuery.ajaxSettings.flatOptions||{};
for(key in src){
if(src[key]!==undefined){
(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];
}
}
if(deep){
jQuery.extend(true,target,deep);
}
return target;
}
function ajaxHandleResponses(s,jqXHR,responses){
var ct,type,finalDataType,firstDataType,
contents=s.contents,
dataTypes=s.dataTypes;
while(dataTypes[0]==="*"){
dataTypes.shift();
if(ct===undefined){
ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");
}
}
if(ct){
for(type in contents){
if(contents[type]&&contents[type].test(ct)){
dataTypes.unshift(type);
break;
}
}
}
if(dataTypes[0]in responses){
finalDataType=dataTypes[0];
}else{
for(type in responses){
if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){
finalDataType=type;
break;
}
if(!firstDataType){
firstDataType=type;
}
}
finalDataType=finalDataType||firstDataType;
}
if(finalDataType){
if(finalDataType!==dataTypes[0]){
dataTypes.unshift(finalDataType);
}
return responses[finalDataType];
}
}
function ajaxConvert(s,response,jqXHR,isSuccess){
var conv2,current,conv,tmp,prev,
converters={},
dataTypes=s.dataTypes.slice();
if(dataTypes[1]){
for(conv in s.converters){
converters[conv.toLowerCase()]=s.converters[conv];
}
}
current=dataTypes.shift();
while(current){
if(s.responseFields[current]){
jqXHR[s.responseFields[current]]=response;
}
if(!prev&&isSuccess&&s.dataFilter){
response=s.dataFilter(response,s.dataType);
}
prev=current;
current=dataTypes.shift();
if(current){
if(current==="*"){
current=prev;
}else if(prev!=="*"&&prev!==current){
conv=converters[prev+" "+current]||converters["* "+current];
if(!conv){
for(conv2 in converters){
tmp=conv2.split(" ");
if(tmp[1]===current){
conv=converters[prev+" "+tmp[0]]||
converters["* "+tmp[0]];
if(conv){
if(conv===true){
conv=converters[conv2];
}else if(converters[conv2]!==true){
current=tmp[0];
dataTypes.unshift(tmp[1]);
}
break;
}
}
}
}
if(conv!==true){
if(conv&&s.throws){
response=conv(response);
}else{
try{
response=conv(response);
}catch(e){
return{
state:"parsererror",
error:conv?e:"No conversion from "+prev+" to "+current
};
}
}
}
}
}
}
return{state:"success",data:response};
}
jQuery.extend({
active:0,
lastModified:{},
etag:{},
ajaxSettings:{
url:location.href,
type:"GET",
isLocal:rlocalProtocol.test(location.protocol),
global:true,
processData:true,
async:true,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{
"*":allTypes,
text:"text/plain",
html:"text/html",
xml:"application/xml, text/xml",
json:"application/json, text/javascript"
},
contents:{
xml:/\bxml\b/,
html:/\bhtml/,
json:/\bjson\b/
},
responseFields:{
xml:"responseXML",
text:"responseText",
json:"responseJSON"
},
converters:{
"* text":String,
"text html":true,
"text json":JSON.parse,
"text xml":jQuery.parseXML
},
flatOptions:{
url:true,
context:true
}
},
ajaxSetup:function(target,settings){
return settings?
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):
ajaxExtend(jQuery.ajaxSettings,target);
},
ajaxPrefilter:addToPrefiltersOrTransports(prefilters),
ajaxTransport:addToPrefiltersOrTransports(transports),
ajax:function(url,options){
if(typeof url==="object"){
options=url;
url=undefined;
}
options=options||{};
var transport,
cacheURL,
responseHeadersString,
responseHeaders,
timeoutTimer,
urlAnchor,
completed,
fireGlobals,
i,
uncached,
s=jQuery.ajaxSetup({},options),
callbackContext=s.context||s,
globalEventContext=s.context&&
(callbackContext.nodeType||callbackContext.jquery)?
jQuery(callbackContext):
jQuery.event,
deferred=jQuery.Deferred(),
completeDeferred=jQuery.Callbacks("once memory"),
statusCode=s.statusCode||{},
requestHeaders={},
requestHeadersNames={},
strAbort="canceled",
jqXHR={
readyState:0,
getResponseHeader:function(key){
var match;
if(completed){
if(!responseHeaders){
responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){
responseHeaders[match[1].toLowerCase()]=match[2];
}
}
match=responseHeaders[key.toLowerCase()];
}
return match==null?null:match;
},
getAllResponseHeaders:function(){
return completed?responseHeadersString:null;
},
setRequestHeader:function(name,value){
if(completed==null){
name=requestHeadersNames[name.toLowerCase()]=
requestHeadersNames[name.toLowerCase()]||name;
requestHeaders[name]=value;
}
return this;
},
overrideMimeType:function(type){
if(completed==null){
s.mimeType=type;
}
return this;
},
statusCode:function(map){
var code;
if(map){
if(completed){
jqXHR.always(map[jqXHR.status]);
}else{
for(code in map){
statusCode[code]=[statusCode[code],map[code]];
}
}
}
return this;
},
abort:function(statusText){
var finalText=statusText||strAbort;
if(transport){
transport.abort(finalText);
}
done(0,finalText);
return this;
}
};
deferred.promise(jqXHR);
s.url=((url||s.url||location.href)+"")
.replace(rprotocol,location.protocol+"//");
s.type=options.method||options.type||s.method||s.type;
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];
if(s.crossDomain==null){
urlAnchor=document.createElement("a");
try{
urlAnchor.href=s.url;
urlAnchor.href=urlAnchor.href;
s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==
urlAnchor.protocol+"//"+urlAnchor.host;
}catch(e){
s.crossDomain=true;
}
}
if(s.data&&s.processData&&typeof s.data!=="string"){
s.data=jQuery.param(s.data,s.traditional);
}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(completed){
return jqXHR;
}
fireGlobals=jQuery.event&&s.global;
if(fireGlobals&&jQuery.active++===0){
jQuery.event.trigger("ajaxStart");
}
s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
cacheURL=s.url.replace(rhash,"");
if(!s.hasContent){
uncached=s.url.slice(cacheURL.length);
if(s.data){
cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;
delete s.data;
}
if(s.cache===false){
cacheURL=cacheURL.replace(rantiCache,"$1");
uncached=(rquery.test(cacheURL)?"&":"?")+"_="+(nonce++)+uncached;
}
s.url=cacheURL+uncached;
}else if(s.data&&s.processData&&
(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){
s.data=s.data.replace(r20,"+");
}
if(s.ifModified){
if(jQuery.lastModified[cacheURL]){
jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);
}
if(jQuery.etag[cacheURL]){
jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);
}
}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){
jqXHR.setRequestHeader("Content-Type",s.contentType);
}
jqXHR.setRequestHeader(
"Accept",
s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?
s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):
s.accepts["*"]
);
for(i in s.headers){
jqXHR.setRequestHeader(i,s.headers[i]);
}
if(s.beforeSend&&
(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){
return jqXHR.abort();
}
strAbort="abort";
completeDeferred.add(s.complete);
jqXHR.done(s.success);
jqXHR.fail(s.error);
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){
done(-1,"No Transport");
}else{
jqXHR.readyState=1;
if(fireGlobals){
globalEventContext.trigger("ajaxSend",[jqXHR,s]);
}
if(completed){
return jqXHR;
}
if(s.async&&s.timeout>0){
timeoutTimer=window.setTimeout(function(){
jqXHR.abort("timeout");
},s.timeout);
}
try{
completed=false;
transport.send(requestHeaders,done);
}catch(e){
if(completed){
throw e;
}
done(-1,e);
}
}
function done(status,nativeStatusText,responses,headers){
var isSuccess,success,error,response,modified,
statusText=nativeStatusText;
if(completed){
return;
}
completed=true;
if(timeoutTimer){
window.clearTimeout(timeoutTimer);
}
transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
isSuccess=status>=200&&status<300||status===304;
if(responses){
response=ajaxHandleResponses(s,jqXHR,responses);
}
response=ajaxConvert(s,response,jqXHR,isSuccess);
if(isSuccess){
if(s.ifModified){
modified=jqXHR.getResponseHeader("Last-Modified");
if(modified){
jQuery.lastModified[cacheURL]=modified;
}
modified=jqXHR.getResponseHeader("etag");
if(modified){
jQuery.etag[cacheURL]=modified;
}
}
if(status===204||s.type==="HEAD"){
statusText="nocontent";
}else if(status===304){
statusText="notmodified";
}else{
statusText=response.state;
success=response.data;
error=response.error;
isSuccess=!error;
}
}else{
error=statusText;
if(status||!statusText){
statusText="error";
if(status<0){
status=0;
}
}
}
jqXHR.status=status;
jqXHR.statusText=(nativeStatusText||statusText)+"";
if(isSuccess){
deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);
}else{
deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);
}
jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){
globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",
[jqXHR,s,isSuccess?success:error]);
}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){
globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--jQuery.active)){
jQuery.event.trigger("ajaxStop");
}
}
}
return jqXHR;
},
getJSON:function(url,data,callback){
return jQuery.get(url,data,callback,"json");
},
getScript:function(url,callback){
return jQuery.get(url,undefined,callback,"script");
}
});
jQuery.each(["get","post"],function(i,method){
jQuery[method]=function(url,data,callback,type){
if(jQuery.isFunction(data)){
type=type||callback;
callback=data;
data=undefined;
}
return jQuery.ajax(jQuery.extend({
url:url,
type:method,
dataType:type,
data:data,
success:callback
},jQuery.isPlainObject(url)&&url));
};
});
jQuery._evalUrl=function(url){
return jQuery.ajax({
url:url,
type:"GET",
dataType:"script",
cache:true,
async:false,
global:false,
"throws":true
});
};
jQuery.fn.extend({
wrapAll:function(html){
var wrap;
if(this[0]){
if(jQuery.isFunction(html)){
html=html.call(this[0]);
}
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){
wrap.insertBefore(this[0]);
}
wrap.map(function(){
var elem=this;
while(elem.firstElementChild){
elem=elem.firstElementChild;
}
return elem;
}).append(this);
}
return this;
},
wrapInner:function(html){
if(jQuery.isFunction(html)){
return this.each(function(i){
jQuery(this).wrapInner(html.call(this,i));
});
}
return this.each(function(){
var self=jQuery(this),
contents=self.contents();
if(contents.length){
contents.wrapAll(html);
}else{
self.append(html);
}
});
},
wrap:function(html){
var isFunction=jQuery.isFunction(html);
return this.each(function(i){
jQuery(this).wrapAll(isFunction?html.call(this,i):html);
});
},
unwrap:function(selector){
this.parent(selector).not("body").each(function(){
jQuery(this).replaceWith(this.childNodes);
});
return this;
}
});
jQuery.expr.pseudos.hidden=function(elem){
return!jQuery.expr.pseudos.visible(elem);
};
jQuery.expr.pseudos.visible=function(elem){
return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);
};
jQuery.ajaxSettings.xhr=function(){
try{
return new window.XMLHttpRequest();
}catch(e){}
};
var xhrSuccessStatus={
0:200,
1223:204
},
xhrSupported=jQuery.ajaxSettings.xhr();
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);
support.ajax=xhrSupported=!!xhrSupported;
jQuery.ajaxTransport(function(options){
var callback,errorCallback;
if(support.cors||xhrSupported&&!options.crossDomain){
return{
send:function(headers,complete){
var i,
xhr=options.xhr();
xhr.open(
options.type,
options.url,
options.async,
options.username,
options.password
);
if(options.xhrFields){
for(i in options.xhrFields){
xhr[i]=options.xhrFields[i];
}
}
if(options.mimeType&&xhr.overrideMimeType){
xhr.overrideMimeType(options.mimeType);
}
if(!options.crossDomain&&!headers["X-Requested-With"]){
headers["X-Requested-With"]="XMLHttpRequest";
}
for(i in headers){
xhr.setRequestHeader(i,headers[i]);
}
callback=function(type){
return function(){
if(callback){
callback=errorCallback=xhr.onload=
xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;
if(type==="abort"){
xhr.abort();
}else if(type==="error"){
if(typeof xhr.status!=="number"){
complete(0,"error");
}else{
complete(
xhr.status,
xhr.statusText
);
}
}else{
complete(
xhrSuccessStatus[xhr.status]||xhr.status,
xhr.statusText,
(xhr.responseType||"text")!=="text"||
typeof xhr.responseText!=="string"?
{binary:xhr.response}:
{text:xhr.responseText},
xhr.getAllResponseHeaders()
);
}
}
};
};
xhr.onload=callback();
errorCallback=xhr.onerror=callback("error");
if(xhr.onabort!==undefined){
xhr.onabort=errorCallback;
}else{
xhr.onreadystatechange=function(){
if(xhr.readyState===4){
window.setTimeout(function(){
if(callback){
errorCallback();
}
});
}
};
}
callback=callback("abort");
try{
xhr.send(options.hasContent&&options.data||null);
}catch(e){
if(callback){
throw e;
}
}
},
abort:function(){
if(callback){
callback();
}
}
};
}
});
jQuery.ajaxPrefilter(function(s){
if(s.crossDomain){
s.contents.script=false;
}
});
jQuery.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, "+
"application/ecmascript, application/x-ecmascript"
},
contents:{
script:/\b(?:java|ecma)script\b/
},
converters:{
"text script":function(text){
jQuery.globalEval(text);
return text;
}
}
});
jQuery.ajaxPrefilter("script",function(s){
if(s.cache===undefined){
s.cache=false;
}
if(s.crossDomain){
s.type="GET";
}
});
jQuery.ajaxTransport("script",function(s){
if(s.crossDomain){
var script,callback;
return{
send:function(_,complete){
script=jQuery("<script>").prop({
charset:s.scriptCharset,
src:s.url
}).on(
"load error",
callback=function(evt){
script.remove();
callback=null;
if(evt){
complete(evt.type==="error"?404:200,evt.type);
}
}
);
document.head.appendChild(script[0]);
},
abort:function(){
if(callback){
callback();
}
}
};
}
});
var oldCallbacks=[],
rjsonp=/(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({
jsonp:"callback",
jsonpCallback:function(){
var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));
this[callback]=true;
return callback;
}
});
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){
var callbackName,overwritten,responseContainer,
jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?
"url":
typeof s.data==="string"&&
(s.contentType||"")
.indexOf("application/x-www-form-urlencoded")===0&&
rjsonp.test(s.data)&&"data"
);
if(jsonProp||s.dataTypes[0]==="jsonp"){
callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?
s.jsonpCallback():
s.jsonpCallback;
if(jsonProp){
s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);
}else if(s.jsonp!==false){
s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;
}
s.converters["script json"]=function(){
if(!responseContainer){
jQuery.error(callbackName+" was not called");
}
return responseContainer[0];
};
s.dataTypes[0]="json";
overwritten=window[callbackName];
window[callbackName]=function(){
responseContainer=arguments;
};
jqXHR.always(function(){
if(overwritten===undefined){
jQuery(window).removeProp(callbackName);
}else{
window[callbackName]=overwritten;
}
if(s[callbackName]){
s.jsonpCallback=originalSettings.jsonpCallback;
oldCallbacks.push(callbackName);
}
if(responseContainer&&jQuery.isFunction(overwritten)){
overwritten(responseContainer[0]);
}
responseContainer=overwritten=undefined;
});
return"script";
}
});
support.createHTMLDocument=(function(){
var body=document.implementation.createHTMLDocument("").body;
body.innerHTML="<form></form><form></form>";
return body.childNodes.length===2;
})();
jQuery.parseHTML=function(data,context,keepScripts){
if(typeof data!=="string"){
return[];
}
if(typeof context==="boolean"){
keepScripts=context;
context=false;
}
var base,parsed,scripts;
if(!context){
if(support.createHTMLDocument){
context=document.implementation.createHTMLDocument("");
base=context.createElement("base");
base.href=document.location.href;
context.head.appendChild(base);
}else{
context=document;
}
}
parsed=rsingleTag.exec(data);
scripts=!keepScripts&&[];
if(parsed){
return[context.createElement(parsed[1])];
}
parsed=buildFragment([data],context,scripts);
if(scripts&&scripts.length){
jQuery(scripts).remove();
}
return jQuery.merge([],parsed.childNodes);
};
jQuery.fn.load=function(url,params,callback){
var selector,type,response,
self=this,
off=url.indexOf(" ");
if(off>-1){
selector=stripAndCollapse(url.slice(off));
url=url.slice(0,off);
}
if(jQuery.isFunction(params)){
callback=params;
params=undefined;
}else if(params&&typeof params==="object"){
type="POST";
}
if(self.length>0){
jQuery.ajax({
url:url,
type:type||"GET",
dataType:"html",
data:params
}).done(function(responseText){
response=arguments;
self.html(selector?
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):
responseText);
}).always(callback&&function(jqXHR,status){
self.each(function(){
callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);
});
});
}
return this;
};
jQuery.each([
"ajaxStart",
"ajaxStop",
"ajaxComplete",
"ajaxError",
"ajaxSuccess",
"ajaxSend"
],function(i,type){
jQuery.fn[type]=function(fn){
return this.on(type,fn);
};
});
jQuery.expr.pseudos.animated=function(elem){
return jQuery.grep(jQuery.timers,function(fn){
return elem===fn.elem;
}).length;
};
jQuery.offset={
setOffset:function(elem,options,i){
var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,
position=jQuery.css(elem,"position"),
curElem=jQuery(elem),
props={};
if(position==="static"){
elem.style.position="relative";
}
curOffset=curElem.offset();
curCSSTop=jQuery.css(elem,"top");
curCSSLeft=jQuery.css(elem,"left");
calculatePosition=(position==="absolute"||position==="fixed")&&
(curCSSTop+curCSSLeft).indexOf("auto")>-1;
if(calculatePosition){
curPosition=curElem.position();
curTop=curPosition.top;
curLeft=curPosition.left;
}else{
curTop=parseFloat(curCSSTop)||0;
curLeft=parseFloat(curCSSLeft)||0;
}
if(jQuery.isFunction(options)){
options=options.call(elem,i,jQuery.extend({},curOffset));
}
if(options.top!=null){
props.top=(options.top-curOffset.top)+curTop;
}
if(options.left!=null){
props.left=(options.left-curOffset.left)+curLeft;
}
if("using"in options){
options.using.call(elem,props);
}else{
curElem.css(props);
}
}
};
jQuery.fn.extend({
offset:function(options){
if(arguments.length){
return options===undefined?
this:
this.each(function(i){
jQuery.offset.setOffset(this,options,i);
});
}
var doc,docElem,rect,win,
elem=this[0];
if(!elem){
return;
}
if(!elem.getClientRects().length){
return{top:0,left:0};
}
rect=elem.getBoundingClientRect();
doc=elem.ownerDocument;
docElem=doc.documentElement;
win=doc.defaultView;
return{
top:rect.top+win.pageYOffset-docElem.clientTop,
left:rect.left+win.pageXOffset-docElem.clientLeft
};
},
position:function(){
if(!this[0]){
return;
}
var offsetParent,offset,
elem=this[0],
parentOffset={top:0,left:0};
if(jQuery.css(elem,"position")==="fixed"){
offset=elem.getBoundingClientRect();
}else{
offsetParent=this.offsetParent();
offset=this.offset();
if(!nodeName(offsetParent[0],"html")){
parentOffset=offsetParent.offset();
}
parentOffset={
top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",true),
left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",true)
};
}
return{
top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),
left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)
};
},
offsetParent:function(){
return this.map(function(){
var offsetParent=this.offsetParent;
while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){
offsetParent=offsetParent.offsetParent;
}
return offsetParent||documentElement;
});
}
});
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){
var top="pageYOffset"===prop;
jQuery.fn[method]=function(val){
return access(this,function(elem,method,val){
var win;
if(jQuery.isWindow(elem)){
win=elem;
}else if(elem.nodeType===9){
win=elem.defaultView;
}
if(val===undefined){
return win?win[prop]:elem[method];
}
if(win){
win.scrollTo(
!top?val:win.pageXOffset,
top?val:win.pageYOffset
);
}else{
elem[method]=val;
}
},method,val,arguments.length);
};
});
jQuery.each(["top","left"],function(i,prop){
jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,
function(elem,computed){
if(computed){
computed=curCSS(elem,prop);
return rnumnonpx.test(computed)?
jQuery(elem).position()[prop]+"px":
computed;
}
}
);
});
jQuery.each({Height:"height",Width:"width"},function(name,type){
jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},
function(defaultExtra,funcName){
jQuery.fn[funcName]=function(margin,value){
var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),
extra=defaultExtra||(margin===true||value===true?"margin":"border");
return access(this,function(elem,type,value){
var doc;
if(jQuery.isWindow(elem)){
return funcName.indexOf("outer")===0?
elem["inner"+name]:
elem.document.documentElement["client"+name];
}
if(elem.nodeType===9){
doc=elem.documentElement;
return Math.max(
elem.body["scroll"+name],doc["scroll"+name],
elem.body["offset"+name],doc["offset"+name],
doc["client"+name]
);
}
return value===undefined?
jQuery.css(elem,type,extra):
jQuery.style(elem,type,value,extra);
},type,chainable?margin:undefined,chainable);
};
});
});
jQuery.fn.extend({
bind:function(types,data,fn){
return this.on(types,null,data,fn);
},
unbind:function(types,fn){
return this.off(types,null,fn);
},
delegate:function(selector,types,data,fn){
return this.on(types,selector,data,fn);
},
undelegate:function(selector,types,fn){
return arguments.length===1?
this.off(selector,"**"):
this.off(types,selector||"**",fn);
}
});
jQuery.holdReady=function(hold){
if(hold){
jQuery.readyWait++;
}else{
jQuery.ready(true);
}
};
jQuery.isArray=Array.isArray;
jQuery.parseJSON=JSON.parse;
jQuery.nodeName=nodeName;
if(typeof define==="function"&&define.amd){
define("jquery",[],function(){
return jQuery;
});
}
var
_jQuery=window.jQuery,
_$=window.$;
jQuery.noConflict=function(deep){
if(window.$===jQuery){
window.$=_$;
}
if(deep&&window.jQuery===jQuery){
window.jQuery=_jQuery;
}
return jQuery;
};
if(!noGlobal){
window.jQuery=window.$=jQuery;
}
return jQuery;
});


/* ../prive/javascript/jquery-migrate-3.0.1.js?1551954343 */

;(function(factory){
if(typeof define==="function"&&define.amd){
define(["jquery"],window,factory);
}else if(typeof module==="object"&&module.exports){
module.exports=factory(require("jquery"),window);
}else{
factory(jQuery,window);
}
})(function(jQuery,window){
"use strict";
jQuery.migrateVersion="3.0.1";
if(typeof jQuery.migrateMute==="undefined"){
jQuery.migrateMute=true;
}
(function(){
var rbadVersions=/^[12]\./;
if(!window.console||!window.console.log){
return;
}
if(!jQuery||rbadVersions.test(jQuery.fn.jquery)){
window.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED");
}
if(jQuery.migrateWarnings){
window.console.log("JQMIGRATE: Migrate plugin loaded multiple times");
}
window.console.log("JQMIGRATE: Migrate is installed"+
(jQuery.migrateMute?"":" with logging active")+
", version "+jQuery.migrateVersion);
})();
var warnedAbout={};
jQuery.migrateWarnings=[];
if(jQuery.migrateTrace===undefined){
jQuery.migrateTrace=true;
}
jQuery.migrateReset=function(){
warnedAbout={};
jQuery.migrateWarnings.length=0;
};
function migrateWarn(msg){
var console=window.console;
if(!warnedAbout[msg]){
warnedAbout[msg]=true;
jQuery.migrateWarnings.push(msg);
if(console&&console.warn&&!jQuery.migrateMute){
console.warn("JQMIGRATE: "+msg);
if(jQuery.migrateTrace&&console.trace){
console.trace();
}
}
}
}
function migrateWarnProp(obj,prop,value,msg){
Object.defineProperty(obj,prop,{
configurable:true,
enumerable:true,
get:function(){
migrateWarn(msg);
return value;
},
set:function(newValue){
migrateWarn(msg);
value=newValue;
}
});
}
function migrateWarnFunc(obj,prop,newFunc,msg){
obj[prop]=function(){
migrateWarn(msg);
return newFunc.apply(this,arguments);
};
}
if(window.document.compatMode==="BackCompat"){
migrateWarn("jQuery is not compatible with Quirks Mode");
}
var oldInit=jQuery.fn.init,
oldIsNumeric=jQuery.isNumeric,
oldFind=jQuery.find,
rattrHashTest=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
rattrHashGlob=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
jQuery.fn.init=function(arg1){
var args=Array.prototype.slice.call(arguments);
if(typeof arg1==="string"&&arg1==="#"){
migrateWarn("jQuery( '#' ) is not a valid selector");
args[0]=[];
}
return oldInit.apply(this,args);
};
jQuery.fn.init.prototype=jQuery.fn;
jQuery.find=function(selector){
var args=Array.prototype.slice.call(arguments);
if(typeof selector==="string"&&rattrHashTest.test(selector)){
try{
window.document.querySelector(selector);
}catch(err1){
selector=selector.replace(rattrHashGlob,function(_,attr,op,value){
return"["+attr+op+"\""+value+"\"]";
});
try{
window.document.querySelector(selector);
migrateWarn("Attribute selector with '#' must be quoted: "+args[0]);
args[0]=selector;
}catch(err2){
migrateWarn("Attribute selector with '#' was not fixed: "+args[0]);
}
}
}
return oldFind.apply(this,args);
};
var findProp;
for(findProp in oldFind){
if(Object.prototype.hasOwnProperty.call(oldFind,findProp)){
jQuery.find[findProp]=oldFind[findProp];
}
}
jQuery.fn.size=function(){
migrateWarn("jQuery.fn.size() is deprecated and removed; use the .length property");
return this.length;
};
jQuery.parseJSON=function(){
migrateWarn("jQuery.parseJSON is deprecated; use JSON.parse");
return JSON.parse.apply(null,arguments);
};
jQuery.isNumeric=function(val){
function isNumeric2(obj){
var realStringObj=obj&&obj.toString();
return!jQuery.isArray(obj)&&(realStringObj-parseFloat(realStringObj)+1)>=0;
}
var newValue=oldIsNumeric(val),
oldValue=isNumeric2(val);
if(newValue!==oldValue){
migrateWarn("jQuery.isNumeric() should not be called on constructed objects");
}
return oldValue;
};
migrateWarnFunc(jQuery,"holdReady",jQuery.holdReady,
"jQuery.holdReady is deprecated");
migrateWarnFunc(jQuery,"unique",jQuery.uniqueSort,
"jQuery.unique is deprecated; use jQuery.uniqueSort");
migrateWarnProp(jQuery.expr,"filters",jQuery.expr.pseudos,
"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos");
migrateWarnProp(jQuery.expr,":",jQuery.expr.pseudos,
"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
var oldAjax=jQuery.ajax;
jQuery.ajax=function(){
var jQXHR=oldAjax.apply(this,arguments);
if(jQXHR.promise){
migrateWarnFunc(jQXHR,"success",jQXHR.done,
"jQXHR.success is deprecated and removed");
migrateWarnFunc(jQXHR,"error",jQXHR.fail,
"jQXHR.error is deprecated and removed");
migrateWarnFunc(jQXHR,"complete",jQXHR.always,
"jQXHR.complete is deprecated and removed");
}
return jQXHR;
};
var oldRemoveAttr=jQuery.fn.removeAttr,
oldToggleClass=jQuery.fn.toggleClass,
rmatchNonSpace=/\S+/g;
jQuery.fn.removeAttr=function(name){
var self=this;
jQuery.each(name.match(rmatchNonSpace),function(i,attr){
if(jQuery.expr.match.bool.test(attr)){
migrateWarn("jQuery.fn.removeAttr no longer sets boolean properties: "+attr);
self.prop(attr,false);
}
});
return oldRemoveAttr.apply(this,arguments);
};
jQuery.fn.toggleClass=function(state){
if(state!==undefined&&typeof state!=="boolean"){
return oldToggleClass.apply(this,arguments);
}
migrateWarn("jQuery.fn.toggleClass( boolean ) is deprecated");
return this.each(function(){
var className=this.getAttribute&&this.getAttribute("class")||"";
if(className){
jQuery.data(this,"__className__",className);
}
if(this.setAttribute){
this.setAttribute("class",
className||state===false?
"":
jQuery.data(this,"__className__")||""
);
}
});
};
var internalSwapCall=false;
if(jQuery.swap){
jQuery.each(["height","width","reliableMarginRight"],function(_,name){
var oldHook=jQuery.cssHooks[name]&&jQuery.cssHooks[name].get;
if(oldHook){
jQuery.cssHooks[name].get=function(){
var ret;
internalSwapCall=true;
ret=oldHook.apply(this,arguments);
internalSwapCall=false;
return ret;
};
}
});
}
jQuery.swap=function(elem,options,callback,args){
var ret,name,
old={};
if(!internalSwapCall){
migrateWarn("jQuery.swap() is undocumented and deprecated");
}
for(name in options){
old[name]=elem.style[name];
elem.style[name]=options[name];
}
ret=callback.apply(elem,args||[]);
for(name in options){
elem.style[name]=old[name];
}
return ret;
};
var oldData=jQuery.data;
jQuery.data=function(elem,name,value){
var curData;
if(name&&typeof name==="object"&&arguments.length===2){
curData=jQuery.hasData(elem)&&oldData.call(this,elem);
var sameKeys={};
for(var key in name){
if(key!==jQuery.camelCase(key)){
migrateWarn("jQuery.data() always sets/gets camelCased names: "+key);
curData[key]=name[key];
}else{
sameKeys[key]=name[key];
}
}
oldData.call(this,elem,sameKeys);
return name;
}
if(name&&typeof name==="string"&&name!==jQuery.camelCase(name)){
curData=jQuery.hasData(elem)&&oldData.call(this,elem);
if(curData&&name in curData){
migrateWarn("jQuery.data() always sets/gets camelCased names: "+name);
if(arguments.length>2){
curData[name]=value;
}
return curData[name];
}
}
return oldData.apply(this,arguments);
};
var oldTweenRun=jQuery.Tween.prototype.run;
var linearEasing=function(pct){
return pct;
};
jQuery.Tween.prototype.run=function(){
if(jQuery.easing[this.easing].length>1){
migrateWarn(
"'jQuery.easing."+this.easing.toString()+"' should use only one argument"
);
jQuery.easing[this.easing]=linearEasing;
}
oldTweenRun.apply(this,arguments);
};
jQuery.fx.interval=jQuery.fx.interval||13;
if(window.requestAnimationFrame){
migrateWarnProp(jQuery.fx,"interval",jQuery.fx.interval,
"jQuery.fx.interval is deprecated");
}
var oldLoad=jQuery.fn.load,
oldEventAdd=jQuery.event.add,
originalFix=jQuery.event.fix;
jQuery.event.props=[];
jQuery.event.fixHooks={};
migrateWarnProp(jQuery.event.props,"concat",jQuery.event.props.concat,
"jQuery.event.props.concat() is deprecated and removed");
jQuery.event.fix=function(originalEvent){
var event,
type=originalEvent.type,
fixHook=this.fixHooks[type],
props=jQuery.event.props;
if(props.length){
migrateWarn("jQuery.event.props are deprecated and removed: "+props.join());
while(props.length){
jQuery.event.addProp(props.pop());
}
}
if(fixHook&&!fixHook._migrated_){
fixHook._migrated_=true;
migrateWarn("jQuery.event.fixHooks are deprecated and removed: "+type);
if((props=fixHook.props)&&props.length){
while(props.length){
jQuery.event.addProp(props.pop());
}
}
}
event=originalFix.call(this,originalEvent);
return fixHook&&fixHook.filter?fixHook.filter(event,originalEvent):event;
};
jQuery.event.add=function(elem,types){
if(elem===window&&types==="load"&&window.document.readyState==="complete"){
migrateWarn("jQuery(window).on('load'...) called after load event occurred");
}
return oldEventAdd.apply(this,arguments);
};
jQuery.each(["load","unload","error"],function(_,name){
jQuery.fn[name]=function(){
var args=Array.prototype.slice.call(arguments,0);
if(name==="load"&&typeof args[0]==="string"){
return oldLoad.apply(this,args);
}
migrateWarn("jQuery.fn."+name+"() is deprecated");
args.splice(0,0,name);
if(arguments.length){
return this.on.apply(this,args);
}
this.triggerHandler.apply(this,args);
return this;
};
});
jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup contextmenu").split(" "),
function(i,name){
jQuery.fn[name]=function(data,fn){
migrateWarn("jQuery.fn."+name+"() event shorthand is deprecated");
return arguments.length>0?
this.on(name,null,data,fn):
this.trigger(name);
};
});
jQuery(function(){
jQuery(window.document).triggerHandler("ready");
});
jQuery.event.special.ready={
setup:function(){
if(this===window.document){
migrateWarn("'ready' event is deprecated");
}
}
};
jQuery.fn.extend({
bind:function(types,data,fn){
migrateWarn("jQuery.fn.bind() is deprecated");
return this.on(types,null,data,fn);
},
unbind:function(types,fn){
migrateWarn("jQuery.fn.unbind() is deprecated");
return this.off(types,null,fn);
},
delegate:function(selector,types,data,fn){
migrateWarn("jQuery.fn.delegate() is deprecated");
return this.on(types,selector,data,fn);
},
undelegate:function(selector,types,fn){
migrateWarn("jQuery.fn.undelegate() is deprecated");
return arguments.length===1?
this.off(selector,"**"):
this.off(types,selector||"**",fn);
},
hover:function(fnOver,fnOut){
migrateWarn("jQuery.fn.hover() is deprecated");
return this.on("mouseenter",fnOver).on("mouseleave",fnOut||fnOver);
}
});
var oldOffset=jQuery.fn.offset;
jQuery.fn.offset=function(){
var docElem,
elem=this[0],
origin={top:0,left:0};
if(!elem||!elem.nodeType){
migrateWarn("jQuery.fn.offset() requires a valid DOM element");
return origin;
}
docElem=(elem.ownerDocument||window.document).documentElement;
if(!jQuery.contains(docElem,elem)){
migrateWarn("jQuery.fn.offset() requires an element connected to a document");
return origin;
}
return oldOffset.apply(this,arguments);
};
var oldParam=jQuery.param;
jQuery.param=function(data,traditional){
var ajaxTraditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;
if(traditional===undefined&&ajaxTraditional){
migrateWarn("jQuery.param() no longer uses jQuery.ajaxSettings.traditional");
traditional=ajaxTraditional;
}
return oldParam.call(this,data,traditional);
};
var oldSelf=jQuery.fn.andSelf||jQuery.fn.addBack;
jQuery.fn.andSelf=function(){
migrateWarn("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()");
return oldSelf.apply(this,arguments);
};
var oldDeferred=jQuery.Deferred,
tuples=[
["resolve","done",jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"),"resolved"],
["reject","fail",jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"),"rejected"],
["notify","progress",jQuery.Callbacks("memory"),
jQuery.Callbacks("memory")]
];
jQuery.Deferred=function(func){
var deferred=oldDeferred(),
promise=deferred.promise();
deferred.pipe=promise.pipe=function(){
var fns=arguments;
migrateWarn("deferred.pipe() is deprecated");
return jQuery.Deferred(function(newDefer){
jQuery.each(tuples,function(i,tuple){
var fn=jQuery.isFunction(fns[i])&&fns[i];
deferred[tuple[1]](function(){
var returned=fn&&fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){
returned.promise()
.done(newDefer.resolve)
.fail(newDefer.reject)
.progress(newDefer.notify);
}else{
newDefer[tuple[0]+"With"](
this===promise?newDefer.promise():this,
fn?[returned]:arguments
);
}
});
});
fns=null;
}).promise();
};
if(func){
func.call(deferred,deferred);
}
return deferred;
};
jQuery.Deferred.exceptionHook=oldDeferred.exceptionHook;
return jQuery;
});


/* ../prive/javascript/jquery.form.js?1551954343 */

(function(factory){
if(typeof define==='function'&&define.amd){
define(['jquery'],factory);
}else if(typeof module==='object'&&module.exports){
module.exports=function(root,jQuery){
if(typeof jQuery==='undefined'){
if(typeof window!=='undefined'){
jQuery=require('jquery');
}
else{
jQuery=require('jquery')(root);
}
}
factory(jQuery);
return jQuery;
};
}else{
factory(jQuery);
}
}(function($){
'use strict';
var rCRLF=/\r?\n/g;
var feature={};
feature.fileapi=$('<input type="file">').get(0).files!==undefined;
feature.formdata=(typeof window.FormData!=='undefined');
var hasProp=!!$.fn.prop;
$.fn.attr2=function(){
if(!hasProp){
return this.attr.apply(this,arguments);
}
var val=this.prop.apply(this,arguments);
if((val&&val.jquery)||typeof val==='string'){
return val;
}
return this.attr.apply(this,arguments);
};
$.fn.ajaxSubmit=function(options,data,dataType,onSuccess){
if(!this.length){
log('ajaxSubmit: skipping submit process - no element selected');
return this;
}
var method,action,url,$form=this;
if(typeof options==='function'){
options={success:options};
}else if(typeof options==='string'||(options===false&&arguments.length>0)){
options={
'url':options,
'data':data,
'dataType':dataType
};
if(typeof onSuccess==='function'){
options.success=onSuccess;
}
}else if(typeof options==='undefined'){
options={};
}
method=options.method||options.type||this.attr2('method');
action=options.url||this.attr2('action');
url=(typeof action==='string')?$.trim(action):'';
url=url||window.location.href||'';
if(url){
url=(url.match(/^([^#]+)/)||[])[1];
}
options=$.extend(true,{
url:url,
success:$.ajaxSettings.success,
type:method||$.ajaxSettings.type,
iframeSrc:/^https/i.test(window.location.href||'')?'javascript:false':'about:blank'
},options);
var veto={};
this.trigger('form-pre-serialize',[this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
return this;
}
if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){
log('ajaxSubmit: submit aborted via beforeSerialize callback');
return this;
}
var traditional=options.traditional;
if(typeof traditional==='undefined'){
traditional=$.ajaxSettings.traditional;
}
var elements=[];
var qx,a=this.formToArray(options.semantic,elements,options.filtering);
if(options.data){
var optionsData=$.isFunction(options.data)?options.data(a):options.data;
options.extraData=optionsData;
qx=$.param(optionsData,traditional);
}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){
log('ajaxSubmit: submit aborted via beforeSubmit callback');
return this;
}
this.trigger('form-submit-validate',[a,this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
return this;
}
var q=$.param(a,traditional);
if(qx){
q=(q?(q+'&'+qx):qx);
}
if(options.type.toUpperCase()==='GET'){
options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;
options.data=null;
}else{
options.data=q;
}
var callbacks=[];
if(options.resetForm){
callbacks.push(function(){
$form.resetForm();
});
}
if(options.clearForm){
callbacks.push(function(){
$form.clearForm(options.includeHidden);
});
}
if(!options.dataType&&options.target){
var oldSuccess=options.success||function(){};
callbacks.push(function(data,textStatus,jqXHR){
var successArguments=arguments,
fn=options.replaceTarget?'replaceWith':'html';
$(options.target)[fn](data).each(function(){
oldSuccess.apply(this,successArguments);
});
});
}else if(options.success){
if($.isArray(options.success)){
$.merge(callbacks,options.success);
}else{
callbacks.push(options.success);
}
}
options.success=function(data,status,xhr){
var context=options.context||this;
for(var i=0,max=callbacks.length;i<max;i++){
callbacks[i].apply(context,[data,status,xhr||$form,$form]);
}
};
if(options.error){
var oldError=options.error;
options.error=function(xhr,status,error){
var context=options.context||this;
oldError.apply(context,[xhr,status,error,$form]);
};
}
if(options.complete){
var oldComplete=options.complete;
options.complete=function(xhr,status){
var context=options.context||this;
oldComplete.apply(context,[xhr,status,$form]);
};
}
var fileInputs=$('input[type=file]:enabled',this).filter(function(){
return $(this).val()!=='';
});
var hasFileInputs=fileInputs.length>0;
var mp='multipart/form-data';
var multipart=($form.attr('enctype')===mp||$form.attr('encoding')===mp);
var fileAPI=feature.fileapi&&feature.formdata;
log('fileAPI :'+fileAPI);
var shouldUseFrame=(hasFileInputs||multipart)&&!fileAPI;
var jqxhr;
if(options.iframe!==false&&(options.iframe||shouldUseFrame)){
if(options.closeKeepAlive){
$.get(options.closeKeepAlive,function(){
jqxhr=fileUploadIframe(a);
});
}else{
jqxhr=fileUploadIframe(a);
}
}else if((hasFileInputs||multipart)&&fileAPI){
jqxhr=fileUploadXhr(a);
}else{
jqxhr=$.ajax(options);
}
$form.removeData('jqxhr').data('jqxhr',jqxhr);
for(var k=0;k<elements.length;k++){
elements[k]=null;
}
this.trigger('form-submit-notify',[this,options]);
return this;
function deepSerialize(extraData){
var serialized=$.param(extraData,options.traditional).split('&');
var len=serialized.length;
var result=[];
var i,part;
for(i=0;i<len;i++){
serialized[i]=serialized[i].replace(/\+/g,' ');
part=serialized[i].split('=');
result.push([decodeURIComponent(part[0]),decodeURIComponent(part[1])]);
}
return result;
}
function fileUploadXhr(a){
var formdata=new FormData();
for(var i=0;i<a.length;i++){
formdata.append(a[i].name,a[i].value);
}
if(options.extraData){
var serializedData=deepSerialize(options.extraData);
for(i=0;i<serializedData.length;i++){
if(serializedData[i]){
formdata.append(serializedData[i][0],serializedData[i][1]);
}
}
}
options.data=null;
var s=$.extend(true,{},$.ajaxSettings,options,{
contentType:false,
processData:false,
cache:false,
type:method||'POST'
});
if(options.uploadProgress){
s.xhr=function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener('progress',function(event){
var percent=0;
var position=event.loaded||event.position;
var total=event.total;
if(event.lengthComputable){
percent=Math.ceil(position/total*100);
}
options.uploadProgress(event,position,total,percent);
},false);
}
return xhr;
};
}
s.data=null;
var beforeSend=s.beforeSend;
s.beforeSend=function(xhr,o){
if(options.formData){
o.data=options.formData;
}else{
o.data=formdata;
}
if(beforeSend){
beforeSend.call(this,xhr,o);
}
};
return $.ajax(s);
}
function fileUploadIframe(a){
var form=$form[0],el,i,s,g,id,$io,io,xhr,sub,n,timedOut,timeoutHandle;
var deferred=$.Deferred();
deferred.abort=function(status){
xhr.abort(status);
};
if(a){
for(i=0;i<elements.length;i++){
el=$(elements[i]);
if(hasProp){
el.prop('disabled',false);
}else{
el.removeAttr('disabled');
}
}
}
s=$.extend(true,{},$.ajaxSettings,options);
s.context=s.context||s;
id='jqFormIO'+new Date().getTime();
var ownerDocument=form.ownerDocument;
var $body=$form.closest('body');
if(s.iframeTarget){
$io=$(s.iframeTarget,ownerDocument);
n=$io.attr2('name');
if(!n){
$io.attr2('name',id);
}else{
id=n;
}
}else{
$io=$('<iframe name="'+id+'" src="'+s.iframeSrc+'" />',ownerDocument);
$io.css({position:'absolute',top:'-1000px',left:'-1000px'});
}
io=$io[0];
xhr={
aborted:0,
responseText:null,
responseXML:null,
status:0,
statusText:'n/a',
getAllResponseHeaders:function(){},
getResponseHeader:function(){},
setRequestHeader:function(){},
abort:function(status){
var e=(status==='timeout'?'timeout':'aborted');
log('aborting upload... '+e);
this.aborted=1;
try{
if(io.contentWindow.document.execCommand){
io.contentWindow.document.execCommand('Stop');
}
}catch(ignore){}
$io.attr('src',s.iframeSrc);
xhr.error=e;
if(s.error){
s.error.call(s.context,xhr,e,status);
}
if(g){
$.event.trigger('ajaxError',[xhr,s,e]);
}
if(s.complete){
s.complete.call(s.context,xhr,e);
}
}
};
g=s.global;
if(g&&$.active++===0){
$.event.trigger('ajaxStart');
}
if(g){
$.event.trigger('ajaxSend',[xhr,s]);
}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){
if(s.global){
$.active--;
}
deferred.reject();
return deferred;
}
if(xhr.aborted){
deferred.reject();
return deferred;
}
sub=form.clk;
if(sub){
n=sub.name;
if(n&&!sub.disabled){
s.extraData=s.extraData||{};
s.extraData[n]=sub.value;
if(sub.type==='image'){
s.extraData[n+'.x']=form.clk_x;
s.extraData[n+'.y']=form.clk_y;
}
}
}
var CLIENT_TIMEOUT_ABORT=1;
var SERVER_ABORT=2;
function getDoc(frame){
var doc=null;
try{
if(frame.contentWindow){
doc=frame.contentWindow.document;
}
}catch(err){
log('cannot get iframe.contentWindow document: '+err);
}
if(doc){
return doc;
}
try{
doc=frame.contentDocument?frame.contentDocument:frame.document;
}catch(err){
log('cannot get iframe.contentDocument: '+err);
doc=frame.document;
}
return doc;
}
var csrf_token=$('meta[name=csrf-token]').attr('content');
var csrf_param=$('meta[name=csrf-param]').attr('content');
if(csrf_param&&csrf_token){
s.extraData=s.extraData||{};
s.extraData[csrf_param]=csrf_token;
}
function doSubmit(){
var t=$form.attr2('target'),
a=$form.attr2('action'),
mp='multipart/form-data',
et=$form.attr('enctype')||$form.attr('encoding')||mp;
form.setAttribute('target',id);
if(!method||/post/i.test(method)){
form.setAttribute('method','POST');
}
if(a!==s.url){
form.setAttribute('action',s.url);
}
if(!s.skipEncodingOverride&&(!method||/post/i.test(method))){
$form.attr({
encoding:'multipart/form-data',
enctype:'multipart/form-data'
});
}
if(s.timeout){
timeoutHandle=setTimeout(function(){
timedOut=true;cb(CLIENT_TIMEOUT_ABORT);
},s.timeout);
}
function checkState(){
try{
var state=getDoc(io).readyState;
log('state = '+state);
if(state&&state.toLowerCase()==='uninitialized'){
setTimeout(checkState,50);
}
}catch(e){
log('Server abort: ',e,' (',e.name,')');
cb(SERVER_ABORT);
if(timeoutHandle){
clearTimeout(timeoutHandle);
}
timeoutHandle=undefined;
}
}
var extraInputs=[];
try{
if(s.extraData){
for(var n in s.extraData){
if(s.extraData.hasOwnProperty(n)){
if($.isPlainObject(s.extraData[n])&&s.extraData[n].hasOwnProperty('name')&&s.extraData[n].hasOwnProperty('value')){
extraInputs.push(
$('<input type="hidden" name="'+s.extraData[n].name+'">',ownerDocument).val(s.extraData[n].value)
.appendTo(form)[0]);
}else{
extraInputs.push(
$('<input type="hidden" name="'+n+'">',ownerDocument).val(s.extraData[n])
.appendTo(form)[0]);
}
}
}
}
if(!s.iframeTarget){
$io.appendTo($body);
}
if(io.attachEvent){
io.attachEvent('onload',cb);
}else{
io.addEventListener('load',cb,false);
}
setTimeout(checkState,15);
try{
form.submit();
}catch(err){
var submitFn=document.createElement('form').submit;
submitFn.apply(form);
}
}finally{
form.setAttribute('action',a);
form.setAttribute('enctype',et);
if(t){
form.setAttribute('target',t);
}else{
$form.removeAttr('target');
}
$(extraInputs).remove();
}
}
if(s.forceSync){
doSubmit();
}else{
setTimeout(doSubmit,10);
}
var data,doc,domCheckCount=50,callbackProcessed;
function cb(e){
if(xhr.aborted||callbackProcessed){
return;
}
doc=getDoc(io);
if(!doc){
log('cannot access response document');
e=SERVER_ABORT;
}
if(e===CLIENT_TIMEOUT_ABORT&&xhr){
xhr.abort('timeout');
deferred.reject(xhr,'timeout');
return;
}else if(e===SERVER_ABORT&&xhr){
xhr.abort('server abort');
deferred.reject(xhr,'error','server abort');
return;
}
if(!doc||doc.location.href===s.iframeSrc){
if(!timedOut){
return;
}
}
if(io.detachEvent){
io.detachEvent('onload',cb);
}else{
io.removeEventListener('load',cb,false);
}
var status='success',errMsg;
try{
if(timedOut){
throw'timeout';
}
var isXml=s.dataType==='xml'||doc.XMLDocument||$.isXMLDoc(doc);
log('isXml='+isXml);
if(!isXml&&window.opera&&(doc.body===null||!doc.body.innerHTML)){
if(--domCheckCount){
log('requeing onLoad callback, DOM not available');
setTimeout(cb,250);
return;
}
}
var docRoot=doc.body?doc.body:doc.documentElement;
xhr.responseText=docRoot?docRoot.innerHTML:null;
xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;
if(isXml){
s.dataType='xml';
}
xhr.getResponseHeader=function(header){
var headers={'content-type':s.dataType};
return headers[header.toLowerCase()];
};
if(docRoot){
xhr.status=Number(docRoot.getAttribute('status'))||xhr.status;
xhr.statusText=docRoot.getAttribute('statusText')||xhr.statusText;
}
var dt=(s.dataType||'').toLowerCase();
var scr=/(json|script|text)/.test(dt);
if(scr||s.textarea){
var ta=doc.getElementsByTagName('textarea')[0];
if(ta){
xhr.responseText=ta.value;
xhr.status=Number(ta.getAttribute('status'))||xhr.status;
xhr.statusText=ta.getAttribute('statusText')||xhr.statusText;
}else if(scr){
var pre=doc.getElementsByTagName('pre')[0];
var b=doc.getElementsByTagName('body')[0];
if(pre){
xhr.responseText=pre.textContent?pre.textContent:pre.innerText;
}else if(b){
xhr.responseText=b.textContent?b.textContent:b.innerText;
}
}
}else if(dt==='xml'&&!xhr.responseXML&&xhr.responseText){
xhr.responseXML=toXml(xhr.responseText);
}
try{
data=httpData(xhr,dt,s);
}catch(err){
status='parsererror';
xhr.error=errMsg=(err||status);
}
}catch(err){
log('error caught: ',err);
status='error';
xhr.error=errMsg=(err||status);
}
if(xhr.aborted){
log('upload aborted');
status=null;
}
if(xhr.status){
status=((xhr.status>=200&&xhr.status<300)||xhr.status===304)?'success':'error';
}
if(status==='success'){
if(s.success){
s.success.call(s.context,data,'success',xhr);
}
deferred.resolve(xhr.responseText,'success',xhr);
if(g){
$.event.trigger('ajaxSuccess',[xhr,s]);
}
}else if(status){
if(typeof errMsg==='undefined'){
errMsg=xhr.statusText;
}
if(s.error){
s.error.call(s.context,xhr,status,errMsg);
}
deferred.reject(xhr,'error',errMsg);
if(g){
$.event.trigger('ajaxError',[xhr,s,errMsg]);
}
}
if(g){
$.event.trigger('ajaxComplete',[xhr,s]);
}
if(g&&!--$.active){
$.event.trigger('ajaxStop');
}
if(s.complete){
s.complete.call(s.context,xhr,status);
}
callbackProcessed=true;
if(s.timeout){
clearTimeout(timeoutHandle);
}
setTimeout(function(){
if(!s.iframeTarget){
$io.remove();
}else{
$io.attr('src',s.iframeSrc);
}
xhr.responseXML=null;
},100);
}
var toXml=$.parseXML||function(s,doc){
if(window.ActiveXObject){
doc=new ActiveXObject('Microsoft.XMLDOM');
doc.async='false';
doc.loadXML(s);
}else{
doc=(new DOMParser()).parseFromString(s,'text/xml');
}
return(doc&&doc.documentElement&&doc.documentElement.nodeName!=='parsererror')?doc:null;
};
var parseJSON=$.parseJSON||function(s){
return window['eval']('('+s+')');
};
var httpData=function(xhr,type,s){
var ct=xhr.getResponseHeader('content-type')||'',
xml=((type==='xml'||!type)&&ct.indexOf('xml')>=0),
data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.nodeName==='parsererror'){
if($.error){
$.error('parsererror');
}
}
if(s&&s.dataFilter){
data=s.dataFilter(data,type);
}
if(typeof data==='string'){
if((type==='json'||!type)&&ct.indexOf('json')>=0){
data=parseJSON(data);
}else if((type==='script'||!type)&&ct.indexOf('javascript')>=0){
$.globalEval(data);
}
}
return data;
};
return deferred;
}
};
$.fn.ajaxForm=function(options,data,dataType,onSuccess){
if(typeof options==='string'||(options===false&&arguments.length>0)){
options={
'url':options,
'data':data,
'dataType':dataType
};
if(typeof onSuccess==='function'){
options.success=onSuccess;
}
}
options=options||{};
options.delegation=options.delegation&&$.isFunction($.fn.on);
if(!options.delegation&&this.length===0){
var o={s:this.selector,c:this.context};
if(!$.isReady&&o.s){
log('DOM not ready, queuing ajaxForm');
$(function(){
$(o.s,o.c).ajaxForm(options);
});
return this;
}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));
return this;
}
if(options.delegation){
$(document)
.off('submit.form-plugin',this.selector,doAjaxSubmit)
.off('click.form-plugin',this.selector,captureSubmittingElement)
.on('submit.form-plugin',this.selector,options,doAjaxSubmit)
.on('click.form-plugin',this.selector,options,captureSubmittingElement);
return this;
}
return this.ajaxFormUnbind()
.on('submit.form-plugin',options,doAjaxSubmit)
.on('click.form-plugin',options,captureSubmittingElement);
};
function doAjaxSubmit(e){
var options=e.data;
if(!e.isDefaultPrevented()){
e.preventDefault();
$(e.target).closest('form').ajaxSubmit(options);
}
}
function captureSubmittingElement(e){
var target=e.target;
var $el=$(target);
if(!$el.is('[type=submit],[type=image]')){
var t=$el.closest('[type=submit]');
if(t.length===0){
return;
}
target=t[0];
}
var form=target.form;
form.clk=target;
if(target.type==='image'){
if(typeof e.offsetX!=='undefined'){
form.clk_x=e.offsetX;
form.clk_y=e.offsetY;
}else if(typeof $.fn.offset==='function'){
var offset=$el.offset();
form.clk_x=e.pageX-offset.left;
form.clk_y=e.pageY-offset.top;
}else{
form.clk_x=e.pageX-target.offsetLeft;
form.clk_y=e.pageY-target.offsetTop;
}
}
setTimeout(function(){
form.clk=form.clk_x=form.clk_y=null;
},100);
}
$.fn.ajaxFormUnbind=function(){
return this.off('submit.form-plugin click.form-plugin');
};
$.fn.formToArray=function(semantic,elements,filtering){
var a=[];
if(this.length===0){
return a;
}
var form=this[0];
var formId=this.attr('id');
var els=(semantic||typeof form.elements==='undefined')?form.getElementsByTagName('*'):form.elements;
var els2;
if(els){
els=$.makeArray(els);
}
if(formId&&(semantic||/(Edge|Trident)\//.test(navigator.userAgent))){
els2=$(':input[form="'+formId+'"]').get();
if(els2.length){
els=(els||[]).concat(els2);
}
}
if(!els||!els.length){
return a;
}
if($.isFunction(filtering)){
els=$.map(els,filtering);
}
var i,j,n,v,el,max,jmax;
for(i=0,max=els.length;i<max;i++){
el=els[i];
n=el.name;
if(!n||el.disabled){
continue;
}
if(semantic&&form.clk&&el.type==='image'){
if(form.clk===el){
a.push({name:n,value:$(el).val(),type:el.type});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
continue;
}
v=$.fieldValue(el,true);
if(v&&v.constructor===Array){
if(elements){
elements.push(el);
}
for(j=0,jmax=v.length;j<jmax;j++){
a.push({name:n,value:v[j]});
}
}else if(feature.fileapi&&el.type==='file'){
if(elements){
elements.push(el);
}
var files=el.files;
if(files.length){
for(j=0;j<files.length;j++){
a.push({name:n,value:files[j],type:el.type});
}
}else{
a.push({name:n,value:'',type:el.type});
}
}else if(v!==null&&typeof v!=='undefined'){
if(elements){
elements.push(el);
}
a.push({name:n,value:v,type:el.type,required:el.required});
}
}
if(!semantic&&form.clk){
var $input=$(form.clk),input=$input[0];
n=input.name;
if(n&&!input.disabled&&input.type==='image'){
a.push({name:n,value:$input.val()});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
}
return a;
};
$.fn.formSerialize=function(semantic){
return $.param(this.formToArray(semantic));
};
$.fn.fieldSerialize=function(successful){
var a=[];
this.each(function(){
var n=this.name;
if(!n){
return;
}
var v=$.fieldValue(this,successful);
if(v&&v.constructor===Array){
for(var i=0,max=v.length;i<max;i++){
a.push({name:n,value:v[i]});
}
}else if(v!==null&&typeof v!=='undefined'){
a.push({name:this.name,value:v});
}
});
return $.param(a);
};
$.fn.fieldValue=function(successful){
for(var val=[],i=0,max=this.length;i<max;i++){
var el=this[i];
var v=$.fieldValue(el,successful);
if(v===null||typeof v==='undefined'||(v.constructor===Array&&!v.length)){
continue;
}
if(v.constructor===Array){
$.merge(val,v);
}else{
val.push(v);
}
}
return val;
};
$.fieldValue=function(el,successful){
var n=el.name,t=el.type,tag=el.tagName.toLowerCase();
if(typeof successful==='undefined'){
successful=true;
}
if(successful&&(!n||el.disabled||t==='reset'||t==='button'||
(t==='checkbox'||t==='radio')&&!el.checked||
(t==='submit'||t==='image')&&el.form&&el.form.clk!==el||
tag==='select'&&el.selectedIndex===-1)){
return null;
}
if(tag==='select'){
var index=el.selectedIndex;
if(index<0){
return null;
}
var a=[],ops=el.options;
var one=(t==='select-one');
var max=(one?index+1:ops.length);
for(var i=(one?index:0);i<max;i++){
var op=ops[i];
if(op.selected&&!op.disabled){
var v=op.value;
if(!v){
v=(op.attributes&&op.attributes.value&&!(op.attributes.value.specified))?op.text:op.value;
}
if(one){
return v;
}
a.push(v);
}
}
return a;
}
return $(el).val().replace(rCRLF,'\r\n');
};
$.fn.clearForm=function(includeHidden){
return this.each(function(){
$('input,select,textarea',this).clearFields(includeHidden);
});
};
$.fn.clearFields=$.fn.clearInputs=function(includeHidden){
var re=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
return this.each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(re.test(t)||tag==='textarea'){
this.value='';
}else if(t==='checkbox'||t==='radio'){
this.checked=false;
}else if(tag==='select'){
this.selectedIndex=-1;
}else if(t==='file'){
if(/MSIE/.test(navigator.userAgent)){
$(this).replaceWith($(this).clone(true));
}else{
$(this).val('');
}
}else if(includeHidden){
if((includeHidden===true&&/hidden/.test(t))||
(typeof includeHidden==='string'&&$(this).is(includeHidden))){
this.value='';
}
}
});
};
$.fn.resetForm=function(){
return this.each(function(){
var el=$(this);
var tag=this.tagName.toLowerCase();
switch(tag){
case'input':
this.checked=this.defaultChecked;
case'textarea':
this.value=this.defaultValue;
return true;
case'option':
case'optgroup':
var select=el.parents('select');
if(select.length&&select[0].multiple){
if(tag==='option'){
this.selected=this.defaultSelected;
}else{
el.find('option').resetForm();
}
}else{
select.resetForm();
}
return true;
case'select':
el.find('option').each(function(i){
this.selected=this.defaultSelected;
if(this.defaultSelected&&!el[0].multiple){
el[0].selectedIndex=i;
return false;
}
});
return true;
case'label':
var forEl=$(el.attr('for'));
var list=el.find('input,select,textarea');
if(forEl[0]){
list.unshift(forEl[0]);
}
list.resetForm();
return true;
case'form':
if(typeof this.reset==='function'||(typeof this.reset==='object'&&!this.reset.nodeType)){
this.reset();
}
return true;
default:
el.find('form,input,label,select,textarea').resetForm();
return true;
}
});
};
$.fn.enable=function(b){
if(typeof b==='undefined'){
b=true;
}
return this.each(function(){
this.disabled=!b;
});
};
$.fn.selected=function(select){
if(typeof select==='undefined'){
select=true;
}
return this.each(function(){
var t=this.type;
if(t==='checkbox'||t==='radio'){
this.checked=select;
}else if(this.tagName.toLowerCase()==='option'){
var $sel=$(this).parent('select');
if(select&&$sel[0]&&$sel[0].type==='select-one'){
$sel.find('option').selected(false);
}
this.selected=select;
}
});
};
$.fn.ajaxSubmit.debug=false;
function log(){
if(!$.fn.ajaxSubmit.debug){
return;
}
var msg='[jquery.form] '+Array.prototype.join.call(arguments,'');
if(window.console&&window.console.log){
window.console.log(msg);
}else if(window.opera&&window.opera.postError){
window.opera.postError(msg);
}
}
}));


/* ../prive/javascript/jquery.autosave.js?1551954343 */

(function($){
$.fn.autosave=function(opt){
opt=$.extend({
url:window.location,
confirm:false,
confirmstring:'Sauvegarder ?'
},opt);
var save_changed=function(){
$('form.autosavechanged')
.each(function(){
if(!opt.confirm||confirm(opt.confirmstring)){
var contenu=$(this).serialize();
var d=new Date();
contenu=contenu+"&__timestamp="+Math.round(d.getTime()/1000);
$.post(opt.url,{
'action':'session',
'var':'autosave_'+$('input[name=autosave]',this).val(),
'val':contenu
});
}
}).removeClass('autosavechanged');
}
$(window).on('unload',save_changed);
return this
.on('keyup',function(){
$(this).addClass('autosavechanged');
})
.on('change',function(){
$(this).addClass('autosavechanged');
save_changed();
})
.on('submit',function(){
save_changed();
;
});
}
})(jQuery);


/* ../prive/javascript/jquery.placeholder-label.js?1551954343 */

(function($){
$.placeholderLabel={
placeholder_class:null,
add_placeholder:function(){
if($(this).val()==$(this).attr('placeholder')){
$(this).val('').removeClass($.placeholderLabel.placeholder_class);
}
},
remove_placeholder:function(){
if($(this).val()==''){
$(this).val($(this).attr('placeholder')).addClass($.placeholderLabel.placeholder_class);
}
},
disable_placeholder_fields:function(){
$(this).find("input[placeholder]").each(function(){
if($(this).val()==$(this).attr('placeholder')){
$(this).val('');
}
});
return true;
}
};
$.fn.placeholderLabel=function(options){
var dummy=document.createElement('input');
if(dummy.placeholder!=undefined){
return this;
}
var config={
placeholder_class:'placeholder'
};
if(options)$.extend(config,options);
$.placeholderLabel.placeholder_class=config.placeholder_class;
this.each(function(){
var input=$(this);
input.focus($.placeholderLabel.add_placeholder);
input.blur($.placeholderLabel.remove_placeholder);
input.triggerHandler('focus');
input.triggerHandler('blur');
$(this.form).submit($.placeholderLabel.disable_placeholder_fields);
});
return this;
}
})(jQuery);


/* ../prive/javascript/ajaxCallback.js?1551954343 */
jQuery.spip=jQuery.spip||{};
jQuery.spip.log=function(){
if(jQuery.spip.debug&&window.console&&window.console.log)
window.console.log.apply(this,arguments);
}
if(!jQuery.spip.load_handlers){
jQuery.spip.load_handlers=new Array();
function onAjaxLoad(f){
jQuery.spip.load_handlers.push(f);
};
jQuery.spip.triggerAjaxLoad=function(root){
jQuery.spip.log('triggerAjaxLoad');
jQuery.spip.log(root);
for(var i=0;i<jQuery.spip.load_handlers.length;i++)
jQuery.spip.load_handlers[i].apply(root);
};
jQuery.spip.intercepted={};
jQuery.spip.intercepted.load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){
if(typeof url!=="string"){
return jQuery.spip.intercepted.load.apply(this,arguments);
}
callback=callback||function(){};
if(params){
if(params.constructor==Function){
callback=params;
params=null;
}
}
params=jQuery.extend(params,{triggerAjaxLoad:false});
var callback2=function(){jQuery.spip.log('jQuery.load');jQuery.spip.triggerAjaxLoad(this);callback.apply(this,arguments);};
return jQuery.spip.intercepted.load.apply(this,[url,params,callback2]);
};
jQuery.spip.intercepted.ajaxSubmit=jQuery.fn.ajaxSubmit;
jQuery.fn.ajaxSubmit=function(options){
options=options||{};
if(typeof options.onAjaxLoad=="undefined"||options.onAjaxLoad!=false){
var me=jQuery(this).parents('div.ajax');
if(me.length)
me=me.parent();
else
me=document;
if(typeof options=='function')
options={success:options};
var callback=options.success||function(){};
options.success=function(){callback.apply(this,arguments);jQuery.spip.log('jQuery.ajaxSubmit');jQuery.spip.triggerAjaxLoad(me);}
}
return jQuery.spip.intercepted.ajaxSubmit.apply(this,[options]);
}
jQuery.spip.intercepted.ajax=jQuery.ajax;
jQuery.ajax=function(url,settings){
if(typeof settings=='undefined'){
settings={};
if(typeof url=='object'){
settings=url;
url=null;
}
}
if(typeof url=='string'){
settings['url']=url;
}
if(settings.data&&settings.data['triggerAjaxLoad']===false){
settings.data['triggerAjaxLoad']=null;
return jQuery.spip.intercepted.ajax(settings);
}
var s=jQuery.extend(true,{},jQuery.ajaxSettings,settings);
var callbackContext=s.context||s;
try{
if(jQuery.ajax.caller==jQuery.spip.intercepted.load||jQuery.ajax.caller==jQuery.spip.intercepted.ajaxSubmit)
return jQuery.spip.intercepted.ajax(settings);
}
catch(err){}
var orig_complete=s.complete||function(){};
settings.complete=function(res,status){
var dataType=settings.dataType;
var ct=(res&&(typeof res.getResponseHeader=='function'))
?res.getResponseHeader("content-type"):'';
var xml=!dataType&&ct&&ct.indexOf("xml")>=0;
orig_complete.call(callbackContext,res,status);
if((!dataType&&!xml)||dataType=="html"){
jQuery.spip.log('jQuery.ajax');
if(typeof s.onAjaxLoad=="undefined"||s.onAjaxLoad!=false)
jQuery.spip.triggerAjaxLoad(s.ajaxTarget?s.ajaxTarget:document);
}
};
return jQuery.spip.intercepted.ajax(settings);
};
}
jQuery.uaMatch=function(ua){
ua=ua.toLowerCase();
var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||
ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||
[];
return{
browser:match[1]||"",
version:match[2]||"0"
};
};
if(!jQuery.browser){
matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){
browser[matched.browser]=true;
browser.version=matched.version;
}
if(browser.chrome){
browser.webkit=true;
}else if(browser.webkit){
browser.safari=true;
}
jQuery.browser=browser;
}
jQuery.getScript=function(url,callback){
return $.ajax({
url:url,
dataType:"script",
success:callback,
cache:true
});
}
jQuery.fn.positionner=function(force,setfocus){
var offset=jQuery(this).offset();
var hauteur=parseInt(jQuery(this).css('height'));
var scrolltop=self['pageYOffset']||
jQuery.boxModel&&document.documentElement['scrollTop']||
document.body['scrollTop'];
var h=jQuery(window).height();
var scroll=0;
if(force||(offset&&offset['top']-5<=scrolltop))
scroll=offset['top']-5;
else if(offset&&offset['top']+hauteur-h+5>scrolltop)
scroll=Math.min(offset['top']-5,offset['top']+hauteur-h+15);
if(scroll)
jQuery('html,body')
.animate({scrollTop:scroll},300);
if(setfocus!==false)
jQuery(jQuery('*',this).filter('input[type=text],textarea')[0]).focus();
return this;
}
jQuery.spip.virtualbuffer_id='spip_virtualbufferupdate';
jQuery.spip.initReaderBuffer=function(){
if(jQuery('#'+jQuery.spip.virtualbuffer_id).length)return;
jQuery('body').append('<p style="float:left;width:0;height:0;position:absolute;left:-5000px;top:-5000px;"><input type="hidden" name="'+jQuery.spip.virtualbuffer_id+'" id="'+jQuery.spip.virtualbuffer_id+'" value="0" /></p>');
}
jQuery.spip.updateReaderBuffer=function(){
var i=jQuery('#'+jQuery.spip.virtualbuffer_id);
if(!i.length)return;
i.val(parseInt(i.val())+1);
}
jQuery.fn.formulaire_setARIA=function(){
if(!this.closest('.ariaformprop').length){
this.find('script').remove();
this.wrap('<div class="ariaformprop" aria-live="polite" aria-atomic="true" aria-relevant="additions"></div>');
jQuery('form',this).not('[aria-live]').attr('aria-live','off');
}
return this;
}
jQuery.fn.formulaire_dyn_ajax=function(target){
if(this.length)
jQuery.spip.initReaderBuffer();
return this.each(function(){
var scrollwhensubmit=!jQuery(this).is('.noscroll');
var cible=target||this;
jQuery(cible).formulaire_setARIA();
jQuery('form:not(.noajax):not(.bouton_action_post)',this).each(function(){
var leform=this;
var leclk,leclk_x,leclk_y;
var onError=function(xhr,status,error,$form){
jQuery(leform).ajaxFormUnbind().find('input[name="var_ajax"]').remove();
var msg="Erreur";
if(typeof(error_on_ajaxform)!=="undefined")msg=error_on_ajaxform;
jQuery(leform).prepend("<p class='error ajax-error none'>"+msg+"</p>").find('.ajax-error').show('fast');
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
jQuery(this).prepend("<input type='hidden' name='var_ajax' value='form' />")
.ajaxForm({
beforeSubmit:function(){
leclk=leform.clk;
var scrollwhensubmit_button=true;
if(leclk){
scrollwhensubmit_button=!jQuery(leclk).is('.noscroll');
var n=leclk.name;
if(n&&!leclk.disabled&&leclk.type=="image"){
leclk_x=leform.clk_x;
leclk_y=leform.clk_y;
}
}
jQuery(cible).wrap('<div />');
cible=jQuery(cible).parent();
jQuery(cible).closest('.ariaformprop').animateLoading();
if(scrollwhensubmit&&scrollwhensubmit_button){
jQuery(cible).positionner(false,false);
}
},
error:onError,
success:function(c,status,xhr,$form){
if(c.match(/^\s*noajax\s*$/)){
jQuery("input[name=var_ajax]",leform).remove();
if(leclk){
var n=leclk.name;
if(n&&!leclk.disabled){
jQuery(leform).prepend("<input type='hidden' name='"+n+"' value='"+leclk.value+"' />");
if(leclk.type=="image"){
jQuery(leform).prepend("<input type='hidden' name='"+n+".x' value='"+leform.clk_x+"' />");
jQuery(leform).prepend("<input type='hidden' name='"+n+".y' value='"+leform.clk_y+"' />");
}
}
}
jQuery(leform).ajaxFormUnbind().submit();
}
else{
if(!c.length||c.indexOf("ajax-form-is-ok")==-1)
return onError.apply(this,[status,xhr,$form]);
var preloaded=jQuery.spip.preloaded_urls;
jQuery.spip.preloaded_urls={};
jQuery(cible).html(c);
var a=jQuery('a:first',cible).eq(0);
var d=jQuery('div.ajax',cible);
if(!d.length){
jQuery(cible).addClass('ajax');
if(!scrollwhensubmit)
jQuery(cible).addClass('noscroll');
}
else{
d.siblings('br.bugajaxie').remove();
cible=jQuery(":first",cible);
cible.unwrap();
}
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),cible).length){
a=a.attr('href');
if(jQuery(a,cible).length)
setTimeout(function(){
jQuery(a,cible).positionner(false);
},10);
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
else{
if(a.length&&a.is('a[name=ajax_redirect]')){
a=a.get(0).href;
setTimeout(function(){
var cur=window.location.href.split('#');
document.location.replace(a);
if(cur[0]==a.split('#')[0]){
window.location.reload();
}
},10);
jQuery(cible).closest('.ariaformprop').animateLoading();
}
else{
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
}
if(!jQuery('.reponse_formulaire_ok',cible).length)
jQuery.spip.preloaded_urls=preloaded;
jQuery.spip.updateReaderBuffer();
}
}
})
.addClass('noajax hasajax');
});
});
}
jQuery.fn.formulaire_verifier=function(callback,champ){
var erreurs={'message_erreur':'form non ajax'};
var me=this;
if(jQuery(me).closest('.ariaformprop').attr('aria-busy')!='true'){
if(jQuery(me).is('form.hasajax')){
jQuery(me).ajaxSubmit({
dataType:"json",
data:{formulaire_action_verifier_json:true},
success:function(errs){
var args=[errs,champ]
if(jQuery(me).closest('.ariaformprop').attr('aria-busy')!='true')
callback.apply(me,args);
}
});
}
else
callback.apply(me,[erreurs,champ]);
}
return this;
}
jQuery.fn.formulaire_activer_verif_auto=function(callback){
callback=callback||formulaire_actualiser_erreurs;
var me=jQuery(this).closest('.ariaformprop');
var check=function(){
var name=jQuery(this).attr('name');
setTimeout(function(){me.find('form').formulaire_verifier(callback,name);},50);
}
var activer=function(){
if(me.find('form').attr('data-verifjson')!='on'){
me
.find('form')
.attr('data-verifjson','on')
.find('input,select,textarea')
.on('change',check);
}
}
jQuery(activer);
onAjaxLoad(function(){setTimeout(activer,150);});
}
function formulaire_actualiser_erreurs(erreurs){
var parent=jQuery(this).closest('.formulaire_spip');
if(!parent.length)return;
parent.find('.reponse_formulaire,.erreur_message').fadeOut().remove();
parent.find('.erreur').removeClass('erreur');
if(erreurs['message_ok'])
parent.find('form').before('<p class="reponse_formulaire reponse_formulaire_ok">'+erreurs['message_ok']+'</p>');
if(erreurs['message_erreur'])
parent.find('form').before('<p class="reponse_formulaire reponse_formulaire_erreur">'+erreurs['message_erreur']+'</p>');
for(var k in erreurs){
var saisie=parent.find('.editer_'+k);
if(saisie.length){
saisie.addClass('erreur');
saisie.find('label').after('<span class="erreur_message">'+erreurs[k]+'</span>');
}
}
}
var ajax_confirm=true;
var ajax_confirm_date=0;
var spip_confirm=window.confirm;
function _confirm(message){
ajax_confirm=spip_confirm(message);
if(!ajax_confirm){
var d=new Date();
ajax_confirm_date=d.getTime();
}
return ajax_confirm;
}
window.confirm=_confirm;
var ajaxbloc_selecteur;
jQuery.spip.preloaded_urls={};
jQuery.spip.on_ajax_loaded=function(blocfrag,c,href,history){
history=history||(history==null);
if(typeof href==undefined||href==null)
history=false;
if(history)
jQuery.spip.setHistoryState(blocfrag);
if(jQuery(blocfrag).attr('data-loaded-callback')){
var callback=eval(jQuery(blocfrag).attr('data-loaded-callback'));
callback.call(blocfrag,c,href,history);
}
else{
jQuery(blocfrag)
.html(c)
.endLoading();
}
if(typeof href!=undefined)
jQuery(blocfrag).attr('data-url',href);
if(history){
jQuery.spip.pushHistoryState(href);
jQuery.spip.setHistoryState(blocfrag);
}
var a=jQuery('a:first',jQuery(blocfrag)).eq(0);
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),blocfrag).length){
a=a.attr('href');
jQuery(a,blocfrag).positionner(false);
}
jQuery.spip.log('on_ajax_loaded');
jQuery.spip.triggerAjaxLoad(blocfrag);
a=jQuery(blocfrag).parents('form.hasajax')
if(a.length)
a.eq(0).removeClass('noajax').parents('div.ajax').formulaire_dyn_ajax();
jQuery.spip.updateReaderBuffer();
}
jQuery.spip.stateId=0;
jQuery.spip.setHistoryState=function(blocfrag){
if(!window.history.replaceState)return;
if(!blocfrag.attr('id')){
while(jQuery('#ghsid'+jQuery.spip.stateId).length)
jQuery.spip.stateId++;
blocfrag.attr('id','ghsid'+jQuery.spip.stateId);
}
var href=blocfrag.attr('data-url')||blocfrag.attr('data-origin');
href=jQuery("<"+"a href='"+href+"'></a>").get(0).href;
var state={
id:blocfrag.attr('id'),
href:href
};
var ajaxid=blocfrag.attr('class').match(/\bajax-id-[\w-]+\b/);
if(ajaxid&&ajaxid.length)
state["ajaxid"]=ajaxid[0];
window.history.replaceState(state,window.document.title,window.document.location);
}
jQuery.spip.pushHistoryState=function(href,title){
if(!window.history.pushState)
return false;
window.history.pushState({},title,href);
}
window.onpopstate=function(popState){
if(popState.state&&popState.state.href){
var blocfrag=false;
if(popState.state.id){
blocfrag=jQuery('#'+popState.state.id);
}
if((!blocfrag||!blocfrag.length)&&popState.state.ajaxid){
blocfrag=jQuery('.ajaxbloc.'+popState.state.ajaxid);
}
if(blocfrag&&blocfrag.length==1){
jQuery.spip.ajaxClick(blocfrag,popState.state.href,{history:false});
return true;
}
else{
window.location.href=popState.state.href;
}
}
}
jQuery.spip.loadAjax=function(blocfrag,url,href,options){
var force=options.force||false;
if(jQuery(blocfrag).attr('data-loading-callback')){
var callback=eval(jQuery(blocfrag).attr('data-loading-callback'));
callback.call(blocfrag,url,href,options);
}
else{
jQuery(blocfrag).animateLoading();
}
if(jQuery.spip.preloaded_urls[url]&&!force){
if(jQuery.spip.preloaded_urls[url]=="<!--loading-->"){
setTimeout(function(){jQuery.spip.loadAjax(blocfrag,url,href,options);},100);
return;
}
jQuery.spip.on_ajax_loaded(blocfrag,jQuery.spip.preloaded_urls[url],href,options.history);
}else{
var d=new Date();
jQuery.spip.preloaded_urls[url]="<!--loading-->";
jQuery.ajax({
url:parametre_url(url,'var_t',d.getTime()),
onAjaxLoad:false,
success:function(c){
jQuery.spip.on_ajax_loaded(blocfrag,c,href,options.history);
jQuery.spip.preloaded_urls[url]=c;
if(options.callback&&typeof options.callback=="function")
options.callback.apply(blocfrag);
},
error:function(){
jQuery.spip.preloaded_urls[url]='';
}
});
}
}
jQuery.spip.makeAjaxUrl=function(href,ajax_env,origin){
var url=href.split('#');
url[0]=parametre_url(url[0],'var_ajax',1);
url[0]=parametre_url(url[0],'var_ajax_env',ajax_env);
if(origin){
var p=origin.indexOf('?');
if(p!==-1){
var args=origin.substring(p+1).split('&');
var val;
var arg;
for(var n=0;n<args.length;n++){
arg=args[n].split('=');
arg=arg[0];
p=arg.indexOf('[');
if(p!==-1)
arg=arg.substring(0,p);
val=parametre_url(href,arg);
if(typeof val=="undefined"||val==null)
url[0]=url[0]+'&'+arg+'=';
}
}
}
if(url[1])
url[0]=parametre_url(url[0],'var_ajax_ancre',url[1]);
return url[0];
}
jQuery.spip.ajaxReload=function(blocfrag,options){
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
var href=options.href||blocfrag.attr('data-url')||blocfrag.attr('data-origin');
if(href&&typeof href!=undefined){
options=options||{};
var callback=options.callback||null;
var history=options.history||false;
var args=options.args||{};
for(var key in args)
href=parametre_url(href,key,args[key]==undefined?'':args[key],'&',args[key]==undefined?false:true);
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
jQuery.spip.loadAjax(blocfrag,url,href,{force:true,callback:callback,history:history});
return true;
}
}
jQuery.spip.ajaxClick=function(blocfrag,href,options){
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
if(!ajax_confirm){
ajax_confirm=true;
var d=new Date();
if((d.getTime()-ajax_confirm_date)<=2)
return false;
}
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
jQuery.spip.loadAjax(blocfrag,url,href,options);
return false;
}
jQuery.fn.ajaxbloc=function(){
if(this.length)
jQuery.spip.initReaderBuffer();
if(ajaxbloc_selecteur==undefined)
ajaxbloc_selecteur='.pagination a,a.ajax';
return this.each(function(){
jQuery('div.ajaxbloc',this).ajaxbloc();
var blocfrag=jQuery(this);
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
blocfrag.not('.bind-ajaxReload').on('ajaxReload',function(event,options){
if(jQuery.spip.ajaxReload(blocfrag,options))
event.stopPropagation();
}).addClass('bind-ajaxReload')
.attr('aria-live','polite').attr('aria-atomic','true');
jQuery('form',this).not('[aria-live]').attr('aria-live','off');
jQuery(ajaxbloc_selecteur,this).not('.noajax,.bind-ajax')
.click(function(){return jQuery.spip.ajaxClick(blocfrag,this.href,{force:jQuery(this).is('.nocache'),history:!(jQuery(this).is('.nohistory')||jQuery(this).closest('.box_modalbox').length)});})
.addClass('bind-ajax')
.filter('.preload').each(function(){
var href=this.href;
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
if(!jQuery.spip.preloaded_urls[url]){
jQuery.spip.preloaded_urls[url]='<!--loading-->';
jQuery.ajax({url:url,onAjaxLoad:false,success:function(r){jQuery.spip.preloaded_urls[url]=r;},error:function(){jQuery.spip.preloaded_urls[url]='';}});
}
});
jQuery('form.bouton_action_post.ajax',this).not('.noajax,.bind-ajax').each(function(){
var leform=this;
var url=jQuery(this).attr('action').split('#');
var scrollwhensubmit=(!jQuery(this).is('.noscroll')&&!jQuery('.submit',this).is('.noscroll'));
jQuery(this)
.prepend("<input type='hidden' name='var_ajax' value='1' /><input type='hidden' name='var_ajax_env' value='"+(ajax_env)+"' />"+(url[1]?"<input type='hidden' name='var_ajax_ancre' value='"+url[1]+"' />":""))
.ajaxForm({
beforeSubmit:function(){
jQuery(blocfrag).animateLoading();
if(scrollwhensubmit){
jQuery(blocfrag).positionner(false);
}
},
onAjaxLoad:false,
success:function(c){
jQuery.spip.on_ajax_loaded(blocfrag,c);
jQuery.spip.preloaded_urls={};
}
})
.addClass('bind-ajax');
});
});
};
jQuery.fn.followLink=function(){
$(this).click();
if(!$(this).is('.bind-ajax'))
window.location.href=$(this).get(0).href;
return this;
}
function ajaxReload(ajaxid,options){
jQuery('div.ajaxbloc.ajax-id-'+ajaxid).ajaxReload(options);
}
jQuery.fn.ajaxReload=function(options){
options=options||{};
jQuery(this).trigger('ajaxReload',[options]);
return this;
}
jQuery.fn.animateLoading=function(){
this.attr('aria-busy','true').addClass('loading').children().css('opacity',0.5);
if(typeof ajax_image_searching!='undefined'){
var i=(this).find('.image_loading');
if(i.length)i.eq(0).html(ajax_image_searching);
else this.prepend('<span class="image_loading">'+ajax_image_searching+'</span>');
}
return this;
}
jQuery.fn.animeajax=jQuery.fn.animateLoading;
jQuery.fn.endLoading=function(hard){
hard=hard||false;
this.attr('aria-busy','false').removeClass('loading');
if(hard){
this.children().css('opacity','');
this.find('.image_loading').html('');
}
return this;
}
jQuery.fn.animateRemove=function(callback){
if(this.length){
var me=this;
var color=$("<div class='remove'></div>").css('background-color');
var sel=$(this);
if(sel.is('tr'))
sel=sel.add('>td',sel);
sel.addClass('remove').css({backgroundColor:color}).animate({opacity:"0.0"},'fast',function(){
sel.removeClass('remove').css({backgroundColor:''});
if(callback)
callback.apply(me);
});
}
return this;
}
jQuery.fn.animateAppend=function(callback){
if(this.length){
var me=this;
var color=$("<div class='append'></div>").css('background-color');
var origin=$(this).css('background-color')||'#ffffff';
if(origin=='transparent')origin='#ffffff';
var sel=$(this);
if(sel.is('tr'))
sel=sel.add('>td',sel);
sel.css('opacity','0.0').addClass('append').css({backgroundColor:color}).animate({opacity:"1.0"},1000,function(){
sel.animate({backgroundColor:origin},3000,function(){
sel.removeClass('append').css({backgroundColor:''});
if(callback)
callback.apply(me);
});
});
}
return this;
}
function parametre_url(url,c,v,sep,force_vide){
if(typeof(url)=='undefined'){
url='';
}
var p;
var ancre='';
var a='./';
var args=[];
p=url.indexOf('#');
if(p!=-1){
ancre=url.substring(p);
url=url.substring(0,p);
}
p=url.indexOf('?');
if(p!==-1){
if(p>0)a=url.substring(0,p);
args=url.substring(p+1).split('&');
}
else
a=url;
var regexp=new RegExp('^('+c.replace('[]','\\[\\]')+'\\[?\\]?)(=.*)?$');
var ajouts=[];
var u=(typeof(v)!=='object')?encodeURIComponent(v):v;
var na=[];
var v_read=null;
for(var n=0;n<args.length;n++){
var val=args[n];
try{
val=decodeURIComponent(val);
}catch(e){}
var r=val.match(regexp);
if(r&&r.length){
if(v==null){
if(r[1].substr(-2)=='[]'){
if(!v_read)v_read=[];
v_read.push((r.length>2&&typeof r[2]!=='undefined')?r[2].substring(1):'');
}
else{
return(r.length>2&&typeof r[2]!=='undefined')?r[2].substring(1):'';
}
}
else if(!v.length){
}
else if(r[1].substr(-2)!='[]'){
na.push(r[1]+'='+u);
ajouts.push(r[1]);
}
}
else
na.push(args[n]);
}
if(v==null)return v_read;
if(v||v.length||force_vide){
ajouts="="+ajouts.join("=")+"=";
var all=c.split('|');
for(n=0;n<all.length;n++){
if(ajouts.search("="+all[n]+"=")==-1){
if(typeof(v)!=='object'){
na.push(all[n]+'='+u);
}
else{
var id=((all[n].substring(-2)=='[]')?all[n]:all[n]+"[]");
for(p=0;p<v.length;p++)
na.push(id+'='+encodeURIComponent(v[p]));
}
}
}
}
if(na.length){
if(!sep)sep='&';
a=a+"?"+na.join(sep);
}
return a+ancre;
}
if(!window.var_zajax_content)
window.var_zajax_content='contenu';
jQuery(function(){
jQuery('form:not(.bouton_action_post)').parents('div.ajax')
.formulaire_dyn_ajax();
jQuery('div.ajaxbloc').ajaxbloc();
jQuery("input[placeholder]:text").placeholderLabel();
jQuery('a.popin').click(function(){if(jQuery.modalbox)jQuery.modalbox(parametre_url(this.href,"var_zajax",jQuery(this).attr('data-var_zajax')?jQuery(this).attr('data-var_zajax'):var_zajax_content));return false;});
});
onAjaxLoad(function(){
if(jQuery){
jQuery('form:not(.bouton_action_post)',this).parents('div.ajax')
.formulaire_dyn_ajax();
if(jQuery(this).is('div.ajaxbloc'))
jQuery(this).ajaxbloc();
else if(jQuery(this).closest('div.ajaxbloc').length)
jQuery(this).closest('div.ajaxbloc').ajaxbloc();
else
jQuery('div.ajaxbloc',this).ajaxbloc();
jQuery("input[placeholder]:text",this).placeholderLabel();
jQuery('a.popin',this).click(function(){if(jQuery.modalbox)jQuery.modalbox(parametre_url(this.href,"var_zajax",jQuery(this).attr('data-var_zajax')?jQuery(this).attr('data-var_zajax'):var_zajax_content));return false;});
}
});


/* ../prive/javascript/js.cookie.js?1551954343 */

;(function(factory){
var registeredInModuleLoader=false;
if(typeof define==='function'&&define.amd){
define(factory);
registeredInModuleLoader=true;
}
if(typeof exports==='object'){
module.exports=factory();
registeredInModuleLoader=true;
}
if(!registeredInModuleLoader){
var OldCookies=window.Cookies;
var api=window.Cookies=factory();
api.noConflict=function(){
window.Cookies=OldCookies;
return api;
};
}
}(function(){
function extend(){
var i=0;
var result={};
for(;i<arguments.length;i++){
var attributes=arguments[i];
for(var key in attributes){
result[key]=attributes[key];
}
}
return result;
}
function init(converter){
function api(key,value,attributes){
var result;
if(typeof document==='undefined'){
return;
}
if(arguments.length>1){
attributes=extend({
path:'/'
},api.defaults,attributes);
if(typeof attributes.expires==='number'){
var expires=new Date();
expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);
attributes.expires=expires;
}
attributes.expires=attributes.expires?attributes.expires.toUTCString():'';
try{
result=JSON.stringify(value);
if(/^[\{\[]/.test(result)){
value=result;
}
}catch(e){}
if(!converter.write){
value=encodeURIComponent(String(value))
.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);
}else{
value=converter.write(value,key);
}
key=encodeURIComponent(String(key));
key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);
key=key.replace(/[\(\)]/g,escape);
var stringifiedAttributes='';
for(var attributeName in attributes){
if(!attributes[attributeName]){
continue;
}
stringifiedAttributes+='; '+attributeName;
if(attributes[attributeName]===true){
continue;
}
stringifiedAttributes+='='+attributes[attributeName];
}
return(document.cookie=key+'='+value+stringifiedAttributes);
}
if(!key){
result={};
}
var cookies=document.cookie?document.cookie.split('; '):[];
var rdecode=/(%[0-9A-Z]{2})+/g;
var i=0;
for(;i<cookies.length;i++){
var parts=cookies[i].split('=');
var cookie=parts.slice(1).join('=');
if(cookie.charAt(0)==='"'){
cookie=cookie.slice(1,-1);
}
try{
var name=parts[0].replace(rdecode,decodeURIComponent);
cookie=converter.read?
converter.read(cookie,name):converter(cookie,name)||
cookie.replace(rdecode,decodeURIComponent);
if(this.json){
try{
cookie=JSON.parse(cookie);
}catch(e){}
}
if(key===name){
result=cookie;
break;
}
if(!key){
result[name]=cookie;
}
}catch(e){}
}
return result;
}
api.set=api;
api.get=function(key){
return api.call(api,key);
};
api.getJSON=function(){
return api.apply({
json:true
},[].slice.call(arguments));
};
api.defaults={};
api.remove=function(key,attributes){
api(key,'',extend(attributes,{
expires:-1
}));
};
api.withConverter=init;
return api;
}
return init(function(){});
}));


/* ../prive/javascript/jquery.cookie.js?1551954343 */

(function(factory){
if(typeof define==='function'&&define.amd){
define(['jquery'],factory);
}else if(typeof exports==='object'){
factory(require('jquery'));
}else{
factory(jQuery);
}
}(function($){
$.cookie=function(key,value,options){
if(value!==undefined&&!$.isFunction(value)){
console.warn("Deprecated jQuery.cookie(). Please use Cookies.set()");
console.trace();
return Cookies.set(key,value,options);
}else{
console.warn("Deprecated jQuery.cookie(). Please use Cookies.get()");
console.trace();
return Cookies.get(key,value);
}
};
$.removeCookie=function(key,options){
console.warn("Deprecated jQuery.removeCookie(). Please use Cookies.remove()");
console.trace();
Cookies.remove(key,options);
return true;
};
}));


/* ../prive/javascript/spip_barre.js?1551954343 */

var theSelection=false;
var clientPC=navigator.userAgent.toLowerCase();
var clientVer=parseInt(navigator.appVersion);
var is_ie=((clientPC.indexOf("msie")!=-1)&&(clientPC.indexOf("opera")==-1));
var is_nav=((clientPC.indexOf('mozilla')!=-1)&&(clientPC.indexOf('spoofer')==-1)
&&(clientPC.indexOf('compatible')==-1)&&(clientPC.indexOf('opera')==-1)
&&(clientPC.indexOf('webtv')==-1)&&(clientPC.indexOf('hotjava')==-1));
var is_moz=0;
var is_win=((clientPC.indexOf("win")!=-1)||(clientPC.indexOf("16bit")!=-1));
var is_mac=(clientPC.indexOf("mac")!=-1);
function barre_inserer(text,champ){
var txtarea=champ;
if(document.selection){
txtarea.focus();
var r=document.selection.createRange();
if(r==null){
txtarea.selectionStart=txtarea.value.length;
txtarea.selectionEnd=txtarea.selectionStart;
}
else{
var re=txtarea.createTextRange();
var rc=re.duplicate();
re.moveToBookmark(r.getBookmark());
rc.setEndPoint('EndToStart',re);
txtarea.selectionStart=rc.text.length;
txtarea.selectionEnd=rc.text.length+r.text.length;
}
}
mozWrap(txtarea,'',text);
}
function helpline(help,champ){
champ.value=help;
}
function setCaretToEnd(input){
setSelectionRange(input,input.value.length,input.value.length);
}
function setSelectionRange(input,selectionStart,selectionEnd){
if(input.setSelectionRange){
input.focus();
input.setSelectionRange(selectionStart,selectionEnd);
}
else if(input.createTextRange){
var range=input.createTextRange();
range.collapse(true);
range.moveEnd('character',selectionEnd);
range.moveStart('character',selectionStart);
range.select();
}
}
function mozWrap(txtarea,open,close)
{
var selLength=txtarea.textLength;
var selStart=txtarea.selectionStart;
var selEnd=txtarea.selectionEnd;
if(selEnd==1||selEnd==2)
selEnd=selLength;
var selTop=txtarea.scrollTop;
if(selEnd-selStart>0&&(txtarea.value).substring(selEnd-1,selEnd)==' ')selEnd=selEnd-1;
var s1=(txtarea.value).substring(0,selStart);
var s2=(txtarea.value).substring(selStart,selEnd)
var s3=(txtarea.value).substring(selEnd,selLength);
if((txtarea.value).substring(selEnd,selEnd+1)=='}'&&close.substring(0,1)=="}")close=close+" ";
if((txtarea.value).substring(selEnd-1,selEnd)=='}'&&close.substring(0,1)=="}")close=" "+close;
if((txtarea.value).substring(selStart-1,selStart)=='{'&&open.substring(0,1)=="{")open=" "+open;
if((txtarea.value).substring(selStart,selStart+1)=='{'&&open.substring(0,1)=="{")open=open+" ";
txtarea.value=s1+open+s2+close+s3;
selDeb=selStart+open.length;
selFin=selEnd+close.length;
window.setSelectionRange(txtarea,selDeb,selFin);
txtarea.scrollTop=selTop;
txtarea.focus();
return;
}
function storeCaret(textEl){
if(textEl.createTextRange)
textEl.caretPos=document.selection.createRange().duplicate();
}


/* ../prive/javascript/layer.js?1551954343 */
var url_chargee=new Array();
var xhr_actifs={};
function slide_horizontal(couche,slide,align,depart,etape){
var obj=jQuery("#"+couche);
if(!obj.length)return;
obj=obj.get(0);
if(!etape){
if(align=='left')depart=obj.scrollLeft;
else depart=obj.firstChild.offsetWidth-obj.scrollLeft;
etape=0;
}
etape=Math.round(etape)+1;
pos=Math.round(depart)+Math.round(((slide-depart)/10)*etape);
if(align=='left')obj.scrollLeft=pos;
else obj.scrollLeft=obj.firstChild.offsetWidth-pos;
if(etape<10)setTimeout("slide_horizontal('"+couche+"', '"+slide+"', '"+align+"', '"+depart+"', '"+etape+"')",60);
}
function changerhighlight(couche){
jQuery(couche)
.addClass('on')
.siblings()
.not(couche)
.removeClass('on');
jQuery('.petite-racine.on').removeClass('on');
}
function aff_selection(arg,idom,url,event){
var noeud=jQuery("#"+idom);
if(noeud.length){
noeud.hide();
charger_node_url(url+arg,noeud.get(0),'','',event);
}
return false;
}
function aff_selection_titre(titre,id,idom,nid)
{
var t=jQuery('#titreparent');
var p=t.closest('form');
t.attr('value',titre);
p.find('#'+nid).attr('value',id).trigger('change');
p.find("#"+idom).hide('fast');
if(p.is('.submit_plongeur'))p.get(p.length-1).submit();
else p.find("#"+idom).prev('div').find('a').eq(0).focus();
}
function aff_selection_provisoire(id,racine,url,col,sens,informer,event){
if(url.href=='javascript:void(0)'){
slide_horizontal(racine+'_principal',((col-1)*150),sens);
aff_selection(id,racine+"_selection",informer);
}
else{
charger_id_url(url.href,
racine+'_col_'+(col+1),
function(){
slide_horizontal(racine+'_principal',((col-1)*150),sens);
aff_selection(id,racine+"_selection",informer);
},
event);
}
return false;
}
function onkey_rechercher(valeur,rac,url,img,nid,init){
var Field=jQuery("#"+rac).get(0);
if(!valeur.length){
init=jQuery("#"+init).get(0);
if(init&&init.href){charger_node_url(init.href,Field);}
}else{
charger_node_url(url+valeur,
Field,
function(){
var n=Field.childNodes.length-1;
if((n==1)){
noeud=Field.childNodes[n].firstChild;
if(noeud.title)
aff_selection_titre(noeud.firstChild.nodeValue,noeud.title,rac,nid);
}
},
img);
}
return false;
}
var verifForm_clicked=false;
function verifForm(racine){
verifForm_clicked=false;
if(!jQuery)return;
if(!jQuery.browser.msie)
jQuery('form:not(.bouton_action_post)',racine||document).not('.verifformok')
.keypress(function(e){
if(
((e.ctrlKey&&(
(((e.charCode||e.keyCode)==115)||((e.charCode||e.keyCode)==83))
||(e.charCode==19&&e.keyCode==19)
)
)
||(e.keyCode==19&&jQuery.browser.opera))
&&!verifForm_clicked
){
verifForm_clicked=true;
jQuery(this).find('input[type=submit]')
.click();
return false;
}
}).addClass('verifformok');
else
jQuery('form:not(.bouton_action_post)',racine||document).not('.verifformok')
.keydown(function(e){
if(!e.charCode&&e.keyCode==119&&!verifForm_clicked){
verifForm_clicked=true;
jQuery(this).find('input[type=submit]')
.click();
return false;
}
}).addClass('verifformok');
}
function AjaxSqueezeNode(trig,target,f,event){
var i,callback;
if(!f){
callback=function(){verifForm(this);}
}
else{
callback=function(res,status){
f.apply(this,[res,status]);
verifForm(this);
}
}
valid=false;
if(typeof(window['_OUTILS_DEVELOPPEURS'])!='undefined'){
if(!(navigator.userAgent.toLowerCase().indexOf("firefox/1.0")))
valid=(typeof event=='object')&&(event.altKey||event.metaKey);
}
if(typeof(trig)=='string'){
if(valid){
window.open(trig+'&transformer_xml=valider_xml');
}else{
jQuery(target).animeajax();
}
res=jQuery.ajax({
"url":trig,
"complete":function(r,s){
AjaxRet(r,s,target,callback);
jQuery(target).endLoading();
}
});
return res;
}
if(valid){
var doc=window.open("","valider").document;
doc.open();
doc.close();
target=doc.body;
}
else{
jQuery(target).animeajax();
}
jQuery(trig).ajaxSubmit({
"target":target,
"success":function(res,status){
if(status=='error')return this.html('Erreur HTTP');
callback.apply(this,[res,status]);
},
"beforeSubmit":function(vars){
if(valid)
vars.push({"name":"transformer_xml","value":"valider_xml"});
return true;
}
});
return true;
}
function AjaxRet(res,status,target,callback){
if(res.aborted)return;
if(status=='error')return jQuery(target).html('HTTP Error');
jQuery(target)
.html(res.responseText)
.each(callback,[res.responseText,status]);
}
function charger_id_url(myUrl,myField,jjscript,event){
var Field=jQuery("#"+myField);
if(!Field.length)return true;
if(!myUrl){
Field.empty();
retour_id_url(Field.get(0),jjscript);
return true;
}
else
return charger_node_url(myUrl,Field.get(0),jjscript,jQuery('#'+'img_'+myField).get(0),event);
}
function charger_node_url(myUrl,Field,jjscript,img,event){
if(url_chargee[myUrl]){
var el=jQuery(Field).html(url_chargee[myUrl])[0];
retour_id_url(el,jjscript);
jQuery.spip.triggerAjaxLoad(el);
return false;
}
else{
if(img)img.style.visibility="visible";
if(xhr_actifs[Field]){xhr_actifs[Field].aborted=true;xhr_actifs[Field].abort();}
xhr_actifs[Field]=AjaxSqueezeNode(myUrl,
Field,
function(r){
xhr_actifs[Field]=undefined;
if(img)img.style.visibility="hidden";
url_chargee[myUrl]=r;
retour_id_url(Field,jjscript);
slide_horizontal($(Field).children().attr("id")+'_principal',$(Field).width(),$(Field).css("text-align"));
},
event);
return false;
}
}
function retour_id_url(Field,jjscript){
jQuery(Field).css({'visibility':'visible','display':'block'});
if(jjscript)jjscript();
}
function charger_node_url_si_vide(url,noeud,gifanime,jjscript,event){
if(noeud.style.display!='none'){
noeud.style.display='none';}
else{
if(noeud.innerHTML!=""){
noeud.style.visibility="visible";
noeud.style.display="block";
}else{
charger_node_url(url,noeud,'',gifanime,event);
}
}
return false;
}
jQuery(function(){
verifForm();
onAjaxLoad(verifForm);
});


/* ../prive/javascript/presentation.js?1551954343 */

$.fn.hoverClass=function(c){
return this.each(function(){
$(this).hover(
function(){$(this).addClass(c);},
function(){$(this).removeClass(c);}
);
});
};
var accepter_change_statut=false;
function selec_statut(id,type,decal,puce,script){
node=$('.imgstatut'+type+id);
if(!accepter_change_statut)
accepter_change_statut=confirm(confirm_changer_statut);
if(!accepter_change_statut||!node.length)return;
$('.statutdecal'+type+id)
.css('margin-left',decal+'px')
.removeClass('on');
$.get(script,function(c){
if(!c)
node.attr('src',puce);
else{
r=window.open();
r.document.write(c);
r.document.close();
}
});
}
function prepare_selec_statut(node,nom,type,id,action)
{
$(node)
.hoverClass('on')
.addClass('on')
.load(action+'&type='+type+'&id='+id);
}
jQuery.fn.showother=function(cible){
var me=this;
if(me.is('.replie')){
me.addClass('deplie').removeClass('replie');
jQuery(cible)
.slideDown('fast',
function(){
jQuery(me)
.addClass('blocdeplie')
.removeClass('blocreplie')
.removeClass('togglewait');
}
).trigger('deplie');
}
return this;
}
jQuery.fn.hideother=function(cible){
var me=this;
if(!me.is('.replie')){
me.addClass('replie').removeClass('deplie');
jQuery(cible)
.slideUp('fast',
function(){
jQuery(me)
.addClass('blocreplie')
.removeClass('blocdeplie')
.removeClass('togglewait');
}
).trigger('replie');
}
return this;
}
jQuery.fn.toggleother=function(cible){
if(this.is('.deplie'))
return this.hideother(cible);
else
return this.showother(cible);
}
jQuery.fn.depliant=function(cible){
if(!this.is('.depliant')){
var time=400;
var me=this;
this
.addClass('depliant');
if(!me.is('.deplie')){
me.addClass('hover')
.addClass('togglewait');
var t=setTimeout(function(){
me.toggleother(cible);
t=null;
},time);
}
me
.hover(function(e){
me
.addClass('hover');
if(!me.is('.deplie')){
me.addClass('togglewait');
if(t){clearTimeout(t);t=null;}
t=setTimeout(function(){
me.toggleother(cible);
t=null;
},time);
}
}
,function(e){
if(t){clearTimeout(t);t=null;}
me
.removeClass('hover');
})
.end();
}
return this;
}
jQuery.fn.depliant_clicancre=function(cible){
var me=this.parent();
if(me.is('.togglewait'))return false;
me.toggleother(cible);
return false;
}
function reloadExecPage(exec,blocs){
if(window.jQuery){
jQuery(function(){
if(!blocs)
blocs="#navigation,#extra";
jQuery(blocs).find('>div').ajaxReload({args:{exec:exec}});
if(exec.match(/_edit$/))
jQuery('body').addClass('edition');
else
jQuery('body').removeClass('edition');
})
}
}


/* ../prive/javascript/gadgets.js?1551954343 */
function init_gadgets(url_menu_rubrique){
jQuery('#boutonbandeautoutsite').one('mouseover',function(){
jQuery(this).siblings('ul').find('li:first>a').animeajax();
jQuery.ajax({
url:url_menu_rubrique,
success:function(c){
jQuery('#boutonbandeautoutsite').siblings('ul').remove();
jQuery('#boutonbandeautoutsite')
.after(c)
.parent().find('li').menuFocus();
}
});
});
}
function focus_zone(selecteur){
jQuery(selecteur).eq(0).find('a,input:visible').get(0).focus();
return false;
}
jQuery(function(){
init_gadgets(url_menu_rubrique);
var is_open=0;
jQuery.fn.menuItemOpen=function(){
jQuery(this)
.addClass('actif')
.parents('li').addClass('actif');
jQuery(this).siblings('li').removeClass('actif_tempo');
is_open=true;
return this;
}
jQuery.fn.menuItemClose=function(){
jQuery(this)
.removeClass('actif_tempo');
is_open=(jQuery(this).parents('ul').eq(-1).find('li.actif').length>0);
return this;
}
jQuery.fn.menuFocus=function(){
jQuery(this)
.hover(
function(){
if(this.timerout)
clearTimeout(this.timerout);
this.timerout=null;
this.timerin=null;
if(is_open)
jQuery(this).menuItemOpen();
else{
var me=jQuery(this);
this.timerin=setTimeout(function(){
me.menuItemOpen(null);
},200);
}
}
,
function(){
if(this.timerin)
clearTimeout(this.timerin);
this.timerin=null;
if(is_open){
var me=jQuery(this).removeClass('actif').addClass('actif_tempo');
this.timerout=setTimeout(function(){
me.menuItemClose();
},400);
}
}
)
.find('>a').focus(function(){
jQuery(this).parents('li').addClass('actif');
})
.blur(function(){
jQuery(this).parents('li').removeClass('actif');
});
return this;
}
jQuery('#bando_navigation').hover(function(){
hauteur=parseInt(jQuery('#bando_navigation .largeur').height())
+parseInt(jQuery('#bando_navigation').css("padding-top"))
+parseInt(jQuery('#bando_navigation').css("padding-bottom"));
jQuery('#bando_navigation ul li>ul').css({'top':hauteur});
});
jQuery('#bando_navigation li').menuFocus();
jQuery('#bando_outils ul.bandeau_rubriques li').menuFocus();
jQuery('#bandeau_haut #formRecherche input').hover(function(){
jQuery('#bandeau_haut ul.actif').trigger('mouseout');
});
jQuery('#bando_liens_rapides a')
.focus(function(){
jQuery('#bando_liens_rapides').addClass('actif');
})
.blur(function(){
jQuery('#bando_liens_rapides').removeClass('actif');
});
if(typeof window.test_accepte_ajax!="undefined"){
test_accepte_ajax();
}
});


/* ../plugins-dist/jquery_ui/prive/javascript/ui/jquery-ui.js */

(function(factory){
if(typeof define==="function"&&define.amd){
define(["jquery"],factory);
}else{
factory(jQuery);
}
}(function($){
$.ui=$.ui||{};
var version=$.ui.version="1.12.1";
var widgetUuid=0;
var widgetSlice=Array.prototype.slice;
$.cleanData=(function(orig){
return function(elems){
var events,elem,i;
for(i=0;(elem=elems[i])!=null;i++){
try{
events=$._data(elem,"events");
if(events&&events.remove){
$(elem).triggerHandler("remove");
}
}catch(e){}
}
orig(elems);
};
})($.cleanData);
$.widget=function(name,base,prototype){
var existingConstructor,constructor,basePrototype;
var proxiedPrototype={};
var namespace=name.split(".")[0];
name=name.split(".")[1];
var fullName=namespace+"-"+name;
if(!prototype){
prototype=base;
base=$.Widget;
}
if($.isArray(prototype)){
prototype=$.extend.apply(null,[{}].concat(prototype));
}
$.expr[":"][fullName.toLowerCase()]=function(elem){
return!!$.data(elem,fullName);
};
$[namespace]=$[namespace]||{};
existingConstructor=$[namespace][name];
constructor=$[namespace][name]=function(options,element){
if(!this._createWidget){
return new constructor(options,element);
}
if(arguments.length){
this._createWidget(options,element);
}
};
$.extend(constructor,existingConstructor,{
version:prototype.version,
_proto:$.extend({},prototype),
_childConstructors:[]
});
basePrototype=new base();
basePrototype.options=$.widget.extend({},basePrototype.options);
$.each(prototype,function(prop,value){
if(!$.isFunction(value)){
proxiedPrototype[prop]=value;
return;
}
proxiedPrototype[prop]=(function(){
function _super(){
return base.prototype[prop].apply(this,arguments);
}
function _superApply(args){
return base.prototype[prop].apply(this,args);
}
return function(){
var __super=this._super;
var __superApply=this._superApply;
var returnValue;
this._super=_super;
this._superApply=_superApply;
returnValue=value.apply(this,arguments);
this._super=__super;
this._superApply=__superApply;
return returnValue;
};
})();
});
constructor.prototype=$.widget.extend(basePrototype,{
widgetEventPrefix:existingConstructor?(basePrototype.widgetEventPrefix||name):name
},proxiedPrototype,{
constructor:constructor,
namespace:namespace,
widgetName:name,
widgetFullName:fullName
});
if(existingConstructor){
$.each(existingConstructor._childConstructors,function(i,child){
var childPrototype=child.prototype;
$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,
child._proto);
});
delete existingConstructor._childConstructors;
}else{
base._childConstructors.push(constructor);
}
$.widget.bridge(name,constructor);
return constructor;
};
$.widget.extend=function(target){
var input=widgetSlice.call(arguments,1);
var inputIndex=0;
var inputLength=input.length;
var key;
var value;
for(;inputIndex<inputLength;inputIndex++){
for(key in input[inputIndex]){
value=input[inputIndex][key];
if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){
if($.isPlainObject(value)){
target[key]=$.isPlainObject(target[key])?
$.widget.extend({},target[key],value):
$.widget.extend({},value);
}else{
target[key]=value;
}
}
}
}
return target;
};
$.widget.bridge=function(name,object){
var fullName=object.prototype.widgetFullName||name;
$.fn[name]=function(options){
var isMethodCall=typeof options==="string";
var args=widgetSlice.call(arguments,1);
var returnValue=this;
if(isMethodCall){
if(!this.length&&options==="instance"){
returnValue=undefined;
}else{
this.each(function(){
var methodValue;
var instance=$.data(this,fullName);
if(options==="instance"){
returnValue=instance;
return false;
}
if(!instance){
return $.error("cannot call methods on "+name+
" prior to initialization; "+
"attempted to call method '"+options+"'");
}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){
return $.error("no such method '"+options+"' for "+name+
" widget instance");
}
methodValue=instance[options].apply(instance,args);
if(methodValue!==instance&&methodValue!==undefined){
returnValue=methodValue&&methodValue.jquery?
returnValue.pushStack(methodValue.get()):
methodValue;
return false;
}
});
}
}else{
if(args.length){
options=$.widget.extend.apply(null,[options].concat(args));
}
this.each(function(){
var instance=$.data(this,fullName);
if(instance){
instance.option(options||{});
if(instance._init){
instance._init();
}
}else{
$.data(this,fullName,new object(options,this));
}
});
}
return returnValue;
};
};
$.Widget=function(){};
$.Widget._childConstructors=[];
$.Widget.prototype={
widgetName:"widget",
widgetEventPrefix:"",
defaultElement:"<div>",
options:{
classes:{},
disabled:false,
create:null
},
_createWidget:function(options,element){
element=$(element||this.defaultElement||this)[0];
this.element=$(element);
this.uuid=widgetUuid++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.bindings=$();
this.hoverable=$();
this.focusable=$();
this.classesElementLookup={};
if(element!==this){
$.data(element,this.widgetFullName,this);
this._on(true,this.element,{
remove:function(event){
if(event.target===element){
this.destroy();
}
}
});
this.document=$(element.style?
element.ownerDocument:
element.document||element);
this.window=$(this.document[0].defaultView||this.document[0].parentWindow);
}
this.options=$.widget.extend({},
this.options,
this._getCreateOptions(),
options);
this._create();
if(this.options.disabled){
this._setOptionDisabled(this.options.disabled);
}
this._trigger("create",null,this._getCreateEventData());
this._init();
},
_getCreateOptions:function(){
return{};
},
_getCreateEventData:$.noop,
_create:$.noop,
_init:$.noop,
destroy:function(){
var that=this;
this._destroy();
$.each(this.classesElementLookup,function(key,value){
that._removeClass(value,key);
});
this.element
.off(this.eventNamespace)
.removeData(this.widgetFullName);
this.widget()
.off(this.eventNamespace)
.removeAttr("aria-disabled");
this.bindings.off(this.eventNamespace);
},
_destroy:$.noop,
widget:function(){
return this.element;
},
option:function(key,value){
var options=key;
var parts;
var curOption;
var i;
if(arguments.length===0){
return $.widget.extend({},this.options);
}
if(typeof key==="string"){
options={};
parts=key.split(".");
key=parts.shift();
if(parts.length){
curOption=options[key]=$.widget.extend({},this.options[key]);
for(i=0;i<parts.length-1;i++){
curOption[parts[i]]=curOption[parts[i]]||{};
curOption=curOption[parts[i]];
}
key=parts.pop();
if(arguments.length===1){
return curOption[key]===undefined?null:curOption[key];
}
curOption[key]=value;
}else{
if(arguments.length===1){
return this.options[key]===undefined?null:this.options[key];
}
options[key]=value;
}
}
this._setOptions(options);
return this;
},
_setOptions:function(options){
var key;
for(key in options){
this._setOption(key,options[key]);
}
return this;
},
_setOption:function(key,value){
if(key==="classes"){
this._setOptionClasses(value);
}
this.options[key]=value;
if(key==="disabled"){
this._setOptionDisabled(value);
}
return this;
},
_setOptionClasses:function(value){
var classKey,elements,currentElements;
for(classKey in value){
currentElements=this.classesElementLookup[classKey];
if(value[classKey]===this.options.classes[classKey]||
!currentElements||
!currentElements.length){
continue;
}
elements=$(currentElements.get());
this._removeClass(currentElements,classKey);
elements.addClass(this._classes({
element:elements,
keys:classKey,
classes:value,
add:true
}));
}
},
_setOptionDisabled:function(value){
this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!value);
if(value){
this._removeClass(this.hoverable,null,"ui-state-hover");
this._removeClass(this.focusable,null,"ui-state-focus");
}
},
enable:function(){
return this._setOptions({disabled:false});
},
disable:function(){
return this._setOptions({disabled:true});
},
_classes:function(options){
var full=[];
var that=this;
options=$.extend({
element:this.element,
classes:this.options.classes||{}
},options);
function processClassString(classes,checkOption){
var current,i;
for(i=0;i<classes.length;i++){
current=that.classesElementLookup[classes[i]]||$();
if(options.add){
current=$($.unique(current.get().concat(options.element.get())));
}else{
current=$(current.not(options.element).get());
}
that.classesElementLookup[classes[i]]=current;
full.push(classes[i]);
if(checkOption&&options.classes[classes[i]]){
full.push(options.classes[classes[i]]);
}
}
}
this._on(options.element,{
"remove":"_untrackClassesElement"
});
if(options.keys){
processClassString(options.keys.match(/\S+/g)||[],true);
}
if(options.extra){
processClassString(options.extra.match(/\S+/g)||[]);
}
return full.join(" ");
},
_untrackClassesElement:function(event){
var that=this;
$.each(that.classesElementLookup,function(key,value){
if($.inArray(event.target,value)!==-1){
that.classesElementLookup[key]=$(value.not(event.target).get());
}
});
},
_removeClass:function(element,keys,extra){
return this._toggleClass(element,keys,extra,false);
},
_addClass:function(element,keys,extra){
return this._toggleClass(element,keys,extra,true);
},
_toggleClass:function(element,keys,extra,add){
add=(typeof add==="boolean")?add:extra;
var shift=(typeof element==="string"||element===null),
options={
extra:shift?keys:extra,
keys:shift?element:keys,
element:shift?this.element:element,
add:add
};
options.element.toggleClass(this._classes(options),add);
return this;
},
_on:function(suppressDisabledCheck,element,handlers){
var delegateElement;
var instance=this;
if(typeof suppressDisabledCheck!=="boolean"){
handlers=element;
element=suppressDisabledCheck;
suppressDisabledCheck=false;
}
if(!handlers){
handlers=element;
element=this.element;
delegateElement=this.widget();
}else{
element=delegateElement=$(element);
this.bindings=this.bindings.add(element);
}
$.each(handlers,function(event,handler){
function handlerProxy(){
if(!suppressDisabledCheck&&
(instance.options.disabled===true||
$(this).hasClass("ui-state-disabled"))){
return;
}
return(typeof handler==="string"?instance[handler]:handler)
.apply(instance,arguments);
}
if(typeof handler!=="string"){
handlerProxy.guid=handler.guid=
handler.guid||handlerProxy.guid||$.guid++;
}
var match=event.match(/^([\w:-]*)\s*(.*)$/);
var eventName=match[1]+instance.eventNamespace;
var selector=match[2];
if(selector){
delegateElement.on(eventName,selector,handlerProxy);
}else{
element.on(eventName,handlerProxy);
}
});
},
_off:function(element,eventName){
eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+
this.eventNamespace;
element.off(eventName).off(eventName);
this.bindings=$(this.bindings.not(element).get());
this.focusable=$(this.focusable.not(element).get());
this.hoverable=$(this.hoverable.not(element).get());
},
_delay:function(handler,delay){
function handlerProxy(){
return(typeof handler==="string"?instance[handler]:handler)
.apply(instance,arguments);
}
var instance=this;
return setTimeout(handlerProxy,delay||0);
},
_hoverable:function(element){
this.hoverable=this.hoverable.add(element);
this._on(element,{
mouseenter:function(event){
this._addClass($(event.currentTarget),null,"ui-state-hover");
},
mouseleave:function(event){
this._removeClass($(event.currentTarget),null,"ui-state-hover");
}
});
},
_focusable:function(element){
this.focusable=this.focusable.add(element);
this._on(element,{
focusin:function(event){
this._addClass($(event.currentTarget),null,"ui-state-focus");
},
focusout:function(event){
this._removeClass($(event.currentTarget),null,"ui-state-focus");
}
});
},
_trigger:function(type,event,data){
var prop,orig;
var callback=this.options[type];
data=data||{};
event=$.Event(event);
event.type=(type===this.widgetEventPrefix?
type:
this.widgetEventPrefix+type).toLowerCase();
event.target=this.element[0];
orig=event.originalEvent;
if(orig){
for(prop in orig){
if(!(prop in event)){
event[prop]=orig[prop];
}
}
}
this.element.trigger(event,data);
return!($.isFunction(callback)&&
callback.apply(this.element[0],[event].concat(data))===false||
event.isDefaultPrevented());
}
};
$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){
$.Widget.prototype["_"+method]=function(element,options,callback){
if(typeof options==="string"){
options={effect:options};
}
var hasOptions;
var effectName=!options?
method:
options===true||typeof options==="number"?
defaultEffect:
options.effect||defaultEffect;
options=options||{};
if(typeof options==="number"){
options={duration:options};
}
hasOptions=!$.isEmptyObject(options);
options.complete=callback;
if(options.delay){
element.delay(options.delay);
}
if(hasOptions&&$.effects&&$.effects.effect[effectName]){
element[method](options);
}else if(effectName!==method&&element[effectName]){
element[effectName](options.duration,options.easing,callback);
}else{
element.queue(function(next){
$(this)[method]();
if(callback){
callback.call(element[0]);
}
next();
});
}
};
});
var widget=$.widget;
(function(){
var cachedScrollbarWidth,
max=Math.max,
abs=Math.abs,
rhorizontal=/left|center|right/,
rvertical=/top|center|bottom/,
roffset=/[\+\-]\d+(\.[\d]+)?%?/,
rposition=/^\w+/,
rpercent=/%$/,
_position=$.fn.position;
function getOffsets(offsets,width,height){
return[
parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),
parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)
];
}
function parseCss(element,property){
return parseInt($.css(element,property),10)||0;
}
function getDimensions(elem){
var raw=elem[0];
if(raw.nodeType===9){
return{
width:elem.width(),
height:elem.height(),
offset:{top:0,left:0}
};
}
if($.isWindow(raw)){
return{
width:elem.width(),
height:elem.height(),
offset:{top:elem.scrollTop(),left:elem.scrollLeft()}
};
}
if(raw.preventDefault){
return{
width:0,
height:0,
offset:{top:raw.pageY,left:raw.pageX}
};
}
return{
width:elem.outerWidth(),
height:elem.outerHeight(),
offset:elem.offset()
};
}
$.position={
scrollbarWidth:function(){
if(cachedScrollbarWidth!==undefined){
return cachedScrollbarWidth;
}
var w1,w2,
div=$("<div "+
"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>"+
"<div style='height:100px;width:auto;'></div></div>"),
innerDiv=div.children()[0];
$("body").append(div);
w1=innerDiv.offsetWidth;
div.css("overflow","scroll");
w2=innerDiv.offsetWidth;
if(w1===w2){
w2=div[0].clientWidth;
}
div.remove();
return(cachedScrollbarWidth=w1-w2);
},
getScrollInfo:function(within){
var overflowX=within.isWindow||within.isDocument?"":
within.element.css("overflow-x"),
overflowY=within.isWindow||within.isDocument?"":
within.element.css("overflow-y"),
hasOverflowX=overflowX==="scroll"||
(overflowX==="auto"&&within.width<within.element[0].scrollWidth),
hasOverflowY=overflowY==="scroll"||
(overflowY==="auto"&&within.height<within.element[0].scrollHeight);
return{
width:hasOverflowY?$.position.scrollbarWidth():0,
height:hasOverflowX?$.position.scrollbarWidth():0
};
},
getWithinInfo:function(element){
var withinElement=$(element||window),
isWindow=$.isWindow(withinElement[0]),
isDocument=!!withinElement[0]&&withinElement[0].nodeType===9,
hasOffset=!isWindow&&!isDocument;
return{
element:withinElement,
isWindow:isWindow,
isDocument:isDocument,
offset:hasOffset?$(element).offset():{left:0,top:0},
scrollLeft:withinElement.scrollLeft(),
scrollTop:withinElement.scrollTop(),
width:withinElement.outerWidth(),
height:withinElement.outerHeight()
};
}
};
$.fn.position=function(options){
if(!options||!options.of){
return _position.apply(this,arguments);
}
options=$.extend({},options);
var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,
target=$(options.of),
within=$.position.getWithinInfo(options.within),
scrollInfo=$.position.getScrollInfo(within),
collision=(options.collision||"flip").split(" "),
offsets={};
dimensions=getDimensions(target);
if(target[0].preventDefault){
options.at="left top";
}
targetWidth=dimensions.width;
targetHeight=dimensions.height;
targetOffset=dimensions.offset;
basePosition=$.extend({},targetOffset);
$.each(["my","at"],function(){
var pos=(options[this]||"").split(" "),
horizontalOffset,
verticalOffset;
if(pos.length===1){
pos=rhorizontal.test(pos[0])?
pos.concat(["center"]):
rvertical.test(pos[0])?
["center"].concat(pos):
["center","center"];
}
pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";
pos[1]=rvertical.test(pos[1])?pos[1]:"center";
horizontalOffset=roffset.exec(pos[0]);
verticalOffset=roffset.exec(pos[1]);
offsets[this]=[
horizontalOffset?horizontalOffset[0]:0,
verticalOffset?verticalOffset[0]:0
];
options[this]=[
rposition.exec(pos[0])[0],
rposition.exec(pos[1])[0]
];
});
if(collision.length===1){
collision[1]=collision[0];
}
if(options.at[0]==="right"){
basePosition.left+=targetWidth;
}else if(options.at[0]==="center"){
basePosition.left+=targetWidth/2;
}
if(options.at[1]==="bottom"){
basePosition.top+=targetHeight;
}else if(options.at[1]==="center"){
basePosition.top+=targetHeight/2;
}
atOffset=getOffsets(offsets.at,targetWidth,targetHeight);
basePosition.left+=atOffset[0];
basePosition.top+=atOffset[1];
return this.each(function(){
var collisionPosition,using,
elem=$(this),
elemWidth=elem.outerWidth(),
elemHeight=elem.outerHeight(),
marginLeft=parseCss(this,"marginLeft"),
marginTop=parseCss(this,"marginTop"),
collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+
scrollInfo.width,
collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+
scrollInfo.height,
position=$.extend({},basePosition),
myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());
if(options.my[0]==="right"){
position.left-=elemWidth;
}else if(options.my[0]==="center"){
position.left-=elemWidth/2;
}
if(options.my[1]==="bottom"){
position.top-=elemHeight;
}else if(options.my[1]==="center"){
position.top-=elemHeight/2;
}
position.left+=myOffset[0];
position.top+=myOffset[1];
collisionPosition={
marginLeft:marginLeft,
marginTop:marginTop
};
$.each(["left","top"],function(i,dir){
if($.ui.position[collision[i]]){
$.ui.position[collision[i]][dir](position,{
targetWidth:targetWidth,
targetHeight:targetHeight,
elemWidth:elemWidth,
elemHeight:elemHeight,
collisionPosition:collisionPosition,
collisionWidth:collisionWidth,
collisionHeight:collisionHeight,
offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],
my:options.my,
at:options.at,
within:within,
elem:elem
});
}
});
if(options.using){
using=function(props){
var left=targetOffset.left-position.left,
right=left+targetWidth-elemWidth,
top=targetOffset.top-position.top,
bottom=top+targetHeight-elemHeight,
feedback={
target:{
element:target,
left:targetOffset.left,
top:targetOffset.top,
width:targetWidth,
height:targetHeight
},
element:{
element:elem,
left:position.left,
top:position.top,
width:elemWidth,
height:elemHeight
},
horizontal:right<0?"left":left>0?"right":"center",
vertical:bottom<0?"top":top>0?"bottom":"middle"
};
if(targetWidth<elemWidth&&abs(left+right)<targetWidth){
feedback.horizontal="center";
}
if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){
feedback.vertical="middle";
}
if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){
feedback.important="horizontal";
}else{
feedback.important="vertical";
}
options.using.call(this,props,feedback);
};
}
elem.offset($.extend(position,{using:using}));
});
};
$.ui.position={
fit:{
left:function(position,data){
var within=data.within,
withinOffset=within.isWindow?within.scrollLeft:within.offset.left,
outerWidth=within.width,
collisionPosLeft=position.left-data.collisionPosition.marginLeft,
overLeft=withinOffset-collisionPosLeft,
overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,
newOverRight;
if(data.collisionWidth>outerWidth){
if(overLeft>0&&overRight<=0){
newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-
withinOffset;
position.left+=overLeft-newOverRight;
}else if(overRight>0&&overLeft<=0){
position.left=withinOffset;
}else{
if(overLeft>overRight){
position.left=withinOffset+outerWidth-data.collisionWidth;
}else{
position.left=withinOffset;
}
}
}else if(overLeft>0){
position.left+=overLeft;
}else if(overRight>0){
position.left-=overRight;
}else{
position.left=max(position.left-collisionPosLeft,position.left);
}
},
top:function(position,data){
var within=data.within,
withinOffset=within.isWindow?within.scrollTop:within.offset.top,
outerHeight=data.within.height,
collisionPosTop=position.top-data.collisionPosition.marginTop,
overTop=withinOffset-collisionPosTop,
overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,
newOverBottom;
if(data.collisionHeight>outerHeight){
if(overTop>0&&overBottom<=0){
newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-
withinOffset;
position.top+=overTop-newOverBottom;
}else if(overBottom>0&&overTop<=0){
position.top=withinOffset;
}else{
if(overTop>overBottom){
position.top=withinOffset+outerHeight-data.collisionHeight;
}else{
position.top=withinOffset;
}
}
}else if(overTop>0){
position.top+=overTop;
}else if(overBottom>0){
position.top-=overBottom;
}else{
position.top=max(position.top-collisionPosTop,position.top);
}
}
},
flip:{
left:function(position,data){
var within=data.within,
withinOffset=within.offset.left+within.scrollLeft,
outerWidth=within.width,
offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,
collisionPosLeft=position.left-data.collisionPosition.marginLeft,
overLeft=collisionPosLeft-offsetLeft,
overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,
myOffset=data.my[0]==="left"?
-data.elemWidth:
data.my[0]==="right"?
data.elemWidth:
0,
atOffset=data.at[0]==="left"?
data.targetWidth:
data.at[0]==="right"?
-data.targetWidth:
0,
offset=-2*data.offset[0],
newOverRight,
newOverLeft;
if(overLeft<0){
newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-
outerWidth-withinOffset;
if(newOverRight<0||newOverRight<abs(overLeft)){
position.left+=myOffset+atOffset+offset;
}
}else if(overRight>0){
newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+
atOffset+offset-offsetLeft;
if(newOverLeft>0||abs(newOverLeft)<overRight){
position.left+=myOffset+atOffset+offset;
}
}
},
top:function(position,data){
var within=data.within,
withinOffset=within.offset.top+within.scrollTop,
outerHeight=within.height,
offsetTop=within.isWindow?within.scrollTop:within.offset.top,
collisionPosTop=position.top-data.collisionPosition.marginTop,
overTop=collisionPosTop-offsetTop,
overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,
top=data.my[1]==="top",
myOffset=top?
-data.elemHeight:
data.my[1]==="bottom"?
data.elemHeight:
0,
atOffset=data.at[1]==="top"?
data.targetHeight:
data.at[1]==="bottom"?
-data.targetHeight:
0,
offset=-2*data.offset[1],
newOverTop,
newOverBottom;
if(overTop<0){
newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-
outerHeight-withinOffset;
if(newOverBottom<0||newOverBottom<abs(overTop)){
position.top+=myOffset+atOffset+offset;
}
}else if(overBottom>0){
newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+
offset-offsetTop;
if(newOverTop>0||abs(newOverTop)<overBottom){
position.top+=myOffset+atOffset+offset;
}
}
}
},
flipfit:{
left:function(){
$.ui.position.flip.left.apply(this,arguments);
$.ui.position.fit.left.apply(this,arguments);
},
top:function(){
$.ui.position.flip.top.apply(this,arguments);
$.ui.position.fit.top.apply(this,arguments);
}
}
};
})();
var position=$.ui.position;
var data=$.extend($.expr[":"],{
data:$.expr.createPseudo?
$.expr.createPseudo(function(dataName){
return function(elem){
return!!$.data(elem,dataName);
};
}):
function(elem,i,match){
return!!$.data(elem,match[3]);
}
});
var disableSelection=$.fn.extend({
disableSelection:(function(){
var eventType="onselectstart"in document.createElement("div")?
"selectstart":
"mousedown";
return function(){
return this.on(eventType+".ui-disableSelection",function(event){
event.preventDefault();
});
};
})(),
enableSelection:function(){
return this.off(".ui-disableSelection");
}
});
var dataSpace="ui-effects-",
dataSpaceStyle="ui-effects-style",
dataSpaceAnimated="ui-effects-animated",
jQuery=$;
$.effects={
effect:{}
};
(function(jQuery,undefined){
var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor "+
"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,
stringParsers=[{
re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse:function(execResult){
return[
execResult[1],
execResult[2],
execResult[3],
execResult[4]
];
}
},{
re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse:function(execResult){
return[
execResult[1]*2.55,
execResult[2]*2.55,
execResult[3]*2.55,
execResult[4]
];
}
},{
re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
parse:function(execResult){
return[
parseInt(execResult[1],16),
parseInt(execResult[2],16),
parseInt(execResult[3],16)
];
}
},{
re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,
parse:function(execResult){
return[
parseInt(execResult[1]+execResult[1],16),
parseInt(execResult[2]+execResult[2],16),
parseInt(execResult[3]+execResult[3],16)
];
}
},{
re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
space:"hsla",
parse:function(execResult){
return[
execResult[1],
execResult[2]/100,
execResult[3]/100,
execResult[4]
];
}
}],
color=jQuery.Color=function(color,green,blue,alpha){
return new jQuery.Color.fn.parse(color,green,blue,alpha);
},
spaces={
rgba:{
props:{
red:{
idx:0,
type:"byte"
},
green:{
idx:1,
type:"byte"
},
blue:{
idx:2,
type:"byte"
}
}
},
hsla:{
props:{
hue:{
idx:0,
type:"degrees"
},
saturation:{
idx:1,
type:"percent"
},
lightness:{
idx:2,
type:"percent"
}
}
}
},
propTypes={
"byte":{
floor:true,
max:255
},
"percent":{
max:1
},
"degrees":{
mod:360,
floor:true
}
},
support=color.support={},
supportElem=jQuery("<p>")[0],
colors,
each=jQuery.each;
supportElem.style.cssText="background-color:rgba(1,1,1,.5)";
support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;
each(spaces,function(spaceName,space){
space.cache="_"+spaceName;
space.props.alpha={
idx:3,
type:"percent",
def:1
};
});
function clamp(value,prop,allowEmpty){
var type=propTypes[prop.type]||{};
if(value==null){
return(allowEmpty||!prop.def)?null:prop.def;
}
value=type.floor?~~value:parseFloat(value);
if(isNaN(value)){
return prop.def;
}
if(type.mod){
return(value+type.mod)%type.mod;
}
return 0>value?0:type.max<value?type.max:value;
}
function stringParse(string){
var inst=color(),
rgba=inst._rgba=[];
string=string.toLowerCase();
each(stringParsers,function(i,parser){
var parsed,
match=parser.re.exec(string),
values=match&&parser.parse(match),
spaceName=parser.space||"rgba";
if(values){
parsed=inst[spaceName](values);
inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];
rgba=inst._rgba=parsed._rgba;
return false;
}
});
if(rgba.length){
if(rgba.join()==="0,0,0,0"){
jQuery.extend(rgba,colors.transparent);
}
return inst;
}
return colors[string];
}
color.fn=jQuery.extend(color.prototype,{
parse:function(red,green,blue,alpha){
if(red===undefined){
this._rgba=[null,null,null,null];
return this;
}
if(red.jquery||red.nodeType){
red=jQuery(red).css(green);
green=undefined;
}
var inst=this,
type=jQuery.type(red),
rgba=this._rgba=[];
if(green!==undefined){
red=[red,green,blue,alpha];
type="array";
}
if(type==="string"){
return this.parse(stringParse(red)||colors._default);
}
if(type==="array"){
each(spaces.rgba.props,function(key,prop){
rgba[prop.idx]=clamp(red[prop.idx],prop);
});
return this;
}
if(type==="object"){
if(red instanceof color){
each(spaces,function(spaceName,space){
if(red[space.cache]){
inst[space.cache]=red[space.cache].slice();
}
});
}else{
each(spaces,function(spaceName,space){
var cache=space.cache;
each(space.props,function(key,prop){
if(!inst[cache]&&space.to){
if(key==="alpha"||red[key]==null){
return;
}
inst[cache]=space.to(inst._rgba);
}
inst[cache][prop.idx]=clamp(red[key],prop,true);
});
if(inst[cache]&&
jQuery.inArray(null,inst[cache].slice(0,3))<0){
inst[cache][3]=1;
if(space.from){
inst._rgba=space.from(inst[cache]);
}
}
});
}
return this;
}
},
is:function(compare){
var is=color(compare),
same=true,
inst=this;
each(spaces,function(_,space){
var localCache,
isCache=is[space.cache];
if(isCache){
localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];
each(space.props,function(_,prop){
if(isCache[prop.idx]!=null){
same=(isCache[prop.idx]===localCache[prop.idx]);
return same;
}
});
}
return same;
});
return same;
},
_space:function(){
var used=[],
inst=this;
each(spaces,function(spaceName,space){
if(inst[space.cache]){
used.push(spaceName);
}
});
return used.pop();
},
transition:function(other,distance){
var end=color(other),
spaceName=end._space(),
space=spaces[spaceName],
startColor=this.alpha()===0?color("transparent"):this,
start=startColor[space.cache]||space.to(startColor._rgba),
result=start.slice();
end=end[space.cache];
each(space.props,function(key,prop){
var index=prop.idx,
startValue=start[index],
endValue=end[index],
type=propTypes[prop.type]||{};
if(endValue===null){
return;
}
if(startValue===null){
result[index]=endValue;
}else{
if(type.mod){
if(endValue-startValue>type.mod/2){
startValue+=type.mod;
}else if(startValue-endValue>type.mod/2){
startValue-=type.mod;
}
}
result[index]=clamp((endValue-startValue)*distance+startValue,prop);
}
});
return this[spaceName](result);
},
blend:function(opaque){
if(this._rgba[3]===1){
return this;
}
var rgb=this._rgba.slice(),
a=rgb.pop(),
blend=color(opaque)._rgba;
return color(jQuery.map(rgb,function(v,i){
return(1-a)*blend[i]+a*v;
}));
},
toRgbaString:function(){
var prefix="rgba(",
rgba=jQuery.map(this._rgba,function(v,i){
return v==null?(i>2?1:0):v;
});
if(rgba[3]===1){
rgba.pop();
prefix="rgb(";
}
return prefix+rgba.join()+")";
},
toHslaString:function(){
var prefix="hsla(",
hsla=jQuery.map(this.hsla(),function(v,i){
if(v==null){
v=i>2?1:0;
}
if(i&&i<3){
v=Math.round(v*100)+"%";
}
return v;
});
if(hsla[3]===1){
hsla.pop();
prefix="hsl(";
}
return prefix+hsla.join()+")";
},
toHexString:function(includeAlpha){
var rgba=this._rgba.slice(),
alpha=rgba.pop();
if(includeAlpha){
rgba.push(~~(alpha*255));
}
return"#"+jQuery.map(rgba,function(v){
v=(v||0).toString(16);
return v.length===1?"0"+v:v;
}).join("");
},
toString:function(){
return this._rgba[3]===0?"transparent":this.toRgbaString();
}
});
color.fn.parse.prototype=color.fn;
function hue2rgb(p,q,h){
h=(h+1)%1;
if(h*6<1){
return p+(q-p)*h*6;
}
if(h*2<1){
return q;
}
if(h*3<2){
return p+(q-p)*((2/3)-h)*6;
}
return p;
}
spaces.hsla.to=function(rgba){
if(rgba[0]==null||rgba[1]==null||rgba[2]==null){
return[null,null,null,rgba[3]];
}
var r=rgba[0]/255,
g=rgba[1]/255,
b=rgba[2]/255,
a=rgba[3],
max=Math.max(r,g,b),
min=Math.min(r,g,b),
diff=max-min,
add=max+min,
l=add*0.5,
h,s;
if(min===max){
h=0;
}else if(r===max){
h=(60*(g-b)/diff)+360;
}else if(g===max){
h=(60*(b-r)/diff)+120;
}else{
h=(60*(r-g)/diff)+240;
}
if(diff===0){
s=0;
}else if(l<=0.5){
s=diff/add;
}else{
s=diff/(2-add);
}
return[Math.round(h)%360,s,l,a==null?1:a];
};
spaces.hsla.from=function(hsla){
if(hsla[0]==null||hsla[1]==null||hsla[2]==null){
return[null,null,null,hsla[3]];
}
var h=hsla[0]/360,
s=hsla[1],
l=hsla[2],
a=hsla[3],
q=l<=0.5?l*(1+s):l+s-l*s,
p=2*l-q;
return[
Math.round(hue2rgb(p,q,h+(1/3))*255),
Math.round(hue2rgb(p,q,h)*255),
Math.round(hue2rgb(p,q,h-(1/3))*255),
a
];
};
each(spaces,function(spaceName,space){
var props=space.props,
cache=space.cache,
to=space.to,
from=space.from;
color.fn[spaceName]=function(value){
if(to&&!this[cache]){
this[cache]=to(this._rgba);
}
if(value===undefined){
return this[cache].slice();
}
var ret,
type=jQuery.type(value),
arr=(type==="array"||type==="object")?value:arguments,
local=this[cache].slice();
each(props,function(key,prop){
var val=arr[type==="object"?key:prop.idx];
if(val==null){
val=local[prop.idx];
}
local[prop.idx]=clamp(val,prop);
});
if(from){
ret=color(from(local));
ret[cache]=local;
return ret;
}else{
return color(local);
}
};
each(props,function(key,prop){
if(color.fn[key]){
return;
}
color.fn[key]=function(value){
var vtype=jQuery.type(value),
fn=(key==="alpha"?(this._hsla?"hsla":"rgba"):spaceName),
local=this[fn](),
cur=local[prop.idx],
match;
if(vtype==="undefined"){
return cur;
}
if(vtype==="function"){
value=value.call(this,cur);
vtype=jQuery.type(value);
}
if(value==null&&prop.empty){
return this;
}
if(vtype==="string"){
match=rplusequals.exec(value);
if(match){
value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1);
}
}
local[prop.idx]=value;
return this[fn](local);
};
});
});
color.hook=function(hook){
var hooks=hook.split(" ");
each(hooks,function(i,hook){
jQuery.cssHooks[hook]={
set:function(elem,value){
var parsed,curElem,
backgroundColor="";
if(value!=="transparent"&&(jQuery.type(value)!=="string"||
(parsed=stringParse(value)))){
value=color(parsed||value);
if(!support.rgba&&value._rgba[3]!==1){
curElem=hook==="backgroundColor"?elem.parentNode:elem;
while(
(backgroundColor===""||backgroundColor==="transparent")&&
curElem&&curElem.style
){
try{
backgroundColor=jQuery.css(curElem,"backgroundColor");
curElem=curElem.parentNode;
}catch(e){
}
}
value=value.blend(backgroundColor&&backgroundColor!=="transparent"?
backgroundColor:
"_default");
}
value=value.toRgbaString();
}
try{
elem.style[hook]=value;
}catch(e){
}
}
};
jQuery.fx.step[hook]=function(fx){
if(!fx.colorInit){
fx.start=color(fx.elem,hook);
fx.end=color(fx.end);
fx.colorInit=true;
}
jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos));
};
});
};
color.hook(stepHooks);
jQuery.cssHooks.borderColor={
expand:function(value){
var expanded={};
each(["Top","Right","Bottom","Left"],function(i,part){
expanded["border"+part+"Color"]=value;
});
return expanded;
}
};
colors=jQuery.Color.names={
aqua:"#00ffff",
black:"#000000",
blue:"#0000ff",
fuchsia:"#ff00ff",
gray:"#808080",
green:"#008000",
lime:"#00ff00",
maroon:"#800000",
navy:"#000080",
olive:"#808000",
purple:"#800080",
red:"#ff0000",
silver:"#c0c0c0",
teal:"#008080",
white:"#ffffff",
yellow:"#ffff00",
transparent:[null,null,null,0],
_default:"#ffffff"
};
})(jQuery);
(function(){
var classAnimationActions=["add","remove","toggle"],
shorthandStyles={
border:1,
borderBottom:1,
borderColor:1,
borderLeft:1,
borderRight:1,
borderTop:1,
borderWidth:1,
margin:1,
padding:1
};
$.each(
["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],
function(_,prop){
$.fx.step[prop]=function(fx){
if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){
jQuery.style(fx.elem,prop,fx.end);
fx.setAttr=true;
}
};
}
);
function getElementStyles(elem){
var key,len,
style=elem.ownerDocument.defaultView?
elem.ownerDocument.defaultView.getComputedStyle(elem,null):
elem.currentStyle,
styles={};
if(style&&style.length&&style[0]&&style[style[0]]){
len=style.length;
while(len--){
key=style[len];
if(typeof style[key]==="string"){
styles[$.camelCase(key)]=style[key];
}
}
}else{
for(key in style){
if(typeof style[key]==="string"){
styles[key]=style[key];
}
}
}
return styles;
}
function styleDifference(oldStyle,newStyle){
var diff={},
name,value;
for(name in newStyle){
value=newStyle[name];
if(oldStyle[name]!==value){
if(!shorthandStyles[name]){
if($.fx.step[name]||!isNaN(parseFloat(value))){
diff[name]=value;
}
}
}
}
return diff;
}
if(!$.fn.addBack){
$.fn.addBack=function(selector){
return this.add(selector==null?
this.prevObject:this.prevObject.filter(selector)
);
};
}
$.effects.animateClass=function(value,duration,easing,callback){
var o=$.speed(duration,easing,callback);
return this.queue(function(){
var animated=$(this),
baseClass=animated.attr("class")||"",
applyClassChange,
allAnimations=o.children?animated.find("*").addBack():animated;
allAnimations=allAnimations.map(function(){
var el=$(this);
return{
el:el,
start:getElementStyles(this)
};
});
applyClassChange=function(){
$.each(classAnimationActions,function(i,action){
if(value[action]){
animated[action+"Class"](value[action]);
}
});
};
applyClassChange();
allAnimations=allAnimations.map(function(){
this.end=getElementStyles(this.el[0]);
this.diff=styleDifference(this.start,this.end);
return this;
});
animated.attr("class",baseClass);
allAnimations=allAnimations.map(function(){
var styleInfo=this,
dfd=$.Deferred(),
opts=$.extend({},o,{
queue:false,
complete:function(){
dfd.resolve(styleInfo);
}
});
this.el.animate(this.diff,opts);
return dfd.promise();
});
$.when.apply($,allAnimations.get()).done(function(){
applyClassChange();
$.each(arguments,function(){
var el=this.el;
$.each(this.diff,function(key){
el.css(key,"");
});
});
o.complete.call(animated[0]);
});
});
};
$.fn.extend({
addClass:(function(orig){
return function(classNames,speed,easing,callback){
return speed?
$.effects.animateClass.call(this,
{add:classNames},speed,easing,callback):
orig.apply(this,arguments);
};
})($.fn.addClass),
removeClass:(function(orig){
return function(classNames,speed,easing,callback){
return arguments.length>1?
$.effects.animateClass.call(this,
{remove:classNames},speed,easing,callback):
orig.apply(this,arguments);
};
})($.fn.removeClass),
toggleClass:(function(orig){
return function(classNames,force,speed,easing,callback){
if(typeof force==="boolean"||force===undefined){
if(!speed){
return orig.apply(this,arguments);
}else{
return $.effects.animateClass.call(this,
(force?{add:classNames}:{remove:classNames}),
speed,easing,callback);
}
}else{
return $.effects.animateClass.call(this,
{toggle:classNames},force,speed,easing);
}
};
})($.fn.toggleClass),
switchClass:function(remove,add,speed,easing,callback){
return $.effects.animateClass.call(this,{
add:add,
remove:remove
},speed,easing,callback);
}
});
})();
(function(){
if($.expr&&$.expr.filters&&$.expr.filters.animated){
$.expr.filters.animated=(function(orig){
return function(elem){
return!!$(elem).data(dataSpaceAnimated)||orig(elem);
};
})($.expr.filters.animated);
}
if($.uiBackCompat!==false){
$.extend($.effects,{
save:function(element,set){
var i=0,length=set.length;
for(;i<length;i++){
if(set[i]!==null){
element.data(dataSpace+set[i],element[0].style[set[i]]);
}
}
},
restore:function(element,set){
var val,i=0,length=set.length;
for(;i<length;i++){
if(set[i]!==null){
val=element.data(dataSpace+set[i]);
element.css(set[i],val);
}
}
},
setMode:function(el,mode){
if(mode==="toggle"){
mode=el.is(":hidden")?"show":"hide";
}
return mode;
},
createWrapper:function(element){
if(element.parent().is(".ui-effects-wrapper")){
return element.parent();
}
var props={
width:element.outerWidth(true),
height:element.outerHeight(true),
"float":element.css("float")
},
wrapper=$("<div></div>")
.addClass("ui-effects-wrapper")
.css({
fontSize:"100%",
background:"transparent",
border:"none",
margin:0,
padding:0
}),
size={
width:element.width(),
height:element.height()
},
active=document.activeElement;
try{
active.id;
}catch(e){
active=document.body;
}
element.wrap(wrapper);
if(element[0]===active||$.contains(element[0],active)){
$(active).trigger("focus");
}
wrapper=element.parent();
if(element.css("position")==="static"){
wrapper.css({position:"relative"});
element.css({position:"relative"});
}else{
$.extend(props,{
position:element.css("position"),
zIndex:element.css("z-index")
});
$.each(["top","left","bottom","right"],function(i,pos){
props[pos]=element.css(pos);
if(isNaN(parseInt(props[pos],10))){
props[pos]="auto";
}
});
element.css({
position:"relative",
top:0,
left:0,
right:"auto",
bottom:"auto"
});
}
element.css(size);
return wrapper.css(props).show();
},
removeWrapper:function(element){
var active=document.activeElement;
if(element.parent().is(".ui-effects-wrapper")){
element.parent().replaceWith(element);
if(element[0]===active||$.contains(element[0],active)){
$(active).trigger("focus");
}
}
return element;
}
});
}
$.extend($.effects,{
version:"1.12.1",
define:function(name,mode,effect){
if(!effect){
effect=mode;
mode="effect";
}
$.effects.effect[name]=effect;
$.effects.effect[name].mode=mode;
return effect;
},
scaledDimensions:function(element,percent,direction){
if(percent===0){
return{
height:0,
width:0,
outerHeight:0,
outerWidth:0
};
}
var x=direction!=="horizontal"?((percent||100)/100):1,
y=direction!=="vertical"?((percent||100)/100):1;
return{
height:element.height()*y,
width:element.width()*x,
outerHeight:element.outerHeight()*y,
outerWidth:element.outerWidth()*x
};
},
clipToBox:function(animation){
return{
width:animation.clip.right-animation.clip.left,
height:animation.clip.bottom-animation.clip.top,
left:animation.clip.left,
top:animation.clip.top
};
},
unshift:function(element,queueLength,count){
var queue=element.queue();
if(queueLength>1){
queue.splice.apply(queue,
[1,0].concat(queue.splice(queueLength,count)));
}
element.dequeue();
},
saveStyle:function(element){
element.data(dataSpaceStyle,element[0].style.cssText);
},
restoreStyle:function(element){
element[0].style.cssText=element.data(dataSpaceStyle)||"";
element.removeData(dataSpaceStyle);
},
mode:function(element,mode){
var hidden=element.is(":hidden");
if(mode==="toggle"){
mode=hidden?"show":"hide";
}
if(hidden?mode==="hide":mode==="show"){
mode="none";
}
return mode;
},
getBaseline:function(origin,original){
var y,x;
switch(origin[0]){
case"top":
y=0;
break;
case"middle":
y=0.5;
break;
case"bottom":
y=1;
break;
default:
y=origin[0]/original.height;
}
switch(origin[1]){
case"left":
x=0;
break;
case"center":
x=0.5;
break;
case"right":
x=1;
break;
default:
x=origin[1]/original.width;
}
return{
x:x,
y:y
};
},
createPlaceholder:function(element){
var placeholder,
cssPosition=element.css("position"),
position=element.position();
element.css({
marginTop:element.css("marginTop"),
marginBottom:element.css("marginBottom"),
marginLeft:element.css("marginLeft"),
marginRight:element.css("marginRight")
})
.outerWidth(element.outerWidth())
.outerHeight(element.outerHeight());
if(/^(static|relative)/.test(cssPosition)){
cssPosition="absolute";
placeholder=$("<"+element[0].nodeName+">").insertAfter(element).css({
display:/^(inline|ruby)/.test(element.css("display"))?
"inline-block":
"block",
visibility:"hidden",
marginTop:element.css("marginTop"),
marginBottom:element.css("marginBottom"),
marginLeft:element.css("marginLeft"),
marginRight:element.css("marginRight"),
"float":element.css("float")
})
.outerWidth(element.outerWidth())
.outerHeight(element.outerHeight())
.addClass("ui-effects-placeholder");
element.data(dataSpace+"placeholder",placeholder);
}
element.css({
position:cssPosition,
left:position.left,
top:position.top
});
return placeholder;
},
removePlaceholder:function(element){
var dataKey=dataSpace+"placeholder",
placeholder=element.data(dataKey);
if(placeholder){
placeholder.remove();
element.removeData(dataKey);
}
},
cleanUp:function(element){
$.effects.restoreStyle(element);
$.effects.removePlaceholder(element);
},
setTransition:function(element,list,factor,value){
value=value||{};
$.each(list,function(i,x){
var unit=element.cssUnit(x);
if(unit[0]>0){
value[x]=unit[0]*factor+unit[1];
}
});
return value;
}
});
function _normalizeArguments(effect,options,speed,callback){
if($.isPlainObject(effect)){
options=effect;
effect=effect.effect;
}
effect={effect:effect};
if(options==null){
options={};
}
if($.isFunction(options)){
callback=options;
speed=null;
options={};
}
if(typeof options==="number"||$.fx.speeds[options]){
callback=speed;
speed=options;
options={};
}
if($.isFunction(speed)){
callback=speed;
speed=null;
}
if(options){
$.extend(effect,options);
}
speed=speed||options.duration;
effect.duration=$.fx.off?0:
typeof speed==="number"?speed:
speed in $.fx.speeds?$.fx.speeds[speed]:
$.fx.speeds._default;
effect.complete=callback||options.complete;
return effect;
}
function standardAnimationOption(option){
if(!option||typeof option==="number"||$.fx.speeds[option]){
return true;
}
if(typeof option==="string"&&!$.effects.effect[option]){
return true;
}
if($.isFunction(option)){
return true;
}
if(typeof option==="object"&&!option.effect){
return true;
}
return false;
}
$.fn.extend({
effect:function(){
var args=_normalizeArguments.apply(this,arguments),
effectMethod=$.effects.effect[args.effect],
defaultMode=effectMethod.mode,
queue=args.queue,
queueName=queue||"fx",
complete=args.complete,
mode=args.mode,
modes=[],
prefilter=function(next){
var el=$(this),
normalizedMode=$.effects.mode(el,mode)||defaultMode;
el.data(dataSpaceAnimated,true);
modes.push(normalizedMode);
if(defaultMode&&(normalizedMode==="show"||
(normalizedMode===defaultMode&&normalizedMode==="hide"))){
el.show();
}
if(!defaultMode||normalizedMode!=="none"){
$.effects.saveStyle(el);
}
if($.isFunction(next)){
next();
}
};
if($.fx.off||!effectMethod){
if(mode){
return this[mode](args.duration,complete);
}else{
return this.each(function(){
if(complete){
complete.call(this);
}
});
}
}
function run(next){
var elem=$(this);
function cleanup(){
elem.removeData(dataSpaceAnimated);
$.effects.cleanUp(elem);
if(args.mode==="hide"){
elem.hide();
}
done();
}
function done(){
if($.isFunction(complete)){
complete.call(elem[0]);
}
if($.isFunction(next)){
next();
}
}
args.mode=modes.shift();
if($.uiBackCompat!==false&&!defaultMode){
if(elem.is(":hidden")?mode==="hide":mode==="show"){
elem[mode]();
done();
}else{
effectMethod.call(elem[0],args,done);
}
}else{
if(args.mode==="none"){
elem[mode]();
done();
}else{
effectMethod.call(elem[0],args,cleanup);
}
}
}
return queue===false?
this.each(prefilter).each(run):
this.queue(queueName,prefilter).queue(queueName,run);
},
show:(function(orig){
return function(option){
if(standardAnimationOption(option)){
return orig.apply(this,arguments);
}else{
var args=_normalizeArguments.apply(this,arguments);
args.mode="show";
return this.effect.call(this,args);
}
};
})($.fn.show),
hide:(function(orig){
return function(option){
if(standardAnimationOption(option)){
return orig.apply(this,arguments);
}else{
var args=_normalizeArguments.apply(this,arguments);
args.mode="hide";
return this.effect.call(this,args);
}
};
})($.fn.hide),
toggle:(function(orig){
return function(option){
if(standardAnimationOption(option)||typeof option==="boolean"){
return orig.apply(this,arguments);
}else{
var args=_normalizeArguments.apply(this,arguments);
args.mode="toggle";
return this.effect.call(this,args);
}
};
})($.fn.toggle),
cssUnit:function(key){
var style=this.css(key),
val=[];
$.each(["em","px","%","pt"],function(i,unit){
if(style.indexOf(unit)>0){
val=[parseFloat(style),unit];
}
});
return val;
},
cssClip:function(clipObj){
if(clipObj){
return this.css("clip","rect("+clipObj.top+"px "+clipObj.right+"px "+
clipObj.bottom+"px "+clipObj.left+"px)");
}
return parseClip(this.css("clip"),this);
},
transfer:function(options,done){
var element=$(this),
target=$(options.to),
targetFixed=target.css("position")==="fixed",
body=$("body"),
fixTop=targetFixed?body.scrollTop():0,
fixLeft=targetFixed?body.scrollLeft():0,
endPosition=target.offset(),
animation={
top:endPosition.top-fixTop,
left:endPosition.left-fixLeft,
height:target.innerHeight(),
width:target.innerWidth()
},
startPosition=element.offset(),
transfer=$("<div class='ui-effects-transfer'></div>")
.appendTo("body")
.addClass(options.className)
.css({
top:startPosition.top-fixTop,
left:startPosition.left-fixLeft,
height:element.innerHeight(),
width:element.innerWidth(),
position:targetFixed?"fixed":"absolute"
})
.animate(animation,options.duration,options.easing,function(){
transfer.remove();
if($.isFunction(done)){
done();
}
});
}
});
function parseClip(str,element){
var outerWidth=element.outerWidth(),
outerHeight=element.outerHeight(),
clipRegex=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
values=clipRegex.exec(str)||["",0,outerWidth,outerHeight,0];
return{
top:parseFloat(values[1])||0,
right:values[2]==="auto"?outerWidth:parseFloat(values[2]),
bottom:values[3]==="auto"?outerHeight:parseFloat(values[3]),
left:parseFloat(values[4])||0
};
}
$.fx.step.clip=function(fx){
if(!fx.clipInit){
fx.start=$(fx.elem).cssClip();
if(typeof fx.end==="string"){
fx.end=parseClip(fx.end,fx.elem);
}
fx.clipInit=true;
}
$(fx.elem).cssClip({
top:fx.pos*(fx.end.top-fx.start.top)+fx.start.top,
right:fx.pos*(fx.end.right-fx.start.right)+fx.start.right,
bottom:fx.pos*(fx.end.bottom-fx.start.bottom)+fx.start.bottom,
left:fx.pos*(fx.end.left-fx.start.left)+fx.start.left
});
};
})();
(function(){
var baseEasings={};
$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){
baseEasings[name]=function(p){
return Math.pow(p,i+2);
};
});
$.extend(baseEasings,{
Sine:function(p){
return 1-Math.cos(p*Math.PI/2);
},
Circ:function(p){
return 1-Math.sqrt(1-p*p);
},
Elastic:function(p){
return p===0||p===1?p:
-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15);
},
Back:function(p){
return p*p*(3*p-2);
},
Bounce:function(p){
var pow2,
bounce=4;
while(p<((pow2=Math.pow(2,--bounce))-1)/11){}
return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2);
}
});
$.each(baseEasings,function(name,easeIn){
$.easing["easeIn"+name]=easeIn;
$.easing["easeOut"+name]=function(p){
return 1-easeIn(1-p);
};
$.easing["easeInOut"+name]=function(p){
return p<0.5?
easeIn(p*2)/2:
1-easeIn(p*-2+2)/2;
};
});
})();
var effect=$.effects;
var effectsEffectBlind=$.effects.define("blind","hide",function(options,done){
var map={
up:["bottom","top"],
vertical:["bottom","top"],
down:["top","bottom"],
left:["right","left"],
horizontal:["right","left"],
right:["left","right"]
},
element=$(this),
direction=options.direction||"up",
start=element.cssClip(),
animate={clip:$.extend({},start)},
placeholder=$.effects.createPlaceholder(element);
animate.clip[map[direction][0]]=animate.clip[map[direction][1]];
if(options.mode==="show"){
element.cssClip(animate.clip);
if(placeholder){
placeholder.css($.effects.clipToBox(animate));
}
animate.clip=start;
}
if(placeholder){
placeholder.animate($.effects.clipToBox(animate),options.duration,options.easing);
}
element.animate(animate,{
queue:false,
duration:options.duration,
easing:options.easing,
complete:done
});
});
var effectsEffectBounce=$.effects.define("bounce",function(options,done){
var upAnim,downAnim,refValue,
element=$(this),
mode=options.mode,
hide=mode==="hide",
show=mode==="show",
direction=options.direction||"up",
distance=options.distance,
times=options.times||5,
anims=times*2+(show||hide?1:0),
speed=options.duration/anims,
easing=options.easing,
ref=(direction==="up"||direction==="down")?"top":"left",
motion=(direction==="up"||direction==="left"),
i=0,
queuelen=element.queue().length;
$.effects.createPlaceholder(element);
refValue=element.css(ref);
if(!distance){
distance=element[ref==="top"?"outerHeight":"outerWidth"]()/3;
}
if(show){
downAnim={opacity:1};
downAnim[ref]=refValue;
element
.css("opacity",0)
.css(ref,motion?-distance*2:distance*2)
.animate(downAnim,speed,easing);
}
if(hide){
distance=distance/Math.pow(2,times-1);
}
downAnim={};
downAnim[ref]=refValue;
for(;i<times;i++){
upAnim={};
upAnim[ref]=(motion?"-=":"+=")+distance;
element
.animate(upAnim,speed,easing)
.animate(downAnim,speed,easing);
distance=hide?distance*2:distance/2;
}
if(hide){
upAnim={opacity:0};
upAnim[ref]=(motion?"-=":"+=")+distance;
element.animate(upAnim,speed,easing);
}
element.queue(done);
$.effects.unshift(element,queuelen,anims+1);
});
var effectsEffectClip=$.effects.define("clip","hide",function(options,done){
var start,
animate={},
element=$(this),
direction=options.direction||"vertical",
both=direction==="both",
horizontal=both||direction==="horizontal",
vertical=both||direction==="vertical";
start=element.cssClip();
animate.clip={
top:vertical?(start.bottom-start.top)/2:start.top,
right:horizontal?(start.right-start.left)/2:start.right,
bottom:vertical?(start.bottom-start.top)/2:start.bottom,
left:horizontal?(start.right-start.left)/2:start.left
};
$.effects.createPlaceholder(element);
if(options.mode==="show"){
element.cssClip(animate.clip);
animate.clip=start;
}
element.animate(animate,{
queue:false,
duration:options.duration,
easing:options.easing,
complete:done
});
});
var effectsEffectDrop=$.effects.define("drop","hide",function(options,done){
var distance,
element=$(this),
mode=options.mode,
show=mode==="show",
direction=options.direction||"left",
ref=(direction==="up"||direction==="down")?"top":"left",
motion=(direction==="up"||direction==="left")?"-=":"+=",
oppositeMotion=(motion==="+=")?"-=":"+=",
animation={
opacity:0
};
$.effects.createPlaceholder(element);
distance=options.distance||
element[ref==="top"?"outerHeight":"outerWidth"](true)/2;
animation[ref]=motion+distance;
if(show){
element.css(animation);
animation[ref]=oppositeMotion+distance;
animation.opacity=1;
}
element.animate(animation,{
queue:false,
duration:options.duration,
easing:options.easing,
complete:done
});
});
var effectsEffectExplode=$.effects.define("explode","hide",function(options,done){
var i,j,left,top,mx,my,
rows=options.pieces?Math.round(Math.sqrt(options.pieces)):3,
cells=rows,
element=$(this),
mode=options.mode,
show=mode==="show",
offset=element.show().css("visibility","hidden").offset(),
width=Math.ceil(element.outerWidth()/cells),
height=Math.ceil(element.outerHeight()/rows),
pieces=[];
function childComplete(){
pieces.push(this);
if(pieces.length===rows*cells){
animComplete();
}
}
for(i=0;i<rows;i++){
top=offset.top+i*height;
my=i-(rows-1)/2;
for(j=0;j<cells;j++){
left=offset.left+j*width;
mx=j-(cells-1)/2;
element
.clone()
.appendTo("body")
.wrap("<div></div>")
.css({
position:"absolute",
visibility:"visible",
left:-j*width,
top:-i*height
})
.parent()
.addClass("ui-effects-explode")
.css({
position:"absolute",
overflow:"hidden",
width:width,
height:height,
left:left+(show?mx*width:0),
top:top+(show?my*height:0),
opacity:show?0:1
})
.animate({
left:left+(show?0:mx*width),
top:top+(show?0:my*height),
opacity:show?1:0
},options.duration||500,options.easing,childComplete);
}
}
function animComplete(){
element.css({
visibility:"visible"
});
$(pieces).remove();
done();
}
});
var effectsEffectFade=$.effects.define("fade","toggle",function(options,done){
var show=options.mode==="show";
$(this)
.css("opacity",show?0:1)
.animate({
opacity:show?1:0
},{
queue:false,
duration:options.duration,
easing:options.easing,
complete:done
});
});
var effectsEffectFold=$.effects.define("fold","hide",function(options,done){
var element=$(this),
mode=options.mode,
show=mode==="show",
hide=mode==="hide",
size=options.size||15,
percent=/([0-9]+)%/.exec(size),
horizFirst=!!options.horizFirst,
ref=horizFirst?["right","bottom"]:["bottom","right"],
duration=options.duration/2,
placeholder=$.effects.createPlaceholder(element),
start=element.cssClip(),
animation1={clip:$.extend({},start)},
animation2={clip:$.extend({},start)},
distance=[start[ref[0]],start[ref[1]]],
queuelen=element.queue().length;
if(percent){
size=parseInt(percent[1],10)/100*distance[hide?0:1];
}
animation1.clip[ref[0]]=size;
animation2.clip[ref[0]]=size;
animation2.clip[ref[1]]=0;
if(show){
element.cssClip(animation2.clip);
if(placeholder){
placeholder.css($.effects.clipToBox(animation2));
}
animation2.clip=start;
}
element
.queue(function(next){
if(placeholder){
placeholder
.animate($.effects.clipToBox(animation1),duration,options.easing)
.animate($.effects.clipToBox(animation2),duration,options.easing);
}
next();
})
.animate(animation1,duration,options.easing)
.animate(animation2,duration,options.easing)
.queue(done);
$.effects.unshift(element,queuelen,4);
});
var effectsEffectHighlight=$.effects.define("highlight","show",function(options,done){
var element=$(this),
animation={
backgroundColor:element.css("backgroundColor")
};
if(options.mode==="hide"){
animation.opacity=0;
}
$.effects.saveStyle(element);
element
.css({
backgroundImage:"none",
backgroundColor:options.color||"#ffff99"
})
.animate(animation,{
queue:false,
duration:options.duration,
easing:options.easing,
complete:done
});
});
var effectsEffectSize=$.effects.define("size",function(options,done){
var baseline,factor,temp,
element=$(this),
cProps=["fontSize"],
vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],
hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
mode=options.mode,
restore=mode!=="effect",
scale=options.scale||"both",
origin=options.origin||["middle","center"],
position=element.css("position"),
pos=element.position(),
original=$.effects.scaledDimensions(element),
from=options.from||original,
to=options.to||$.effects.scaledDimensions(element,0);
$.effects.createPlaceholder(element);
if(mode==="show"){
temp=from;
from=to;
to=temp;
}
factor={
from:{
y:from.height/original.height,
x:from.width/original.width
},
to:{
y:to.height/original.height,
x:to.width/original.width
}
};
if(scale==="box"||scale==="both"){
if(factor.from.y!==factor.to.y){
from=$.effects.setTransition(element,vProps,factor.from.y,from);
to=$.effects.setTransition(element,vProps,factor.to.y,to);
}
if(factor.from.x!==factor.to.x){
from=$.effects.setTransition(element,hProps,factor.from.x,from);
to=$.effects.setTransition(element,hProps,factor.to.x,to);
}
}
if(scale==="content"||scale==="both"){
if(factor.from.y!==factor.to.y){
from=$.effects.setTransition(element,cProps,factor.from.y,from);
to=$.effects.setTransition(element,cProps,factor.to.y,to);
}
}
if(origin){
baseline=$.effects.getBaseline(origin,original);
from.top=(original.outerHeight-from.outerHeight)*baseline.y+pos.top;
from.left=(original.outerWidth-from.outerWidth)*baseline.x+pos.left;
to.top=(original.outerHeight-to.outerHeight)*baseline.y+pos.top;
to.left=(original.outerWidth-to.outerWidth)*baseline.x+pos.left;
}
element.css(from);
if(scale==="content"||scale==="both"){
vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);
hProps=hProps.concat(["marginLeft","marginRight"]);
element.find("*[width]").each(function(){
var child=$(this),
childOriginal=$.effects.scaledDimensions(child),
childFrom={
height:childOriginal.height*factor.from.y,
width:childOriginal.width*factor.from.x,
outerHeight:childOriginal.outerHeight*factor.from.y,
outerWidth:childOriginal.outerWidth*factor.from.x
},
childTo={
height:childOriginal.height*factor.to.y,
width:childOriginal.width*factor.to.x,
outerHeight:childOriginal.height*factor.to.y,
outerWidth:childOriginal.width*factor.to.x
};
if(factor.from.y!==factor.to.y){
childFrom=$.effects.setTransition(child,vProps,factor.from.y,childFrom);
childTo=$.effects.setTransition(child,vProps,factor.to.y,childTo);
}
if(factor.from.x!==factor.to.x){
childFrom=$.effects.setTransition(child,hProps,factor.from.x,childFrom);
childTo=$.effects.setTransition(child,hProps,factor.to.x,childTo);
}
if(restore){
$.effects.saveStyle(child);
}
child.css(childFrom);
child.animate(childTo,options.duration,options.easing,function(){
if(restore){
$.effects.restoreStyle(child);
}
});
});
}
element.animate(to,{
queue:false,
duration:options.duration,
easing:options.easing,
complete:function(){
var offset=element.offset();
if(to.opacity===0){
element.css("opacity",from.opacity);
}
if(!restore){
element
.css("position",position==="static"?"relative":position)
.offset(offset);
$.effects.saveStyle(element);
}
done();
}
});
});
var effectsEffectScale=$.effects.define("scale",function(options,done){
var el=$(this),
mode=options.mode,
percent=parseInt(options.percent,10)||
(parseInt(options.percent,10)===0?0:(mode!=="effect"?0:100)),
newOptions=$.extend(true,{
from:$.effects.scaledDimensions(el),
to:$.effects.scaledDimensions(el,percent,options.direction||"both"),
origin:options.origin||["middle","center"]
},options);
if(options.fade){
newOptions.from.opacity=1;
newOptions.to.opacity=0;
}
$.effects.effect.size.call(this,newOptions,done);
});
var effectsEffectPuff=$.effects.define("puff","hide",function(options,done){
var newOptions=$.extend(true,{},options,{
fade:true,
percent:parseInt(options.percent,10)||150
});
$.effects.effect.scale.call(this,newOptions,done);
});
var effectsEffectPulsate=$.effects.define("pulsate","show",function(options,done){
var element=$(this),
mode=options.mode,
show=mode==="show",
hide=mode==="hide",
showhide=show||hide,
anims=((options.times||5)*2)+(showhide?1:0),
duration=options.duration/anims,
animateTo=0,
i=1,
queuelen=element.queue().length;
if(show||!element.is(":visible")){
element.css("opacity",0).show();
animateTo=1;
}
for(;i<anims;i++){
element.animate({opacity:animateTo},duration,options.easing);
animateTo=1-animateTo;
}
element.animate({opacity:animateTo},duration,options.easing);
element.queue(done);
$.effects.unshift(element,queuelen,anims+1);
});
var effectsEffectShake=$.effects.define("shake",function(options,done){
var i=1,
element=$(this),
direction=options.direction||"left",
distance=options.distance||20,
times=options.times||3,
anims=times*2+1,
speed=Math.round(options.duration/anims),
ref=(direction==="up"||direction==="down")?"top":"left",
positiveMotion=(direction==="up"||direction==="left"),
animation={},
animation1={},
animation2={},
queuelen=element.queue().length;
$.effects.createPlaceholder(element);
animation[ref]=(positiveMotion?"-=":"+=")+distance;
animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;
animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;
element.animate(animation,speed,options.easing);
for(;i<times;i++){
element
.animate(animation1,speed,options.easing)
.animate(animation2,speed,options.easing);
}
element
.animate(animation1,speed,options.easing)
.animate(animation,speed/2,options.easing)
.queue(done);
$.effects.unshift(element,queuelen,anims+1);
});
var effectsEffectSlide=$.effects.define("slide","show",function(options,done){
var startClip,startRef,
element=$(this),
map={
up:["bottom","top"],
down:["top","bottom"],
left:["right","left"],
right:["left","right"]
},
mode=options.mode,
direction=options.direction||"left",
ref=(direction==="up"||direction==="down")?"top":"left",
positiveMotion=(direction==="up"||direction==="left"),
distance=options.distance||
element[ref==="top"?"outerHeight":"outerWidth"](true),
animation={};
$.effects.createPlaceholder(element);
startClip=element.cssClip();
startRef=element.position()[ref];
animation[ref]=(positiveMotion?-1:1)*distance+startRef;
animation.clip=element.cssClip();
animation.clip[map[direction][1]]=animation.clip[map[direction][0]];
if(mode==="show"){
element.cssClip(animation.clip);
element.css(ref,animation[ref]);
animation.clip=startClip;
animation[ref]=startRef;
}
element.animate(animation,{
queue:false,
duration:options.duration,
easing:options.easing,
complete:done
});
});
var effect;
if($.uiBackCompat!==false){
effect=$.effects.define("transfer",function(options,done){
$(this).transfer(options,done);
});
}
var effectsEffectTransfer=effect;
$.ui.focusable=function(element,hasTabindex){
var map,mapName,img,focusableIfVisible,fieldset,
nodeName=element.nodeName.toLowerCase();
if("area"===nodeName){
map=element.parentNode;
mapName=map.name;
if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){
return false;
}
img=$("img[usemap='#"+mapName+"']");
return img.length>0&&img.is(":visible");
}
if(/^(input|select|textarea|button|object)$/.test(nodeName)){
focusableIfVisible=!element.disabled;
if(focusableIfVisible){
fieldset=$(element).closest("fieldset")[0];
if(fieldset){
focusableIfVisible=!fieldset.disabled;
}
}
}else if("a"===nodeName){
focusableIfVisible=element.href||hasTabindex;
}else{
focusableIfVisible=hasTabindex;
}
return focusableIfVisible&&$(element).is(":visible")&&visible($(element));
};
function visible(element){
var visibility=element.css("visibility");
while(visibility==="inherit"){
element=element.parent();
visibility=element.css("visibility");
}
return visibility!=="hidden";
}
$.extend($.expr[":"],{
focusable:function(element){
return $.ui.focusable(element,$.attr(element,"tabindex")!=null);
}
});
var focusable=$.ui.focusable;
var form=$.fn.form=function(){
return typeof this[0].form==="string"?this.closest("form"):$(this[0].form);
};
var formResetMixin=$.ui.formResetMixin={
_formResetHandler:function(){
var form=$(this);
setTimeout(function(){
var instances=form.data("ui-form-reset-instances");
$.each(instances,function(){
this.refresh();
});
});
},
_bindFormResetHandler:function(){
this.form=this.element.form();
if(!this.form.length){
return;
}
var instances=this.form.data("ui-form-reset-instances")||[];
if(!instances.length){
this.form.on("reset.ui-form-reset",this._formResetHandler);
}
instances.push(this);
this.form.data("ui-form-reset-instances",instances);
},
_unbindFormResetHandler:function(){
if(!this.form.length){
return;
}
var instances=this.form.data("ui-form-reset-instances");
instances.splice($.inArray(this,instances),1);
if(instances.length){
this.form.data("ui-form-reset-instances",instances);
}else{
this.form
.removeData("ui-form-reset-instances")
.off("reset.ui-form-reset");
}
}
};
if($.fn.jquery.substring(0,3)==="1.7"){
$.each(["Width","Height"],function(i,name){
var side=name==="Width"?["Left","Right"]:["Top","Bottom"],
type=name.toLowerCase(),
orig={
innerWidth:$.fn.innerWidth,
innerHeight:$.fn.innerHeight,
outerWidth:$.fn.outerWidth,
outerHeight:$.fn.outerHeight
};
function reduce(elem,size,border,margin){
$.each(side,function(){
size-=parseFloat($.css(elem,"padding"+this))||0;
if(border){
size-=parseFloat($.css(elem,"border"+this+"Width"))||0;
}
if(margin){
size-=parseFloat($.css(elem,"margin"+this))||0;
}
});
return size;
}
$.fn["inner"+name]=function(size){
if(size===undefined){
return orig["inner"+name].call(this);
}
return this.each(function(){
$(this).css(type,reduce(this,size)+"px");
});
};
$.fn["outer"+name]=function(size,margin){
if(typeof size!=="number"){
return orig["outer"+name].call(this,size);
}
return this.each(function(){
$(this).css(type,reduce(this,size,true,margin)+"px");
});
};
});
$.fn.addBack=function(selector){
return this.add(selector==null?
this.prevObject:this.prevObject.filter(selector)
);
};
}
;
var keycode=$.ui.keyCode={
BACKSPACE:8,
COMMA:188,
DELETE:46,
DOWN:40,
END:35,
ENTER:13,
ESCAPE:27,
HOME:36,
LEFT:37,
PAGE_DOWN:34,
PAGE_UP:33,
PERIOD:190,
RIGHT:39,
SPACE:32,
TAB:9,
UP:38
};
var escapeSelector=$.ui.escapeSelector=(function(){
var selectorEscape=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
return function(selector){
return selector.replace(selectorEscape,"\\$1");
};
})();
var labels=$.fn.labels=function(){
var ancestor,selector,id,labels,ancestors;
if(this[0].labels&&this[0].labels.length){
return this.pushStack(this[0].labels);
}
labels=this.eq(0).parents("label");
id=this.attr("id");
if(id){
ancestor=this.eq(0).parents().last();
ancestors=ancestor.add(ancestor.length?ancestor.siblings():this.siblings());
selector="label[for='"+$.ui.escapeSelector(id)+"']";
labels=labels.add(ancestors.find(selector).addBack(selector));
}
return this.pushStack(labels);
};
var scrollParent=$.fn.scrollParent=function(includeHidden){
var position=this.css("position"),
excludeStaticParent=position==="absolute",
overflowRegex=includeHidden?/(auto|scroll|hidden)/:/(auto|scroll)/,
scrollParent=this.parents().filter(function(){
var parent=$(this);
if(excludeStaticParent&&parent.css("position")==="static"){
return false;
}
return overflowRegex.test(parent.css("overflow")+parent.css("overflow-y")+
parent.css("overflow-x"));
}).eq(0);
return position==="fixed"||!scrollParent.length?
$(this[0].ownerDocument||document):
scrollParent;
};
var tabbable=$.extend($.expr[":"],{
tabbable:function(element){
var tabIndex=$.attr(element,"tabindex"),
hasTabindex=tabIndex!=null;
return(!hasTabindex||tabIndex>=0)&&$.ui.focusable(element,hasTabindex);
}
});
var uniqueId=$.fn.extend({
uniqueId:(function(){
var uuid=0;
return function(){
return this.each(function(){
if(!this.id){
this.id="ui-id-"+(++uuid);
}
});
};
})(),
removeUniqueId:function(){
return this.each(function(){
if(/^ui-id-\d+$/.test(this.id)){
$(this).removeAttr("id");
}
});
}
});
var widgetsAccordion=$.widget("ui.accordion",{
version:"1.12.1",
options:{
active:0,
animate:{},
classes:{
"ui-accordion-header":"ui-corner-top",
"ui-accordion-header-collapsed":"ui-corner-all",
"ui-accordion-content":"ui-corner-bottom"
},
collapsible:false,
event:"click",
header:"> li > :first-child, > :not(li):even",
heightStyle:"auto",
icons:{
activeHeader:"ui-icon-triangle-1-s",
header:"ui-icon-triangle-1-e"
},
activate:null,
beforeActivate:null
},
hideProps:{
borderTopWidth:"hide",
borderBottomWidth:"hide",
paddingTop:"hide",
paddingBottom:"hide",
height:"hide"
},
showProps:{
borderTopWidth:"show",
borderBottomWidth:"show",
paddingTop:"show",
paddingBottom:"show",
height:"show"
},
_create:function(){
var options=this.options;
this.prevShow=this.prevHide=$();
this._addClass("ui-accordion","ui-widget ui-helper-reset");
this.element.attr("role","tablist");
if(!options.collapsible&&(options.active===false||options.active==null)){
options.active=0;
}
this._processPanels();
if(options.active<0){
options.active+=this.headers.length;
}
this._refresh();
},
_getCreateEventData:function(){
return{
header:this.active,
panel:!this.active.length?$():this.active.next()
};
},
_createIcons:function(){
var icon,children,
icons=this.options.icons;
if(icons){
icon=$("<span>");
this._addClass(icon,"ui-accordion-header-icon","ui-icon "+icons.header);
icon.prependTo(this.headers);
children=this.active.children(".ui-accordion-header-icon");
this._removeClass(children,icons.header)
._addClass(children,null,icons.activeHeader)
._addClass(this.headers,"ui-accordion-icons");
}
},
_destroyIcons:function(){
this._removeClass(this.headers,"ui-accordion-icons");
this.headers.children(".ui-accordion-header-icon").remove();
},
_destroy:function(){
var contents;
this.element.removeAttr("role");
this.headers
.removeAttr("role aria-expanded aria-selected aria-controls tabIndex")
.removeUniqueId();
this._destroyIcons();
contents=this.headers.next()
.css("display","")
.removeAttr("role aria-hidden aria-labelledby")
.removeUniqueId();
if(this.options.heightStyle!=="content"){
contents.css("height","");
}
},
_setOption:function(key,value){
if(key==="active"){
this._activate(value);
return;
}
if(key==="event"){
if(this.options.event){
this._off(this.headers,this.options.event);
}
this._setupEvents(value);
}
this._super(key,value);
if(key==="collapsible"&&!value&&this.options.active===false){
this._activate(0);
}
if(key==="icons"){
this._destroyIcons();
if(value){
this._createIcons();
}
}
},
_setOptionDisabled:function(value){
this._super(value);
this.element.attr("aria-disabled",value);
this._toggleClass(null,"ui-state-disabled",!!value);
this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",
!!value);
},
_keydown:function(event){
if(event.altKey||event.ctrlKey){
return;
}
var keyCode=$.ui.keyCode,
length=this.headers.length,
currentIndex=this.headers.index(event.target),
toFocus=false;
switch(event.keyCode){
case keyCode.RIGHT:
case keyCode.DOWN:
toFocus=this.headers[(currentIndex+1)%length];
break;
case keyCode.LEFT:
case keyCode.UP:
toFocus=this.headers[(currentIndex-1+length)%length];
break;
case keyCode.SPACE:
case keyCode.ENTER:
this._eventHandler(event);
break;
case keyCode.HOME:
toFocus=this.headers[0];
break;
case keyCode.END:
toFocus=this.headers[length-1];
break;
}
if(toFocus){
$(event.target).attr("tabIndex",-1);
$(toFocus).attr("tabIndex",0);
$(toFocus).trigger("focus");
event.preventDefault();
}
},
_panelKeyDown:function(event){
if(event.keyCode===$.ui.keyCode.UP&&event.ctrlKey){
$(event.currentTarget).prev().trigger("focus");
}
},
refresh:function(){
var options=this.options;
this._processPanels();
if((options.active===false&&options.collapsible===true)||
!this.headers.length){
options.active=false;
this.active=$();
}else if(options.active===false){
this._activate(0);
}else if(this.active.length&&!$.contains(this.element[0],this.active[0])){
if(this.headers.length===this.headers.find(".ui-state-disabled").length){
options.active=false;
this.active=$();
}else{
this._activate(Math.max(0,options.active-1));
}
}else{
options.active=this.headers.index(this.active);
}
this._destroyIcons();
this._refresh();
},
_processPanels:function(){
var prevHeaders=this.headers,
prevPanels=this.panels;
this.headers=this.element.find(this.options.header);
this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed",
"ui-state-default");
this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content");
if(prevPanels){
this._off(prevHeaders.not(this.headers));
this._off(prevPanels.not(this.panels));
}
},
_refresh:function(){
var maxHeight,
options=this.options,
heightStyle=options.heightStyle,
parent=this.element.parent();
this.active=this._findActive(options.active);
this._addClass(this.active,"ui-accordion-header-active","ui-state-active")
._removeClass(this.active,"ui-accordion-header-collapsed");
this._addClass(this.active.next(),"ui-accordion-content-active");
this.active.next().show();
this.headers
.attr("role","tab")
.each(function(){
var header=$(this),
headerId=header.uniqueId().attr("id"),
panel=header.next(),
panelId=panel.uniqueId().attr("id");
header.attr("aria-controls",panelId);
panel.attr("aria-labelledby",headerId);
})
.next()
.attr("role","tabpanel");
this.headers
.not(this.active)
.attr({
"aria-selected":"false",
"aria-expanded":"false",
tabIndex:-1
})
.next()
.attr({
"aria-hidden":"true"
})
.hide();
if(!this.active.length){
this.headers.eq(0).attr("tabIndex",0);
}else{
this.active.attr({
"aria-selected":"true",
"aria-expanded":"true",
tabIndex:0
})
.next()
.attr({
"aria-hidden":"false"
});
}
this._createIcons();
this._setupEvents(options.event);
if(heightStyle==="fill"){
maxHeight=parent.height();
this.element.siblings(":visible").each(function(){
var elem=$(this),
position=elem.css("position");
if(position==="absolute"||position==="fixed"){
return;
}
maxHeight-=elem.outerHeight(true);
});
this.headers.each(function(){
maxHeight-=$(this).outerHeight(true);
});
this.headers.next()
.each(function(){
$(this).height(Math.max(0,maxHeight-
$(this).innerHeight()+$(this).height()));
})
.css("overflow","auto");
}else if(heightStyle==="auto"){
maxHeight=0;
this.headers.next()
.each(function(){
var isVisible=$(this).is(":visible");
if(!isVisible){
$(this).show();
}
maxHeight=Math.max(maxHeight,$(this).css("height","").height());
if(!isVisible){
$(this).hide();
}
})
.height(maxHeight);
}
},
_activate:function(index){
var active=this._findActive(index)[0];
if(active===this.active[0]){
return;
}
active=active||this.active[0];
this._eventHandler({
target:active,
currentTarget:active,
preventDefault:$.noop
});
},
_findActive:function(selector){
return typeof selector==="number"?this.headers.eq(selector):$();
},
_setupEvents:function(event){
var events={
keydown:"_keydown"
};
if(event){
$.each(event.split(" "),function(index,eventName){
events[eventName]="_eventHandler";
});
}
this._off(this.headers.add(this.headers.next()));
this._on(this.headers,events);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers);
},
_eventHandler:function(event){
var activeChildren,clickedChildren,
options=this.options,
active=this.active,
clicked=$(event.currentTarget),
clickedIsActive=clicked[0]===active[0],
collapsing=clickedIsActive&&options.collapsible,
toShow=collapsing?$():clicked.next(),
toHide=active.next(),
eventData={
oldHeader:active,
oldPanel:toHide,
newHeader:collapsing?$():clicked,
newPanel:toShow
};
event.preventDefault();
if(
(clickedIsActive&&!options.collapsible)||
(this._trigger("beforeActivate",event,eventData)===false)){
return;
}
options.active=collapsing?false:this.headers.index(clicked);
this.active=clickedIsActive?$():clicked;
this._toggle(eventData);
this._removeClass(active,"ui-accordion-header-active","ui-state-active");
if(options.icons){
activeChildren=active.children(".ui-accordion-header-icon");
this._removeClass(activeChildren,null,options.icons.activeHeader)
._addClass(activeChildren,null,options.icons.header);
}
if(!clickedIsActive){
this._removeClass(clicked,"ui-accordion-header-collapsed")
._addClass(clicked,"ui-accordion-header-active","ui-state-active");
if(options.icons){
clickedChildren=clicked.children(".ui-accordion-header-icon");
this._removeClass(clickedChildren,null,options.icons.header)
._addClass(clickedChildren,null,options.icons.activeHeader);
}
this._addClass(clicked.next(),"ui-accordion-content-active");
}
},
_toggle:function(data){
var toShow=data.newPanel,
toHide=this.prevShow.length?this.prevShow:data.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=toShow;
this.prevHide=toHide;
if(this.options.animate){
this._animate(toShow,toHide,data);
}else{
toHide.hide();
toShow.show();
this._toggleComplete(data);
}
toHide.attr({
"aria-hidden":"true"
});
toHide.prev().attr({
"aria-selected":"false",
"aria-expanded":"false"
});
if(toShow.length&&toHide.length){
toHide.prev().attr({
"tabIndex":-1,
"aria-expanded":"false"
});
}else if(toShow.length){
this.headers.filter(function(){
return parseInt($(this).attr("tabIndex"),10)===0;
})
.attr("tabIndex",-1);
}
toShow
.attr("aria-hidden","false")
.prev()
.attr({
"aria-selected":"true",
"aria-expanded":"true",
tabIndex:0
});
},
_animate:function(toShow,toHide,data){
var total,easing,duration,
that=this,
adjust=0,
boxSizing=toShow.css("box-sizing"),
down=toShow.length&&
(!toHide.length||(toShow.index()<toHide.index())),
animate=this.options.animate||{},
options=down&&animate.down||animate,
complete=function(){
that._toggleComplete(data);
};
if(typeof options==="number"){
duration=options;
}
if(typeof options==="string"){
easing=options;
}
easing=easing||options.easing||animate.easing;
duration=duration||options.duration||animate.duration;
if(!toHide.length){
return toShow.animate(this.showProps,duration,easing,complete);
}
if(!toShow.length){
return toHide.animate(this.hideProps,duration,easing,complete);
}
total=toShow.show().outerHeight();
toHide.animate(this.hideProps,{
duration:duration,
easing:easing,
step:function(now,fx){
fx.now=Math.round(now);
}
});
toShow
.hide()
.animate(this.showProps,{
duration:duration,
easing:easing,
complete:complete,
step:function(now,fx){
fx.now=Math.round(now);
if(fx.prop!=="height"){
if(boxSizing==="content-box"){
adjust+=fx.now;
}
}else if(that.options.heightStyle!=="content"){
fx.now=Math.round(total-toHide.outerHeight()-adjust);
adjust=0;
}
}
});
},
_toggleComplete:function(data){
var toHide=data.oldPanel,
prev=toHide.prev();
this._removeClass(toHide,"ui-accordion-content-active");
this._removeClass(prev,"ui-accordion-header-active")
._addClass(prev,"ui-accordion-header-collapsed");
if(toHide.length){
toHide.parent()[0].className=toHide.parent()[0].className;
}
this._trigger("activate",null,data);
}
});
var safeActiveElement=$.ui.safeActiveElement=function(document){
var activeElement;
try{
activeElement=document.activeElement;
}catch(error){
activeElement=document.body;
}
if(!activeElement){
activeElement=document.body;
}
if(!activeElement.nodeName){
activeElement=document.body;
}
return activeElement;
};
var widgetsMenu=$.widget("ui.menu",{
version:"1.12.1",
defaultElement:"<ul>",
delay:300,
options:{
icons:{
submenu:"ui-icon-caret-1-e"
},
items:"> *",
menus:"ul",
position:{
my:"left top",
at:"right top"
},
role:"menu",
blur:null,
focus:null,
select:null
},
_create:function(){
this.activeMenu=this.element;
this.mouseHandled=false;
this.element
.uniqueId()
.attr({
role:this.options.role,
tabIndex:0
});
this._addClass("ui-menu","ui-widget ui-widget-content");
this._on({
"mousedown .ui-menu-item":function(event){
event.preventDefault();
},
"click .ui-menu-item":function(event){
var target=$(event.target);
var active=$($.ui.safeActiveElement(this.document[0]));
if(!this.mouseHandled&&target.not(".ui-state-disabled").length){
this.select(event);
if(!event.isPropagationStopped()){
this.mouseHandled=true;
}
if(target.has(".ui-menu").length){
this.expand(event);
}else if(!this.element.is(":focus")&&
active.closest(".ui-menu").length){
this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){
clearTimeout(this.timer);
}
}
}
},
"mouseenter .ui-menu-item":function(event){
if(this.previousFilter){
return;
}
var actualTarget=$(event.target).closest(".ui-menu-item"),
target=$(event.currentTarget);
if(actualTarget[0]!==target[0]){
return;
}
this._removeClass(target.siblings().children(".ui-state-active"),
null,"ui-state-active");
this.focus(event,target);
},
mouseleave:"collapseAll",
"mouseleave .ui-menu":"collapseAll",
focus:function(event,keepActiveItem){
var item=this.active||this.element.find(this.options.items).eq(0);
if(!keepActiveItem){
this.focus(event,item);
}
},
blur:function(event){
this._delay(function(){
var notContained=!$.contains(
this.element[0],
$.ui.safeActiveElement(this.document[0])
);
if(notContained){
this.collapseAll(event);
}
});
},
keydown:"_keydown"
});
this.refresh();
this._on(this.document,{
click:function(event){
if(this._closeOnDocumentClick(event)){
this.collapseAll(event);
}
this.mouseHandled=false;
}
});
},
_destroy:function(){
var items=this.element.find(".ui-menu-item")
.removeAttr("role aria-disabled"),
submenus=items.children(".ui-menu-item-wrapper")
.removeUniqueId()
.removeAttr("tabIndex role aria-haspopup");
this.element
.removeAttr("aria-activedescendant")
.find(".ui-menu").addBack()
.removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled "+
"tabIndex")
.removeUniqueId()
.show();
submenus.children().each(function(){
var elem=$(this);
if(elem.data("ui-menu-submenu-caret")){
elem.remove();
}
});
},
_keydown:function(event){
var match,prev,character,skip,
preventDefault=true;
switch(event.keyCode){
case $.ui.keyCode.PAGE_UP:
this.previousPage(event);
break;
case $.ui.keyCode.PAGE_DOWN:
this.nextPage(event);
break;
case $.ui.keyCode.HOME:
this._move("first","first",event);
break;
case $.ui.keyCode.END:
this._move("last","last",event);
break;
case $.ui.keyCode.UP:
this.previous(event);
break;
case $.ui.keyCode.DOWN:
this.next(event);
break;
case $.ui.keyCode.LEFT:
this.collapse(event);
break;
case $.ui.keyCode.RIGHT:
if(this.active&&!this.active.is(".ui-state-disabled")){
this.expand(event);
}
break;
case $.ui.keyCode.ENTER:
case $.ui.keyCode.SPACE:
this._activate(event);
break;
case $.ui.keyCode.ESCAPE:
this.collapse(event);
break;
default:
preventDefault=false;
prev=this.previousFilter||"";
skip=false;
character=event.keyCode>=96&&event.keyCode<=105?
(event.keyCode-96).toString():String.fromCharCode(event.keyCode);
clearTimeout(this.filterTimer);
if(character===prev){
skip=true;
}else{
character=prev+character;
}
match=this._filterMenuItems(character);
match=skip&&match.index(this.active.next())!==-1?
this.active.nextAll(".ui-menu-item"):
match;
if(!match.length){
character=String.fromCharCode(event.keyCode);
match=this._filterMenuItems(character);
}
if(match.length){
this.focus(event,match);
this.previousFilter=character;
this.filterTimer=this._delay(function(){
delete this.previousFilter;
},1000);
}else{
delete this.previousFilter;
}
}
if(preventDefault){
event.preventDefault();
}
},
_activate:function(event){
if(this.active&&!this.active.is(".ui-state-disabled")){
if(this.active.children("[aria-haspopup='true']").length){
this.expand(event);
}else{
this.select(event);
}
}
},
refresh:function(){
var menus,items,newSubmenus,newItems,newWrappers,
that=this,
icon=this.options.icons.submenu,
submenus=this.element.find(this.options.menus);
this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length);
newSubmenus=submenus.filter(":not(.ui-menu)")
.hide()
.attr({
role:this.options.role,
"aria-hidden":"true",
"aria-expanded":"false"
})
.each(function(){
var menu=$(this),
item=menu.prev(),
submenuCaret=$("<span>").data("ui-menu-submenu-caret",true);
that._addClass(submenuCaret,"ui-menu-icon","ui-icon "+icon);
item
.attr("aria-haspopup","true")
.prepend(submenuCaret);
menu.attr("aria-labelledby",item.attr("id"));
});
this._addClass(newSubmenus,"ui-menu","ui-widget ui-widget-content ui-front");
menus=submenus.add(this.element);
items=menus.find(this.options.items);
items.not(".ui-menu-item").each(function(){
var item=$(this);
if(that._isDivider(item)){
that._addClass(item,"ui-menu-divider","ui-widget-content");
}
});
newItems=items.not(".ui-menu-item, .ui-menu-divider");
newWrappers=newItems.children()
.not(".ui-menu")
.uniqueId()
.attr({
tabIndex:-1,
role:this._itemRole()
});
this._addClass(newItems,"ui-menu-item")
._addClass(newWrappers,"ui-menu-item-wrapper");
items.filter(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!$.contains(this.element[0],this.active[0])){
this.blur();
}
},
_itemRole:function(){
return{
menu:"menuitem",
listbox:"option"
}[this.options.role];
},
_setOption:function(key,value){
if(key==="icons"){
var icons=this.element.find(".ui-menu-icon");
this._removeClass(icons,null,this.options.icons.submenu)
._addClass(icons,null,value.submenu);
}
this._super(key,value);
},
_setOptionDisabled:function(value){
this._super(value);
this.element.attr("aria-disabled",String(value));
this._toggleClass(null,"ui-state-disabled",!!value);
},
focus:function(event,item){
var nested,focused,activeParent;
this.blur(event,event&&event.type==="focus");
this._scrollIntoView(item);
this.active=item.first();
focused=this.active.children(".ui-menu-item-wrapper");
this._addClass(focused,null,"ui-state-active");
if(this.options.role){
this.element.attr("aria-activedescendant",focused.attr("id"));
}
activeParent=this.active
.parent()
.closest(".ui-menu-item")
.children(".ui-menu-item-wrapper");
this._addClass(activeParent,null,"ui-state-active");
if(event&&event.type==="keydown"){
this._close();
}else{
this.timer=this._delay(function(){
this._close();
},this.delay);
}
nested=item.children(".ui-menu");
if(nested.length&&event&&(/^mouse/.test(event.type))){
this._startOpening(nested);
}
this.activeMenu=item.parent();
this._trigger("focus",event,{item:item});
},
_scrollIntoView:function(item){
var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;
if(this._hasScroll()){
borderTop=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0;
paddingTop=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0;
offset=item.offset().top-this.activeMenu.offset().top-borderTop-paddingTop;
scroll=this.activeMenu.scrollTop();
elementHeight=this.activeMenu.height();
itemHeight=item.outerHeight();
if(offset<0){
this.activeMenu.scrollTop(scroll+offset);
}else if(offset+itemHeight>elementHeight){
this.activeMenu.scrollTop(scroll+offset-elementHeight+itemHeight);
}
}
},
blur:function(event,fromFocus){
if(!fromFocus){
clearTimeout(this.timer);
}
if(!this.active){
return;
}
this._removeClass(this.active.children(".ui-menu-item-wrapper"),
null,"ui-state-active");
this._trigger("blur",event,{item:this.active});
this.active=null;
},
_startOpening:function(submenu){
clearTimeout(this.timer);
if(submenu.attr("aria-hidden")!=="true"){
return;
}
this.timer=this._delay(function(){
this._close();
this._open(submenu);
},this.delay);
},
_open:function(submenu){
var position=$.extend({
of:this.active
},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(submenu.parents(".ui-menu"))
.hide()
.attr("aria-hidden","true");
submenu
.show()
.removeAttr("aria-hidden")
.attr("aria-expanded","true")
.position(position);
},
collapseAll:function(event,all){
clearTimeout(this.timer);
this.timer=this._delay(function(){
var currentMenu=all?this.element:
$(event&&event.target).closest(this.element.find(".ui-menu"));
if(!currentMenu.length){
currentMenu=this.element;
}
this._close(currentMenu);
this.blur(event);
this._removeClass(currentMenu.find(".ui-state-active"),null,"ui-state-active");
this.activeMenu=currentMenu;
},this.delay);
},
_close:function(startMenu){
if(!startMenu){
startMenu=this.active?this.active.parent():this.element;
}
startMenu.find(".ui-menu")
.hide()
.attr("aria-hidden","true")
.attr("aria-expanded","false");
},
_closeOnDocumentClick:function(event){
return!$(event.target).closest(".ui-menu").length;
},
_isDivider:function(item){
return!/[^\-\u2014\u2013\s]/.test(item.text());
},
collapse:function(event){
var newItem=this.active&&
this.active.parent().closest(".ui-menu-item",this.element);
if(newItem&&newItem.length){
this._close();
this.focus(event,newItem);
}
},
expand:function(event){
var newItem=this.active&&
this.active
.children(".ui-menu ")
.find(this.options.items)
.first();
if(newItem&&newItem.length){
this._open(newItem.parent());
this._delay(function(){
this.focus(event,newItem);
});
}
},
next:function(event){
this._move("next","first",event);
},
previous:function(event){
this._move("prev","last",event);
},
isFirstItem:function(){
return this.active&&!this.active.prevAll(".ui-menu-item").length;
},
isLastItem:function(){
return this.active&&!this.active.nextAll(".ui-menu-item").length;
},
_move:function(direction,filter,event){
var next;
if(this.active){
if(direction==="first"||direction==="last"){
next=this.active
[direction==="first"?"prevAll":"nextAll"](".ui-menu-item")
.eq(-1);
}else{
next=this.active
[direction+"All"](".ui-menu-item")
.eq(0);
}
}
if(!next||!next.length||!this.active){
next=this.activeMenu.find(this.options.items)[filter]();
}
this.focus(event,next);
},
nextPage:function(event){
var item,base,height;
if(!this.active){
this.next(event);
return;
}
if(this.isLastItem()){
return;
}
if(this._hasScroll()){
base=this.active.offset().top;
height=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){
item=$(this);
return item.offset().top-base-height<0;
});
this.focus(event,item);
}else{
this.focus(event,this.activeMenu.find(this.options.items)
[!this.active?"first":"last"]());
}
},
previousPage:function(event){
var item,base,height;
if(!this.active){
this.next(event);
return;
}
if(this.isFirstItem()){
return;
}
if(this._hasScroll()){
base=this.active.offset().top;
height=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){
item=$(this);
return item.offset().top-base+height>0;
});
this.focus(event,item);
}else{
this.focus(event,this.activeMenu.find(this.options.items).first());
}
},
_hasScroll:function(){
return this.element.outerHeight()<this.element.prop("scrollHeight");
},
select:function(event){
this.active=this.active||$(event.target).closest(".ui-menu-item");
var ui={item:this.active};
if(!this.active.has(".ui-menu").length){
this.collapseAll(event,true);
}
this._trigger("select",event,ui);
},
_filterMenuItems:function(character){
var escapedCharacter=character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),
regex=new RegExp("^"+escapedCharacter,"i");
return this.activeMenu
.find(this.options.items)
.filter(".ui-menu-item")
.filter(function(){
return regex.test(
$.trim($(this).children(".ui-menu-item-wrapper").text()));
});
}
});
$.widget("ui.autocomplete",{
version:"1.12.1",
defaultElement:"<input>",
options:{
appendTo:null,
autoFocus:false,
delay:300,
minLength:1,
position:{
my:"left top",
at:"left bottom",
collision:"none"
},
source:null,
change:null,
close:null,
focus:null,
open:null,
response:null,
search:null,
select:null
},
requestIndex:0,
pending:0,
_create:function(){
var suppressKeyPress,suppressKeyPressRepeat,suppressInput,
nodeName=this.element[0].nodeName.toLowerCase(),
isTextarea=nodeName==="textarea",
isInput=nodeName==="input";
this.isMultiLine=isTextarea||!isInput&&this._isContentEditable(this.element);
this.valueMethod=this.element[isTextarea||isInput?"val":"text"];
this.isNewMenu=true;
this._addClass("ui-autocomplete-input");
this.element.attr("autocomplete","off");
this._on(this.element,{
keydown:function(event){
if(this.element.prop("readOnly")){
suppressKeyPress=true;
suppressInput=true;
suppressKeyPressRepeat=true;
return;
}
suppressKeyPress=false;
suppressInput=false;
suppressKeyPressRepeat=false;
var keyCode=$.ui.keyCode;
switch(event.keyCode){
case keyCode.PAGE_UP:
suppressKeyPress=true;
this._move("previousPage",event);
break;
case keyCode.PAGE_DOWN:
suppressKeyPress=true;
this._move("nextPage",event);
break;
case keyCode.UP:
suppressKeyPress=true;
this._keyEvent("previous",event);
break;
case keyCode.DOWN:
suppressKeyPress=true;
this._keyEvent("next",event);
break;
case keyCode.ENTER:
if(this.menu.active){
suppressKeyPress=true;
event.preventDefault();
this.menu.select(event);
}
break;
case keyCode.TAB:
if(this.menu.active){
this.menu.select(event);
}
break;
case keyCode.ESCAPE:
if(this.menu.element.is(":visible")){
if(!this.isMultiLine){
this._value(this.term);
}
this.close(event);
event.preventDefault();
}
break;
default:
suppressKeyPressRepeat=true;
this._searchTimeout(event);
break;
}
},
keypress:function(event){
if(suppressKeyPress){
suppressKeyPress=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){
event.preventDefault();
}
return;
}
if(suppressKeyPressRepeat){
return;
}
var keyCode=$.ui.keyCode;
switch(event.keyCode){
case keyCode.PAGE_UP:
this._move("previousPage",event);
break;
case keyCode.PAGE_DOWN:
this._move("nextPage",event);
break;
case keyCode.UP:
this._keyEvent("previous",event);
break;
case keyCode.DOWN:
this._keyEvent("next",event);
break;
}
},
input:function(event){
if(suppressInput){
suppressInput=false;
event.preventDefault();
return;
}
this._searchTimeout(event);
},
focus:function(){
this.selectedItem=null;
this.previous=this._value();
},
blur:function(event){
if(this.cancelBlur){
delete this.cancelBlur;
return;
}
clearTimeout(this.searching);
this.close(event);
this._change(event);
}
});
this._initSource();
this.menu=$("<ul>")
.appendTo(this._appendTo())
.menu({
role:null
})
.hide()
.menu("instance");
this._addClass(this.menu.element,"ui-autocomplete","ui-front");
this._on(this.menu.element,{
mousedown:function(event){
event.preventDefault();
this.cancelBlur=true;
this._delay(function(){
delete this.cancelBlur;
if(this.element[0]!==$.ui.safeActiveElement(this.document[0])){
this.element.trigger("focus");
}
});
},
menufocus:function(event,ui){
var label,item;
if(this.isNewMenu){
this.isNewMenu=false;
if(event.originalEvent&&/^mouse/.test(event.originalEvent.type)){
this.menu.blur();
this.document.one("mousemove",function(){
$(event.target).trigger(event.originalEvent);
});
return;
}
}
item=ui.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",event,{item:item})){
if(event.originalEvent&&/^key/.test(event.originalEvent.type)){
this._value(item.value);
}
}
label=ui.item.attr("aria-label")||item.value;
if(label&&$.trim(label).length){
this.liveRegion.children().hide();
$("<div>").text(label).appendTo(this.liveRegion);
}
},
menuselect:function(event,ui){
var item=ui.item.data("ui-autocomplete-item"),
previous=this.previous;
if(this.element[0]!==$.ui.safeActiveElement(this.document[0])){
this.element.trigger("focus");
this.previous=previous;
this._delay(function(){
this.previous=previous;
this.selectedItem=item;
});
}
if(false!==this._trigger("select",event,{item:item})){
this._value(item.value);
}
this.term=this._value();
this.close(event);
this.selectedItem=item;
}
});
this.liveRegion=$("<div>",{
role:"status",
"aria-live":"assertive",
"aria-relevant":"additions"
})
.appendTo(this.document[0].body);
this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");
this._on(this.window,{
beforeunload:function(){
this.element.removeAttr("autocomplete");
}
});
},
_destroy:function(){
clearTimeout(this.searching);
this.element.removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove();
},
_setOption:function(key,value){
this._super(key,value);
if(key==="source"){
this._initSource();
}
if(key==="appendTo"){
this.menu.element.appendTo(this._appendTo());
}
if(key==="disabled"&&value&&this.xhr){
this.xhr.abort();
}
},
_isEventTargetInWidget:function(event){
var menuElement=this.menu.element[0];
return event.target===this.element[0]||
event.target===menuElement||
$.contains(menuElement,event.target);
},
_closeOnClickOutside:function(event){
if(!this._isEventTargetInWidget(event)){
this.close();
}
},
_appendTo:function(){
var element=this.options.appendTo;
if(element){
element=element.jquery||element.nodeType?
$(element):
this.document.find(element).eq(0);
}
if(!element||!element[0]){
element=this.element.closest(".ui-front, dialog");
}
if(!element.length){
element=this.document[0].body;
}
return element;
},
_initSource:function(){
var array,url,
that=this;
if($.isArray(this.options.source)){
array=this.options.source;
this.source=function(request,response){
response($.ui.autocomplete.filter(array,request.term));
};
}else if(typeof this.options.source==="string"){
url=this.options.source;
this.source=function(request,response){
if(that.xhr){
that.xhr.abort();
}
that.xhr=$.ajax({
url:url,
data:request,
dataType:"json",
success:function(data){
response(data);
},
error:function(){
response([]);
}
});
};
}else{
this.source=this.options.source;
}
},
_searchTimeout:function(event){
clearTimeout(this.searching);
this.searching=this._delay(function(){
var equalValues=this.term===this._value(),
menuVisible=this.menu.element.is(":visible"),
modifierKey=event.altKey||event.ctrlKey||event.metaKey||event.shiftKey;
if(!equalValues||(equalValues&&!menuVisible&&!modifierKey)){
this.selectedItem=null;
this.search(null,event);
}
},this.options.delay);
},
search:function(value,event){
value=value!=null?value:this._value();
this.term=this._value();
if(value.length<this.options.minLength){
return this.close(event);
}
if(this._trigger("search",event)===false){
return;
}
return this._search(value);
},
_search:function(value){
this.pending++;
this._addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:value},this._response());
},
_response:function(){
var index=++this.requestIndex;
return $.proxy(function(content){
if(index===this.requestIndex){
this.__response(content);
}
this.pending--;
if(!this.pending){
this._removeClass("ui-autocomplete-loading");
}
},this);
},
__response:function(content){
if(content){
content=this._normalize(content);
}
this._trigger("response",null,{content:content});
if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){
this._suggest(content);
this._trigger("open");
}else{
this._close();
}
},
close:function(event){
this.cancelSearch=true;
this._close(event);
},
_close:function(event){
this._off(this.document,"mousedown");
if(this.menu.element.is(":visible")){
this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",event);
}
},
_change:function(event){
if(this.previous!==this._value()){
this._trigger("change",event,{item:this.selectedItem});
}
},
_normalize:function(items){
if(items.length&&items[0].label&&items[0].value){
return items;
}
return $.map(items,function(item){
if(typeof item==="string"){
return{
label:item,
value:item
};
}
return $.extend({},item,{
label:item.label||item.value,
value:item.value||item.label
});
});
},
_suggest:function(items){
var ul=this.menu.element.empty();
this._renderMenu(ul,items);
this.isNewMenu=true;
this.menu.refresh();
ul.show();
this._resizeMenu();
ul.position($.extend({
of:this.element
},this.options.position));
if(this.options.autoFocus){
this.menu.next();
}
this._on(this.document,{
mousedown:"_closeOnClickOutside"
});
},
_resizeMenu:function(){
var ul=this.menu.element;
ul.outerWidth(Math.max(
ul.width("").outerWidth()+1,
this.element.outerWidth()
));
},
_renderMenu:function(ul,items){
var that=this;
$.each(items,function(index,item){
that._renderItemData(ul,item);
});
},
_renderItemData:function(ul,item){
return this._renderItem(ul,item).data("ui-autocomplete-item",item);
},
_renderItem:function(ul,item){
return $("<li>")
.append($("<div>").text(item.label))
.appendTo(ul);
},
_move:function(direction,event){
if(!this.menu.element.is(":visible")){
this.search(null,event);
return;
}
if(this.menu.isFirstItem()&&/^previous/.test(direction)||
this.menu.isLastItem()&&/^next/.test(direction)){
if(!this.isMultiLine){
this._value(this.term);
}
this.menu.blur();
return;
}
this.menu[direction](event);
},
widget:function(){
return this.menu.element;
},
_value:function(){
return this.valueMethod.apply(this.element,arguments);
},
_keyEvent:function(keyEvent,event){
if(!this.isMultiLine||this.menu.element.is(":visible")){
this._move(keyEvent,event);
event.preventDefault();
}
},
_isContentEditable:function(element){
if(!element.length){
return false;
}
var editable=element.prop("contentEditable");
if(editable==="inherit"){
return this._isContentEditable(element.parent());
}
return editable==="true";
}
});
$.extend($.ui.autocomplete,{
escapeRegex:function(value){
return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");
},
filter:function(array,term){
var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");
return $.grep(array,function(value){
return matcher.test(value.label||value.value||value);
});
}
});
$.widget("ui.autocomplete",$.ui.autocomplete,{
options:{
messages:{
noResults:"No search results.",
results:function(amount){
return amount+(amount>1?" results are":" result is")+
" available, use up and down arrow keys to navigate.";
}
}
},
__response:function(content){
var message;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){
return;
}
if(content&&content.length){
message=this.options.messages.results(content.length);
}else{
message=this.options.messages.noResults;
}
this.liveRegion.children().hide();
$("<div>").text(message).appendTo(this.liveRegion);
}
});
var widgetsAutocomplete=$.ui.autocomplete;
var controlgroupCornerRegex=/ui-corner-([a-z]){2,6}/g;
var widgetsControlgroup=$.widget("ui.controlgroup",{
version:"1.12.1",
defaultElement:"<div>",
options:{
direction:"horizontal",
disabled:null,
onlyVisible:true,
items:{
"button":"input[type=button], input[type=submit], input[type=reset], button, a",
"controlgroupLabel":".ui-controlgroup-label",
"checkboxradio":"input[type='checkbox'], input[type='radio']",
"selectmenu":"select",
"spinner":".ui-spinner-input"
}
},
_create:function(){
this._enhance();
},
_enhance:function(){
this.element.attr("role","toolbar");
this.refresh();
},
_destroy:function(){
this._callChildMethod("destroy");
this.childWidgets.removeData("ui-controlgroup-data");
this.element.removeAttr("role");
if(this.options.items.controlgroupLabel){
this.element
.find(this.options.items.controlgroupLabel)
.find(".ui-controlgroup-label-contents")
.contents().unwrap();
}
},
_initWidgets:function(){
var that=this,
childWidgets=[];
$.each(this.options.items,function(widget,selector){
var labels;
var options={};
if(!selector){
return;
}
if(widget==="controlgroupLabel"){
labels=that.element.find(selector);
labels.each(function(){
var element=$(this);
if(element.children(".ui-controlgroup-label-contents").length){
return;
}
element.contents()
.wrapAll("<span class='ui-controlgroup-label-contents'></span>");
});
that._addClass(labels,null,"ui-widget ui-widget-content ui-state-default");
childWidgets=childWidgets.concat(labels.get());
return;
}
if(!$.fn[widget]){
return;
}
if(that["_"+widget+"Options"]){
options=that["_"+widget+"Options"]("middle");
}else{
options={classes:{}};
}
that.element
.find(selector)
.each(function(){
var element=$(this);
var instance=element[widget]("instance");
var instanceOptions=$.widget.extend({},options);
if(widget==="button"&&element.parent(".ui-spinner").length){
return;
}
if(!instance){
instance=element[widget]()[widget]("instance");
}
if(instance){
instanceOptions.classes=
that._resolveClassesValues(instanceOptions.classes,instance);
}
element[widget](instanceOptions);
var widgetElement=element[widget]("widget");
$.data(widgetElement[0],"ui-controlgroup-data",
instance?instance:element[widget]("instance"));
childWidgets.push(widgetElement[0]);
});
});
this.childWidgets=$($.unique(childWidgets));
this._addClass(this.childWidgets,"ui-controlgroup-item");
},
_callChildMethod:function(method){
this.childWidgets.each(function(){
var element=$(this),
data=element.data("ui-controlgroup-data");
if(data&&data[method]){
data[method]();
}
});
},
_updateCornerClass:function(element,position){
var remove="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
var add=this._buildSimpleOptions(position,"label").classes.label;
this._removeClass(element,null,remove);
this._addClass(element,null,add);
},
_buildSimpleOptions:function(position,key){
var direction=this.options.direction==="vertical";
var result={
classes:{}
};
result.classes[key]={
"middle":"",
"first":"ui-corner-"+(direction?"top":"left"),
"last":"ui-corner-"+(direction?"bottom":"right"),
"only":"ui-corner-all"
}[position];
return result;
},
_spinnerOptions:function(position){
var options=this._buildSimpleOptions(position,"ui-spinner");
options.classes["ui-spinner-up"]="";
options.classes["ui-spinner-down"]="";
return options;
},
_buttonOptions:function(position){
return this._buildSimpleOptions(position,"ui-button");
},
_checkboxradioOptions:function(position){
return this._buildSimpleOptions(position,"ui-checkboxradio-label");
},
_selectmenuOptions:function(position){
var direction=this.options.direction==="vertical";
return{
width:direction?"auto":false,
classes:{
middle:{
"ui-selectmenu-button-open":"",
"ui-selectmenu-button-closed":""
},
first:{
"ui-selectmenu-button-open":"ui-corner-"+(direction?"top":"tl"),
"ui-selectmenu-button-closed":"ui-corner-"+(direction?"top":"left")
},
last:{
"ui-selectmenu-button-open":direction?"":"ui-corner-tr",
"ui-selectmenu-button-closed":"ui-corner-"+(direction?"bottom":"right")
},
only:{
"ui-selectmenu-button-open":"ui-corner-top",
"ui-selectmenu-button-closed":"ui-corner-all"
}
}[position]
};
},
_resolveClassesValues:function(classes,instance){
var result={};
$.each(classes,function(key){
var current=instance.options.classes[key]||"";
current=$.trim(current.replace(controlgroupCornerRegex,""));
result[key]=(current+" "+classes[key]).replace(/\s+/g," ");
});
return result;
},
_setOption:function(key,value){
if(key==="direction"){
this._removeClass("ui-controlgroup-"+this.options.direction);
}
this._super(key,value);
if(key==="disabled"){
this._callChildMethod(value?"disable":"enable");
return;
}
this.refresh();
},
refresh:function(){
var children,
that=this;
this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction);
if(this.options.direction==="horizontal"){
this._addClass(null,"ui-helper-clearfix");
}
this._initWidgets();
children=this.childWidgets;
if(this.options.onlyVisible){
children=children.filter(":visible");
}
if(children.length){
$.each(["first","last"],function(index,value){
var instance=children[value]().data("ui-controlgroup-data");
if(instance&&that["_"+instance.widgetName+"Options"]){
var options=that["_"+instance.widgetName+"Options"](
children.length===1?"only":value
);
options.classes=that._resolveClassesValues(options.classes,instance);
instance.element[instance.widgetName](options);
}else{
that._updateCornerClass(children[value](),value);
}
});
this._callChildMethod("refresh");
}
}
});
$.widget("ui.checkboxradio",[$.ui.formResetMixin,{
version:"1.12.1",
options:{
disabled:null,
label:null,
icon:true,
classes:{
"ui-checkboxradio-label":"ui-corner-all",
"ui-checkboxradio-icon":"ui-corner-all"
}
},
_getCreateOptions:function(){
var disabled,labels;
var that=this;
var options=this._super()||{};
this._readType();
labels=this.element.labels();
this.label=$(labels[labels.length-1]);
if(!this.label.length){
$.error("No label found for checkboxradio widget");
}
this.originalLabel="";
this.label.contents().not(this.element[0]).each(function(){
that.originalLabel+=this.nodeType===3?$(this).text():this.outerHTML;
});
if(this.originalLabel){
options.label=this.originalLabel;
}
disabled=this.element[0].disabled;
if(disabled!=null){
options.disabled=disabled;
}
return options;
},
_create:function(){
var checked=this.element[0].checked;
this._bindFormResetHandler();
if(this.options.disabled==null){
this.options.disabled=this.element[0].disabled;
}
this._setOption("disabled",this.options.disabled);
this._addClass("ui-checkboxradio","ui-helper-hidden-accessible");
this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget");
if(this.type==="radio"){
this._addClass(this.label,"ui-checkboxradio-radio-label");
}
if(this.options.label&&this.options.label!==this.originalLabel){
this._updateLabel();
}else if(this.originalLabel){
this.options.label=this.originalLabel;
}
this._enhance();
if(checked){
this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active");
if(this.icon){
this._addClass(this.icon,null,"ui-state-hover");
}
}
this._on({
change:"_toggleClasses",
focus:function(){
this._addClass(this.label,null,"ui-state-focus ui-visual-focus");
},
blur:function(){
this._removeClass(this.label,null,"ui-state-focus ui-visual-focus");
}
});
},
_readType:function(){
var nodeName=this.element[0].nodeName.toLowerCase();
this.type=this.element[0].type;
if(nodeName!=="input"||!/radio|checkbox/.test(this.type)){
$.error("Can't create checkboxradio on element.nodeName="+nodeName+
" and element.type="+this.type);
}
},
_enhance:function(){
this._updateIcon(this.element[0].checked);
},
widget:function(){
return this.label;
},
_getRadioGroup:function(){
var group;
var name=this.element[0].name;
var nameSelector="input[name='"+$.ui.escapeSelector(name)+"']";
if(!name){
return $([]);
}
if(this.form.length){
group=$(this.form[0].elements).filter(nameSelector);
}else{
group=$(nameSelector).filter(function(){
return $(this).form().length===0;
});
}
return group.not(this.element);
},
_toggleClasses:function(){
var checked=this.element[0].checked;
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",checked);
if(this.options.icon&&this.type==="checkbox"){
this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",checked)
._toggleClass(this.icon,null,"ui-icon-blank",!checked);
}
if(this.type==="radio"){
this._getRadioGroup()
.each(function(){
var instance=$(this).checkboxradio("instance");
if(instance){
instance._removeClass(instance.label,
"ui-checkboxradio-checked","ui-state-active");
}
});
}
},
_destroy:function(){
this._unbindFormResetHandler();
if(this.icon){
this.icon.remove();
this.iconSpace.remove();
}
},
_setOption:function(key,value){
if(key==="label"&&!value){
return;
}
this._super(key,value);
if(key==="disabled"){
this._toggleClass(this.label,null,"ui-state-disabled",value);
this.element[0].disabled=value;
return;
}
this.refresh();
},
_updateIcon:function(checked){
var toAdd="ui-icon ui-icon-background ";
if(this.options.icon){
if(!this.icon){
this.icon=$("<span>");
this.iconSpace=$("<span> </span>");
this._addClass(this.iconSpace,"ui-checkboxradio-icon-space");
}
if(this.type==="checkbox"){
toAdd+=checked?"ui-icon-check ui-state-checked":"ui-icon-blank";
this._removeClass(this.icon,null,checked?"ui-icon-blank":"ui-icon-check");
}else{
toAdd+="ui-icon-blank";
}
this._addClass(this.icon,"ui-checkboxradio-icon",toAdd);
if(!checked){
this._removeClass(this.icon,null,"ui-icon-check ui-state-checked");
}
this.icon.prependTo(this.label).after(this.iconSpace);
}else if(this.icon!==undefined){
this.icon.remove();
this.iconSpace.remove();
delete this.icon;
}
},
_updateLabel:function(){
var contents=this.label.contents().not(this.element[0]);
if(this.icon){
contents=contents.not(this.icon[0]);
}
if(this.iconSpace){
contents=contents.not(this.iconSpace[0]);
}
contents.remove();
this.label.append(this.options.label);
},
refresh:function(){
var checked=this.element[0].checked,
isDisabled=this.element[0].disabled;
this._updateIcon(checked);
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",checked);
if(this.options.label!==null){
this._updateLabel();
}
if(isDisabled!==this.options.disabled){
this._setOptions({"disabled":isDisabled});
}
}
}]);
var widgetsCheckboxradio=$.ui.checkboxradio;
$.widget("ui.button",{
version:"1.12.1",
defaultElement:"<button>",
options:{
classes:{
"ui-button":"ui-corner-all"
},
disabled:null,
icon:null,
iconPosition:"beginning",
label:null,
showLabel:true
},
_getCreateOptions:function(){
var disabled,
options=this._super()||{};
this.isInput=this.element.is("input");
disabled=this.element[0].disabled;
if(disabled!=null){
options.disabled=disabled;
}
this.originalLabel=this.isInput?this.element.val():this.element.html();
if(this.originalLabel){
options.label=this.originalLabel;
}
return options;
},
_create:function(){
if(!this.option.showLabel&!this.options.icon){
this.options.showLabel=true;
}
if(this.options.disabled==null){
this.options.disabled=this.element[0].disabled||false;
}
this.hasTitle=!!this.element.attr("title");
if(this.options.label&&this.options.label!==this.originalLabel){
if(this.isInput){
this.element.val(this.options.label);
}else{
this.element.html(this.options.label);
}
}
this._addClass("ui-button","ui-widget");
this._setOption("disabled",this.options.disabled);
this._enhance();
if(this.element.is("a")){
this._on({
"keyup":function(event){
if(event.keyCode===$.ui.keyCode.SPACE){
event.preventDefault();
if(this.element[0].click){
this.element[0].click();
}else{
this.element.trigger("click");
}
}
}
});
}
},
_enhance:function(){
if(!this.element.is("button")){
this.element.attr("role","button");
}
if(this.options.icon){
this._updateIcon("icon",this.options.icon);
this._updateTooltip();
}
},
_updateTooltip:function(){
this.title=this.element.attr("title");
if(!this.options.showLabel&&!this.title){
this.element.attr("title",this.options.label);
}
},
_updateIcon:function(option,value){
var icon=option!=="iconPosition",
position=icon?this.options.iconPosition:value,
displayBlock=position==="top"||position==="bottom";
if(!this.icon){
this.icon=$("<span>");
this._addClass(this.icon,"ui-button-icon","ui-icon");
if(!this.options.showLabel){
this._addClass("ui-button-icon-only");
}
}else if(icon){
this._removeClass(this.icon,null,this.options.icon);
}
if(icon){
this._addClass(this.icon,null,value);
}
this._attachIcon(position);
if(displayBlock){
this._addClass(this.icon,null,"ui-widget-icon-block");
if(this.iconSpace){
this.iconSpace.remove();
}
}else{
if(!this.iconSpace){
this.iconSpace=$("<span> </span>");
this._addClass(this.iconSpace,"ui-button-icon-space");
}
this._removeClass(this.icon,null,"ui-wiget-icon-block");
this._attachIconSpace(position);
}
},
_destroy:function(){
this.element.removeAttr("role");
if(this.icon){
this.icon.remove();
}
if(this.iconSpace){
this.iconSpace.remove();
}
if(!this.hasTitle){
this.element.removeAttr("title");
}
},
_attachIconSpace:function(iconPosition){
this.icon[/^(?:end|bottom)/.test(iconPosition)?"before":"after"](this.iconSpace);
},
_attachIcon:function(iconPosition){
this.element[/^(?:end|bottom)/.test(iconPosition)?"append":"prepend"](this.icon);
},
_setOptions:function(options){
var newShowLabel=options.showLabel===undefined?
this.options.showLabel:
options.showLabel,
newIcon=options.icon===undefined?this.options.icon:options.icon;
if(!newShowLabel&&!newIcon){
options.showLabel=true;
}
this._super(options);
},
_setOption:function(key,value){
if(key==="icon"){
if(value){
this._updateIcon(key,value);
}else if(this.icon){
this.icon.remove();
if(this.iconSpace){
this.iconSpace.remove();
}
}
}
if(key==="iconPosition"){
this._updateIcon(key,value);
}
if(key==="showLabel"){
this._toggleClass("ui-button-icon-only",null,!value);
this._updateTooltip();
}
if(key==="label"){
if(this.isInput){
this.element.val(value);
}else{
this.element.html(value);
if(this.icon){
this._attachIcon(this.options.iconPosition);
this._attachIconSpace(this.options.iconPosition);
}
}
}
this._super(key,value);
if(key==="disabled"){
this._toggleClass(null,"ui-state-disabled",value);
this.element[0].disabled=value;
if(value){
this.element.blur();
}
}
},
refresh:function(){
var isDisabled=this.element.is("input, button")?
this.element[0].disabled:this.element.hasClass("ui-button-disabled");
if(isDisabled!==this.options.disabled){
this._setOptions({disabled:isDisabled});
}
this._updateTooltip();
}
});
if($.uiBackCompat!==false){
$.widget("ui.button",$.ui.button,{
options:{
text:true,
icons:{
primary:null,
secondary:null
}
},
_create:function(){
if(this.options.showLabel&&!this.options.text){
this.options.showLabel=this.options.text;
}
if(!this.options.showLabel&&this.options.text){
this.options.text=this.options.showLabel;
}
if(!this.options.icon&&(this.options.icons.primary||
this.options.icons.secondary)){
if(this.options.icons.primary){
this.options.icon=this.options.icons.primary;
}else{
this.options.icon=this.options.icons.secondary;
this.options.iconPosition="end";
}
}else if(this.options.icon){
this.options.icons.primary=this.options.icon;
}
this._super();
},
_setOption:function(key,value){
if(key==="text"){
this._super("showLabel",value);
return;
}
if(key==="showLabel"){
this.options.text=value;
}
if(key==="icon"){
this.options.icons.primary=value;
}
if(key==="icons"){
if(value.primary){
this._super("icon",value.primary);
this._super("iconPosition","beginning");
}else if(value.secondary){
this._super("icon",value.secondary);
this._super("iconPosition","end");
}
}
this._superApply(arguments);
}
});
$.fn.button=(function(orig){
return function(){
if(!this.length||(this.length&&this[0].tagName!=="INPUT")||
(this.length&&this[0].tagName==="INPUT"&&(
this.attr("type")!=="checkbox"&&this.attr("type")!=="radio"
))){
return orig.apply(this,arguments);
}
if(!$.ui.checkboxradio){
$.error("Checkboxradio widget missing");
}
if(arguments.length===0){
return this.checkboxradio({
"icon":false
});
}
return this.checkboxradio.apply(this,arguments);
};
})($.fn.button);
$.fn.buttonset=function(){
if(!$.ui.controlgroup){
$.error("Controlgroup widget missing");
}
if(arguments[0]==="option"&&arguments[1]==="items"&&arguments[2]){
return this.controlgroup.apply(this,
[arguments[0],"items.button",arguments[2]]);
}
if(arguments[0]==="option"&&arguments[1]==="items"){
return this.controlgroup.apply(this,[arguments[0],"items.button"]);
}
if(typeof arguments[0]==="object"&&arguments[0].items){
arguments[0].items={
button:arguments[0].items
};
}
return this.controlgroup.apply(this,arguments);
};
}
var widgetsButton=$.ui.button;
$.extend($.ui,{datepicker:{version:"1.12.1"}});
var datepicker_instActive;
function datepicker_getZindex(elem){
var position,value;
while(elem.length&&elem[0]!==document){
position=elem.css("position");
if(position==="absolute"||position==="relative"||position==="fixed"){
value=parseInt(elem.css("zIndex"),10);
if(!isNaN(value)&&value!==0){
return value;
}
}
elem=elem.parent();
}
return 0;
}
function Datepicker(){
this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={
closeText:"Done",
prevText:"Prev",
nextText:"Next",
currentText:"Today",
monthNames:["January","February","March","April","May","June",
"July","August","September","October","November","December"],
monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],
weekHeader:"Wk",
dateFormat:"mm/dd/yy",
firstDay:0,
isRTL:false,
showMonthAfterYear:false,
yearSuffix:""
};
this._defaults={
showOn:"focus",
showAnim:"fadeIn",
showOptions:{},
defaultDate:null,
appendText:"",
buttonText:"...",
buttonImage:"",
buttonImageOnly:false,
hideIfNoPrevNext:false,
navigationAsDateFormat:false,
gotoCurrent:false,
changeMonth:false,
changeYear:false,
yearRange:"c-10:c+10",
showOtherMonths:false,
selectOtherMonths:false,
showWeek:false,
calculateWeek:this.iso8601Week,
shortYearCutoff:"+10",
minDate:null,
maxDate:null,
duration:"fast",
beforeShowDay:null,
beforeShow:null,
onSelect:null,
onChangeMonthYear:null,
onClose:null,
numberOfMonths:1,
showCurrentAtPos:0,
stepMonths:1,
stepBigMonths:12,
altField:"",
altFormat:"",
constrainInput:true,
showButtonPanel:false,
autoSize:false,
disabled:false
};
$.extend(this._defaults,this.regional[""]);
this.regional.en=$.extend(true,{},this.regional[""]);
this.regional["en-US"]=$.extend(true,{},this.regional.en);
this.dpDiv=datepicker_bindHover($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
}
$.extend(Datepicker.prototype,{
markerClassName:"hasDatepicker",
maxRows:4,
_widgetDatepicker:function(){
return this.dpDiv;
},
setDefaults:function(settings){
datepicker_extendRemove(this._defaults,settings||{});
return this;
},
_attachDatepicker:function(target,settings){
var nodeName,inline,inst;
nodeName=target.nodeName.toLowerCase();
inline=(nodeName==="div"||nodeName==="span");
if(!target.id){
this.uuid+=1;
target.id="dp"+this.uuid;
}
inst=this._newInst($(target),inline);
inst.settings=$.extend({},settings||{});
if(nodeName==="input"){
this._connectDatepicker(target,inst);
}else if(inline){
this._inlineDatepicker(target,inst);
}
},
_newInst:function(target,inline){
var id=target[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:id,input:target,
selectedDay:0,selectedMonth:0,selectedYear:0,
drawMonth:0,drawYear:0,
inline:inline,
dpDiv:(!inline?this.dpDiv:
datepicker_bindHover($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};
},
_connectDatepicker:function(target,inst){
var input=$(target);
inst.append=$([]);
inst.trigger=$([]);
if(input.hasClass(this.markerClassName)){
return;
}
this._attachments(input,inst);
input.addClass(this.markerClassName).on("keydown",this._doKeyDown).
on("keypress",this._doKeyPress).on("keyup",this._doKeyUp);
this._autoSize(inst);
$.data(target,"datepicker",inst);
if(inst.settings.disabled){
this._disableDatepicker(target);
}
},
_attachments:function(input,inst){
var showOn,buttonText,buttonImage,
appendText=this._get(inst,"appendText"),
isRTL=this._get(inst,"isRTL");
if(inst.append){
inst.append.remove();
}
if(appendText){
inst.append=$("<span class='"+this._appendClass+"'>"+appendText+"</span>");
input[isRTL?"before":"after"](inst.append);
}
input.off("focus",this._showDatepicker);
if(inst.trigger){
inst.trigger.remove();
}
showOn=this._get(inst,"showOn");
if(showOn==="focus"||showOn==="both"){
input.on("focus",this._showDatepicker);
}
if(showOn==="button"||showOn==="both"){
buttonText=this._get(inst,"buttonText");
buttonImage=this._get(inst,"buttonImage");
inst.trigger=$(this._get(inst,"buttonImageOnly")?
$("<img/>").addClass(this._triggerClass).
attr({src:buttonImage,alt:buttonText,title:buttonText}):
$("<button type='button'></button>").addClass(this._triggerClass).
html(!buttonImage?buttonText:$("<img/>").attr(
{src:buttonImage,alt:buttonText,title:buttonText})));
input[isRTL?"before":"after"](inst.trigger);
inst.trigger.on("click",function(){
if($.datepicker._datepickerShowing&&$.datepicker._lastInput===input[0]){
$.datepicker._hideDatepicker();
}else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[0]){
$.datepicker._hideDatepicker();
$.datepicker._showDatepicker(input[0]);
}else{
$.datepicker._showDatepicker(input[0]);
}
return false;
});
}
},
_autoSize:function(inst){
if(this._get(inst,"autoSize")&&!inst.inline){
var findMax,max,maxI,i,
date=new Date(2009,12-1,20),
dateFormat=this._get(inst,"dateFormat");
if(dateFormat.match(/[DM]/)){
findMax=function(names){
max=0;
maxI=0;
for(i=0;i<names.length;i++){
if(names[i].length>max){
max=names[i].length;
maxI=i;
}
}
return maxI;
};
date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?
"monthNames":"monthNamesShort"))));
date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?
"dayNames":"dayNamesShort")))+20-date.getDay());
}
inst.input.attr("size",this._formatDate(inst,date).length);
}
},
_inlineDatepicker:function(target,inst){
var divSpan=$(target);
if(divSpan.hasClass(this.markerClassName)){
return;
}
divSpan.addClass(this.markerClassName).append(inst.dpDiv);
$.data(target,"datepicker",inst);
this._setDate(inst,this._getDefaultDate(inst),true);
this._updateDatepicker(inst);
this._updateAlternate(inst);
if(inst.settings.disabled){
this._disableDatepicker(target);
}
inst.dpDiv.css("display","block");
},
_dialogDatepicker:function(input,date,onSelect,settings,pos){
var id,browserWidth,browserHeight,scrollX,scrollY,
inst=this._dialogInst;
if(!inst){
this.uuid+=1;
id="dp"+this.uuid;
this._dialogInput=$("<input type='text' id='"+id+
"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.on("keydown",this._doKeyDown);
$("body").append(this._dialogInput);
inst=this._dialogInst=this._newInst(this._dialogInput,false);
inst.settings={};
$.data(this._dialogInput[0],"datepicker",inst);
}
datepicker_extendRemove(inst.settings,settings||{});
date=(date&&date.constructor===Date?this._formatDate(inst,date):date);
this._dialogInput.val(date);
this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);
if(!this._pos){
browserWidth=document.documentElement.clientWidth;
browserHeight=document.documentElement.clientHeight;
scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;
scrollY=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=
[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY];
}
this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
inst.settings.onSelect=onSelect;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if($.blockUI){
$.blockUI(this.dpDiv);
}
$.data(this._dialogInput[0],"datepicker",inst);
return this;
},
_destroyDatepicker:function(target){
var nodeName,
$target=$(target),
inst=$.data(target,"datepicker");
if(!$target.hasClass(this.markerClassName)){
return;
}
nodeName=target.nodeName.toLowerCase();
$.removeData(target,"datepicker");
if(nodeName==="input"){
inst.append.remove();
inst.trigger.remove();
$target.removeClass(this.markerClassName).
off("focus",this._showDatepicker).
off("keydown",this._doKeyDown).
off("keypress",this._doKeyPress).
off("keyup",this._doKeyUp);
}else if(nodeName==="div"||nodeName==="span"){
$target.removeClass(this.markerClassName).empty();
}
if(datepicker_instActive===inst){
datepicker_instActive=null;
}
},
_enableDatepicker:function(target){
var nodeName,inline,
$target=$(target),
inst=$.data(target,"datepicker");
if(!$target.hasClass(this.markerClassName)){
return;
}
nodeName=target.nodeName.toLowerCase();
if(nodeName==="input"){
target.disabled=false;
inst.trigger.filter("button").
each(function(){this.disabled=false;}).end().
filter("img").css({opacity:"1.0",cursor:""});
}else if(nodeName==="div"||nodeName==="span"){
inline=$target.children("."+this._inlineClass);
inline.children().removeClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
prop("disabled",false);
}
this._disabledInputs=$.map(this._disabledInputs,
function(value){return(value===target?null:value);});
},
_disableDatepicker:function(target){
var nodeName,inline,
$target=$(target),
inst=$.data(target,"datepicker");
if(!$target.hasClass(this.markerClassName)){
return;
}
nodeName=target.nodeName.toLowerCase();
if(nodeName==="input"){
target.disabled=true;
inst.trigger.filter("button").
each(function(){this.disabled=true;}).end().
filter("img").css({opacity:"0.5",cursor:"default"});
}else if(nodeName==="div"||nodeName==="span"){
inline=$target.children("."+this._inlineClass);
inline.children().addClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
prop("disabled",true);
}
this._disabledInputs=$.map(this._disabledInputs,
function(value){return(value===target?null:value);});
this._disabledInputs[this._disabledInputs.length]=target;
},
_isDisabledDatepicker:function(target){
if(!target){
return false;
}
for(var i=0;i<this._disabledInputs.length;i++){
if(this._disabledInputs[i]===target){
return true;
}
}
return false;
},
_getInst:function(target){
try{
return $.data(target,"datepicker");
}
catch(err){
throw"Missing instance data for this datepicker";
}
},
_optionDatepicker:function(target,name,value){
var settings,date,minDate,maxDate,
inst=this._getInst(target);
if(arguments.length===2&&typeof name==="string"){
return(name==="defaults"?$.extend({},$.datepicker._defaults):
(inst?(name==="all"?$.extend({},inst.settings):
this._get(inst,name)):null));
}
settings=name||{};
if(typeof name==="string"){
settings={};
settings[name]=value;
}
if(inst){
if(this._curInst===inst){
this._hideDatepicker();
}
date=this._getDateDatepicker(target,true);
minDate=this._getMinMaxDate(inst,"min");
maxDate=this._getMinMaxDate(inst,"max");
datepicker_extendRemove(inst.settings,settings);
if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){
inst.settings.minDate=this._formatDate(inst,minDate);
}
if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){
inst.settings.maxDate=this._formatDate(inst,maxDate);
}
if("disabled"in settings){
if(settings.disabled){
this._disableDatepicker(target);
}else{
this._enableDatepicker(target);
}
}
this._attachments($(target),inst);
this._autoSize(inst);
this._setDate(inst,date);
this._updateAlternate(inst);
this._updateDatepicker(inst);
}
},
_changeDatepicker:function(target,name,value){
this._optionDatepicker(target,name,value);
},
_refreshDatepicker:function(target){
var inst=this._getInst(target);
if(inst){
this._updateDatepicker(inst);
}
},
_setDateDatepicker:function(target,date){
var inst=this._getInst(target);
if(inst){
this._setDate(inst,date);
this._updateDatepicker(inst);
this._updateAlternate(inst);
}
},
_getDateDatepicker:function(target,noDefault){
var inst=this._getInst(target);
if(inst&&!inst.inline){
this._setDateFromField(inst,noDefault);
}
return(inst?this._getDate(inst):null);
},
_doKeyDown:function(event){
var onSelect,dateStr,sel,
inst=$.datepicker._getInst(event.target),
handled=true,
isRTL=inst.dpDiv.is(".ui-datepicker-rtl");
inst._keyEvent=true;
if($.datepicker._datepickerShowing){
switch(event.keyCode){
case 9:$.datepicker._hideDatepicker();
handled=false;
break;
case 13:sel=$("td."+$.datepicker._dayOverClass+":not(."+
$.datepicker._currentClass+")",inst.dpDiv);
if(sel[0]){
$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);
}
onSelect=$.datepicker._get(inst,"onSelect");
if(onSelect){
dateStr=$.datepicker._formatDate(inst);
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);
}else{
$.datepicker._hideDatepicker();
}
return false;
case 27:$.datepicker._hideDatepicker();
break;
case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?
-$.datepicker._get(inst,"stepBigMonths"):
-$.datepicker._get(inst,"stepMonths")),"M");
break;
case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?
+$.datepicker._get(inst,"stepBigMonths"):
+$.datepicker._get(inst,"stepMonths")),"M");
break;
case 35:if(event.ctrlKey||event.metaKey){
$.datepicker._clearDate(event.target);
}
handled=event.ctrlKey||event.metaKey;
break;
case 36:if(event.ctrlKey||event.metaKey){
$.datepicker._gotoToday(event.target);
}
handled=event.ctrlKey||event.metaKey;
break;
case 37:if(event.ctrlKey||event.metaKey){
$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D");
}
handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){
$.datepicker._adjustDate(event.target,(event.ctrlKey?
-$.datepicker._get(inst,"stepBigMonths"):
-$.datepicker._get(inst,"stepMonths")),"M");
}
break;
case 38:if(event.ctrlKey||event.metaKey){
$.datepicker._adjustDate(event.target,-7,"D");
}
handled=event.ctrlKey||event.metaKey;
break;
case 39:if(event.ctrlKey||event.metaKey){
$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D");
}
handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){
$.datepicker._adjustDate(event.target,(event.ctrlKey?
+$.datepicker._get(inst,"stepBigMonths"):
+$.datepicker._get(inst,"stepMonths")),"M");
}
break;
case 40:if(event.ctrlKey||event.metaKey){
$.datepicker._adjustDate(event.target,+7,"D");
}
handled=event.ctrlKey||event.metaKey;
break;
default:handled=false;
}
}else if(event.keyCode===36&&event.ctrlKey){
$.datepicker._showDatepicker(this);
}else{
handled=false;
}
if(handled){
event.preventDefault();
event.stopPropagation();
}
},
_doKeyPress:function(event){
var chars,chr,
inst=$.datepicker._getInst(event.target);
if($.datepicker._get(inst,"constrainInput")){
chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));
chr=String.fromCharCode(event.charCode==null?event.keyCode:event.charCode);
return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1);
}
},
_doKeyUp:function(event){
var date,
inst=$.datepicker._getInst(event.target);
if(inst.input.val()!==inst.lastVal){
try{
date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),
(inst.input?inst.input.val():null),
$.datepicker._getFormatConfig(inst));
if(date){
$.datepicker._setDateFromField(inst);
$.datepicker._updateAlternate(inst);
$.datepicker._updateDatepicker(inst);
}
}
catch(err){
}
}
return true;
},
_showDatepicker:function(input){
input=input.target||input;
if(input.nodeName.toLowerCase()!=="input"){
input=$("input",input.parentNode)[0];
}
if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput===input){
return;
}
var inst,beforeShow,beforeShowSettings,isFixed,
offset,showAnim,duration;
inst=$.datepicker._getInst(input);
if($.datepicker._curInst&&$.datepicker._curInst!==inst){
$.datepicker._curInst.dpDiv.stop(true,true);
if(inst&&$.datepicker._datepickerShowing){
$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
}
}
beforeShow=$.datepicker._get(inst,"beforeShow");
beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};
if(beforeShowSettings===false){
return;
}
datepicker_extendRemove(inst.settings,beforeShowSettings);
inst.lastVal=null;
$.datepicker._lastInput=input;
$.datepicker._setDateFromField(inst);
if($.datepicker._inDialog){
input.value="";
}
if(!$.datepicker._pos){
$.datepicker._pos=$.datepicker._findPos(input);
$.datepicker._pos[1]+=input.offsetHeight;
}
isFixed=false;
$(input).parents().each(function(){
isFixed|=$(this).css("position")==="fixed";
return!isFixed;
});
offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};
$.datepicker._pos=null;
inst.dpDiv.empty();
inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
$.datepicker._updateDatepicker(inst);
offset=$.datepicker._checkOffset(inst,offset,isFixed);
inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?
"static":(isFixed?"fixed":"absolute")),display:"none",
left:offset.left+"px",top:offset.top+"px"});
if(!inst.inline){
showAnim=$.datepicker._get(inst,"showAnim");
duration=$.datepicker._get(inst,"duration");
inst.dpDiv.css("z-index",datepicker_getZindex($(input))+1);
$.datepicker._datepickerShowing=true;
if($.effects&&$.effects.effect[showAnim]){
inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration);
}else{
inst.dpDiv[showAnim||"show"](showAnim?duration:null);
}
if($.datepicker._shouldFocusInput(inst)){
inst.input.trigger("focus");
}
$.datepicker._curInst=inst;
}
},
_updateDatepicker:function(inst){
this.maxRows=4;
datepicker_instActive=inst;
inst.dpDiv.empty().append(this._generateHTML(inst));
this._attachHandlers(inst);
var origyearshtml,
numMonths=this._getNumberOfMonths(inst),
cols=numMonths[1],
width=17,
activeCell=inst.dpDiv.find("."+this._dayOverClass+" a");
if(activeCell.length>0){
datepicker_handleMouseover.apply(activeCell.get(0));
}
inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(cols>1){
inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em");
}
inst.dpDiv[(numMonths[0]!==1||numMonths[1]!==1?"add":"remove")+
"Class"]("ui-datepicker-multi");
inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+
"Class"]("ui-datepicker-rtl");
if(inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(inst)){
inst.input.trigger("focus");
}
if(inst.yearshtml){
origyearshtml=inst.yearshtml;
setTimeout(function(){
if(origyearshtml===inst.yearshtml&&inst.yearshtml){
inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
}
origyearshtml=inst.yearshtml=null;
},0);
}
},
_shouldFocusInput:function(inst){
return inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&!inst.input.is(":focus");
},
_checkOffset:function(inst,offset,isFixed){
var dpWidth=inst.dpDiv.outerWidth(),
dpHeight=inst.dpDiv.outerHeight(),
inputWidth=inst.input?inst.input.outerWidth():0,
inputHeight=inst.input?inst.input.outerHeight():0,
viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft()),
viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());
offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);
offset.left-=(isFixed&&offset.left===inst.input.offset().left)?$(document).scrollLeft():0;
offset.top-=(isFixed&&offset.top===(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;
offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?
Math.abs(offset.left+dpWidth-viewWidth):0);
offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?
Math.abs(dpHeight+inputHeight):0);
return offset;
},
_findPos:function(obj){
var position,
inst=this._getInst(obj),
isRTL=this._get(inst,"isRTL");
while(obj&&(obj.type==="hidden"||obj.nodeType!==1||$.expr.filters.hidden(obj))){
obj=obj[isRTL?"previousSibling":"nextSibling"];
}
position=$(obj).offset();
return[position.left,position.top];
},
_hideDatepicker:function(input){
var showAnim,duration,postProcess,onClose,
inst=this._curInst;
if(!inst||(input&&inst!==$.data(input,"datepicker"))){
return;
}
if(this._datepickerShowing){
showAnim=this._get(inst,"showAnim");
duration=this._get(inst,"duration");
postProcess=function(){
$.datepicker._tidyDialog(inst);
};
if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){
inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess);
}else{
inst.dpDiv[(showAnim==="slideDown"?"slideUp":
(showAnim==="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess);
}
if(!showAnim){
postProcess();
}
this._datepickerShowing=false;
onClose=this._get(inst,"onClose");
if(onClose){
onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst]);
}
this._lastInput=null;
if(this._inDialog){
this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if($.blockUI){
$.unblockUI();
$("body").append(this.dpDiv);
}
}
this._inDialog=false;
}
},
_tidyDialog:function(inst){
inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
},
_checkExternalClick:function(event){
if(!$.datepicker._curInst){
return;
}
var $target=$(event.target),
inst=$.datepicker._getInst($target[0]);
if((($target[0].id!==$.datepicker._mainDivId&&
$target.parents("#"+$.datepicker._mainDivId).length===0&&
!$target.hasClass($.datepicker.markerClassName)&&
!$target.closest("."+$.datepicker._triggerClass).length&&
$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||
($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==inst)){
$.datepicker._hideDatepicker();
}
},
_adjustDate:function(id,offset,period){
var target=$(id),
inst=this._getInst(target[0]);
if(this._isDisabledDatepicker(target[0])){
return;
}
this._adjustInstDate(inst,offset+
(period==="M"?this._get(inst,"showCurrentAtPos"):0),
period);
this._updateDatepicker(inst);
},
_gotoToday:function(id){
var date,
target=$(id),
inst=this._getInst(target[0]);
if(this._get(inst,"gotoCurrent")&&inst.currentDay){
inst.selectedDay=inst.currentDay;
inst.drawMonth=inst.selectedMonth=inst.currentMonth;
inst.drawYear=inst.selectedYear=inst.currentYear;
}else{
date=new Date();
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
}
this._notifyChange(inst);
this._adjustDate(target);
},
_selectMonthYear:function(id,select,period){
var target=$(id),
inst=this._getInst(target[0]);
inst["selected"+(period==="M"?"Month":"Year")]=
inst["draw"+(period==="M"?"Month":"Year")]=
parseInt(select.options[select.selectedIndex].value,10);
this._notifyChange(inst);
this._adjustDate(target);
},
_selectDay:function(id,month,year,td){
var inst,
target=$(id);
if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){
return;
}
inst=this._getInst(target[0]);
inst.selectedDay=inst.currentDay=$("a",td).html();
inst.selectedMonth=inst.currentMonth=month;
inst.selectedYear=inst.currentYear=year;
this._selectDate(id,this._formatDate(inst,
inst.currentDay,inst.currentMonth,inst.currentYear));
},
_clearDate:function(id){
var target=$(id);
this._selectDate(target,"");
},
_selectDate:function(id,dateStr){
var onSelect,
target=$(id),
inst=this._getInst(target[0]);
dateStr=(dateStr!=null?dateStr:this._formatDate(inst));
if(inst.input){
inst.input.val(dateStr);
}
this._updateAlternate(inst);
onSelect=this._get(inst,"onSelect");
if(onSelect){
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);
}else if(inst.input){
inst.input.trigger("change");
}
if(inst.inline){
this._updateDatepicker(inst);
}else{
this._hideDatepicker();
this._lastInput=inst.input[0];
if(typeof(inst.input[0])!=="object"){
inst.input.trigger("focus");
}
this._lastInput=null;
}
},
_updateAlternate:function(inst){
var altFormat,date,dateStr,
altField=this._get(inst,"altField");
if(altField){
altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");
date=this._getDate(inst);
dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));
$(altField).val(dateStr);
}
},
noWeekends:function(date){
var day=date.getDay();
return[(day>0&&day<6),""];
},
iso8601Week:function(date){
var time,
checkDate=new Date(date.getTime());
checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));
time=checkDate.getTime();
checkDate.setMonth(0);
checkDate.setDate(1);
return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;
},
parseDate:function(format,value,settings){
if(format==null||value==null){
throw"Invalid arguments";
}
value=(typeof value==="object"?value.toString():value+"");
if(value===""){
return null;
}
var iFormat,dim,extra,
iValue=0,
shortYearCutoffTemp=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,
shortYearCutoff=(typeof shortYearCutoffTemp!=="string"?shortYearCutoffTemp:
new Date().getFullYear()%100+parseInt(shortYearCutoffTemp,10)),
dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,
dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,
monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,
monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,
year=-1,
month=-1,
day=-1,
doy=-1,
literal=false,
date,
lookAhead=function(match){
var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);
if(matches){
iFormat++;
}
return matches;
},
getNumber=function(match){
var isDoubled=lookAhead(match),
size=(match==="@"?14:(match==="!"?20:
(match==="y"&&isDoubled?4:(match==="o"?3:2)))),
minSize=(match==="y"?size:1),
digits=new RegExp("^\\d{"+minSize+","+size+"}"),
num=value.substring(iValue).match(digits);
if(!num){
throw"Missing number at position "+iValue;
}
iValue+=num[0].length;
return parseInt(num[0],10);
},
getName=function(match,shortNames,longNames){
var index=-1,
names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){
return[[k,v]];
}).sort(function(a,b){
return-(a[1].length-b[1].length);
});
$.each(names,function(i,pair){
var name=pair[1];
if(value.substr(iValue,name.length).toLowerCase()===name.toLowerCase()){
index=pair[0];
iValue+=name.length;
return false;
}
});
if(index!==-1){
return index+1;
}else{
throw"Unknown name at position "+iValue;
}
},
checkLiteral=function(){
if(value.charAt(iValue)!==format.charAt(iFormat)){
throw"Unexpected literal at position "+iValue;
}
iValue++;
};
for(iFormat=0;iFormat<format.length;iFormat++){
if(literal){
if(format.charAt(iFormat)==="'"&&!lookAhead("'")){
literal=false;
}else{
checkLiteral();
}
}else{
switch(format.charAt(iFormat)){
case"d":
day=getNumber("d");
break;
case"D":
getName("D",dayNamesShort,dayNames);
break;
case"o":
doy=getNumber("o");
break;
case"m":
month=getNumber("m");
break;
case"M":
month=getName("M",monthNamesShort,monthNames);
break;
case"y":
year=getNumber("y");
break;
case"@":
date=new Date(getNumber("@"));
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"!":
date=new Date((getNumber("!")-this._ticksTo1970)/10000);
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"'":
if(lookAhead("'")){
checkLiteral();
}else{
literal=true;
}
break;
default:
checkLiteral();
}
}
}
if(iValue<value.length){
extra=value.substr(iValue);
if(!/^\s+/.test(extra)){
throw"Extra/unparsed characters found in date: "+extra;
}
}
if(year===-1){
year=new Date().getFullYear();
}else if(year<100){
year+=new Date().getFullYear()-new Date().getFullYear()%100+
(year<=shortYearCutoff?0:-100);
}
if(doy>-1){
month=1;
day=doy;
do{
dim=this._getDaysInMonth(year,month-1);
if(day<=dim){
break;
}
month++;
day-=dim;
}while(true);
}
date=this._daylightSavingAdjust(new Date(year,month-1,day));
if(date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day){
throw"Invalid date";
}
return date;
},
ATOM:"yy-mm-dd",
COOKIE:"D, dd M yy",
ISO_8601:"yy-mm-dd",
RFC_822:"D, d M y",
RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",
RFC_1123:"D, d M yy",
RFC_2822:"D, d M yy",
RSS:"D, d M y",
TICKS:"!",
TIMESTAMP:"@",
W3C:"yy-mm-dd",
_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+
Math.floor(1970/400))*24*60*60*10000000),
formatDate:function(format,date,settings){
if(!date){
return"";
}
var iFormat,
dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,
dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,
monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,
monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,
lookAhead=function(match){
var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);
if(matches){
iFormat++;
}
return matches;
},
formatNumber=function(match,value,len){
var num=""+value;
if(lookAhead(match)){
while(num.length<len){
num="0"+num;
}
}
return num;
},
formatName=function(match,value,shortNames,longNames){
return(lookAhead(match)?longNames[value]:shortNames[value]);
},
output="",
literal=false;
if(date){
for(iFormat=0;iFormat<format.length;iFormat++){
if(literal){
if(format.charAt(iFormat)==="'"&&!lookAhead("'")){
literal=false;
}else{
output+=format.charAt(iFormat);
}
}else{
switch(format.charAt(iFormat)){
case"d":
output+=formatNumber("d",date.getDate(),2);
break;
case"D":
output+=formatName("D",date.getDay(),dayNamesShort,dayNames);
break;
case"o":
output+=formatNumber("o",
Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":
output+=formatNumber("m",date.getMonth()+1,2);
break;
case"M":
output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);
break;
case"y":
output+=(lookAhead("y")?date.getFullYear():
(date.getFullYear()%100<10?"0":"")+date.getFullYear()%100);
break;
case"@":
output+=date.getTime();
break;
case"!":
output+=date.getTime()*10000+this._ticksTo1970;
break;
case"'":
if(lookAhead("'")){
output+="'";
}else{
literal=true;
}
break;
default:
output+=format.charAt(iFormat);
}
}
}
}
return output;
},
_possibleChars:function(format){
var iFormat,
chars="",
literal=false,
lookAhead=function(match){
var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);
if(matches){
iFormat++;
}
return matches;
};
for(iFormat=0;iFormat<format.length;iFormat++){
if(literal){
if(format.charAt(iFormat)==="'"&&!lookAhead("'")){
literal=false;
}else{
chars+=format.charAt(iFormat);
}
}else{
switch(format.charAt(iFormat)){
case"d":case"m":case"y":case"@":
chars+="0123456789";
break;
case"D":case"M":
return null;
case"'":
if(lookAhead("'")){
chars+="'";
}else{
literal=true;
}
break;
default:
chars+=format.charAt(iFormat);
}
}
}
return chars;
},
_get:function(inst,name){
return inst.settings[name]!==undefined?
inst.settings[name]:this._defaults[name];
},
_setDateFromField:function(inst,noDefault){
if(inst.input.val()===inst.lastVal){
return;
}
var dateFormat=this._get(inst,"dateFormat"),
dates=inst.lastVal=inst.input?inst.input.val():null,
defaultDate=this._getDefaultDate(inst),
date=defaultDate,
settings=this._getFormatConfig(inst);
try{
date=this.parseDate(dateFormat,dates,settings)||defaultDate;
}catch(event){
dates=(noDefault?"":dates);
}
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
inst.currentDay=(dates?date.getDate():0);
inst.currentMonth=(dates?date.getMonth():0);
inst.currentYear=(dates?date.getFullYear():0);
this._adjustInstDate(inst);
},
_getDefaultDate:function(inst){
return this._restrictMinMax(inst,
this._determineDate(inst,this._get(inst,"defaultDate"),new Date()));
},
_determineDate:function(inst,date,defaultDate){
var offsetNumeric=function(offset){
var date=new Date();
date.setDate(date.getDate()+offset);
return date;
},
offsetString=function(offset){
try{
return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),
offset,$.datepicker._getFormatConfig(inst));
}
catch(e){
}
var date=(offset.toLowerCase().match(/^c/)?
$.datepicker._getDate(inst):null)||new Date(),
year=date.getFullYear(),
month=date.getMonth(),
day=date.getDate(),
pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
matches=pattern.exec(offset);
while(matches){
switch(matches[2]||"d"){
case"d":case"D":
day+=parseInt(matches[1],10);break;
case"w":case"W":
day+=parseInt(matches[1],10)*7;break;
case"m":case"M":
month+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break;
case"y":case"Y":
year+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break;
}
matches=pattern.exec(offset);
}
return new Date(year,month,day);
},
newDate=(date==null||date===""?defaultDate:(typeof date==="string"?offsetString(date):
(typeof date==="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));
newDate=(newDate&&newDate.toString()==="Invalid Date"?defaultDate:newDate);
if(newDate){
newDate.setHours(0);
newDate.setMinutes(0);
newDate.setSeconds(0);
newDate.setMilliseconds(0);
}
return this._daylightSavingAdjust(newDate);
},
_daylightSavingAdjust:function(date){
if(!date){
return null;
}
date.setHours(date.getHours()>12?date.getHours()+2:0);
return date;
},
_setDate:function(inst,date,noChange){
var clear=!date,
origMonth=inst.selectedMonth,
origYear=inst.selectedYear,
newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));
inst.selectedDay=inst.currentDay=newDate.getDate();
inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();
inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();
if((origMonth!==inst.selectedMonth||origYear!==inst.selectedYear)&&!noChange){
this._notifyChange(inst);
}
this._adjustInstDate(inst);
if(inst.input){
inst.input.val(clear?"":this._formatDate(inst));
}
},
_getDate:function(inst){
var startDate=(!inst.currentYear||(inst.input&&inst.input.val()==="")?null:
this._daylightSavingAdjust(new Date(
inst.currentYear,inst.currentMonth,inst.currentDay)));
return startDate;
},
_attachHandlers:function(inst){
var stepMonths=this._get(inst,"stepMonths"),
id="#"+inst.id.replace(/\\\\/g,"\\");
inst.dpDiv.find("[data-handler]").map(function(){
var handler={
prev:function(){
$.datepicker._adjustDate(id,-stepMonths,"M");
},
next:function(){
$.datepicker._adjustDate(id,+stepMonths,"M");
},
hide:function(){
$.datepicker._hideDatepicker();
},
today:function(){
$.datepicker._gotoToday(id);
},
selectDay:function(){
$.datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false;
},
selectMonth:function(){
$.datepicker._selectMonthYear(id,this,"M");
return false;
},
selectYear:function(){
$.datepicker._selectMonthYear(id,this,"Y");
return false;
}
};
$(this).on(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")]);
});
},
_generateHTML:function(inst){
var maxDraw,prevText,prev,nextText,next,currentText,gotoDate,
controls,buttonPanel,firstDay,showWeek,dayNames,dayNamesMin,
monthNames,monthNamesShort,beforeShowDay,showOtherMonths,
selectOtherMonths,defaultDate,html,dow,row,group,col,selectedDate,
cornerClass,calender,thead,day,daysInMonth,leadDays,curRows,numRows,
printDate,dRow,tbody,daySettings,otherMonth,unselectable,
tempDate=new Date(),
today=this._daylightSavingAdjust(
new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate())),
isRTL=this._get(inst,"isRTL"),
showButtonPanel=this._get(inst,"showButtonPanel"),
hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext"),
navigationAsDateFormat=this._get(inst,"navigationAsDateFormat"),
numMonths=this._getNumberOfMonths(inst),
showCurrentAtPos=this._get(inst,"showCurrentAtPos"),
stepMonths=this._get(inst,"stepMonths"),
isMultiMonth=(numMonths[0]!==1||numMonths[1]!==1),
currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):
new Date(inst.currentYear,inst.currentMonth,inst.currentDay))),
minDate=this._getMinMaxDate(inst,"min"),
maxDate=this._getMinMaxDate(inst,"max"),
drawMonth=inst.drawMonth-showCurrentAtPos,
drawYear=inst.drawYear;
if(drawMonth<0){
drawMonth+=12;
drawYear--;
}
if(maxDate){
maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));
maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);
while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){
drawMonth--;
if(drawMonth<0){
drawMonth=11;
drawYear--;
}
}
}
inst.drawMonth=drawMonth;
inst.drawYear=drawYear;
prevText=this._get(inst,"prevText");
prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,
this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),
this._getFormatConfig(inst)));
prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?
"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+
" title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>":
(hideIfNoPrevNext?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>"));
nextText=this._get(inst,"nextText");
nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,
this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),
this._getFormatConfig(inst)));
next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?
"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+
" title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>":
(hideIfNoPrevNext?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>"));
currentText=this._get(inst,"currentText");
gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);
currentText=(!navigationAsDateFormat?currentText:
this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));
controls=(!inst.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+
this._get(inst,"closeText")+"</button>":"");
buttonPanel=(showButtonPanel)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(isRTL?controls:"")+
(this._isInRange(inst,gotoDate)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+
">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";
firstDay=parseInt(this._get(inst,"firstDay"),10);
firstDay=(isNaN(firstDay)?0:firstDay);
showWeek=this._get(inst,"showWeek");
dayNames=this._get(inst,"dayNames");
dayNamesMin=this._get(inst,"dayNamesMin");
monthNames=this._get(inst,"monthNames");
monthNamesShort=this._get(inst,"monthNamesShort");
beforeShowDay=this._get(inst,"beforeShowDay");
showOtherMonths=this._get(inst,"showOtherMonths");
selectOtherMonths=this._get(inst,"selectOtherMonths");
defaultDate=this._getDefaultDate(inst);
html="";
for(row=0;row<numMonths[0];row++){
group="";
this.maxRows=4;
for(col=0;col<numMonths[1];col++){
selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));
cornerClass=" ui-corner-all";
calender="";
if(isMultiMonth){
calender+="<div class='ui-datepicker-group";
if(numMonths[1]>1){
switch(col){
case 0:calender+=" ui-datepicker-group-first";
cornerClass=" ui-corner-"+(isRTL?"right":"left");break;
case numMonths[1]-1:calender+=" ui-datepicker-group-last";
cornerClass=" ui-corner-"+(isRTL?"left":"right");break;
default:calender+=" ui-datepicker-group-middle";cornerClass="";break;
}
}
calender+="'>";
}
calender+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+cornerClass+"'>"+
(/all|left/.test(cornerClass)&&row===0?(isRTL?next:prev):"")+
(/all|right/.test(cornerClass)&&row===0?(isRTL?prev:next):"")+
this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,
row>0||col>0,monthNames,monthNamesShort)+
"</div><table class='ui-datepicker-calendar'><thead>"+
"<tr>";
thead=(showWeek?"<th class='ui-datepicker-week-col'>"+this._get(inst,"weekHeader")+"</th>":"");
for(dow=0;dow<7;dow++){
day=(dow+firstDay)%7;
thead+="<th scope='col'"+((dow+firstDay+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+
"<span title='"+dayNames[day]+"'>"+dayNamesMin[day]+"</span></th>";
}
calender+=thead+"</tr></thead><tbody>";
daysInMonth=this._getDaysInMonth(drawYear,drawMonth);
if(drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth){
inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);
}
leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;
curRows=Math.ceil((leadDays+daysInMonth)/7);
numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);
this.maxRows=numRows;
printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));
for(dRow=0;dRow<numRows;dRow++){
calender+="<tr>";
tbody=(!showWeek?"":"<td class='ui-datepicker-week-col'>"+
this._get(inst,"calculateWeek")(printDate)+"</td>");
for(dow=0;dow<7;dow++){
daySettings=(beforeShowDay?
beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);
otherMonth=(printDate.getMonth()!==drawMonth);
unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||
(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);
tbody+="<td class='"+
((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+
(otherMonth?" ui-datepicker-other-month":"")+
((printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent)||
(defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime())?
" "+this._dayOverClass:"")+
(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+
(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+
(printDate.getTime()===currentDate.getTime()?" "+this._currentClass:"")+
(printDate.getTime()===today.getTime()?" ui-datepicker-today":""))+"'"+
((!otherMonth||showOtherMonths)&&daySettings[2]?" title='"+daySettings[2].replace(/'/g,"&#39;")+"'":"")+
(unselectable?"":" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+
(otherMonth&&!showOtherMonths?"&#xa0;":
(unselectable?"<span class='ui-state-default'>"+printDate.getDate()+"</span>":"<a class='ui-state-default"+
(printDate.getTime()===today.getTime()?" ui-state-highlight":"")+
(printDate.getTime()===currentDate.getTime()?" ui-state-active":"")+
(otherMonth?" ui-priority-secondary":"")+
"' href='#'>"+printDate.getDate()+"</a>"))+"</td>";
printDate.setDate(printDate.getDate()+1);
printDate=this._daylightSavingAdjust(printDate);
}
calender+=tbody+"</tr>";
}
drawMonth++;
if(drawMonth>11){
drawMonth=0;
drawYear++;
}
calender+="</tbody></table>"+(isMultiMonth?"</div>"+
((numMonths[0]>0&&col===numMonths[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
group+=calender;
}
html+=group;
}
html+=buttonPanel;
inst._keyEvent=false;
return html;
},
_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,
secondary,monthNames,monthNamesShort){
var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,
changeMonth=this._get(inst,"changeMonth"),
changeYear=this._get(inst,"changeYear"),
showMonthAfterYear=this._get(inst,"showMonthAfterYear"),
html="<div class='ui-datepicker-title'>",
monthHtml="";
if(secondary||!changeMonth){
monthHtml+="<span class='ui-datepicker-month'>"+monthNames[drawMonth]+"</span>";
}else{
inMinYear=(minDate&&minDate.getFullYear()===drawYear);
inMaxYear=(maxDate&&maxDate.getFullYear()===drawYear);
monthHtml+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(month=0;month<12;month++){
if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){
monthHtml+="<option value='"+month+"'"+
(month===drawMonth?" selected='selected'":"")+
">"+monthNamesShort[month]+"</option>";
}
}
monthHtml+="</select>";
}
if(!showMonthAfterYear){
html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"");
}
if(!inst.yearshtml){
inst.yearshtml="";
if(secondary||!changeYear){
html+="<span class='ui-datepicker-year'>"+drawYear+"</span>";
}else{
years=this._get(inst,"yearRange").split(":");
thisYear=new Date().getFullYear();
determineYear=function(value){
var year=(value.match(/c[+\-].*/)?drawYear+parseInt(value.substring(1),10):
(value.match(/[+\-].*/)?thisYear+parseInt(value,10):
parseInt(value,10)));
return(isNaN(year)?thisYear:year);
};
year=determineYear(years[0]);
endYear=Math.max(year,determineYear(years[1]||""));
year=(minDate?Math.max(year,minDate.getFullYear()):year);
endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);
inst.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;year<=endYear;year++){
inst.yearshtml+="<option value='"+year+"'"+
(year===drawYear?" selected='selected'":"")+
">"+year+"</option>";
}
inst.yearshtml+="</select>";
html+=inst.yearshtml;
inst.yearshtml=null;
}
}
html+=this._get(inst,"yearSuffix");
if(showMonthAfterYear){
html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml;
}
html+="</div>";
return html;
},
_adjustInstDate:function(inst,offset,period){
var year=inst.selectedYear+(period==="Y"?offset:0),
month=inst.selectedMonth+(period==="M"?offset:0),
day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period==="D"?offset:0),
date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
if(period==="M"||period==="Y"){
this._notifyChange(inst);
}
},
_restrictMinMax:function(inst,date){
var minDate=this._getMinMaxDate(inst,"min"),
maxDate=this._getMinMaxDate(inst,"max"),
newDate=(minDate&&date<minDate?minDate:date);
return(maxDate&&newDate>maxDate?maxDate:newDate);
},
_notifyChange:function(inst){
var onChange=this._get(inst,"onChangeMonthYear");
if(onChange){
onChange.apply((inst.input?inst.input[0]:null),
[inst.selectedYear,inst.selectedMonth+1,inst]);
}
},
_getNumberOfMonths:function(inst){
var numMonths=this._get(inst,"numberOfMonths");
return(numMonths==null?[1,1]:(typeof numMonths==="number"?[1,numMonths]:numMonths));
},
_getMinMaxDate:function(inst,minMax){
return this._determineDate(inst,this._get(inst,minMax+"Date"),null);
},
_getDaysInMonth:function(year,month){
return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate();
},
_getFirstDayOfMonth:function(year,month){
return new Date(year,month,1).getDay();
},
_canAdjustMonth:function(inst,offset,curYear,curMonth){
var numMonths=this._getNumberOfMonths(inst),
date=this._daylightSavingAdjust(new Date(curYear,
curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));
if(offset<0){
date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));
}
return this._isInRange(inst,date);
},
_isInRange:function(inst,date){
var yearSplit,currentYear,
minDate=this._getMinMaxDate(inst,"min"),
maxDate=this._getMinMaxDate(inst,"max"),
minYear=null,
maxYear=null,
years=this._get(inst,"yearRange");
if(years){
yearSplit=years.split(":");
currentYear=new Date().getFullYear();
minYear=parseInt(yearSplit[0],10);
maxYear=parseInt(yearSplit[1],10);
if(yearSplit[0].match(/[+\-].*/)){
minYear+=currentYear;
}
if(yearSplit[1].match(/[+\-].*/)){
maxYear+=currentYear;
}
}
return((!minDate||date.getTime()>=minDate.getTime())&&
(!maxDate||date.getTime()<=maxDate.getTime())&&
(!minYear||date.getFullYear()>=minYear)&&
(!maxYear||date.getFullYear()<=maxYear));
},
_getFormatConfig:function(inst){
var shortYearCutoff=this._get(inst,"shortYearCutoff");
shortYearCutoff=(typeof shortYearCutoff!=="string"?shortYearCutoff:
new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
return{shortYearCutoff:shortYearCutoff,
dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),
monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")};
},
_formatDate:function(inst,day,month,year){
if(!day){
inst.currentDay=inst.selectedDay;
inst.currentMonth=inst.selectedMonth;
inst.currentYear=inst.selectedYear;
}
var date=(day?(typeof day==="object"?day:
this._daylightSavingAdjust(new Date(year,month,day))):
this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst));
}
});
function datepicker_bindHover(dpDiv){
var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return dpDiv.on("mouseout",selector,function(){
$(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){
$(this).removeClass("ui-datepicker-prev-hover");
}
if(this.className.indexOf("ui-datepicker-next")!==-1){
$(this).removeClass("ui-datepicker-next-hover");
}
})
.on("mouseover",selector,datepicker_handleMouseover);
}
function datepicker_handleMouseover(){
if(!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline?datepicker_instActive.dpDiv.parent()[0]:datepicker_instActive.input[0])){
$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
$(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){
$(this).addClass("ui-datepicker-prev-hover");
}
if(this.className.indexOf("ui-datepicker-next")!==-1){
$(this).addClass("ui-datepicker-next-hover");
}
}
}
function datepicker_extendRemove(target,props){
$.extend(target,props);
for(var name in props){
if(props[name]==null){
target[name]=props[name];
}
}
return target;
}
$.fn.datepicker=function(options){
if(!this.length){
return this;
}
if(!$.datepicker.initialized){
$(document).on("mousedown",$.datepicker._checkExternalClick);
$.datepicker.initialized=true;
}
if($("#"+$.datepicker._mainDivId).length===0){
$("body").append($.datepicker.dpDiv);
}
var otherArgs=Array.prototype.slice.call(arguments,1);
if(typeof options==="string"&&(options==="isDisabled"||options==="getDate"||options==="widget")){
return $.datepicker["_"+options+"Datepicker"].
apply($.datepicker,[this[0]].concat(otherArgs));
}
if(options==="option"&&arguments.length===2&&typeof arguments[1]==="string"){
return $.datepicker["_"+options+"Datepicker"].
apply($.datepicker,[this[0]].concat(otherArgs));
}
return this.each(function(){
typeof options==="string"?
$.datepicker["_"+options+"Datepicker"].
apply($.datepicker,[this].concat(otherArgs)):
$.datepicker._attachDatepicker(this,options);
});
};
$.datepicker=new Datepicker();
$.datepicker.initialized=false;
$.datepicker.uuid=new Date().getTime();
$.datepicker.version="1.12.1";
var widgetsDatepicker=$.datepicker;
var ie=$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
var mouseHandled=false;
$(document).on("mouseup",function(){
mouseHandled=false;
});
var widgetsMouse=$.widget("ui.mouse",{
version:"1.12.1",
options:{
cancel:"input, textarea, button, select, option",
distance:1,
delay:0
},
_mouseInit:function(){
var that=this;
this.element
.on("mousedown."+this.widgetName,function(event){
return that._mouseDown(event);
})
.on("click."+this.widgetName,function(event){
if(true===$.data(event.target,that.widgetName+".preventClickEvent")){
$.removeData(event.target,that.widgetName+".preventClickEvent");
event.stopImmediatePropagation();
return false;
}
});
this.started=false;
},
_mouseDestroy:function(){
this.element.off("."+this.widgetName);
if(this._mouseMoveDelegate){
this.document
.off("mousemove."+this.widgetName,this._mouseMoveDelegate)
.off("mouseup."+this.widgetName,this._mouseUpDelegate);
}
},
_mouseDown:function(event){
if(mouseHandled){
return;
}
this._mouseMoved=false;
(this._mouseStarted&&this._mouseUp(event));
this._mouseDownEvent=event;
var that=this,
btnIsLeft=(event.which===1),
elIsCancel=(typeof this.options.cancel==="string"&&event.target.nodeName?
$(event.target).closest(this.options.cancel).length:false);
if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){
return true;
}
this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){
this._mouseDelayTimer=setTimeout(function(){
that.mouseDelayMet=true;
},this.options.delay);
}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){
this._mouseStarted=(this._mouseStart(event)!==false);
if(!this._mouseStarted){
event.preventDefault();
return true;
}
}
if(true===$.data(event.target,this.widgetName+".preventClickEvent")){
$.removeData(event.target,this.widgetName+".preventClickEvent");
}
this._mouseMoveDelegate=function(event){
return that._mouseMove(event);
};
this._mouseUpDelegate=function(event){
return that._mouseUp(event);
};
this.document
.on("mousemove."+this.widgetName,this._mouseMoveDelegate)
.on("mouseup."+this.widgetName,this._mouseUpDelegate);
event.preventDefault();
mouseHandled=true;
return true;
},
_mouseMove:function(event){
if(this._mouseMoved){
if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&
!event.button){
return this._mouseUp(event);
}else if(!event.which){
if(event.originalEvent.altKey||event.originalEvent.ctrlKey||
event.originalEvent.metaKey||event.originalEvent.shiftKey){
this.ignoreMissingWhich=true;
}else if(!this.ignoreMissingWhich){
return this._mouseUp(event);
}
}
}
if(event.which||event.button){
this._mouseMoved=true;
}
if(this._mouseStarted){
this._mouseDrag(event);
return event.preventDefault();
}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){
this._mouseStarted=
(this._mouseStart(this._mouseDownEvent,event)!==false);
(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event));
}
return!this._mouseStarted;
},
_mouseUp:function(event){
this.document
.off("mousemove."+this.widgetName,this._mouseMoveDelegate)
.off("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){
this._mouseStarted=false;
if(event.target===this._mouseDownEvent.target){
$.data(event.target,this.widgetName+".preventClickEvent",true);
}
this._mouseStop(event);
}
if(this._mouseDelayTimer){
clearTimeout(this._mouseDelayTimer);
delete this._mouseDelayTimer;
}
this.ignoreMissingWhich=false;
mouseHandled=false;
event.preventDefault();
},
_mouseDistanceMet:function(event){
return(Math.max(
Math.abs(this._mouseDownEvent.pageX-event.pageX),
Math.abs(this._mouseDownEvent.pageY-event.pageY)
)>=this.options.distance
);
},
_mouseDelayMet:function(){
return this.mouseDelayMet;
},
_mouseStart:function(){},
_mouseDrag:function(){},
_mouseStop:function(){},
_mouseCapture:function(){return true;}
});
var plugin=$.ui.plugin={
add:function(module,option,set){
var i,
proto=$.ui[module].prototype;
for(i in set){
proto.plugins[i]=proto.plugins[i]||[];
proto.plugins[i].push([option,set[i]]);
}
},
call:function(instance,name,args,allowDisconnected){
var i,
set=instance.plugins[name];
if(!set){
return;
}
if(!allowDisconnected&&(!instance.element[0].parentNode||
instance.element[0].parentNode.nodeType===11)){
return;
}
for(i=0;i<set.length;i++){
if(instance.options[set[i][0]]){
set[i][1].apply(instance.element,args);
}
}
}
};
var safeBlur=$.ui.safeBlur=function(element){
if(element&&element.nodeName.toLowerCase()!=="body"){
$(element).trigger("blur");
}
};
$.widget("ui.draggable",$.ui.mouse,{
version:"1.12.1",
widgetEventPrefix:"drag",
options:{
addClasses:true,
appendTo:"parent",
axis:false,
connectToSortable:false,
containment:false,
cursor:"auto",
cursorAt:false,
grid:false,
handle:false,
helper:"original",
iframeFix:false,
opacity:false,
refreshPositions:false,
revert:false,
revertDuration:500,
scope:"default",
scroll:true,
scrollSensitivity:20,
scrollSpeed:20,
snap:false,
snapMode:"both",
snapTolerance:20,
stack:false,
zIndex:false,
drag:null,
start:null,
stop:null
},
_create:function(){
if(this.options.helper==="original"){
this._setPositionRelative();
}
if(this.options.addClasses){
this._addClass("ui-draggable");
}
this._setHandleClassName();
this._mouseInit();
},
_setOption:function(key,value){
this._super(key,value);
if(key==="handle"){
this._removeHandleClassName();
this._setHandleClassName();
}
},
_destroy:function(){
if((this.helper||this.element).is(".ui-draggable-dragging")){
this.destroyOnClear=true;
return;
}
this._removeHandleClassName();
this._mouseDestroy();
},
_mouseCapture:function(event){
var o=this.options;
if(this.helper||o.disabled||
$(event.target).closest(".ui-resizable-handle").length>0){
return false;
}
this.handle=this._getHandle(event);
if(!this.handle){
return false;
}
this._blurActiveElement(event);
this._blockFrames(o.iframeFix===true?"iframe":o.iframeFix);
return true;
},
_blockFrames:function(selector){
this.iframeBlocks=this.document.find(selector).map(function(){
var iframe=$(this);
return $("<div>")
.css("position","absolute")
.appendTo(iframe.parent())
.outerWidth(iframe.outerWidth())
.outerHeight(iframe.outerHeight())
.offset(iframe.offset())[0];
});
},
_unblockFrames:function(){
if(this.iframeBlocks){
this.iframeBlocks.remove();
delete this.iframeBlocks;
}
},
_blurActiveElement:function(event){
var activeElement=$.ui.safeActiveElement(this.document[0]),
target=$(event.target);
if(target.closest(activeElement).length){
return;
}
$.ui.safeBlur(activeElement);
},
_mouseStart:function(event){
var o=this.options;
this.helper=this._createHelper(event);
this._addClass(this.helper,"ui-draggable-dragging");
this._cacheHelperProportions();
if($.ui.ddmanager){
$.ui.ddmanager.current=this;
}
this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent(true);
this.offsetParent=this.helper.offsetParent();
this.hasFixedAncestor=this.helper.parents().filter(function(){
return $(this).css("position")==="fixed";
}).length>0;
this.positionAbs=this.element.offset();
this._refreshOffsets(event);
this.originalPosition=this.position=this._generatePosition(event,false);
this.originalPageX=event.pageX;
this.originalPageY=event.pageY;
(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));
this._setContainment();
if(this._trigger("start",event)===false){
this._clear();
return false;
}
this._cacheHelperProportions();
if($.ui.ddmanager&&!o.dropBehaviour){
$.ui.ddmanager.prepareOffsets(this,event);
}
this._mouseDrag(event,true);
if($.ui.ddmanager){
$.ui.ddmanager.dragStart(this,event);
}
return true;
},
_refreshOffsets:function(event){
this.offset={
top:this.positionAbs.top-this.margins.top,
left:this.positionAbs.left-this.margins.left,
scroll:false,
parent:this._getParentOffset(),
relative:this._getRelativeOffset()
};
this.offset.click={
left:event.pageX-this.offset.left,
top:event.pageY-this.offset.top
};
},
_mouseDrag:function(event,noPropagation){
if(this.hasFixedAncestor){
this.offset.parent=this._getParentOffset();
}
this.position=this._generatePosition(event,true);
this.positionAbs=this._convertPositionTo("absolute");
if(!noPropagation){
var ui=this._uiHash();
if(this._trigger("drag",event,ui)===false){
this._mouseUp(new $.Event("mouseup",event));
return false;
}
this.position=ui.position;
}
this.helper[0].style.left=this.position.left+"px";
this.helper[0].style.top=this.position.top+"px";
if($.ui.ddmanager){
$.ui.ddmanager.drag(this,event);
}
return false;
},
_mouseStop:function(event){
var that=this,
dropped=false;
if($.ui.ddmanager&&!this.options.dropBehaviour){
dropped=$.ui.ddmanager.drop(this,event);
}
if(this.dropped){
dropped=this.dropped;
this.dropped=false;
}
if((this.options.revert==="invalid"&&!dropped)||
(this.options.revert==="valid"&&dropped)||
this.options.revert===true||($.isFunction(this.options.revert)&&
this.options.revert.call(this.element,dropped))
){
$(this.helper).animate(
this.originalPosition,
parseInt(this.options.revertDuration,10),
function(){
if(that._trigger("stop",event)!==false){
that._clear();
}
}
);
}else{
if(this._trigger("stop",event)!==false){
this._clear();
}
}
return false;
},
_mouseUp:function(event){
this._unblockFrames();
if($.ui.ddmanager){
$.ui.ddmanager.dragStop(this,event);
}
if(this.handleElement.is(event.target)){
this.element.trigger("focus");
}
return $.ui.mouse.prototype._mouseUp.call(this,event);
},
cancel:function(){
if(this.helper.is(".ui-draggable-dragging")){
this._mouseUp(new $.Event("mouseup",{target:this.element[0]}));
}else{
this._clear();
}
return this;
},
_getHandle:function(event){
return this.options.handle?
!!$(event.target).closest(this.element.find(this.options.handle)).length:
true;
},
_setHandleClassName:function(){
this.handleElement=this.options.handle?
this.element.find(this.options.handle):this.element;
this._addClass(this.handleElement,"ui-draggable-handle");
},
_removeHandleClassName:function(){
this._removeClass(this.handleElement,"ui-draggable-handle");
},
_createHelper:function(event){
var o=this.options,
helperIsFunction=$.isFunction(o.helper),
helper=helperIsFunction?
$(o.helper.apply(this.element[0],[event])):
(o.helper==="clone"?
this.element.clone().removeAttr("id"):
this.element);
if(!helper.parents("body").length){
helper.appendTo((o.appendTo==="parent"?
this.element[0].parentNode:
o.appendTo));
}
if(helperIsFunction&&helper[0]===this.element[0]){
this._setPositionRelative();
}
if(helper[0]!==this.element[0]&&
!(/(fixed|absolute)/).test(helper.css("position"))){
helper.css("position","absolute");
}
return helper;
},
_setPositionRelative:function(){
if(!(/^(?:r|a|f)/).test(this.element.css("position"))){
this.element[0].style.position="relative";
}
},
_adjustOffsetFromHelper:function(obj){
if(typeof obj==="string"){
obj=obj.split(" ");
}
if($.isArray(obj)){
obj={left:+obj[0],top:+obj[1]||0};
}
if("left"in obj){
this.offset.click.left=obj.left+this.margins.left;
}
if("right"in obj){
this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;
}
if("top"in obj){
this.offset.click.top=obj.top+this.margins.top;
}
if("bottom"in obj){
this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;
}
},
_isRootNode:function(element){
return(/(html|body)/i).test(element.tagName)||element===this.document[0];
},
_getParentOffset:function(){
var po=this.offsetParent.offset(),
document=this.document[0];
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&
$.contains(this.scrollParent[0],this.offsetParent[0])){
po.left+=this.scrollParent.scrollLeft();
po.top+=this.scrollParent.scrollTop();
}
if(this._isRootNode(this.offsetParent[0])){
po={top:0,left:0};
}
return{
top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
};
},
_getRelativeOffset:function(){
if(this.cssPosition!=="relative"){
return{top:0,left:0};
}
var p=this.element.position(),
scrollIsRootNode=this._isRootNode(this.scrollParent[0]);
return{
top:p.top-(parseInt(this.helper.css("top"),10)||0)+
(!scrollIsRootNode?this.scrollParent.scrollTop():0),
left:p.left-(parseInt(this.helper.css("left"),10)||0)+
(!scrollIsRootNode?this.scrollParent.scrollLeft():0)
};
},
_cacheMargins:function(){
this.margins={
left:(parseInt(this.element.css("marginLeft"),10)||0),
top:(parseInt(this.element.css("marginTop"),10)||0),
right:(parseInt(this.element.css("marginRight"),10)||0),
bottom:(parseInt(this.element.css("marginBottom"),10)||0)
};
},
_cacheHelperProportions:function(){
this.helperProportions={
width:this.helper.outerWidth(),
height:this.helper.outerHeight()
};
},
_setContainment:function(){
var isUserScrollable,c,ce,
o=this.options,
document=this.document[0];
this.relativeContainer=null;
if(!o.containment){
this.containment=null;
return;
}
if(o.containment==="window"){
this.containment=[
$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,
$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
$(window).scrollLeft()+$(window).width()-
this.helperProportions.width-this.margins.left,
$(window).scrollTop()+
($(window).height()||document.body.parentNode.scrollHeight)-
this.helperProportions.height-this.margins.top
];
return;
}
if(o.containment==="document"){
this.containment=[
0,
0,
$(document).width()-this.helperProportions.width-this.margins.left,
($(document).height()||document.body.parentNode.scrollHeight)-
this.helperProportions.height-this.margins.top
];
return;
}
if(o.containment.constructor===Array){
this.containment=o.containment;
return;
}
if(o.containment==="parent"){
o.containment=this.helper[0].parentNode;
}
c=$(o.containment);
ce=c[0];
if(!ce){
return;
}
isUserScrollable=/(scroll|auto)/.test(c.css("overflow"));
this.containment=[
(parseInt(c.css("borderLeftWidth"),10)||0)+
(parseInt(c.css("paddingLeft"),10)||0),
(parseInt(c.css("borderTopWidth"),10)||0)+
(parseInt(c.css("paddingTop"),10)||0),
(isUserScrollable?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-
(parseInt(c.css("borderRightWidth"),10)||0)-
(parseInt(c.css("paddingRight"),10)||0)-
this.helperProportions.width-
this.margins.left-
this.margins.right,
(isUserScrollable?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-
(parseInt(c.css("borderBottomWidth"),10)||0)-
(parseInt(c.css("paddingBottom"),10)||0)-
this.helperProportions.height-
this.margins.top-
this.margins.bottom
];
this.relativeContainer=c;
},
_convertPositionTo:function(d,pos){
if(!pos){
pos=this.position;
}
var mod=d==="absolute"?1:-1,
scrollIsRootNode=this._isRootNode(this.scrollParent[0]);
return{
top:(
pos.top+
this.offset.relative.top*mod+
this.offset.parent.top*mod-
((this.cssPosition==="fixed"?
-this.offset.scroll.top:
(scrollIsRootNode?0:this.offset.scroll.top))*mod)
),
left:(
pos.left+
this.offset.relative.left*mod+
this.offset.parent.left*mod-
((this.cssPosition==="fixed"?
-this.offset.scroll.left:
(scrollIsRootNode?0:this.offset.scroll.left))*mod)
)
};
},
_generatePosition:function(event,constrainPosition){
var containment,co,top,left,
o=this.options,
scrollIsRootNode=this._isRootNode(this.scrollParent[0]),
pageX=event.pageX,
pageY=event.pageY;
if(!scrollIsRootNode||!this.offset.scroll){
this.offset.scroll={
top:this.scrollParent.scrollTop(),
left:this.scrollParent.scrollLeft()
};
}
if(constrainPosition){
if(this.containment){
if(this.relativeContainer){
co=this.relativeContainer.offset();
containment=[
this.containment[0]+co.left,
this.containment[1]+co.top,
this.containment[2]+co.left,
this.containment[3]+co.top
];
}else{
containment=this.containment;
}
if(event.pageX-this.offset.click.left<containment[0]){
pageX=containment[0]+this.offset.click.left;
}
if(event.pageY-this.offset.click.top<containment[1]){
pageY=containment[1]+this.offset.click.top;
}
if(event.pageX-this.offset.click.left>containment[2]){
pageX=containment[2]+this.offset.click.left;
}
if(event.pageY-this.offset.click.top>containment[3]){
pageY=containment[3]+this.offset.click.top;
}
}
if(o.grid){
top=o.grid[1]?this.originalPageY+Math.round((pageY-
this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;
pageY=containment?((top-this.offset.click.top>=containment[1]||
top-this.offset.click.top>containment[3])?
top:
((top-this.offset.click.top>=containment[1])?
top-o.grid[1]:top+o.grid[1])):top;
left=o.grid[0]?this.originalPageX+
Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:
this.originalPageX;
pageX=containment?((left-this.offset.click.left>=containment[0]||
left-this.offset.click.left>containment[2])?
left:
((left-this.offset.click.left>=containment[0])?
left-o.grid[0]:left+o.grid[0])):left;
}
if(o.axis==="y"){
pageX=this.originalPageX;
}
if(o.axis==="x"){
pageY=this.originalPageY;
}
}
return{
top:(
pageY-
this.offset.click.top-
this.offset.relative.top-
this.offset.parent.top+
(this.cssPosition==="fixed"?
-this.offset.scroll.top:
(scrollIsRootNode?0:this.offset.scroll.top))
),
left:(
pageX-
this.offset.click.left-
this.offset.relative.left-
this.offset.parent.left+
(this.cssPosition==="fixed"?
-this.offset.scroll.left:
(scrollIsRootNode?0:this.offset.scroll.left))
)
};
},
_clear:function(){
this._removeClass(this.helper,"ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){
this.helper.remove();
}
this.helper=null;
this.cancelHelperRemoval=false;
if(this.destroyOnClear){
this.destroy();
}
},
_trigger:function(type,event,ui){
ui=ui||this._uiHash();
$.ui.plugin.call(this,type,[event,ui,this],true);
if(/^(drag|start|stop)/.test(type)){
this.positionAbs=this._convertPositionTo("absolute");
ui.offset=this.positionAbs;
}
return $.Widget.prototype._trigger.call(this,type,event,ui);
},
plugins:{},
_uiHash:function(){
return{
helper:this.helper,
position:this.position,
originalPosition:this.originalPosition,
offset:this.positionAbs
};
}
});
$.ui.plugin.add("draggable","connectToSortable",{
start:function(event,ui,draggable){
var uiSortable=$.extend({},ui,{
item:draggable.element
});
draggable.sortables=[];
$(draggable.options.connectToSortable).each(function(){
var sortable=$(this).sortable("instance");
if(sortable&&!sortable.options.disabled){
draggable.sortables.push(sortable);
sortable.refreshPositions();
sortable._trigger("activate",event,uiSortable);
}
});
},
stop:function(event,ui,draggable){
var uiSortable=$.extend({},ui,{
item:draggable.element
});
draggable.cancelHelperRemoval=false;
$.each(draggable.sortables,function(){
var sortable=this;
if(sortable.isOver){
sortable.isOver=0;
draggable.cancelHelperRemoval=true;
sortable.cancelHelperRemoval=false;
sortable._storedCSS={
position:sortable.placeholder.css("position"),
top:sortable.placeholder.css("top"),
left:sortable.placeholder.css("left")
};
sortable._mouseStop(event);
sortable.options.helper=sortable.options._helper;
}else{
sortable.cancelHelperRemoval=true;
sortable._trigger("deactivate",event,uiSortable);
}
});
},
drag:function(event,ui,draggable){
$.each(draggable.sortables,function(){
var innermostIntersecting=false,
sortable=this;
sortable.positionAbs=draggable.positionAbs;
sortable.helperProportions=draggable.helperProportions;
sortable.offset.click=draggable.offset.click;
if(sortable._intersectsWith(sortable.containerCache)){
innermostIntersecting=true;
$.each(draggable.sortables,function(){
this.positionAbs=draggable.positionAbs;
this.helperProportions=draggable.helperProportions;
this.offset.click=draggable.offset.click;
if(this!==sortable&&
this._intersectsWith(this.containerCache)&&
$.contains(sortable.element[0],this.element[0])){
innermostIntersecting=false;
}
return innermostIntersecting;
});
}
if(innermostIntersecting){
if(!sortable.isOver){
sortable.isOver=1;
draggable._parent=ui.helper.parent();
sortable.currentItem=ui.helper
.appendTo(sortable.element)
.data("ui-sortable-item",true);
sortable.options._helper=sortable.options.helper;
sortable.options.helper=function(){
return ui.helper[0];
};
event.target=sortable.currentItem[0];
sortable._mouseCapture(event,true);
sortable._mouseStart(event,true,true);
sortable.offset.click.top=draggable.offset.click.top;
sortable.offset.click.left=draggable.offset.click.left;
sortable.offset.parent.left-=draggable.offset.parent.left-
sortable.offset.parent.left;
sortable.offset.parent.top-=draggable.offset.parent.top-
sortable.offset.parent.top;
draggable._trigger("toSortable",event);
draggable.dropped=sortable.element;
$.each(draggable.sortables,function(){
this.refreshPositions();
});
draggable.currentItem=draggable.element;
sortable.fromOutside=draggable;
}
if(sortable.currentItem){
sortable._mouseDrag(event);
ui.position=sortable.position;
}
}else{
if(sortable.isOver){
sortable.isOver=0;
sortable.cancelHelperRemoval=true;
sortable.options._revert=sortable.options.revert;
sortable.options.revert=false;
sortable._trigger("out",event,sortable._uiHash(sortable));
sortable._mouseStop(event,true);
sortable.options.revert=sortable.options._revert;
sortable.options.helper=sortable.options._helper;
if(sortable.placeholder){
sortable.placeholder.remove();
}
ui.helper.appendTo(draggable._parent);
draggable._refreshOffsets(event);
ui.position=draggable._generatePosition(event,true);
draggable._trigger("fromSortable",event);
draggable.dropped=false;
$.each(draggable.sortables,function(){
this.refreshPositions();
});
}
}
});
}
});
$.ui.plugin.add("draggable","cursor",{
start:function(event,ui,instance){
var t=$("body"),
o=instance.options;
if(t.css("cursor")){
o._cursor=t.css("cursor");
}
t.css("cursor",o.cursor);
},
stop:function(event,ui,instance){
var o=instance.options;
if(o._cursor){
$("body").css("cursor",o._cursor);
}
}
});
$.ui.plugin.add("draggable","opacity",{
start:function(event,ui,instance){
var t=$(ui.helper),
o=instance.options;
if(t.css("opacity")){
o._opacity=t.css("opacity");
}
t.css("opacity",o.opacity);
},
stop:function(event,ui,instance){
var o=instance.options;
if(o._opacity){
$(ui.helper).css("opacity",o._opacity);
}
}
});
$.ui.plugin.add("draggable","scroll",{
start:function(event,ui,i){
if(!i.scrollParentNotHidden){
i.scrollParentNotHidden=i.helper.scrollParent(false);
}
if(i.scrollParentNotHidden[0]!==i.document[0]&&
i.scrollParentNotHidden[0].tagName!=="HTML"){
i.overflowOffset=i.scrollParentNotHidden.offset();
}
},
drag:function(event,ui,i){
var o=i.options,
scrolled=false,
scrollParent=i.scrollParentNotHidden[0],
document=i.document[0];
if(scrollParent!==document&&scrollParent.tagName!=="HTML"){
if(!o.axis||o.axis!=="x"){
if((i.overflowOffset.top+scrollParent.offsetHeight)-event.pageY<
o.scrollSensitivity){
scrollParent.scrollTop=scrolled=scrollParent.scrollTop+o.scrollSpeed;
}else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity){
scrollParent.scrollTop=scrolled=scrollParent.scrollTop-o.scrollSpeed;
}
}
if(!o.axis||o.axis!=="y"){
if((i.overflowOffset.left+scrollParent.offsetWidth)-event.pageX<
o.scrollSensitivity){
scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft+o.scrollSpeed;
}else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity){
scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft-o.scrollSpeed;
}
}
}else{
if(!o.axis||o.axis!=="x"){
if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){
scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);
}else if($(window).height()-(event.pageY-$(document).scrollTop())<
o.scrollSensitivity){
scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);
}
}
if(!o.axis||o.axis!=="y"){
if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){
scrolled=$(document).scrollLeft(
$(document).scrollLeft()-o.scrollSpeed
);
}else if($(window).width()-(event.pageX-$(document).scrollLeft())<
o.scrollSensitivity){
scrolled=$(document).scrollLeft(
$(document).scrollLeft()+o.scrollSpeed
);
}
}
}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){
$.ui.ddmanager.prepareOffsets(i,event);
}
}
});
$.ui.plugin.add("draggable","snap",{
start:function(event,ui,i){
var o=i.options;
i.snapElements=[];
$(o.snap.constructor!==String?(o.snap.items||":data(ui-draggable)"):o.snap)
.each(function(){
var $t=$(this),
$o=$t.offset();
if(this!==i.element[0]){
i.snapElements.push({
item:this,
width:$t.outerWidth(),height:$t.outerHeight(),
top:$o.top,left:$o.left
});
}
});
},
drag:function(event,ui,inst){
var ts,bs,ls,rs,l,r,t,b,i,first,
o=inst.options,
d=o.snapTolerance,
x1=ui.offset.left,x2=x1+inst.helperProportions.width,
y1=ui.offset.top,y2=y1+inst.helperProportions.height;
for(i=inst.snapElements.length-1;i>=0;i--){
l=inst.snapElements[i].left-inst.margins.left;
r=l+inst.snapElements[i].width;
t=inst.snapElements[i].top-inst.margins.top;
b=t+inst.snapElements[i].height;
if(x2<l-d||x1>r+d||y2<t-d||y1>b+d||
!$.contains(inst.snapElements[i].item.ownerDocument,
inst.snapElements[i].item)){
if(inst.snapElements[i].snapping){
(inst.options.snap.release&&
inst.options.snap.release.call(
inst.element,
event,
$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})
));
}
inst.snapElements[i].snapping=false;
continue;
}
if(o.snapMode!=="inner"){
ts=Math.abs(t-y2)<=d;
bs=Math.abs(b-y1)<=d;
ls=Math.abs(l-x2)<=d;
rs=Math.abs(r-x1)<=d;
if(ts){
ui.position.top=inst._convertPositionTo("relative",{
top:t-inst.helperProportions.height,
left:0
}).top;
}
if(bs){
ui.position.top=inst._convertPositionTo("relative",{
top:b,
left:0
}).top;
}
if(ls){
ui.position.left=inst._convertPositionTo("relative",{
top:0,
left:l-inst.helperProportions.width
}).left;
}
if(rs){
ui.position.left=inst._convertPositionTo("relative",{
top:0,
left:r
}).left;
}
}
first=(ts||bs||ls||rs);
if(o.snapMode!=="outer"){
ts=Math.abs(t-y1)<=d;
bs=Math.abs(b-y2)<=d;
ls=Math.abs(l-x1)<=d;
rs=Math.abs(r-x2)<=d;
if(ts){
ui.position.top=inst._convertPositionTo("relative",{
top:t,
left:0
}).top;
}
if(bs){
ui.position.top=inst._convertPositionTo("relative",{
top:b-inst.helperProportions.height,
left:0
}).top;
}
if(ls){
ui.position.left=inst._convertPositionTo("relative",{
top:0,
left:l
}).left;
}
if(rs){
ui.position.left=inst._convertPositionTo("relative",{
top:0,
left:r-inst.helperProportions.width
}).left;
}
}
if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first)){
(inst.options.snap.snap&&
inst.options.snap.snap.call(
inst.element,
event,
$.extend(inst._uiHash(),{
snapItem:inst.snapElements[i].item
})));
}
inst.snapElements[i].snapping=(ts||bs||ls||rs||first);
}
}
});
$.ui.plugin.add("draggable","stack",{
start:function(event,ui,instance){
var min,
o=instance.options,
group=$.makeArray($(o.stack)).sort(function(a,b){
return(parseInt($(a).css("zIndex"),10)||0)-
(parseInt($(b).css("zIndex"),10)||0);
});
if(!group.length){return;}
min=parseInt($(group[0]).css("zIndex"),10)||0;
$(group).each(function(i){
$(this).css("zIndex",min+i);
});
this.css("zIndex",(min+group.length));
}
});
$.ui.plugin.add("draggable","zIndex",{
start:function(event,ui,instance){
var t=$(ui.helper),
o=instance.options;
if(t.css("zIndex")){
o._zIndex=t.css("zIndex");
}
t.css("zIndex",o.zIndex);
},
stop:function(event,ui,instance){
var o=instance.options;
if(o._zIndex){
$(ui.helper).css("zIndex",o._zIndex);
}
}
});
var widgetsDraggable=$.ui.draggable;
$.widget("ui.resizable",$.ui.mouse,{
version:"1.12.1",
widgetEventPrefix:"resize",
options:{
alsoResize:false,
animate:false,
animateDuration:"slow",
animateEasing:"swing",
aspectRatio:false,
autoHide:false,
classes:{
"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"
},
containment:false,
ghost:false,
grid:false,
handles:"e,s,se",
helper:false,
maxHeight:null,
maxWidth:null,
minHeight:10,
minWidth:10,
zIndex:90,
resize:null,
start:null,
stop:null
},
_num:function(value){
return parseFloat(value)||0;
},
_isNumber:function(value){
return!isNaN(parseFloat(value));
},
_hasScroll:function(el,a){
if($(el).css("overflow")==="hidden"){
return false;
}
var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",
has=false;
if(el[scroll]>0){
return true;
}
el[scroll]=1;
has=(el[scroll]>0);
el[scroll]=0;
return has;
},
_create:function(){
var margins,
o=this.options,
that=this;
this._addClass("ui-resizable");
$.extend(this,{
_aspectRatio:!!(o.aspectRatio),
aspectRatio:o.aspectRatio,
originalElement:this.element,
_proportionallyResizeElements:[],
_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null
});
if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){
this.element.wrap(
$("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
position:this.element.css("position"),
width:this.element.outerWidth(),
height:this.element.outerHeight(),
top:this.element.css("top"),
left:this.element.css("left")
})
);
this.element=this.element.parent().data(
"ui-resizable",this.element.resizable("instance")
);
this.elementIsWrapper=true;
margins={
marginTop:this.originalElement.css("marginTop"),
marginRight:this.originalElement.css("marginRight"),
marginBottom:this.originalElement.css("marginBottom"),
marginLeft:this.originalElement.css("marginLeft")
};
this.element.css(margins);
this.originalElement.css("margin",0);
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({
position:"static",
zoom:1,
display:"block"
}));
this.originalElement.css(margins);
this._proportionallyResize();
}
this._setupHandles();
if(o.autoHide){
$(this.element)
.on("mouseenter",function(){
if(o.disabled){
return;
}
that._removeClass("ui-resizable-autohide");
that._handles.show();
})
.on("mouseleave",function(){
if(o.disabled){
return;
}
if(!that.resizing){
that._addClass("ui-resizable-autohide");
that._handles.hide();
}
});
}
this._mouseInit();
},
_destroy:function(){
this._mouseDestroy();
var wrapper,
_destroy=function(exp){
$(exp)
.removeData("resizable")
.removeData("ui-resizable")
.off(".resizable")
.find(".ui-resizable-handle")
.remove();
};
if(this.elementIsWrapper){
_destroy(this.element);
wrapper=this.element;
this.originalElement.css({
position:wrapper.css("position"),
width:wrapper.outerWidth(),
height:wrapper.outerHeight(),
top:wrapper.css("top"),
left:wrapper.css("left")
}).insertAfter(wrapper);
wrapper.remove();
}
this.originalElement.css("resize",this.originalResizeStyle);
_destroy(this.originalElement);
return this;
},
_setOption:function(key,value){
this._super(key,value);
switch(key){
case"handles":
this._removeHandles();
this._setupHandles();
break;
default:
break;
}
},
_setupHandles:function(){
var o=this.options,handle,i,n,hname,axis,that=this;
this.handles=o.handles||
(!$(".ui-resizable-handle",this.element).length?
"e,s,se":{
n:".ui-resizable-n",
e:".ui-resizable-e",
s:".ui-resizable-s",
w:".ui-resizable-w",
se:".ui-resizable-se",
sw:".ui-resizable-sw",
ne:".ui-resizable-ne",
nw:".ui-resizable-nw"
});
this._handles=$();
if(this.handles.constructor===String){
if(this.handles==="all"){
this.handles="n,e,s,w,se,sw,ne,nw";
}
n=this.handles.split(",");
this.handles={};
for(i=0;i<n.length;i++){
handle=$.trim(n[i]);
hname="ui-resizable-"+handle;
axis=$("<div>");
this._addClass(axis,"ui-resizable-handle "+hname);
axis.css({zIndex:o.zIndex});
this.handles[handle]=".ui-resizable-"+handle;
this.element.append(axis);
}
}
this._renderAxis=function(target){
var i,axis,padPos,padWrapper;
target=target||this.element;
for(i in this.handles){
if(this.handles[i].constructor===String){
this.handles[i]=this.element.children(this.handles[i]).first().show();
}else if(this.handles[i].jquery||this.handles[i].nodeType){
this.handles[i]=$(this.handles[i]);
this._on(this.handles[i],{"mousedown":that._mouseDown});
}
if(this.elementIsWrapper&&
this.originalElement[0]
.nodeName
.match(/^(textarea|input|select|button)$/i)){
axis=$(this.handles[i],this.element);
padWrapper=/sw|ne|nw|se|n|s/.test(i)?
axis.outerHeight():
axis.outerWidth();
padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");
target.css(padPos,padWrapper);
this._proportionallyResize();
}
this._handles=this._handles.add(this.handles[i]);
}
};
this._renderAxis(this.element);
this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));
this._handles.disableSelection();
this._handles.on("mouseover",function(){
if(!that.resizing){
if(this.className){
axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
}
that.axis=axis&&axis[1]?axis[1]:"se";
}
});
if(o.autoHide){
this._handles.hide();
this._addClass("ui-resizable-autohide");
}
},
_removeHandles:function(){
this._handles.remove();
},
_mouseCapture:function(event){
var i,handle,
capture=false;
for(i in this.handles){
handle=$(this.handles[i])[0];
if(handle===event.target||$.contains(handle,event.target)){
capture=true;
}
}
return!this.options.disabled&&capture;
},
_mouseStart:function(event){
var curleft,curtop,cursor,
o=this.options,
el=this.element;
this.resizing=true;
this._renderProxy();
curleft=this._num(this.helper.css("left"));
curtop=this._num(this.helper.css("top"));
if(o.containment){
curleft+=$(o.containment).scrollLeft()||0;
curtop+=$(o.containment).scrollTop()||0;
}
this.offset=this.helper.offset();
this.position={left:curleft,top:curtop};
this.size=this._helper?{
width:this.helper.width(),
height:this.helper.height()
}:{
width:el.width(),
height:el.height()
};
this.originalSize=this._helper?{
width:el.outerWidth(),
height:el.outerHeight()
}:{
width:el.width(),
height:el.height()
};
this.sizeDiff={
width:el.outerWidth()-el.width(),
height:el.outerHeight()-el.height()
};
this.originalPosition={left:curleft,top:curtop};
this.originalMousePosition={left:event.pageX,top:event.pageY};
this.aspectRatio=(typeof o.aspectRatio==="number")?
o.aspectRatio:
((this.originalSize.width/this.originalSize.height)||1);
cursor=$(".ui-resizable-"+this.axis).css("cursor");
$("body").css("cursor",cursor==="auto"?this.axis+"-resize":cursor);
this._addClass("ui-resizable-resizing");
this._propagate("start",event);
return true;
},
_mouseDrag:function(event){
var data,props,
smp=this.originalMousePosition,
a=this.axis,
dx=(event.pageX-smp.left)||0,
dy=(event.pageY-smp.top)||0,
trigger=this._change[a];
this._updatePrevProperties();
if(!trigger){
return false;
}
data=trigger.apply(this,[event,dx,dy]);
this._updateVirtualBoundaries(event.shiftKey);
if(this._aspectRatio||event.shiftKey){
data=this._updateRatio(data,event);
}
data=this._respectSize(data,event);
this._updateCache(data);
this._propagate("resize",event);
props=this._applyChanges();
if(!this._helper&&this._proportionallyResizeElements.length){
this._proportionallyResize();
}
if(!$.isEmptyObject(props)){
this._updatePrevProperties();
this._trigger("resize",event,this.ui());
this._applyChanges();
}
return false;
},
_mouseStop:function(event){
this.resizing=false;
var pr,ista,soffseth,soffsetw,s,left,top,
o=this.options,that=this;
if(this._helper){
pr=this._proportionallyResizeElements;
ista=pr.length&&(/textarea/i).test(pr[0].nodeName);
soffseth=ista&&this._hasScroll(pr[0],"left")?0:that.sizeDiff.height;
soffsetw=ista?0:that.sizeDiff.width;
s={
width:(that.helper.width()-soffsetw),
height:(that.helper.height()-soffseth)
};
left=(parseFloat(that.element.css("left"))+
(that.position.left-that.originalPosition.left))||null;
top=(parseFloat(that.element.css("top"))+
(that.position.top-that.originalPosition.top))||null;
if(!o.animate){
this.element.css($.extend(s,{top:top,left:left}));
}
that.helper.height(that.size.height);
that.helper.width(that.size.width);
if(this._helper&&!o.animate){
this._proportionallyResize();
}
}
$("body").css("cursor","auto");
this._removeClass("ui-resizable-resizing");
this._propagate("stop",event);
if(this._helper){
this.helper.remove();
}
return false;
},
_updatePrevProperties:function(){
this.prevPosition={
top:this.position.top,
left:this.position.left
};
this.prevSize={
width:this.size.width,
height:this.size.height
};
},
_applyChanges:function(){
var props={};
if(this.position.top!==this.prevPosition.top){
props.top=this.position.top+"px";
}
if(this.position.left!==this.prevPosition.left){
props.left=this.position.left+"px";
}
if(this.size.width!==this.prevSize.width){
props.width=this.size.width+"px";
}
if(this.size.height!==this.prevSize.height){
props.height=this.size.height+"px";
}
this.helper.css(props);
return props;
},
_updateVirtualBoundaries:function(forceAspectRatio){
var pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b,
o=this.options;
b={
minWidth:this._isNumber(o.minWidth)?o.minWidth:0,
maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:Infinity,
minHeight:this._isNumber(o.minHeight)?o.minHeight:0,
maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:Infinity
};
if(this._aspectRatio||forceAspectRatio){
pMinWidth=b.minHeight*this.aspectRatio;
pMinHeight=b.minWidth/this.aspectRatio;
pMaxWidth=b.maxHeight*this.aspectRatio;
pMaxHeight=b.maxWidth/this.aspectRatio;
if(pMinWidth>b.minWidth){
b.minWidth=pMinWidth;
}
if(pMinHeight>b.minHeight){
b.minHeight=pMinHeight;
}
if(pMaxWidth<b.maxWidth){
b.maxWidth=pMaxWidth;
}
if(pMaxHeight<b.maxHeight){
b.maxHeight=pMaxHeight;
}
}
this._vBoundaries=b;
},
_updateCache:function(data){
this.offset=this.helper.offset();
if(this._isNumber(data.left)){
this.position.left=data.left;
}
if(this._isNumber(data.top)){
this.position.top=data.top;
}
if(this._isNumber(data.height)){
this.size.height=data.height;
}
if(this._isNumber(data.width)){
this.size.width=data.width;
}
},
_updateRatio:function(data){
var cpos=this.position,
csize=this.size,
a=this.axis;
if(this._isNumber(data.height)){
data.width=(data.height*this.aspectRatio);
}else if(this._isNumber(data.width)){
data.height=(data.width/this.aspectRatio);
}
if(a==="sw"){
data.left=cpos.left+(csize.width-data.width);
data.top=null;
}
if(a==="nw"){
data.top=cpos.top+(csize.height-data.height);
data.left=cpos.left+(csize.width-data.width);
}
return data;
},
_respectSize:function(data){
var o=this._vBoundaries,
a=this.axis,
ismaxw=this._isNumber(data.width)&&o.maxWidth&&(o.maxWidth<data.width),
ismaxh=this._isNumber(data.height)&&o.maxHeight&&(o.maxHeight<data.height),
isminw=this._isNumber(data.width)&&o.minWidth&&(o.minWidth>data.width),
isminh=this._isNumber(data.height)&&o.minHeight&&(o.minHeight>data.height),
dw=this.originalPosition.left+this.originalSize.width,
dh=this.originalPosition.top+this.originalSize.height,
cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);
if(isminw){
data.width=o.minWidth;
}
if(isminh){
data.height=o.minHeight;
}
if(ismaxw){
data.width=o.maxWidth;
}
if(ismaxh){
data.height=o.maxHeight;
}
if(isminw&&cw){
data.left=dw-o.minWidth;
}
if(ismaxw&&cw){
data.left=dw-o.maxWidth;
}
if(isminh&&ch){
data.top=dh-o.minHeight;
}
if(ismaxh&&ch){
data.top=dh-o.maxHeight;
}
if(!data.width&&!data.height&&!data.left&&data.top){
data.top=null;
}else if(!data.width&&!data.height&&!data.top&&data.left){
data.left=null;
}
return data;
},
_getPaddingPlusBorderDimensions:function(element){
var i=0,
widths=[],
borders=[
element.css("borderTopWidth"),
element.css("borderRightWidth"),
element.css("borderBottomWidth"),
element.css("borderLeftWidth")
],
paddings=[
element.css("paddingTop"),
element.css("paddingRight"),
element.css("paddingBottom"),
element.css("paddingLeft")
];
for(;i<4;i++){
widths[i]=(parseFloat(borders[i])||0);
widths[i]+=(parseFloat(paddings[i])||0);
}
return{
height:widths[0]+widths[2],
width:widths[1]+widths[3]
};
},
_proportionallyResize:function(){
if(!this._proportionallyResizeElements.length){
return;
}
var prel,
i=0,
element=this.helper||this.element;
for(;i<this._proportionallyResizeElements.length;i++){
prel=this._proportionallyResizeElements[i];
if(!this.outerDimensions){
this.outerDimensions=this._getPaddingPlusBorderDimensions(prel);
}
prel.css({
height:(element.height()-this.outerDimensions.height)||0,
width:(element.width()-this.outerDimensions.width)||0
});
}
},
_renderProxy:function(){
var el=this.element,o=this.options;
this.elementOffset=el.offset();
if(this._helper){
this.helper=this.helper||$("<div style='overflow:hidden;'></div>");
this._addClass(this.helper,this._helper);
this.helper.css({
width:this.element.outerWidth(),
height:this.element.outerHeight(),
position:"absolute",
left:this.elementOffset.left+"px",
top:this.elementOffset.top+"px",
zIndex:++o.zIndex
});
this.helper
.appendTo("body")
.disableSelection();
}else{
this.helper=this.element;
}
},
_change:{
e:function(event,dx){
return{width:this.originalSize.width+dx};
},
w:function(event,dx){
var cs=this.originalSize,sp=this.originalPosition;
return{left:sp.left+dx,width:cs.width-dx};
},
n:function(event,dx,dy){
var cs=this.originalSize,sp=this.originalPosition;
return{top:sp.top+dy,height:cs.height-dy};
},
s:function(event,dx,dy){
return{height:this.originalSize.height+dy};
},
se:function(event,dx,dy){
return $.extend(this._change.s.apply(this,arguments),
this._change.e.apply(this,[event,dx,dy]));
},
sw:function(event,dx,dy){
return $.extend(this._change.s.apply(this,arguments),
this._change.w.apply(this,[event,dx,dy]));
},
ne:function(event,dx,dy){
return $.extend(this._change.n.apply(this,arguments),
this._change.e.apply(this,[event,dx,dy]));
},
nw:function(event,dx,dy){
return $.extend(this._change.n.apply(this,arguments),
this._change.w.apply(this,[event,dx,dy]));
}
},
_propagate:function(n,event){
$.ui.plugin.call(this,n,[event,this.ui()]);
(n!=="resize"&&this._trigger(n,event,this.ui()));
},
plugins:{},
ui:function(){
return{
originalElement:this.originalElement,
element:this.element,
helper:this.helper,
position:this.position,
size:this.size,
originalSize:this.originalSize,
originalPosition:this.originalPosition
};
}
});
$.ui.plugin.add("resizable","animate",{
stop:function(event){
var that=$(this).resizable("instance"),
o=that.options,
pr=that._proportionallyResizeElements,
ista=pr.length&&(/textarea/i).test(pr[0].nodeName),
soffseth=ista&&that._hasScroll(pr[0],"left")?0:that.sizeDiff.height,
soffsetw=ista?0:that.sizeDiff.width,
style={
width:(that.size.width-soffsetw),
height:(that.size.height-soffseth)
},
left=(parseFloat(that.element.css("left"))+
(that.position.left-that.originalPosition.left))||null,
top=(parseFloat(that.element.css("top"))+
(that.position.top-that.originalPosition.top))||null;
that.element.animate(
$.extend(style,top&&left?{top:top,left:left}:{}),{
duration:o.animateDuration,
easing:o.animateEasing,
step:function(){
var data={
width:parseFloat(that.element.css("width")),
height:parseFloat(that.element.css("height")),
top:parseFloat(that.element.css("top")),
left:parseFloat(that.element.css("left"))
};
if(pr&&pr.length){
$(pr[0]).css({width:data.width,height:data.height});
}
that._updateCache(data);
that._propagate("resize",event);
}
}
);
}
});
$.ui.plugin.add("resizable","containment",{
start:function(){
var element,p,co,ch,cw,width,height,
that=$(this).resizable("instance"),
o=that.options,
el=that.element,
oc=o.containment,
ce=(oc instanceof $)?
oc.get(0):
(/parent/.test(oc))?el.parent().get(0):oc;
if(!ce){
return;
}
that.containerElement=$(ce);
if(/document/.test(oc)||oc===document){
that.containerOffset={
left:0,
top:0
};
that.containerPosition={
left:0,
top:0
};
that.parentData={
element:$(document),
left:0,
top:0,
width:$(document).width(),
height:$(document).height()||document.body.parentNode.scrollHeight
};
}else{
element=$(ce);
p=[];
$(["Top","Right","Left","Bottom"]).each(function(i,name){
p[i]=that._num(element.css("padding"+name));
});
that.containerOffset=element.offset();
that.containerPosition=element.position();
that.containerSize={
height:(element.innerHeight()-p[3]),
width:(element.innerWidth()-p[1])
};
co=that.containerOffset;
ch=that.containerSize.height;
cw=that.containerSize.width;
width=(that._hasScroll(ce,"left")?ce.scrollWidth:cw);
height=(that._hasScroll(ce)?ce.scrollHeight:ch);
that.parentData={
element:ce,
left:co.left,
top:co.top,
width:width,
height:height
};
}
},
resize:function(event){
var woset,hoset,isParent,isOffsetRelative,
that=$(this).resizable("instance"),
o=that.options,
co=that.containerOffset,
cp=that.position,
pRatio=that._aspectRatio||event.shiftKey,
cop={
top:0,
left:0
},
ce=that.containerElement,
continueResize=true;
if(ce[0]!==document&&(/static/).test(ce.css("position"))){
cop=co;
}
if(cp.left<(that._helper?co.left:0)){
that.size.width=that.size.width+
(that._helper?
(that.position.left-co.left):
(that.position.left-cop.left));
if(pRatio){
that.size.height=that.size.width/that.aspectRatio;
continueResize=false;
}
that.position.left=o.helper?co.left:0;
}
if(cp.top<(that._helper?co.top:0)){
that.size.height=that.size.height+
(that._helper?
(that.position.top-co.top):
that.position.top);
if(pRatio){
that.size.width=that.size.height*that.aspectRatio;
continueResize=false;
}
that.position.top=that._helper?co.top:0;
}
isParent=that.containerElement.get(0)===that.element.parent().get(0);
isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));
if(isParent&&isOffsetRelative){
that.offset.left=that.parentData.left+that.position.left;
that.offset.top=that.parentData.top+that.position.top;
}else{
that.offset.left=that.element.offset().left;
that.offset.top=that.element.offset().top;
}
woset=Math.abs(that.sizeDiff.width+
(that._helper?
that.offset.left-cop.left:
(that.offset.left-co.left)));
hoset=Math.abs(that.sizeDiff.height+
(that._helper?
that.offset.top-cop.top:
(that.offset.top-co.top)));
if(woset+that.size.width>=that.parentData.width){
that.size.width=that.parentData.width-woset;
if(pRatio){
that.size.height=that.size.width/that.aspectRatio;
continueResize=false;
}
}
if(hoset+that.size.height>=that.parentData.height){
that.size.height=that.parentData.height-hoset;
if(pRatio){
that.size.width=that.size.height*that.aspectRatio;
continueResize=false;
}
}
if(!continueResize){
that.position.left=that.prevPosition.left;
that.position.top=that.prevPosition.top;
that.size.width=that.prevSize.width;
that.size.height=that.prevSize.height;
}
},
stop:function(){
var that=$(this).resizable("instance"),
o=that.options,
co=that.containerOffset,
cop=that.containerPosition,
ce=that.containerElement,
helper=$(that.helper),
ho=helper.offset(),
w=helper.outerWidth()-that.sizeDiff.width,
h=helper.outerHeight()-that.sizeDiff.height;
if(that._helper&&!o.animate&&(/relative/).test(ce.css("position"))){
$(this).css({
left:ho.left-cop.left-co.left,
width:w,
height:h
});
}
if(that._helper&&!o.animate&&(/static/).test(ce.css("position"))){
$(this).css({
left:ho.left-cop.left-co.left,
width:w,
height:h
});
}
}
});
$.ui.plugin.add("resizable","alsoResize",{
start:function(){
var that=$(this).resizable("instance"),
o=that.options;
$(o.alsoResize).each(function(){
var el=$(this);
el.data("ui-resizable-alsoresize",{
width:parseFloat(el.width()),height:parseFloat(el.height()),
left:parseFloat(el.css("left")),top:parseFloat(el.css("top"))
});
});
},
resize:function(event,ui){
var that=$(this).resizable("instance"),
o=that.options,
os=that.originalSize,
op=that.originalPosition,
delta={
height:(that.size.height-os.height)||0,
width:(that.size.width-os.width)||0,
top:(that.position.top-op.top)||0,
left:(that.position.left-op.left)||0
};
$(o.alsoResize).each(function(){
var el=$(this),start=$(this).data("ui-resizable-alsoresize"),style={},
css=el.parents(ui.originalElement[0]).length?
["width","height"]:
["width","height","top","left"];
$.each(css,function(i,prop){
var sum=(start[prop]||0)+(delta[prop]||0);
if(sum&&sum>=0){
style[prop]=sum||null;
}
});
el.css(style);
});
},
stop:function(){
$(this).removeData("ui-resizable-alsoresize");
}
});
$.ui.plugin.add("resizable","ghost",{
start:function(){
var that=$(this).resizable("instance"),cs=that.size;
that.ghost=that.originalElement.clone();
that.ghost.css({
opacity:0.25,
display:"block",
position:"relative",
height:cs.height,
width:cs.width,
margin:0,
left:0,
top:0
});
that._addClass(that.ghost,"ui-resizable-ghost");
if($.uiBackCompat!==false&&typeof that.options.ghost==="string"){
that.ghost.addClass(this.options.ghost);
}
that.ghost.appendTo(that.helper);
},
resize:function(){
var that=$(this).resizable("instance");
if(that.ghost){
that.ghost.css({
position:"relative",
height:that.size.height,
width:that.size.width
});
}
},
stop:function(){
var that=$(this).resizable("instance");
if(that.ghost&&that.helper){
that.helper.get(0).removeChild(that.ghost.get(0));
}
}
});
$.ui.plugin.add("resizable","grid",{
resize:function(){
var outerDimensions,
that=$(this).resizable("instance"),
o=that.options,
cs=that.size,
os=that.originalSize,
op=that.originalPosition,
a=that.axis,
grid=typeof o.grid==="number"?[o.grid,o.grid]:o.grid,
gridX=(grid[0]||1),
gridY=(grid[1]||1),
ox=Math.round((cs.width-os.width)/gridX)*gridX,
oy=Math.round((cs.height-os.height)/gridY)*gridY,
newWidth=os.width+ox,
newHeight=os.height+oy,
isMaxWidth=o.maxWidth&&(o.maxWidth<newWidth),
isMaxHeight=o.maxHeight&&(o.maxHeight<newHeight),
isMinWidth=o.minWidth&&(o.minWidth>newWidth),
isMinHeight=o.minHeight&&(o.minHeight>newHeight);
o.grid=grid;
if(isMinWidth){
newWidth+=gridX;
}
if(isMinHeight){
newHeight+=gridY;
}
if(isMaxWidth){
newWidth-=gridX;
}
if(isMaxHeight){
newHeight-=gridY;
}
if(/^(se|s|e)$/.test(a)){
that.size.width=newWidth;
that.size.height=newHeight;
}else if(/^(ne)$/.test(a)){
that.size.width=newWidth;
that.size.height=newHeight;
that.position.top=op.top-oy;
}else if(/^(sw)$/.test(a)){
that.size.width=newWidth;
that.size.height=newHeight;
that.position.left=op.left-ox;
}else{
if(newHeight-gridY<=0||newWidth-gridX<=0){
outerDimensions=that._getPaddingPlusBorderDimensions(this);
}
if(newHeight-gridY>0){
that.size.height=newHeight;
that.position.top=op.top-oy;
}else{
newHeight=gridY-outerDimensions.height;
that.size.height=newHeight;
that.position.top=op.top+os.height-newHeight;
}
if(newWidth-gridX>0){
that.size.width=newWidth;
that.position.left=op.left-ox;
}else{
newWidth=gridX-outerDimensions.width;
that.size.width=newWidth;
that.position.left=op.left+os.width-newWidth;
}
}
}
});
var widgetsResizable=$.ui.resizable;
$.widget("ui.dialog",{
version:"1.12.1",
options:{
appendTo:"body",
autoOpen:true,
buttons:[],
classes:{
"ui-dialog":"ui-corner-all",
"ui-dialog-titlebar":"ui-corner-all"
},
closeOnEscape:true,
closeText:"Close",
draggable:true,
hide:null,
height:"auto",
maxHeight:null,
maxWidth:null,
minHeight:150,
minWidth:150,
modal:false,
position:{
my:"center",
at:"center",
of:window,
collision:"fit",
using:function(pos){
var topOffset=$(this).css(pos).offset().top;
if(topOffset<0){
$(this).css("top",pos.top-topOffset);
}
}
},
resizable:true,
show:null,
title:null,
width:300,
beforeClose:null,
close:null,
drag:null,
dragStart:null,
dragStop:null,
focus:null,
open:null,
resize:null,
resizeStart:null,
resizeStop:null
},
sizeRelatedOptions:{
buttons:true,
height:true,
maxHeight:true,
maxWidth:true,
minHeight:true,
minWidth:true,
width:true
},
resizableRelatedOptions:{
maxHeight:true,
maxWidth:true,
minHeight:true,
minWidth:true
},
_create:function(){
this.originalCss={
display:this.element[0].style.display,
width:this.element[0].style.width,
minHeight:this.element[0].style.minHeight,
maxHeight:this.element[0].style.maxHeight,
height:this.element[0].style.height
};
this.originalPosition={
parent:this.element.parent(),
index:this.element.parent().children().index(this.element)
};
this.originalTitle=this.element.attr("title");
if(this.options.title==null&&this.originalTitle!=null){
this.options.title=this.originalTitle;
}
if(this.options.disabled){
this.options.disabled=false;
}
this._createWrapper();
this.element
.show()
.removeAttr("title")
.appendTo(this.uiDialog);
this._addClass("ui-dialog-content","ui-widget-content");
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&$.fn.draggable){
this._makeDraggable();
}
if(this.options.resizable&&$.fn.resizable){
this._makeResizable();
}
this._isOpen=false;
this._trackFocus();
},
_init:function(){
if(this.options.autoOpen){
this.open();
}
},
_appendTo:function(){
var element=this.options.appendTo;
if(element&&(element.jquery||element.nodeType)){
return $(element);
}
return this.document.find(element||"body").eq(0);
},
_destroy:function(){
var next,
originalPosition=this.originalPosition;
this._untrackInstance();
this._destroyOverlay();
this.element
.removeUniqueId()
.css(this.originalCss)
.detach();
this.uiDialog.remove();
if(this.originalTitle){
this.element.attr("title",this.originalTitle);
}
next=originalPosition.parent.children().eq(originalPosition.index);
if(next.length&&next[0]!==this.element[0]){
next.before(this.element);
}else{
originalPosition.parent.append(this.element);
}
},
widget:function(){
return this.uiDialog;
},
disable:$.noop,
enable:$.noop,
close:function(event){
var that=this;
if(!this._isOpen||this._trigger("beforeClose",event)===false){
return;
}
this._isOpen=false;
this._focusedElement=null;
this._destroyOverlay();
this._untrackInstance();
if(!this.opener.filter(":focusable").trigger("focus").length){
$.ui.safeBlur($.ui.safeActiveElement(this.document[0]));
}
this._hide(this.uiDialog,this.options.hide,function(){
that._trigger("close",event);
});
},
isOpen:function(){
return this._isOpen;
},
moveToTop:function(){
this._moveToTop();
},
_moveToTop:function(event,silent){
var moved=false,
zIndices=this.uiDialog.siblings(".ui-front:visible").map(function(){
return+$(this).css("z-index");
}).get(),
zIndexMax=Math.max.apply(null,zIndices);
if(zIndexMax>=+this.uiDialog.css("z-index")){
this.uiDialog.css("z-index",zIndexMax+1);
moved=true;
}
if(moved&&!silent){
this._trigger("focus",event);
}
return moved;
},
open:function(){
var that=this;
if(this._isOpen){
if(this._moveToTop()){
this._focusTabbable();
}
return;
}
this._isOpen=true;
this.opener=$($.ui.safeActiveElement(this.document[0]));
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
if(this.overlay){
this.overlay.css("z-index",this.uiDialog.css("z-index")-1);
}
this._show(this.uiDialog,this.options.show,function(){
that._focusTabbable();
that._trigger("focus");
});
this._makeFocusTarget();
this._trigger("open");
},
_focusTabbable:function(){
var hasFocus=this._focusedElement;
if(!hasFocus){
hasFocus=this.element.find("[autofocus]");
}
if(!hasFocus.length){
hasFocus=this.element.find(":tabbable");
}
if(!hasFocus.length){
hasFocus=this.uiDialogButtonPane.find(":tabbable");
}
if(!hasFocus.length){
hasFocus=this.uiDialogTitlebarClose.filter(":tabbable");
}
if(!hasFocus.length){
hasFocus=this.uiDialog;
}
hasFocus.eq(0).trigger("focus");
},
_keepFocus:function(event){
function checkFocus(){
var activeElement=$.ui.safeActiveElement(this.document[0]),
isActive=this.uiDialog[0]===activeElement||
$.contains(this.uiDialog[0],activeElement);
if(!isActive){
this._focusTabbable();
}
}
event.preventDefault();
checkFocus.call(this);
this._delay(checkFocus);
},
_createWrapper:function(){
this.uiDialog=$("<div>")
.hide()
.attr({
tabIndex:-1,
role:"dialog"
})
.appendTo(this._appendTo());
this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front");
this._on(this.uiDialog,{
keydown:function(event){
if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&
event.keyCode===$.ui.keyCode.ESCAPE){
event.preventDefault();
this.close(event);
return;
}
if(event.keyCode!==$.ui.keyCode.TAB||event.isDefaultPrevented()){
return;
}
var tabbables=this.uiDialog.find(":tabbable"),
first=tabbables.filter(":first"),
last=tabbables.filter(":last");
if((event.target===last[0]||event.target===this.uiDialog[0])&&
!event.shiftKey){
this._delay(function(){
first.trigger("focus");
});
event.preventDefault();
}else if((event.target===first[0]||
event.target===this.uiDialog[0])&&event.shiftKey){
this._delay(function(){
last.trigger("focus");
});
event.preventDefault();
}
},
mousedown:function(event){
if(this._moveToTop(event)){
this._focusTabbable();
}
}
});
if(!this.element.find("[aria-describedby]").length){
this.uiDialog.attr({
"aria-describedby":this.element.uniqueId().attr("id")
});
}
},
_createTitlebar:function(){
var uiDialogTitle;
this.uiDialogTitlebar=$("<div>");
this._addClass(this.uiDialogTitlebar,
"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix");
this._on(this.uiDialogTitlebar,{
mousedown:function(event){
if(!$(event.target).closest(".ui-dialog-titlebar-close")){
this.uiDialog.trigger("focus");
}
}
});
this.uiDialogTitlebarClose=$("<button type='button'></button>")
.button({
label:$("<a>").text(this.options.closeText).html(),
icon:"ui-icon-closethick",
showLabel:false
})
.appendTo(this.uiDialogTitlebar);
this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close");
this._on(this.uiDialogTitlebarClose,{
click:function(event){
event.preventDefault();
this.close(event);
}
});
uiDialogTitle=$("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
this._addClass(uiDialogTitle,"ui-dialog-title");
this._title(uiDialogTitle);
this.uiDialogTitlebar.prependTo(this.uiDialog);
this.uiDialog.attr({
"aria-labelledby":uiDialogTitle.attr("id")
});
},
_title:function(title){
if(this.options.title){
title.text(this.options.title);
}else{
title.html("&#160;");
}
},
_createButtonPane:function(){
this.uiDialogButtonPane=$("<div>");
this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane",
"ui-widget-content ui-helper-clearfix");
this.uiButtonSet=$("<div>")
.appendTo(this.uiDialogButtonPane);
this._addClass(this.uiButtonSet,"ui-dialog-buttonset");
this._createButtons();
},
_createButtons:function(){
var that=this,
buttons=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if($.isEmptyObject(buttons)||($.isArray(buttons)&&!buttons.length)){
this._removeClass(this.uiDialog,"ui-dialog-buttons");
return;
}
$.each(buttons,function(name,props){
var click,buttonOptions;
props=$.isFunction(props)?
{click:props,text:name}:
props;
props=$.extend({type:"button"},props);
click=props.click;
buttonOptions={
icon:props.icon,
iconPosition:props.iconPosition,
showLabel:props.showLabel,
icons:props.icons,
text:props.text
};
delete props.click;
delete props.icon;
delete props.iconPosition;
delete props.showLabel;
delete props.icons;
if(typeof props.text==="boolean"){
delete props.text;
}
$("<button></button>",props)
.button(buttonOptions)
.appendTo(that.uiButtonSet)
.on("click",function(){
click.apply(that.element[0],arguments);
});
});
this._addClass(this.uiDialog,"ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog);
},
_makeDraggable:function(){
var that=this,
options=this.options;
function filteredUi(ui){
return{
position:ui.position,
offset:ui.offset
};
}
this.uiDialog.draggable({
cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",
containment:"document",
start:function(event,ui){
that._addClass($(this),"ui-dialog-dragging");
that._blockFrames();
that._trigger("dragStart",event,filteredUi(ui));
},
drag:function(event,ui){
that._trigger("drag",event,filteredUi(ui));
},
stop:function(event,ui){
var left=ui.offset.left-that.document.scrollLeft(),
top=ui.offset.top-that.document.scrollTop();
options.position={
my:"left top",
at:"left"+(left>=0?"+":"")+left+" "+
"top"+(top>=0?"+":"")+top,
of:that.window
};
that._removeClass($(this),"ui-dialog-dragging");
that._unblockFrames();
that._trigger("dragStop",event,filteredUi(ui));
}
});
},
_makeResizable:function(){
var that=this,
options=this.options,
handles=options.resizable,
position=this.uiDialog.css("position"),
resizeHandles=typeof handles==="string"?
handles:
"n,e,s,w,se,sw,ne,nw";
function filteredUi(ui){
return{
originalPosition:ui.originalPosition,
originalSize:ui.originalSize,
position:ui.position,
size:ui.size
};
}
this.uiDialog.resizable({
cancel:".ui-dialog-content",
containment:"document",
alsoResize:this.element,
maxWidth:options.maxWidth,
maxHeight:options.maxHeight,
minWidth:options.minWidth,
minHeight:this._minHeight(),
handles:resizeHandles,
start:function(event,ui){
that._addClass($(this),"ui-dialog-resizing");
that._blockFrames();
that._trigger("resizeStart",event,filteredUi(ui));
},
resize:function(event,ui){
that._trigger("resize",event,filteredUi(ui));
},
stop:function(event,ui){
var offset=that.uiDialog.offset(),
left=offset.left-that.document.scrollLeft(),
top=offset.top-that.document.scrollTop();
options.height=that.uiDialog.height();
options.width=that.uiDialog.width();
options.position={
my:"left top",
at:"left"+(left>=0?"+":"")+left+" "+
"top"+(top>=0?"+":"")+top,
of:that.window
};
that._removeClass($(this),"ui-dialog-resizing");
that._unblockFrames();
that._trigger("resizeStop",event,filteredUi(ui));
}
})
.css("position",position);
},
_trackFocus:function(){
this._on(this.widget(),{
focusin:function(event){
this._makeFocusTarget();
this._focusedElement=$(event.target);
}
});
},
_makeFocusTarget:function(){
this._untrackInstance();
this._trackingInstances().unshift(this);
},
_untrackInstance:function(){
var instances=this._trackingInstances(),
exists=$.inArray(this,instances);
if(exists!==-1){
instances.splice(exists,1);
}
},
_trackingInstances:function(){
var instances=this.document.data("ui-dialog-instances");
if(!instances){
instances=[];
this.document.data("ui-dialog-instances",instances);
}
return instances;
},
_minHeight:function(){
var options=this.options;
return options.height==="auto"?
options.minHeight:
Math.min(options.minHeight,options.height);
},
_position:function(){
var isVisible=this.uiDialog.is(":visible");
if(!isVisible){
this.uiDialog.show();
}
this.uiDialog.position(this.options.position);
if(!isVisible){
this.uiDialog.hide();
}
},
_setOptions:function(options){
var that=this,
resize=false,
resizableOptions={};
$.each(options,function(key,value){
that._setOption(key,value);
if(key in that.sizeRelatedOptions){
resize=true;
}
if(key in that.resizableRelatedOptions){
resizableOptions[key]=value;
}
});
if(resize){
this._size();
this._position();
}
if(this.uiDialog.is(":data(ui-resizable)")){
this.uiDialog.resizable("option",resizableOptions);
}
},
_setOption:function(key,value){
var isDraggable,isResizable,
uiDialog=this.uiDialog;
if(key==="disabled"){
return;
}
this._super(key,value);
if(key==="appendTo"){
this.uiDialog.appendTo(this._appendTo());
}
if(key==="buttons"){
this._createButtons();
}
if(key==="closeText"){
this.uiDialogTitlebarClose.button({
label:$("<a>").text(""+this.options.closeText).html()
});
}
if(key==="draggable"){
isDraggable=uiDialog.is(":data(ui-draggable)");
if(isDraggable&&!value){
uiDialog.draggable("destroy");
}
if(!isDraggable&&value){
this._makeDraggable();
}
}
if(key==="position"){
this._position();
}
if(key==="resizable"){
isResizable=uiDialog.is(":data(ui-resizable)");
if(isResizable&&!value){
uiDialog.resizable("destroy");
}
if(isResizable&&typeof value==="string"){
uiDialog.resizable("option","handles",value);
}
if(!isResizable&&value!==false){
this._makeResizable();
}
}
if(key==="title"){
this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
}
},
_size:function(){
var nonContentHeight,minContentHeight,maxContentHeight,
options=this.options;
this.element.show().css({
width:"auto",
minHeight:0,
maxHeight:"none",
height:0
});
if(options.minWidth>options.width){
options.width=options.minWidth;
}
nonContentHeight=this.uiDialog.css({
height:"auto",
width:options.width
})
.outerHeight();
minContentHeight=Math.max(0,options.minHeight-nonContentHeight);
maxContentHeight=typeof options.maxHeight==="number"?
Math.max(0,options.maxHeight-nonContentHeight):
"none";
if(options.height==="auto"){
this.element.css({
minHeight:minContentHeight,
maxHeight:maxContentHeight,
height:"auto"
});
}else{
this.element.height(Math.max(0,options.height-nonContentHeight));
}
if(this.uiDialog.is(":data(ui-resizable)")){
this.uiDialog.resizable("option","minHeight",this._minHeight());
}
},
_blockFrames:function(){
this.iframeBlocks=this.document.find("iframe").map(function(){
var iframe=$(this);
return $("<div>")
.css({
position:"absolute",
width:iframe.outerWidth(),
height:iframe.outerHeight()
})
.appendTo(iframe.parent())
.offset(iframe.offset())[0];
});
},
_unblockFrames:function(){
if(this.iframeBlocks){
this.iframeBlocks.remove();
delete this.iframeBlocks;
}
},
_allowInteraction:function(event){
if($(event.target).closest(".ui-dialog").length){
return true;
}
return!!$(event.target).closest(".ui-datepicker").length;
},
_createOverlay:function(){
if(!this.options.modal){
return;
}
var isOpening=true;
this._delay(function(){
isOpening=false;
});
if(!this.document.data("ui-dialog-overlays")){
this._on(this.document,{
focusin:function(event){
if(isOpening){
return;
}
if(!this._allowInteraction(event)){
event.preventDefault();
this._trackingInstances()[0]._focusTabbable();
}
}
});
}
this.overlay=$("<div>")
.appendTo(this._appendTo());
this._addClass(this.overlay,null,"ui-widget-overlay ui-front");
this._on(this.overlay,{
mousedown:"_keepFocus"
});
this.document.data("ui-dialog-overlays",
(this.document.data("ui-dialog-overlays")||0)+1);
},
_destroyOverlay:function(){
if(!this.options.modal){
return;
}
if(this.overlay){
var overlays=this.document.data("ui-dialog-overlays")-1;
if(!overlays){
this._off(this.document,"focusin");
this.document.removeData("ui-dialog-overlays");
}else{
this.document.data("ui-dialog-overlays",overlays);
}
this.overlay.remove();
this.overlay=null;
}
}
});
if($.uiBackCompat!==false){
$.widget("ui.dialog",$.ui.dialog,{
options:{
dialogClass:""
},
_createWrapper:function(){
this._super();
this.uiDialog.addClass(this.options.dialogClass);
},
_setOption:function(key,value){
if(key==="dialogClass"){
this.uiDialog
.removeClass(this.options.dialogClass)
.addClass(value);
}
this._superApply(arguments);
}
});
}
var widgetsDialog=$.ui.dialog;
$.widget("ui.droppable",{
version:"1.12.1",
widgetEventPrefix:"drop",
options:{
accept:"*",
addClasses:true,
greedy:false,
scope:"default",
tolerance:"intersect",
activate:null,
deactivate:null,
drop:null,
out:null,
over:null
},
_create:function(){
var proportions,
o=this.options,
accept=o.accept;
this.isover=false;
this.isout=true;
this.accept=$.isFunction(accept)?accept:function(d){
return d.is(accept);
};
this.proportions=function(){
if(arguments.length){
proportions=arguments[0];
}else{
return proportions?
proportions:
proportions={
width:this.element[0].offsetWidth,
height:this.element[0].offsetHeight
};
}
};
this._addToManager(o.scope);
o.addClasses&&this._addClass("ui-droppable");
},
_addToManager:function(scope){
$.ui.ddmanager.droppables[scope]=$.ui.ddmanager.droppables[scope]||[];
$.ui.ddmanager.droppables[scope].push(this);
},
_splice:function(drop){
var i=0;
for(;i<drop.length;i++){
if(drop[i]===this){
drop.splice(i,1);
}
}
},
_destroy:function(){
var drop=$.ui.ddmanager.droppables[this.options.scope];
this._splice(drop);
},
_setOption:function(key,value){
if(key==="accept"){
this.accept=$.isFunction(value)?value:function(d){
return d.is(value);
};
}else if(key==="scope"){
var drop=$.ui.ddmanager.droppables[this.options.scope];
this._splice(drop);
this._addToManager(value);
}
this._super(key,value);
},
_activate:function(event){
var draggable=$.ui.ddmanager.current;
this._addActiveClass();
if(draggable){
this._trigger("activate",event,this.ui(draggable));
}
},
_deactivate:function(event){
var draggable=$.ui.ddmanager.current;
this._removeActiveClass();
if(draggable){
this._trigger("deactivate",event,this.ui(draggable));
}
},
_over:function(event){
var draggable=$.ui.ddmanager.current;
if(!draggable||(draggable.currentItem||
draggable.element)[0]===this.element[0]){
return;
}
if(this.accept.call(this.element[0],(draggable.currentItem||
draggable.element))){
this._addHoverClass();
this._trigger("over",event,this.ui(draggable));
}
},
_out:function(event){
var draggable=$.ui.ddmanager.current;
if(!draggable||(draggable.currentItem||
draggable.element)[0]===this.element[0]){
return;
}
if(this.accept.call(this.element[0],(draggable.currentItem||
draggable.element))){
this._removeHoverClass();
this._trigger("out",event,this.ui(draggable));
}
},
_drop:function(event,custom){
var draggable=custom||$.ui.ddmanager.current,
childrenIntersection=false;
if(!draggable||(draggable.currentItem||
draggable.element)[0]===this.element[0]){
return false;
}
this.element
.find(":data(ui-droppable)")
.not(".ui-draggable-dragging")
.each(function(){
var inst=$(this).droppable("instance");
if(
inst.options.greedy&&
!inst.options.disabled&&
inst.options.scope===draggable.options.scope&&
inst.accept.call(
inst.element[0],(draggable.currentItem||draggable.element)
)&&
intersect(
draggable,
$.extend(inst,{offset:inst.element.offset()}),
inst.options.tolerance,event
)
){
childrenIntersection=true;
return false;}
});
if(childrenIntersection){
return false;
}
if(this.accept.call(this.element[0],
(draggable.currentItem||draggable.element))){
this._removeActiveClass();
this._removeHoverClass();
this._trigger("drop",event,this.ui(draggable));
return this.element;
}
return false;
},
ui:function(c){
return{
draggable:(c.currentItem||c.element),
helper:c.helper,
position:c.position,
offset:c.positionAbs
};
},
_addHoverClass:function(){
this._addClass("ui-droppable-hover");
},
_removeHoverClass:function(){
this._removeClass("ui-droppable-hover");
},
_addActiveClass:function(){
this._addClass("ui-droppable-active");
},
_removeActiveClass:function(){
this._removeClass("ui-droppable-active");
}
});
var intersect=$.ui.intersect=(function(){
function isOverAxis(x,reference,size){
return(x>=reference)&&(x<(reference+size));
}
return function(draggable,droppable,toleranceMode,event){
if(!droppable.offset){
return false;
}
var x1=(draggable.positionAbs||
draggable.position.absolute).left+draggable.margins.left,
y1=(draggable.positionAbs||
draggable.position.absolute).top+draggable.margins.top,
x2=x1+draggable.helperProportions.width,
y2=y1+draggable.helperProportions.height,
l=droppable.offset.left,
t=droppable.offset.top,
r=l+droppable.proportions().width,
b=t+droppable.proportions().height;
switch(toleranceMode){
case"fit":
return(l<=x1&&x2<=r&&t<=y1&&y2<=b);
case"intersect":
return(l<x1+(draggable.helperProportions.width/2)&&
x2-(draggable.helperProportions.width/2)<r&&
t<y1+(draggable.helperProportions.height/2)&&
y2-(draggable.helperProportions.height/2)<b);
case"pointer":
return isOverAxis(event.pageY,t,droppable.proportions().height)&&
isOverAxis(event.pageX,l,droppable.proportions().width);
case"touch":
return(
(y1>=t&&y1<=b)||
(y2>=t&&y2<=b)||
(y1<t&&y2>b)
)&&(
(x1>=l&&x1<=r)||
(x2>=l&&x2<=r)||
(x1<l&&x2>r)
);
default:
return false;
}
};
})();
$.ui.ddmanager={
current:null,
droppables:{"default":[]},
prepareOffsets:function(t,event){
var i,j,
m=$.ui.ddmanager.droppables[t.options.scope]||[],
type=event?event.type:null,
list=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(i=0;i<m.length;i++){
if(m[i].options.disabled||(t&&!m[i].accept.call(m[i].element[0],
(t.currentItem||t.element)))){
continue;
}
for(j=0;j<list.length;j++){
if(list[j]===m[i].element[0]){
m[i].proportions().height=0;
continue droppablesLoop;
}
}
m[i].visible=m[i].element.css("display")!=="none";
if(!m[i].visible){
continue;
}
if(type==="mousedown"){
m[i]._activate.call(m[i],event);
}
m[i].offset=m[i].element.offset();
m[i].proportions({
width:m[i].element[0].offsetWidth,
height:m[i].element[0].offsetHeight
});
}
},
drop:function(draggable,event){
var dropped=false;
$.each(($.ui.ddmanager.droppables[draggable.options.scope]||[]).slice(),function(){
if(!this.options){
return;
}
if(!this.options.disabled&&this.visible&&
intersect(draggable,this,this.options.tolerance,event)){
dropped=this._drop.call(this,event)||dropped;
}
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],
(draggable.currentItem||draggable.element))){
this.isout=true;
this.isover=false;
this._deactivate.call(this,event);
}
});
return dropped;
},
dragStart:function(draggable,event){
draggable.element.parentsUntil("body").on("scroll.droppable",function(){
if(!draggable.options.refreshPositions){
$.ui.ddmanager.prepareOffsets(draggable,event);
}
});
},
drag:function(draggable,event){
if(draggable.options.refreshPositions){
$.ui.ddmanager.prepareOffsets(draggable,event);
}
$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){
if(this.options.disabled||this.greedyChild||!this.visible){
return;
}
var parentInstance,scope,parent,
intersects=intersect(draggable,this,this.options.tolerance,event),
c=!intersects&&this.isover?
"isout":
(intersects&&!this.isover?"isover":null);
if(!c){
return;
}
if(this.options.greedy){
scope=this.options.scope;
parent=this.element.parents(":data(ui-droppable)").filter(function(){
return $(this).droppable("instance").options.scope===scope;
});
if(parent.length){
parentInstance=$(parent[0]).droppable("instance");
parentInstance.greedyChild=(c==="isover");
}
}
if(parentInstance&&c==="isover"){
parentInstance.isover=false;
parentInstance.isout=true;
parentInstance._out.call(parentInstance,event);
}
this[c]=true;
this[c==="isout"?"isover":"isout"]=false;
this[c==="isover"?"_over":"_out"].call(this,event);
if(parentInstance&&c==="isout"){
parentInstance.isout=false;
parentInstance.isover=true;
parentInstance._over.call(parentInstance,event);
}
});
},
dragStop:function(draggable,event){
draggable.element.parentsUntil("body").off("scroll.droppable");
if(!draggable.options.refreshPositions){
$.ui.ddmanager.prepareOffsets(draggable,event);
}
}
};
if($.uiBackCompat!==false){
$.widget("ui.droppable",$.ui.droppable,{
options:{
hoverClass:false,
activeClass:false
},
_addActiveClass:function(){
this._super();
if(this.options.activeClass){
this.element.addClass(this.options.activeClass);
}
},
_removeActiveClass:function(){
this._super();
if(this.options.activeClass){
this.element.removeClass(this.options.activeClass);
}
},
_addHoverClass:function(){
this._super();
if(this.options.hoverClass){
this.element.addClass(this.options.hoverClass);
}
},
_removeHoverClass:function(){
this._super();
if(this.options.hoverClass){
this.element.removeClass(this.options.hoverClass);
}
}
});
}
var widgetsDroppable=$.ui.droppable;
var widgetsProgressbar=$.widget("ui.progressbar",{
version:"1.12.1",
options:{
classes:{
"ui-progressbar":"ui-corner-all",
"ui-progressbar-value":"ui-corner-left",
"ui-progressbar-complete":"ui-corner-right"
},
max:100,
value:0,
change:null,
complete:null
},
min:0,
_create:function(){
this.oldValue=this.options.value=this._constrainedValue();
this.element.attr({
role:"progressbar",
"aria-valuemin":this.min
});
this._addClass("ui-progressbar","ui-widget ui-widget-content");
this.valueDiv=$("<div>").appendTo(this.element);
this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header");
this._refreshValue();
},
_destroy:function(){
this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
this.valueDiv.remove();
},
value:function(newValue){
if(newValue===undefined){
return this.options.value;
}
this.options.value=this._constrainedValue(newValue);
this._refreshValue();
},
_constrainedValue:function(newValue){
if(newValue===undefined){
newValue=this.options.value;
}
this.indeterminate=newValue===false;
if(typeof newValue!=="number"){
newValue=0;
}
return this.indeterminate?false:
Math.min(this.options.max,Math.max(this.min,newValue));
},
_setOptions:function(options){
var value=options.value;
delete options.value;
this._super(options);
this.options.value=this._constrainedValue(value);
this._refreshValue();
},
_setOption:function(key,value){
if(key==="max"){
value=Math.max(this.min,value);
}
this._super(key,value);
},
_setOptionDisabled:function(value){
this._super(value);
this.element.attr("aria-disabled",value);
this._toggleClass(null,"ui-state-disabled",!!value);
},
_percentage:function(){
return this.indeterminate?
100:
100*(this.options.value-this.min)/(this.options.max-this.min);
},
_refreshValue:function(){
var value=this.options.value,
percentage=this._percentage();
this.valueDiv
.toggle(this.indeterminate||value>this.min)
.width(percentage.toFixed(0)+"%");
this
._toggleClass(this.valueDiv,"ui-progressbar-complete",null,
value===this.options.max)
._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate);
if(this.indeterminate){
this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){
this.overlayDiv=$("<div>").appendTo(this.valueDiv);
this._addClass(this.overlayDiv,"ui-progressbar-overlay");
}
}else{
this.element.attr({
"aria-valuemax":this.options.max,
"aria-valuenow":value
});
if(this.overlayDiv){
this.overlayDiv.remove();
this.overlayDiv=null;
}
}
if(this.oldValue!==value){
this.oldValue=value;
this._trigger("change");
}
if(value===this.options.max){
this._trigger("complete");
}
}
});
var widgetsSelectable=$.widget("ui.selectable",$.ui.mouse,{
version:"1.12.1",
options:{
appendTo:"body",
autoRefresh:true,
distance:0,
filter:"*",
tolerance:"touch",
selected:null,
selecting:null,
start:null,
stop:null,
unselected:null,
unselecting:null
},
_create:function(){
var that=this;
this._addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){
that.elementPos=$(that.element[0]).offset();
that.selectees=$(that.options.filter,that.element[0]);
that._addClass(that.selectees,"ui-selectee");
that.selectees.each(function(){
var $this=$(this),
selecteeOffset=$this.offset(),
pos={
left:selecteeOffset.left-that.elementPos.left,
top:selecteeOffset.top-that.elementPos.top
};
$.data(this,"selectable-item",{
element:this,
$element:$this,
left:pos.left,
top:pos.top,
right:pos.left+$this.outerWidth(),
bottom:pos.top+$this.outerHeight(),
startselected:false,
selected:$this.hasClass("ui-selected"),
selecting:$this.hasClass("ui-selecting"),
unselecting:$this.hasClass("ui-unselecting")
});
});
};
this.refresh();
this._mouseInit();
this.helper=$("<div>");
this._addClass(this.helper,"ui-selectable-helper");
},
_destroy:function(){
this.selectees.removeData("selectable-item");
this._mouseDestroy();
},
_mouseStart:function(event){
var that=this,
options=this.options;
this.opos=[event.pageX,event.pageY];
this.elementPos=$(this.element[0]).offset();
if(this.options.disabled){
return;
}
this.selectees=$(options.filter,this.element[0]);
this._trigger("start",event);
$(options.appendTo).append(this.helper);
this.helper.css({
"left":event.pageX,
"top":event.pageY,
"width":0,
"height":0
});
if(options.autoRefresh){
this.refresh();
}
this.selectees.filter(".ui-selected").each(function(){
var selectee=$.data(this,"selectable-item");
selectee.startselected=true;
if(!event.metaKey&&!event.ctrlKey){
that._removeClass(selectee.$element,"ui-selected");
selectee.selected=false;
that._addClass(selectee.$element,"ui-unselecting");
selectee.unselecting=true;
that._trigger("unselecting",event,{
unselecting:selectee.element
});
}
});
$(event.target).parents().addBack().each(function(){
var doSelect,
selectee=$.data(this,"selectable-item");
if(selectee){
doSelect=(!event.metaKey&&!event.ctrlKey)||
!selectee.$element.hasClass("ui-selected");
that._removeClass(selectee.$element,doSelect?"ui-unselecting":"ui-selected")
._addClass(selectee.$element,doSelect?"ui-selecting":"ui-unselecting");
selectee.unselecting=!doSelect;
selectee.selecting=doSelect;
selectee.selected=doSelect;
if(doSelect){
that._trigger("selecting",event,{
selecting:selectee.element
});
}else{
that._trigger("unselecting",event,{
unselecting:selectee.element
});
}
return false;
}
});
},
_mouseDrag:function(event){
this.dragged=true;
if(this.options.disabled){
return;
}
var tmp,
that=this,
options=this.options,
x1=this.opos[0],
y1=this.opos[1],
x2=event.pageX,
y2=event.pageY;
if(x1>x2){tmp=x2;x2=x1;x1=tmp;}
if(y1>y2){tmp=y2;y2=y1;y1=tmp;}
this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});
this.selectees.each(function(){
var selectee=$.data(this,"selectable-item"),
hit=false,
offset={};
if(!selectee||selectee.element===that.element[0]){
return;
}
offset.left=selectee.left+that.elementPos.left;
offset.right=selectee.right+that.elementPos.left;
offset.top=selectee.top+that.elementPos.top;
offset.bottom=selectee.bottom+that.elementPos.top;
if(options.tolerance==="touch"){
hit=(!(offset.left>x2||offset.right<x1||offset.top>y2||
offset.bottom<y1));
}else if(options.tolerance==="fit"){
hit=(offset.left>x1&&offset.right<x2&&offset.top>y1&&
offset.bottom<y2);
}
if(hit){
if(selectee.selected){
that._removeClass(selectee.$element,"ui-selected");
selectee.selected=false;
}
if(selectee.unselecting){
that._removeClass(selectee.$element,"ui-unselecting");
selectee.unselecting=false;
}
if(!selectee.selecting){
that._addClass(selectee.$element,"ui-selecting");
selectee.selecting=true;
that._trigger("selecting",event,{
selecting:selectee.element
});
}
}else{
if(selectee.selecting){
if((event.metaKey||event.ctrlKey)&&selectee.startselected){
that._removeClass(selectee.$element,"ui-selecting");
selectee.selecting=false;
that._addClass(selectee.$element,"ui-selected");
selectee.selected=true;
}else{
that._removeClass(selectee.$element,"ui-selecting");
selectee.selecting=false;
if(selectee.startselected){
that._addClass(selectee.$element,"ui-unselecting");
selectee.unselecting=true;
}
that._trigger("unselecting",event,{
unselecting:selectee.element
});
}
}
if(selectee.selected){
if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){
that._removeClass(selectee.$element,"ui-selected");
selectee.selected=false;
that._addClass(selectee.$element,"ui-unselecting");
selectee.unselecting=true;
that._trigger("unselecting",event,{
unselecting:selectee.element
});
}
}
}
});
return false;
},
_mouseStop:function(event){
var that=this;
this.dragged=false;
$(".ui-unselecting",this.element[0]).each(function(){
var selectee=$.data(this,"selectable-item");
that._removeClass(selectee.$element,"ui-unselecting");
selectee.unselecting=false;
selectee.startselected=false;
that._trigger("unselected",event,{
unselected:selectee.element
});
});
$(".ui-selecting",this.element[0]).each(function(){
var selectee=$.data(this,"selectable-item");
that._removeClass(selectee.$element,"ui-selecting")
._addClass(selectee.$element,"ui-selected");
selectee.selecting=false;
selectee.selected=true;
selectee.startselected=true;
that._trigger("selected",event,{
selected:selectee.element
});
});
this._trigger("stop",event);
this.helper.remove();
return false;
}
});
var widgetsSelectmenu=$.widget("ui.selectmenu",[$.ui.formResetMixin,{
version:"1.12.1",
defaultElement:"<select>",
options:{
appendTo:null,
classes:{
"ui-selectmenu-button-open":"ui-corner-top",
"ui-selectmenu-button-closed":"ui-corner-all"
},
disabled:null,
icons:{
button:"ui-icon-triangle-1-s"
},
position:{
my:"left top",
at:"left bottom",
collision:"none"
},
width:false,
change:null,
close:null,
focus:null,
open:null,
select:null
},
_create:function(){
var selectmenuId=this.element.uniqueId().attr("id");
this.ids={
element:selectmenuId,
button:selectmenuId+"-button",
menu:selectmenuId+"-menu"
};
this._drawButton();
this._drawMenu();
this._bindFormResetHandler();
this._rendered=false;
this.menuItems=$();
},
_drawButton:function(){
var icon,
that=this,
item=this._parseOption(
this.element.find("option:selected"),
this.element[0].selectedIndex
);
this.labels=this.element.labels().attr("for",this.ids.button);
this._on(this.labels,{
click:function(event){
this.button.focus();
event.preventDefault();
}
});
this.element.hide();
this.button=$("<span>",{
tabindex:this.options.disabled?-1:0,
id:this.ids.button,
role:"combobox",
"aria-expanded":"false",
"aria-autocomplete":"list",
"aria-owns":this.ids.menu,
"aria-haspopup":"true",
title:this.element.attr("title")
})
.insertAfter(this.element);
this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed",
"ui-button ui-widget");
icon=$("<span>").appendTo(this.button);
this._addClass(icon,"ui-selectmenu-icon","ui-icon "+this.options.icons.button);
this.buttonItem=this._renderButtonItem(item)
.appendTo(this.button);
if(this.options.width!==false){
this._resizeButton();
}
this._on(this.button,this._buttonEvents);
this.button.one("focusin",function(){
if(!that._rendered){
that._refreshMenu();
}
});
},
_drawMenu:function(){
var that=this;
this.menu=$("<ul>",{
"aria-hidden":"true",
"aria-labelledby":this.ids.button,
id:this.ids.menu
});
this.menuWrap=$("<div>").append(this.menu);
this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front");
this.menuWrap.appendTo(this._appendTo());
this.menuInstance=this.menu
.menu({
classes:{
"ui-menu":"ui-corner-bottom"
},
role:"listbox",
select:function(event,ui){
event.preventDefault();
that._setSelection();
that._select(ui.item.data("ui-selectmenu-item"),event);
},
focus:function(event,ui){
var item=ui.item.data("ui-selectmenu-item");
if(that.focusIndex!=null&&item.index!==that.focusIndex){
that._trigger("focus",event,{item:item});
if(!that.isOpen){
that._select(item,event);
}
}
that.focusIndex=item.index;
that.button.attr("aria-activedescendant",
that.menuItems.eq(item.index).attr("id"));
}
})
.menu("instance");
this.menuInstance._off(this.menu,"mouseleave");
this.menuInstance._closeOnDocumentClick=function(){
return false;
};
this.menuInstance._isDivider=function(){
return false;
};
},
refresh:function(){
this._refreshMenu();
this.buttonItem.replaceWith(
this.buttonItem=this._renderButtonItem(
this._getSelectedItem().data("ui-selectmenu-item")||{}
)
);
if(this.options.width===null){
this._resizeButton();
}
},
_refreshMenu:function(){
var item,
options=this.element.find("option");
this.menu.empty();
this._parseOptions(options);
this._renderMenu(this.menu,this.items);
this.menuInstance.refresh();
this.menuItems=this.menu.find("li")
.not(".ui-selectmenu-optgroup")
.find(".ui-menu-item-wrapper");
this._rendered=true;
if(!options.length){
return;
}
item=this._getSelectedItem();
this.menuInstance.focus(null,item);
this._setAria(item.data("ui-selectmenu-item"));
this._setOption("disabled",this.element.prop("disabled"));
},
open:function(event){
if(this.options.disabled){
return;
}
if(!this._rendered){
this._refreshMenu();
}else{
this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active");
this.menuInstance.focus(null,this._getSelectedItem());
}
if(!this.menuItems.length){
return;
}
this.isOpen=true;
this._toggleAttr();
this._resizeMenu();
this._position();
this._on(this.document,this._documentClick);
this._trigger("open",event);
},
_position:function(){
this.menuWrap.position($.extend({of:this.button},this.options.position));
},
close:function(event){
if(!this.isOpen){
return;
}
this.isOpen=false;
this._toggleAttr();
this.range=null;
this._off(this.document);
this._trigger("close",event);
},
widget:function(){
return this.button;
},
menuWidget:function(){
return this.menu;
},
_renderButtonItem:function(item){
var buttonItem=$("<span>");
this._setText(buttonItem,item.label);
this._addClass(buttonItem,"ui-selectmenu-text");
return buttonItem;
},
_renderMenu:function(ul,items){
var that=this,
currentOptgroup="";
$.each(items,function(index,item){
var li;
if(item.optgroup!==currentOptgroup){
li=$("<li>",{
text:item.optgroup
});
that._addClass(li,"ui-selectmenu-optgroup","ui-menu-divider"+
(item.element.parent("optgroup").prop("disabled")?
" ui-state-disabled":
""));
li.appendTo(ul);
currentOptgroup=item.optgroup;
}
that._renderItemData(ul,item);
});
},
_renderItemData:function(ul,item){
return this._renderItem(ul,item).data("ui-selectmenu-item",item);
},
_renderItem:function(ul,item){
var li=$("<li>"),
wrapper=$("<div>",{
title:item.element.attr("title")
});
if(item.disabled){
this._addClass(li,null,"ui-state-disabled");
}
this._setText(wrapper,item.label);
return li.append(wrapper).appendTo(ul);
},
_setText:function(element,value){
if(value){
element.text(value);
}else{
element.html("&#160;");
}
},
_move:function(direction,event){
var item,next,
filter=".ui-menu-item";
if(this.isOpen){
item=this.menuItems.eq(this.focusIndex).parent("li");
}else{
item=this.menuItems.eq(this.element[0].selectedIndex).parent("li");
filter+=":not(.ui-state-disabled)";
}
if(direction==="first"||direction==="last"){
next=item[direction==="first"?"prevAll":"nextAll"](filter).eq(-1);
}else{
next=item[direction+"All"](filter).eq(0);
}
if(next.length){
this.menuInstance.focus(event,next);
}
},
_getSelectedItem:function(){
return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
},
_toggle:function(event){
this[this.isOpen?"close":"open"](event);
},
_setSelection:function(){
var selection;
if(!this.range){
return;
}
if(window.getSelection){
selection=window.getSelection();
selection.removeAllRanges();
selection.addRange(this.range);
}else{
this.range.select();
}
this.button.focus();
},
_documentClick:{
mousedown:function(event){
if(!this.isOpen){
return;
}
if(!$(event.target).closest(".ui-selectmenu-menu, #"+
$.ui.escapeSelector(this.ids.button)).length){
this.close(event);
}
}
},
_buttonEvents:{
mousedown:function(){
var selection;
if(window.getSelection){
selection=window.getSelection();
if(selection.rangeCount){
this.range=selection.getRangeAt(0);
}
}else{
this.range=document.selection.createRange();
}
},
click:function(event){
this._setSelection();
this._toggle(event);
},
keydown:function(event){
var preventDefault=true;
switch(event.keyCode){
case $.ui.keyCode.TAB:
case $.ui.keyCode.ESCAPE:
this.close(event);
preventDefault=false;
break;
case $.ui.keyCode.ENTER:
if(this.isOpen){
this._selectFocusedItem(event);
}
break;
case $.ui.keyCode.UP:
if(event.altKey){
this._toggle(event);
}else{
this._move("prev",event);
}
break;
case $.ui.keyCode.DOWN:
if(event.altKey){
this._toggle(event);
}else{
this._move("next",event);
}
break;
case $.ui.keyCode.SPACE:
if(this.isOpen){
this._selectFocusedItem(event);
}else{
this._toggle(event);
}
break;
case $.ui.keyCode.LEFT:
this._move("prev",event);
break;
case $.ui.keyCode.RIGHT:
this._move("next",event);
break;
case $.ui.keyCode.HOME:
case $.ui.keyCode.PAGE_UP:
this._move("first",event);
break;
case $.ui.keyCode.END:
case $.ui.keyCode.PAGE_DOWN:
this._move("last",event);
break;
default:
this.menu.trigger(event);
preventDefault=false;
}
if(preventDefault){
event.preventDefault();
}
}
},
_selectFocusedItem:function(event){
var item=this.menuItems.eq(this.focusIndex).parent("li");
if(!item.hasClass("ui-state-disabled")){
this._select(item.data("ui-selectmenu-item"),event);
}
},
_select:function(item,event){
var oldIndex=this.element[0].selectedIndex;
this.element[0].selectedIndex=item.index;
this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(item));
this._setAria(item);
this._trigger("select",event,{item:item});
if(item.index!==oldIndex){
this._trigger("change",event,{item:item});
}
this.close(event);
},
_setAria:function(item){
var id=this.menuItems.eq(item.index).attr("id");
this.button.attr({
"aria-labelledby":id,
"aria-activedescendant":id
});
this.menu.attr("aria-activedescendant",id);
},
_setOption:function(key,value){
if(key==="icons"){
var icon=this.button.find("span.ui-icon");
this._removeClass(icon,null,this.options.icons.button)
._addClass(icon,null,value.button);
}
this._super(key,value);
if(key==="appendTo"){
this.menuWrap.appendTo(this._appendTo());
}
if(key==="width"){
this._resizeButton();
}
},
_setOptionDisabled:function(value){
this._super(value);
this.menuInstance.option("disabled",value);
this.button.attr("aria-disabled",value);
this._toggleClass(this.button,null,"ui-state-disabled",value);
this.element.prop("disabled",value);
if(value){
this.button.attr("tabindex",-1);
this.close();
}else{
this.button.attr("tabindex",0);
}
},
_appendTo:function(){
var element=this.options.appendTo;
if(element){
element=element.jquery||element.nodeType?
$(element):
this.document.find(element).eq(0);
}
if(!element||!element[0]){
element=this.element.closest(".ui-front, dialog");
}
if(!element.length){
element=this.document[0].body;
}
return element;
},
_toggleAttr:function(){
this.button.attr("aria-expanded",this.isOpen);
this._removeClass(this.button,"ui-selectmenu-button-"+
(this.isOpen?"closed":"open"))
._addClass(this.button,"ui-selectmenu-button-"+
(this.isOpen?"open":"closed"))
._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen);
this.menu.attr("aria-hidden",!this.isOpen);
},
_resizeButton:function(){
var width=this.options.width;
if(width===false){
this.button.css("width","");
return;
}
if(width===null){
width=this.element.show().outerWidth();
this.element.hide();
}
this.button.outerWidth(width);
},
_resizeMenu:function(){
this.menu.outerWidth(Math.max(
this.button.outerWidth(),
this.menu.width("").outerWidth()+1
));
},
_getCreateOptions:function(){
var options=this._super();
options.disabled=this.element.prop("disabled");
return options;
},
_parseOptions:function(options){
var that=this,
data=[];
options.each(function(index,item){
data.push(that._parseOption($(item),index));
});
this.items=data;
},
_parseOption:function(option,index){
var optgroup=option.parent("optgroup");
return{
element:option,
index:index,
value:option.val(),
label:option.text(),
optgroup:optgroup.attr("label")||"",
disabled:optgroup.prop("disabled")||option.prop("disabled")
};
},
_destroy:function(){
this._unbindFormResetHandler();
this.menuWrap.remove();
this.button.remove();
this.element.show();
this.element.removeUniqueId();
this.labels.attr("for",this.ids.element);
}
}]);
var widgetsSlider=$.widget("ui.slider",$.ui.mouse,{
version:"1.12.1",
widgetEventPrefix:"slide",
options:{
animate:false,
classes:{
"ui-slider":"ui-corner-all",
"ui-slider-handle":"ui-corner-all",
"ui-slider-range":"ui-corner-all ui-widget-header"
},
distance:0,
max:100,
min:0,
orientation:"horizontal",
range:false,
step:1,
value:0,
values:null,
change:null,
slide:null,
start:null,
stop:null
},
numPages:5,
_create:function(){
this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this._calculateNewMax();
this._addClass("ui-slider ui-slider-"+this.orientation,
"ui-widget ui-widget-content");
this._refresh();
this._animateOff=false;
},
_refresh:function(){
this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue();
},
_createHandles:function(){
var i,handleCount,
options=this.options,
existingHandles=this.element.find(".ui-slider-handle"),
handle="<span tabindex='0'></span>",
handles=[];
handleCount=(options.values&&options.values.length)||1;
if(existingHandles.length>handleCount){
existingHandles.slice(handleCount).remove();
existingHandles=existingHandles.slice(0,handleCount);
}
for(i=existingHandles.length;i<handleCount;i++){
handles.push(handle);
}
this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));
this._addClass(this.handles,"ui-slider-handle","ui-state-default");
this.handle=this.handles.eq(0);
this.handles.each(function(i){
$(this)
.data("ui-slider-handle-index",i)
.attr("tabIndex",0);
});
},
_createRange:function(){
var options=this.options;
if(options.range){
if(options.range===true){
if(!options.values){
options.values=[this._valueMin(),this._valueMin()];
}else if(options.values.length&&options.values.length!==2){
options.values=[options.values[0],options.values[0]];
}else if($.isArray(options.values)){
options.values=options.values.slice(0);
}
}
if(!this.range||!this.range.length){
this.range=$("<div>")
.appendTo(this.element);
this._addClass(this.range,"ui-slider-range");
}else{
this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max");
this.range.css({
"left":"",
"bottom":""
});
}
if(options.range==="min"||options.range==="max"){
this._addClass(this.range,"ui-slider-range-"+options.range);
}
}else{
if(this.range){
this.range.remove();
}
this.range=null;
}
},
_setupEvents:function(){
this._off(this.handles);
this._on(this.handles,this._handleEvents);
this._hoverable(this.handles);
this._focusable(this.handles);
},
_destroy:function(){
this.handles.remove();
if(this.range){
this.range.remove();
}
this._mouseDestroy();
},
_mouseCapture:function(event){
var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,
that=this,
o=this.options;
if(o.disabled){
return false;
}
this.elementSize={
width:this.element.outerWidth(),
height:this.element.outerHeight()
};
this.elementOffset=this.element.offset();
position={x:event.pageX,y:event.pageY};
normValue=this._normValueFromMouse(position);
distance=this._valueMax()-this._valueMin()+1;
this.handles.each(function(i){
var thisDistance=Math.abs(normValue-that.values(i));
if((distance>thisDistance)||
(distance===thisDistance&&
(i===that._lastChangedValue||that.values(i)===o.min))){
distance=thisDistance;
closestHandle=$(this);
index=i;
}
});
allowed=this._start(event,index);
if(allowed===false){
return false;
}
this._mouseSliding=true;
this._handleIndex=index;
this._addClass(closestHandle,null,"ui-state-active");
closestHandle.trigger("focus");
offset=closestHandle.offset();
mouseOverHandle=!$(event.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=mouseOverHandle?{left:0,top:0}:{
left:event.pageX-offset.left-(closestHandle.width()/2),
top:event.pageY-offset.top-
(closestHandle.height()/2)-
(parseInt(closestHandle.css("borderTopWidth"),10)||0)-
(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+
(parseInt(closestHandle.css("marginTop"),10)||0)
};
if(!this.handles.hasClass("ui-state-hover")){
this._slide(event,index,normValue);
}
this._animateOff=true;
return true;
},
_mouseStart:function(){
return true;
},
_mouseDrag:function(event){
var position={x:event.pageX,y:event.pageY},
normValue=this._normValueFromMouse(position);
this._slide(event,this._handleIndex,normValue);
return false;
},
_mouseStop:function(event){
this._removeClass(this.handles,null,"ui-state-active");
this._mouseSliding=false;
this._stop(event,this._handleIndex);
this._change(event,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false;
},
_detectOrientation:function(){
this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal";
},
_normValueFromMouse:function(position){
var pixelTotal,
pixelMouse,
percentMouse,
valueTotal,
valueMouse;
if(this.orientation==="horizontal"){
pixelTotal=this.elementSize.width;
pixelMouse=position.x-this.elementOffset.left-
(this._clickOffset?this._clickOffset.left:0);
}else{
pixelTotal=this.elementSize.height;
pixelMouse=position.y-this.elementOffset.top-
(this._clickOffset?this._clickOffset.top:0);
}
percentMouse=(pixelMouse/pixelTotal);
if(percentMouse>1){
percentMouse=1;
}
if(percentMouse<0){
percentMouse=0;
}
if(this.orientation==="vertical"){
percentMouse=1-percentMouse;
}
valueTotal=this._valueMax()-this._valueMin();
valueMouse=this._valueMin()+percentMouse*valueTotal;
return this._trimAlignValue(valueMouse);
},
_uiHash:function(index,value,values){
var uiHash={
handle:this.handles[index],
handleIndex:index,
value:value!==undefined?value:this.value()
};
if(this._hasMultipleValues()){
uiHash.value=value!==undefined?value:this.values(index);
uiHash.values=values||this.values();
}
return uiHash;
},
_hasMultipleValues:function(){
return this.options.values&&this.options.values.length;
},
_start:function(event,index){
return this._trigger("start",event,this._uiHash(index));
},
_slide:function(event,index,newVal){
var allowed,otherVal,
currentValue=this.value(),
newValues=this.values();
if(this._hasMultipleValues()){
otherVal=this.values(index?0:1);
currentValue=this.values(index);
if(this.options.values.length===2&&this.options.range===true){
newVal=index===0?Math.min(otherVal,newVal):Math.max(otherVal,newVal);
}
newValues[index]=newVal;
}
if(newVal===currentValue){
return;
}
allowed=this._trigger("slide",event,this._uiHash(index,newVal,newValues));
if(allowed===false){
return;
}
if(this._hasMultipleValues()){
this.values(index,newVal);
}else{
this.value(newVal);
}
},
_stop:function(event,index){
this._trigger("stop",event,this._uiHash(index));
},
_change:function(event,index){
if(!this._keySliding&&!this._mouseSliding){
this._lastChangedValue=index;
this._trigger("change",event,this._uiHash(index));
}
},
value:function(newValue){
if(arguments.length){
this.options.value=this._trimAlignValue(newValue);
this._refreshValue();
this._change(null,0);
return;
}
return this._value();
},
values:function(index,newValue){
var vals,
newValues,
i;
if(arguments.length>1){
this.options.values[index]=this._trimAlignValue(newValue);
this._refreshValue();
this._change(null,index);
return;
}
if(arguments.length){
if($.isArray(arguments[0])){
vals=this.options.values;
newValues=arguments[0];
for(i=0;i<vals.length;i+=1){
vals[i]=this._trimAlignValue(newValues[i]);
this._change(null,i);
}
this._refreshValue();
}else{
if(this._hasMultipleValues()){
return this._values(index);
}else{
return this.value();
}
}
}else{
return this._values();
}
},
_setOption:function(key,value){
var i,
valsLength=0;
if(key==="range"&&this.options.range===true){
if(value==="min"){
this.options.value=this._values(0);
this.options.values=null;
}else if(value==="max"){
this.options.value=this._values(this.options.values.length-1);
this.options.values=null;
}
}
if($.isArray(this.options.values)){
valsLength=this.options.values.length;
}
this._super(key,value);
switch(key){
case"orientation":
this._detectOrientation();
this._removeClass("ui-slider-horizontal ui-slider-vertical")
._addClass("ui-slider-"+this.orientation);
this._refreshValue();
if(this.options.range){
this._refreshRange(value);
}
this.handles.css(value==="horizontal"?"bottom":"left","");
break;
case"value":
this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":
this._animateOff=true;
this._refreshValue();
for(i=valsLength-1;i>=0;i--){
this._change(null,i);
}
this._animateOff=false;
break;
case"step":
case"min":
case"max":
this._animateOff=true;
this._calculateNewMax();
this._refreshValue();
this._animateOff=false;
break;
case"range":
this._animateOff=true;
this._refresh();
this._animateOff=false;
break;
}
},
_setOptionDisabled:function(value){
this._super(value);
this._toggleClass(null,"ui-state-disabled",!!value);
},
_value:function(){
var val=this.options.value;
val=this._trimAlignValue(val);
return val;
},
_values:function(index){
var val,
vals,
i;
if(arguments.length){
val=this.options.values[index];
val=this._trimAlignValue(val);
return val;
}else if(this._hasMultipleValues()){
vals=this.options.values.slice();
for(i=0;i<vals.length;i+=1){
vals[i]=this._trimAlignValue(vals[i]);
}
return vals;
}else{
return[];
}
},
_trimAlignValue:function(val){
if(val<=this._valueMin()){
return this._valueMin();
}
if(val>=this._valueMax()){
return this._valueMax();
}
var step=(this.options.step>0)?this.options.step:1,
valModStep=(val-this._valueMin())%step,
alignValue=val-valModStep;
if(Math.abs(valModStep)*2>=step){
alignValue+=(valModStep>0)?step:(-step);
}
return parseFloat(alignValue.toFixed(5));
},
_calculateNewMax:function(){
var max=this.options.max,
min=this._valueMin(),
step=this.options.step,
aboveMin=Math.round((max-min)/step)*step;
max=aboveMin+min;
if(max>this.options.max){
max-=step;
}
this.max=parseFloat(max.toFixed(this._precision()));
},
_precision:function(){
var precision=this._precisionOf(this.options.step);
if(this.options.min!==null){
precision=Math.max(precision,this._precisionOf(this.options.min));
}
return precision;
},
_precisionOf:function(num){
var str=num.toString(),
decimal=str.indexOf(".");
return decimal===-1?0:str.length-decimal-1;
},
_valueMin:function(){
return this.options.min;
},
_valueMax:function(){
return this.max;
},
_refreshRange:function(orientation){
if(orientation==="vertical"){
this.range.css({"width":"","left":""});
}
if(orientation==="horizontal"){
this.range.css({"height":"","bottom":""});
}
},
_refreshValue:function(){
var lastValPercent,valPercent,value,valueMin,valueMax,
oRange=this.options.range,
o=this.options,
that=this,
animate=(!this._animateOff)?o.animate:false,
_set={};
if(this._hasMultipleValues()){
this.handles.each(function(i){
valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-
that._valueMin())*100;
_set[that.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";
$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);
if(that.options.range===true){
if(that.orientation==="horizontal"){
if(i===0){
that.range.stop(1,1)[animate?"animate":"css"]({
left:valPercent+"%"
},o.animate);
}
if(i===1){
that.range[animate?"animate":"css"]({
width:(valPercent-lastValPercent)+"%"
},{
queue:false,
duration:o.animate
});
}
}else{
if(i===0){
that.range.stop(1,1)[animate?"animate":"css"]({
bottom:(valPercent)+"%"
},o.animate);
}
if(i===1){
that.range[animate?"animate":"css"]({
height:(valPercent-lastValPercent)+"%"
},{
queue:false,
duration:o.animate
});
}
}
}
lastValPercent=valPercent;
});
}else{
value=this.value();
valueMin=this._valueMin();
valueMax=this._valueMax();
valPercent=(valueMax!==valueMin)?
(value-valueMin)/(valueMax-valueMin)*100:
0;
_set[this.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";
this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);
if(oRange==="min"&&this.orientation==="horizontal"){
this.range.stop(1,1)[animate?"animate":"css"]({
width:valPercent+"%"
},o.animate);
}
if(oRange==="max"&&this.orientation==="horizontal"){
this.range.stop(1,1)[animate?"animate":"css"]({
width:(100-valPercent)+"%"
},o.animate);
}
if(oRange==="min"&&this.orientation==="vertical"){
this.range.stop(1,1)[animate?"animate":"css"]({
height:valPercent+"%"
},o.animate);
}
if(oRange==="max"&&this.orientation==="vertical"){
this.range.stop(1,1)[animate?"animate":"css"]({
height:(100-valPercent)+"%"
},o.animate);
}
}
},
_handleEvents:{
keydown:function(event){
var allowed,curVal,newVal,step,
index=$(event.target).data("ui-slider-handle-index");
switch(event.keyCode){
case $.ui.keyCode.HOME:
case $.ui.keyCode.END:
case $.ui.keyCode.PAGE_UP:
case $.ui.keyCode.PAGE_DOWN:
case $.ui.keyCode.UP:
case $.ui.keyCode.RIGHT:
case $.ui.keyCode.DOWN:
case $.ui.keyCode.LEFT:
event.preventDefault();
if(!this._keySliding){
this._keySliding=true;
this._addClass($(event.target),null,"ui-state-active");
allowed=this._start(event,index);
if(allowed===false){
return;
}
}
break;
}
step=this.options.step;
if(this._hasMultipleValues()){
curVal=newVal=this.values(index);
}else{
curVal=newVal=this.value();
}
switch(event.keyCode){
case $.ui.keyCode.HOME:
newVal=this._valueMin();
break;
case $.ui.keyCode.END:
newVal=this._valueMax();
break;
case $.ui.keyCode.PAGE_UP:
newVal=this._trimAlignValue(
curVal+((this._valueMax()-this._valueMin())/this.numPages)
);
break;
case $.ui.keyCode.PAGE_DOWN:
newVal=this._trimAlignValue(
curVal-((this._valueMax()-this._valueMin())/this.numPages));
break;
case $.ui.keyCode.UP:
case $.ui.keyCode.RIGHT:
if(curVal===this._valueMax()){
return;
}
newVal=this._trimAlignValue(curVal+step);
break;
case $.ui.keyCode.DOWN:
case $.ui.keyCode.LEFT:
if(curVal===this._valueMin()){
return;
}
newVal=this._trimAlignValue(curVal-step);
break;
}
this._slide(event,index,newVal);
},
keyup:function(event){
var index=$(event.target).data("ui-slider-handle-index");
if(this._keySliding){
this._keySliding=false;
this._stop(event,index);
this._change(event,index);
this._removeClass($(event.target),null,"ui-state-active");
}
}
}
});
var widgetsSortable=$.widget("ui.sortable",$.ui.mouse,{
version:"1.12.1",
widgetEventPrefix:"sort",
ready:false,
options:{
appendTo:"parent",
axis:false,
connectWith:false,
containment:false,
cursor:"auto",
cursorAt:false,
dropOnEmpty:true,
forcePlaceholderSize:false,
forceHelperSize:false,
grid:false,
handle:false,
helper:"original",
items:"> *",
opacity:false,
placeholder:false,
revert:false,
scroll:true,
scrollSensitivity:20,
scrollSpeed:20,
scope:"default",
tolerance:"intersect",
zIndex:1000,
activate:null,
beforeStop:null,
change:null,
deactivate:null,
out:null,
over:null,
receive:null,
remove:null,
sort:null,
start:null,
stop:null,
update:null
},
_isOverAxis:function(x,reference,size){
return(x>=reference)&&(x<(reference+size));
},
_isFloating:function(item){
return(/left|right/).test(item.css("float"))||
(/inline|table-cell/).test(item.css("display"));
},
_create:function(){
this.containerCache={};
this._addClass("ui-sortable");
this.refresh();
this.offset=this.element.offset();
this._mouseInit();
this._setHandleClassName();
this.ready=true;
},
_setOption:function(key,value){
this._super(key,value);
if(key==="handle"){
this._setHandleClassName();
}
},
_setHandleClassName:function(){
var that=this;
this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle");
$.each(this.items,function(){
that._addClass(
this.instance.options.handle?
this.item.find(this.instance.options.handle):
this.item,
"ui-sortable-handle"
);
});
},
_destroy:function(){
this._mouseDestroy();
for(var i=this.items.length-1;i>=0;i--){
this.items[i].item.removeData(this.widgetName+"-item");
}
return this;
},
_mouseCapture:function(event,overrideHandle){
var currentItem=null,
validHandle=false,
that=this;
if(this.reverting){
return false;
}
if(this.options.disabled||this.options.type==="static"){
return false;
}
this._refreshItems(event);
$(event.target).parents().each(function(){
if($.data(this,that.widgetName+"-item")===that){
currentItem=$(this);
return false;
}
});
if($.data(event.target,that.widgetName+"-item")===that){
currentItem=$(event.target);
}
if(!currentItem){
return false;
}
if(this.options.handle&&!overrideHandle){
$(this.options.handle,currentItem).find("*").addBack().each(function(){
if(this===event.target){
validHandle=true;
}
});
if(!validHandle){
return false;
}
}
this.currentItem=currentItem;
this._removeCurrentsFromItems();
return true;
},
_mouseStart:function(event,overrideHandle,noActivation){
var i,body,
o=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(event);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={
top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left
};
$.extend(this.offset,{
click:{
left:event.pageX-this.offset.left,
top:event.pageY-this.offset.top
},
parent:this._getParentOffset(),
relative:this._getRelativeOffset()
});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(event);
this.originalPageX=event.pageX;
this.originalPageY=event.pageY;
(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));
this.domPosition={
prev:this.currentItem.prev()[0],
parent:this.currentItem.parent()[0]
};
if(this.helper[0]!==this.currentItem[0]){
this.currentItem.hide();
}
this._createPlaceholder();
if(o.containment){
this._setContainment();
}
if(o.cursor&&o.cursor!=="auto"){
body=this.document.find("body");
this.storedCursor=body.css("cursor");
body.css("cursor",o.cursor);
this.storedStylesheet=
$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body);
}
if(o.opacity){
if(this.helper.css("opacity")){
this._storedOpacity=this.helper.css("opacity");
}
this.helper.css("opacity",o.opacity);
}
if(o.zIndex){
if(this.helper.css("zIndex")){
this._storedZIndex=this.helper.css("zIndex");
}
this.helper.css("zIndex",o.zIndex);
}
if(this.scrollParent[0]!==this.document[0]&&
this.scrollParent[0].tagName!=="HTML"){
this.overflowOffset=this.scrollParent.offset();
}
this._trigger("start",event,this._uiHash());
if(!this._preserveHelperProportions){
this._cacheHelperProportions();
}
if(!noActivation){
for(i=this.containers.length-1;i>=0;i--){
this.containers[i]._trigger("activate",event,this._uiHash(this));
}
}
if($.ui.ddmanager){
$.ui.ddmanager.current=this;
}
if($.ui.ddmanager&&!o.dropBehaviour){
$.ui.ddmanager.prepareOffsets(this,event);
}
this.dragging=true;
this._addClass(this.helper,"ui-sortable-helper");
this._mouseDrag(event);
return true;
},
_mouseDrag:function(event){
var i,item,itemElement,intersection,
o=this.options,
scrolled=false;
this.position=this._generatePosition(event);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){
this.lastPositionAbs=this.positionAbs;
}
if(this.options.scroll){
if(this.scrollParent[0]!==this.document[0]&&
this.scrollParent[0].tagName!=="HTML"){
if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-
event.pageY<o.scrollSensitivity){
this.scrollParent[0].scrollTop=
scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;
}else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity){
this.scrollParent[0].scrollTop=
scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;
}
if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-
event.pageX<o.scrollSensitivity){
this.scrollParent[0].scrollLeft=scrolled=
this.scrollParent[0].scrollLeft+o.scrollSpeed;
}else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity){
this.scrollParent[0].scrollLeft=scrolled=
this.scrollParent[0].scrollLeft-o.scrollSpeed;
}
}else{
if(event.pageY-this.document.scrollTop()<o.scrollSensitivity){
scrolled=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed);
}else if(this.window.height()-(event.pageY-this.document.scrollTop())<
o.scrollSensitivity){
scrolled=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed);
}
if(event.pageX-this.document.scrollLeft()<o.scrollSensitivity){
scrolled=this.document.scrollLeft(
this.document.scrollLeft()-o.scrollSpeed
);
}else if(this.window.width()-(event.pageX-this.document.scrollLeft())<
o.scrollSensitivity){
scrolled=this.document.scrollLeft(
this.document.scrollLeft()+o.scrollSpeed
);
}
}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){
$.ui.ddmanager.prepareOffsets(this,event);
}
}
this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){
this.helper[0].style.left=this.position.left+"px";
}
if(!this.options.axis||this.options.axis!=="x"){
this.helper[0].style.top=this.position.top+"px";
}
for(i=this.items.length-1;i>=0;i--){
item=this.items[i];
itemElement=item.item[0];
intersection=this._intersectsWithPointer(item);
if(!intersection){
continue;
}
if(item.instance!==this.currentContainer){
continue;
}
if(itemElement!==this.currentItem[0]&&
this.placeholder[intersection===1?"next":"prev"]()[0]!==itemElement&&
!$.contains(this.placeholder[0],itemElement)&&
(this.options.type==="semi-dynamic"?
!$.contains(this.element[0],itemElement):
true
)
){
this.direction=intersection===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){
this._rearrange(event,item);
}else{
break;
}
this._trigger("change",event,this._uiHash());
break;
}
}
this._contactContainers(event);
if($.ui.ddmanager){
$.ui.ddmanager.drag(this,event);
}
this._trigger("sort",event,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false;
},
_mouseStop:function(event,noPropagation){
if(!event){
return;
}
if($.ui.ddmanager&&!this.options.dropBehaviour){
$.ui.ddmanager.drop(this,event);
}
if(this.options.revert){
var that=this,
cur=this.placeholder.offset(),
axis=this.options.axis,
animation={};
if(!axis||axis==="x"){
animation.left=cur.left-this.offset.parent.left-this.margins.left+
(this.offsetParent[0]===this.document[0].body?
0:
this.offsetParent[0].scrollLeft
);
}
if(!axis||axis==="y"){
animation.top=cur.top-this.offset.parent.top-this.margins.top+
(this.offsetParent[0]===this.document[0].body?
0:
this.offsetParent[0].scrollTop
);
}
this.reverting=true;
$(this.helper).animate(
animation,
parseInt(this.options.revert,10)||500,
function(){
that._clear(event);
}
);
}else{
this._clear(event,noPropagation);
}
return false;
},
cancel:function(){
if(this.dragging){
this._mouseUp(new $.Event("mouseup",{target:null}));
if(this.options.helper==="original"){
this.currentItem.css(this._storedCSS);
this._removeClass(this.currentItem,"ui-sortable-helper");
}else{
this.currentItem.show();
}
for(var i=this.containers.length-1;i>=0;i--){
this.containers[i]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[i].containerCache.over){
this.containers[i]._trigger("out",null,this._uiHash(this));
this.containers[i].containerCache.over=0;
}
}
}
if(this.placeholder){
if(this.placeholder[0].parentNode){
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
}
if(this.options.helper!=="original"&&this.helper&&
this.helper[0].parentNode){
this.helper.remove();
}
$.extend(this,{
helper:null,
dragging:false,
reverting:false,
_noFinalSort:null
});
if(this.domPosition.prev){
$(this.domPosition.prev).after(this.currentItem);
}else{
$(this.domPosition.parent).prepend(this.currentItem);
}
}
return this;
},
serialize:function(o){
var items=this._getItemsAsjQuery(o&&o.connected),
str=[];
o=o||{};
$(items).each(function(){
var res=($(o.item||this).attr(o.attribute||"id")||"")
.match(o.expression||(/(.+)[\-=_](.+)/));
if(res){
str.push(
(o.key||res[1]+"[]")+
"="+(o.key&&o.expression?res[1]:res[2]));
}
});
if(!str.length&&o.key){
str.push(o.key+"=");
}
return str.join("&");
},
toArray:function(o){
var items=this._getItemsAsjQuery(o&&o.connected),
ret=[];
o=o||{};
items.each(function(){
ret.push($(o.item||this).attr(o.attribute||"id")||"");
});
return ret;
},
_intersectsWith:function(item){
var x1=this.positionAbs.left,
x2=x1+this.helperProportions.width,
y1=this.positionAbs.top,
y2=y1+this.helperProportions.height,
l=item.left,
r=l+item.width,
t=item.top,
b=t+item.height,
dyClick=this.offset.click.top,
dxClick=this.offset.click.left,
isOverElementHeight=(this.options.axis==="x")||((y1+dyClick)>t&&
(y1+dyClick)<b),
isOverElementWidth=(this.options.axis==="y")||((x1+dxClick)>l&&
(x1+dxClick)<r),
isOverElement=isOverElementHeight&&isOverElementWidth;
if(this.options.tolerance==="pointer"||
this.options.forcePointerForContainers||
(this.options.tolerance!=="pointer"&&
this.helperProportions[this.floating?"width":"height"]>
item[this.floating?"width":"height"])
){
return isOverElement;
}else{
return(l<x1+(this.helperProportions.width/2)&&
x2-(this.helperProportions.width/2)<r&&
t<y1+(this.helperProportions.height/2)&&
y2-(this.helperProportions.height/2)<b);

}
},
_intersectsWithPointer:function(item){
var verticalDirection,horizontalDirection,
isOverElementHeight=(this.options.axis==="x")||
this._isOverAxis(
this.positionAbs.top+this.offset.click.top,item.top,item.height),
isOverElementWidth=(this.options.axis==="y")||
this._isOverAxis(
this.positionAbs.left+this.offset.click.left,item.left,item.width),
isOverElement=isOverElementHeight&&isOverElementWidth;
if(!isOverElement){
return false;
}
verticalDirection=this._getDragVerticalDirection();
horizontalDirection=this._getDragHorizontalDirection();
return this.floating?
((horizontalDirection==="right"||verticalDirection==="down")?2:1)
:(verticalDirection&&(verticalDirection==="down"?2:1));
},
_intersectsWithSides:function(item){
var isOverBottomHalf=this._isOverAxis(this.positionAbs.top+
this.offset.click.top,item.top+(item.height/2),item.height),
isOverRightHalf=this._isOverAxis(this.positionAbs.left+
this.offset.click.left,item.left+(item.width/2),item.width),
verticalDirection=this._getDragVerticalDirection(),
horizontalDirection=this._getDragHorizontalDirection();
if(this.floating&&horizontalDirection){
return((horizontalDirection==="right"&&isOverRightHalf)||
(horizontalDirection==="left"&&!isOverRightHalf));
}else{
return verticalDirection&&((verticalDirection==="down"&&isOverBottomHalf)||
(verticalDirection==="up"&&!isOverBottomHalf));
}
},
_getDragVerticalDirection:function(){
var delta=this.positionAbs.top-this.lastPositionAbs.top;
return delta!==0&&(delta>0?"down":"up");
},
_getDragHorizontalDirection:function(){
var delta=this.positionAbs.left-this.lastPositionAbs.left;
return delta!==0&&(delta>0?"right":"left");
},
refresh:function(event){
this._refreshItems(event);
this._setHandleClassName();
this.refreshPositions();
return this;
},
_connectWith:function(){
var options=this.options;
return options.connectWith.constructor===String?
[options.connectWith]:
options.connectWith;
},
_getItemsAsjQuery:function(connected){
var i,j,cur,inst,
items=[],
queries=[],
connectWith=this._connectWith();
if(connectWith&&connected){
for(i=connectWith.length-1;i>=0;i--){
cur=$(connectWith[i],this.document[0]);
for(j=cur.length-1;j>=0;j--){
inst=$.data(cur[j],this.widgetFullName);
if(inst&&inst!==this&&!inst.options.disabled){
queries.push([$.isFunction(inst.options.items)?
inst.options.items.call(inst.element):
$(inst.options.items,inst.element)
.not(".ui-sortable-helper")
.not(".ui-sortable-placeholder"),inst]);
}
}
}
}
queries.push([$.isFunction(this.options.items)?
this.options.items
.call(this.element,null,{options:this.options,item:this.currentItem}):
$(this.options.items,this.element)
.not(".ui-sortable-helper")
.not(".ui-sortable-placeholder"),this]);
function addItems(){
items.push(this);
}
for(i=queries.length-1;i>=0;i--){
queries[i][0].each(addItems);
}
return $(items);
},
_removeCurrentsFromItems:function(){
var list=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=$.grep(this.items,function(item){
for(var j=0;j<list.length;j++){
if(list[j]===item.item[0]){
return false;
}
}
return true;
});
},
_refreshItems:function(event){
this.items=[];
this.containers=[this];
var i,j,cur,inst,targetData,_queries,item,queriesLength,
items=this.items,
queries=[[$.isFunction(this.options.items)?
this.options.items.call(this.element[0],event,{item:this.currentItem}):
$(this.options.items,this.element),this]],
connectWith=this._connectWith();
if(connectWith&&this.ready){
for(i=connectWith.length-1;i>=0;i--){
cur=$(connectWith[i],this.document[0]);
for(j=cur.length-1;j>=0;j--){
inst=$.data(cur[j],this.widgetFullName);
if(inst&&inst!==this&&!inst.options.disabled){
queries.push([$.isFunction(inst.options.items)?
inst.options.items
.call(inst.element[0],event,{item:this.currentItem}):
$(inst.options.items,inst.element),inst]);
this.containers.push(inst);
}
}
}
}
for(i=queries.length-1;i>=0;i--){
targetData=queries[i][1];
_queries=queries[i][0];
for(j=0,queriesLength=_queries.length;j<queriesLength;j++){
item=$(_queries[j]);
item.data(this.widgetName+"-item",targetData);
items.push({
item:item,
instance:targetData,
width:0,height:0,
left:0,top:0
});
}
}
},
refreshPositions:function(fast){
this.floating=this.items.length?
this.options.axis==="x"||this._isFloating(this.items[0].item):
false;
if(this.offsetParent&&this.helper){
this.offset.parent=this._getParentOffset();
}
var i,item,t,p;
for(i=this.items.length-1;i>=0;i--){
item=this.items[i];
if(item.instance!==this.currentContainer&&this.currentContainer&&
item.item[0]!==this.currentItem[0]){
continue;
}
t=this.options.toleranceElement?
$(this.options.toleranceElement,item.item):
item.item;
if(!fast){
item.width=t.outerWidth();
item.height=t.outerHeight();
}
p=t.offset();
item.left=p.left;
item.top=p.top;
}
if(this.options.custom&&this.options.custom.refreshContainers){
this.options.custom.refreshContainers.call(this);
}else{
for(i=this.containers.length-1;i>=0;i--){
p=this.containers[i].element.offset();
this.containers[i].containerCache.left=p.left;
this.containers[i].containerCache.top=p.top;
this.containers[i].containerCache.width=
this.containers[i].element.outerWidth();
this.containers[i].containerCache.height=
this.containers[i].element.outerHeight();
}
}
return this;
},
_createPlaceholder:function(that){
that=that||this;
var className,
o=that.options;
if(!o.placeholder||o.placeholder.constructor===String){
className=o.placeholder;
o.placeholder={
element:function(){
var nodeName=that.currentItem[0].nodeName.toLowerCase(),
element=$("<"+nodeName+">",that.document[0]);
that._addClass(element,"ui-sortable-placeholder",
className||that.currentItem[0].className)
._removeClass(element,"ui-sortable-helper");
if(nodeName==="tbody"){
that._createTrPlaceholder(
that.currentItem.find("tr").eq(0),
$("<tr>",that.document[0]).appendTo(element)
);
}else if(nodeName==="tr"){
that._createTrPlaceholder(that.currentItem,element);
}else if(nodeName==="img"){
element.attr("src",that.currentItem.attr("src"));
}
if(!className){
element.css("visibility","hidden");
}
return element;
},
update:function(container,p){
if(className&&!o.forcePlaceholderSize){
return;
}
if(!p.height()){
p.height(
that.currentItem.innerHeight()-
parseInt(that.currentItem.css("paddingTop")||0,10)-
parseInt(that.currentItem.css("paddingBottom")||0,10));
}
if(!p.width()){
p.width(
that.currentItem.innerWidth()-
parseInt(that.currentItem.css("paddingLeft")||0,10)-
parseInt(that.currentItem.css("paddingRight")||0,10));
}
}
};
}
that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));
that.currentItem.after(that.placeholder);
o.placeholder.update(that,that.placeholder);
},
_createTrPlaceholder:function(sourceTr,targetTr){
var that=this;
sourceTr.children().each(function(){
$("<td>&#160;</td>",that.document[0])
.attr("colspan",$(this).attr("colspan")||1)
.appendTo(targetTr);
});
},
_contactContainers:function(event){
var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,cur,nearBottom,
floating,axis,
innermostContainer=null,
innermostIndex=null;
for(i=this.containers.length-1;i>=0;i--){
if($.contains(this.currentItem[0],this.containers[i].element[0])){
continue;
}
if(this._intersectsWith(this.containers[i].containerCache)){
if(innermostContainer&&
$.contains(
this.containers[i].element[0],
innermostContainer.element[0])){
continue;
}
innermostContainer=this.containers[i];
innermostIndex=i;
}else{
if(this.containers[i].containerCache.over){
this.containers[i]._trigger("out",event,this._uiHash(this));
this.containers[i].containerCache.over=0;
}
}
}
if(!innermostContainer){
return;
}
if(this.containers.length===1){
if(!this.containers[innermostIndex].containerCache.over){
this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));
this.containers[innermostIndex].containerCache.over=1;
}
}else{
dist=10000;
itemWithLeastDistance=null;
floating=innermostContainer.floating||this._isFloating(this.currentItem);
posProperty=floating?"left":"top";
sizeProperty=floating?"width":"height";
axis=floating?"pageX":"pageY";
for(j=this.items.length-1;j>=0;j--){
if(!$.contains(
this.containers[innermostIndex].element[0],this.items[j].item[0])
){
continue;
}
if(this.items[j].item[0]===this.currentItem[0]){
continue;
}
cur=this.items[j].item.offset()[posProperty];
nearBottom=false;
if(event[axis]-cur>this.items[j][sizeProperty]/2){
nearBottom=true;
}
if(Math.abs(event[axis]-cur)<dist){
dist=Math.abs(event[axis]-cur);
itemWithLeastDistance=this.items[j];
this.direction=nearBottom?"up":"down";
}
}
if(!itemWithLeastDistance&&!this.options.dropOnEmpty){
return;
}
if(this.currentContainer===this.containers[innermostIndex]){
if(!this.currentContainer.containerCache.over){
this.containers[innermostIndex]._trigger("over",event,this._uiHash());
this.currentContainer.containerCache.over=1;
}
return;
}
itemWithLeastDistance?
this._rearrange(event,itemWithLeastDistance,null,true):
this._rearrange(event,null,this.containers[innermostIndex].element,true);
this._trigger("change",event,this._uiHash());
this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));
this.currentContainer=this.containers[innermostIndex];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));
this.containers[innermostIndex].containerCache.over=1;
}
},
_createHelper:function(event){
var o=this.options,
helper=$.isFunction(o.helper)?
$(o.helper.apply(this.element[0],[event,this.currentItem])):
(o.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!helper.parents("body").length){
$(o.appendTo!=="parent"?
o.appendTo:
this.currentItem[0].parentNode)[0].appendChild(helper[0]);
}
if(helper[0]===this.currentItem[0]){
this._storedCSS={
width:this.currentItem[0].style.width,
height:this.currentItem[0].style.height,
position:this.currentItem.css("position"),
top:this.currentItem.css("top"),
left:this.currentItem.css("left")
};
}
if(!helper[0].style.width||o.forceHelperSize){
helper.width(this.currentItem.width());
}
if(!helper[0].style.height||o.forceHelperSize){
helper.height(this.currentItem.height());
}
return helper;
},
_adjustOffsetFromHelper:function(obj){
if(typeof obj==="string"){
obj=obj.split(" ");
}
if($.isArray(obj)){
obj={left:+obj[0],top:+obj[1]||0};
}
if("left"in obj){
this.offset.click.left=obj.left+this.margins.left;
}
if("right"in obj){
this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;
}
if("top"in obj){
this.offset.click.top=obj.top+this.margins.top;
}
if("bottom"in obj){
this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;
}
},
_getParentOffset:function(){
this.offsetParent=this.helper.offsetParent();
var po=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==this.document[0]&&
$.contains(this.scrollParent[0],this.offsetParent[0])){
po.left+=this.scrollParent.scrollLeft();
po.top+=this.scrollParent.scrollTop();
}
if(this.offsetParent[0]===this.document[0].body||
(this.offsetParent[0].tagName&&
this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie)){
po={top:0,left:0};
}
return{
top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
};
},
_getRelativeOffset:function(){
if(this.cssPosition==="relative"){
var p=this.currentItem.position();
return{
top:p.top-(parseInt(this.helper.css("top"),10)||0)+
this.scrollParent.scrollTop(),
left:p.left-(parseInt(this.helper.css("left"),10)||0)+
this.scrollParent.scrollLeft()
};
}else{
return{top:0,left:0};
}
},
_cacheMargins:function(){
this.margins={
left:(parseInt(this.currentItem.css("marginLeft"),10)||0),
top:(parseInt(this.currentItem.css("marginTop"),10)||0)
};
},
_cacheHelperProportions:function(){
this.helperProportions={
width:this.helper.outerWidth(),
height:this.helper.outerHeight()
};
},
_setContainment:function(){
var ce,co,over,
o=this.options;
if(o.containment==="parent"){
o.containment=this.helper[0].parentNode;
}
if(o.containment==="document"||o.containment==="window"){
this.containment=[
0-this.offset.relative.left-this.offset.parent.left,
0-this.offset.relative.top-this.offset.parent.top,
o.containment==="document"?
this.document.width():
this.window.width()-this.helperProportions.width-this.margins.left,
(o.containment==="document"?
(this.document.height()||document.body.parentNode.scrollHeight):
this.window.height()||this.document[0].body.parentNode.scrollHeight
)-this.helperProportions.height-this.margins.top
];
}
if(!(/^(document|window|parent)$/).test(o.containment)){
ce=$(o.containment)[0];
co=$(o.containment).offset();
over=($(ce).css("overflow")!=="hidden");
this.containment=[
co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+
(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,
co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+
(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,
co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-
(parseInt($(ce).css("borderLeftWidth"),10)||0)-
(parseInt($(ce).css("paddingRight"),10)||0)-
this.helperProportions.width-this.margins.left,
co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-
(parseInt($(ce).css("borderTopWidth"),10)||0)-
(parseInt($(ce).css("paddingBottom"),10)||0)-
this.helperProportions.height-this.margins.top
];
}
},
_convertPositionTo:function(d,pos){
if(!pos){
pos=this.position;
}
var mod=d==="absolute"?1:-1,
scroll=this.cssPosition==="absolute"&&
!(this.scrollParent[0]!==this.document[0]&&
$.contains(this.scrollParent[0],this.offsetParent[0]))?
this.offsetParent:
this.scrollParent,
scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);
return{
top:(
pos.top+
this.offset.relative.top*mod+
this.offset.parent.top*mod-
((this.cssPosition==="fixed"?
-this.scrollParent.scrollTop():
(scrollIsRootNode?0:scroll.scrollTop()))*mod)
),
left:(
pos.left+
this.offset.relative.left*mod+
this.offset.parent.left*mod-
((this.cssPosition==="fixed"?
-this.scrollParent.scrollLeft():scrollIsRootNode?0:
scroll.scrollLeft())*mod)
)
};
},
_generatePosition:function(event){
var top,left,
o=this.options,
pageX=event.pageX,
pageY=event.pageY,
scroll=this.cssPosition==="absolute"&&
!(this.scrollParent[0]!==this.document[0]&&
$.contains(this.scrollParent[0],this.offsetParent[0]))?
this.offsetParent:
this.scrollParent,
scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==this.document[0]&&
this.scrollParent[0]!==this.offsetParent[0])){
this.offset.relative=this._getRelativeOffset();
}
if(this.originalPosition){
if(this.containment){
if(event.pageX-this.offset.click.left<this.containment[0]){
pageX=this.containment[0]+this.offset.click.left;
}
if(event.pageY-this.offset.click.top<this.containment[1]){
pageY=this.containment[1]+this.offset.click.top;
}
if(event.pageX-this.offset.click.left>this.containment[2]){
pageX=this.containment[2]+this.offset.click.left;
}
if(event.pageY-this.offset.click.top>this.containment[3]){
pageY=this.containment[3]+this.offset.click.top;
}
}
if(o.grid){
top=this.originalPageY+Math.round((pageY-this.originalPageY)/
o.grid[1])*o.grid[1];
pageY=this.containment?
((top-this.offset.click.top>=this.containment[1]&&
top-this.offset.click.top<=this.containment[3])?
top:
((top-this.offset.click.top>=this.containment[1])?
top-o.grid[1]:top+o.grid[1])):
top;
left=this.originalPageX+Math.round((pageX-this.originalPageX)/
o.grid[0])*o.grid[0];
pageX=this.containment?
((left-this.offset.click.left>=this.containment[0]&&
left-this.offset.click.left<=this.containment[2])?
left:
((left-this.offset.click.left>=this.containment[0])?
left-o.grid[0]:left+o.grid[0])):
left;
}
}
return{
top:(
pageY-
this.offset.click.top-
this.offset.relative.top-
this.offset.parent.top+
((this.cssPosition==="fixed"?
-this.scrollParent.scrollTop():
(scrollIsRootNode?0:scroll.scrollTop())))
),
left:(
pageX-
this.offset.click.left-
this.offset.relative.left-
this.offset.parent.left+
((this.cssPosition==="fixed"?
-this.scrollParent.scrollLeft():
scrollIsRootNode?0:scroll.scrollLeft()))
)
};
},
_rearrange:function(event,i,a,hardRefresh){
a?a[0].appendChild(this.placeholder[0]):
i.item[0].parentNode.insertBefore(this.placeholder[0],
(this.direction==="down"?i.item[0]:i.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var counter=this.counter;
this._delay(function(){
if(counter===this.counter){
this.refreshPositions(!hardRefresh);
}
});
},
_clear:function(event,noPropagation){
this.reverting=false;
var i,
delayedTriggers=[];
if(!this._noFinalSort&&this.currentItem.parent().length){
this.placeholder.before(this.currentItem);
}
this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){
for(i in this._storedCSS){
if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){
this._storedCSS[i]="";
}
}
this.currentItem.css(this._storedCSS);
this._removeClass(this.currentItem,"ui-sortable-helper");
}else{
this.currentItem.show();
}
if(this.fromOutside&&!noPropagation){
delayedTriggers.push(function(event){
this._trigger("receive",event,this._uiHash(this.fromOutside));
});
}
if((this.fromOutside||
this.domPosition.prev!==
this.currentItem.prev().not(".ui-sortable-helper")[0]||
this.domPosition.parent!==this.currentItem.parent()[0])&&!noPropagation){
delayedTriggers.push(function(event){
this._trigger("update",event,this._uiHash());
});
}
if(this!==this.currentContainer){
if(!noPropagation){
delayedTriggers.push(function(event){
this._trigger("remove",event,this._uiHash());
});
delayedTriggers.push((function(c){
return function(event){
c._trigger("receive",event,this._uiHash(this));
};
}).call(this,this.currentContainer));
delayedTriggers.push((function(c){
return function(event){
c._trigger("update",event,this._uiHash(this));
};
}).call(this,this.currentContainer));
}
}
function delayEvent(type,instance,container){
return function(event){
container._trigger(type,event,instance._uiHash(instance));
};
}
for(i=this.containers.length-1;i>=0;i--){
if(!noPropagation){
delayedTriggers.push(delayEvent("deactivate",this,this.containers[i]));
}
if(this.containers[i].containerCache.over){
delayedTriggers.push(delayEvent("out",this,this.containers[i]));
this.containers[i].containerCache.over=0;
}
}
if(this.storedCursor){
this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove();
}
if(this._storedOpacity){
this.helper.css("opacity",this._storedOpacity);
}
if(this._storedZIndex){
this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex);
}
this.dragging=false;
if(!noPropagation){
this._trigger("beforeStop",event,this._uiHash());
}
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(!this.cancelHelperRemoval){
if(this.helper[0]!==this.currentItem[0]){
this.helper.remove();
}
this.helper=null;
}
if(!noPropagation){
for(i=0;i<delayedTriggers.length;i++){
delayedTriggers[i].call(this,event);
}
this._trigger("stop",event,this._uiHash());
}
this.fromOutside=false;
return!this.cancelHelperRemoval;
},
_trigger:function(){
if($.Widget.prototype._trigger.apply(this,arguments)===false){
this.cancel();
}
},
_uiHash:function(_inst){
var inst=_inst||this;
return{
helper:inst.helper,
placeholder:inst.placeholder||$([]),
position:inst.position,
originalPosition:inst.originalPosition,
offset:inst.positionAbs,
item:inst.currentItem,
sender:_inst?_inst.element:null
};
}
});
function spinnerModifer(fn){
return function(){
var previous=this.element.val();
fn.apply(this,arguments);
this._refresh();
if(previous!==this.element.val()){
this._trigger("change");
}
};
}
$.widget("ui.spinner",{
version:"1.12.1",
defaultElement:"<input>",
widgetEventPrefix:"spin",
options:{
classes:{
"ui-spinner":"ui-corner-all",
"ui-spinner-down":"ui-corner-br",
"ui-spinner-up":"ui-corner-tr"
},
culture:null,
icons:{
down:"ui-icon-triangle-1-s",
up:"ui-icon-triangle-1-n"
},
incremental:true,
max:null,
min:null,
numberFormat:null,
page:10,
step:1,
change:null,
spin:null,
start:null,
stop:null
},
_create:function(){
this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
if(this.value()!==""){
this._value(this.element.val(),true);
}
this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{
beforeunload:function(){
this.element.removeAttr("autocomplete");
}
});
},
_getCreateOptions:function(){
var options=this._super();
var element=this.element;
$.each(["min","max","step"],function(i,option){
var value=element.attr(option);
if(value!=null&&value.length){
options[option]=value;
}
});
return options;
},
_events:{
keydown:function(event){
if(this._start(event)&&this._keydown(event)){
event.preventDefault();
}
},
keyup:"_stop",
focus:function(){
this.previous=this.element.val();
},
blur:function(event){
if(this.cancelBlur){
delete this.cancelBlur;
return;
}
this._stop();
this._refresh();
if(this.previous!==this.element.val()){
this._trigger("change",event);
}
},
mousewheel:function(event,delta){
if(!delta){
return;
}
if(!this.spinning&&!this._start(event)){
return false;
}
this._spin((delta>0?1:-1)*this.options.step,event);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){
if(this.spinning){
this._stop(event);
}
},100);
event.preventDefault();
},
"mousedown .ui-spinner-button":function(event){
var previous;
previous=this.element[0]===$.ui.safeActiveElement(this.document[0])?
this.previous:this.element.val();
function checkFocus(){
var isActive=this.element[0]===$.ui.safeActiveElement(this.document[0]);
if(!isActive){
this.element.trigger("focus");
this.previous=previous;
this._delay(function(){
this.previous=previous;
});
}
}
event.preventDefault();
checkFocus.call(this);
this.cancelBlur=true;
this._delay(function(){
delete this.cancelBlur;
checkFocus.call(this);
});
if(this._start(event)===false){
return;
}
this._repeat(null,$(event.currentTarget)
.hasClass("ui-spinner-up")?1:-1,event);
},
"mouseup .ui-spinner-button":"_stop",
"mouseenter .ui-spinner-button":function(event){
if(!$(event.currentTarget).hasClass("ui-state-active")){
return;
}
if(this._start(event)===false){
return false;
}
this._repeat(null,$(event.currentTarget)
.hasClass("ui-spinner-up")?1:-1,event);
},
"mouseleave .ui-spinner-button":"_stop"
},
_enhance:function(){
this.uiSpinner=this.element
.attr("autocomplete","off")
.wrap("<span>")
.parent()
.append(
"<a></a><a></a>"
);
},
_draw:function(){
this._enhance();
this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content");
this._addClass("ui-spinner-input");
this.element.attr("role","spinbutton");
this.buttons=this.uiSpinner.children("a")
.attr("tabIndex",-1)
.attr("aria-hidden",true)
.button({
classes:{
"ui-button":""
}
});
this._removeClass(this.buttons,"ui-corner-all");
this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up");
this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down");
this.buttons.first().button({
"icon":this.options.icons.up,
"showLabel":false
});
this.buttons.last().button({
"icon":this.options.icons.down,
"showLabel":false
});
if(this.buttons.height()>Math.ceil(this.uiSpinner.height()*0.5)&&
this.uiSpinner.height()>0){
this.uiSpinner.height(this.uiSpinner.height());
}
},
_keydown:function(event){
var options=this.options,
keyCode=$.ui.keyCode;
switch(event.keyCode){
case keyCode.UP:
this._repeat(null,1,event);
return true;
case keyCode.DOWN:
this._repeat(null,-1,event);
return true;
case keyCode.PAGE_UP:
this._repeat(null,options.page,event);
return true;
case keyCode.PAGE_DOWN:
this._repeat(null,-options.page,event);
return true;
}
return false;
},
_start:function(event){
if(!this.spinning&&this._trigger("start",event)===false){
return false;
}
if(!this.counter){
this.counter=1;
}
this.spinning=true;
return true;
},
_repeat:function(i,steps,event){
i=i||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){
this._repeat(40,steps,event);
},i);
this._spin(steps*this.options.step,event);
},
_spin:function(step,event){
var value=this.value()||0;
if(!this.counter){
this.counter=1;
}
value=this._adjustValue(value+step*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",event,{value:value})!==false){
this._value(value);
this.counter++;
}
},
_increment:function(i){
var incremental=this.options.incremental;
if(incremental){
return $.isFunction(incremental)?
incremental(i):
Math.floor(i*i*i/50000-i*i/ 500 + 17 * i /200+1);
}
return 1;
},
_precision:function(){
var precision=this._precisionOf(this.options.step);
if(this.options.min!==null){
precision=Math.max(precision,this._precisionOf(this.options.min));
}
return precision;
},
_precisionOf:function(num){
var str=num.toString(),
decimal=str.indexOf(".");
return decimal===-1?0:str.length-decimal-1;
},
_adjustValue:function(value){
var base,aboveMin,
options=this.options;
base=options.min!==null?options.min:0;
aboveMin=value-base;
aboveMin=Math.round(aboveMin/options.step)*options.step;
value=base+aboveMin;
value=parseFloat(value.toFixed(this._precision()));
if(options.max!==null&&value>options.max){
return options.max;
}
if(options.min!==null&&value<options.min){
return options.min;
}
return value;
},
_stop:function(event){
if(!this.spinning){
return;
}
clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",event);
},
_setOption:function(key,value){
var prevValue,first,last;
if(key==="culture"||key==="numberFormat"){
prevValue=this._parse(this.element.val());
this.options[key]=value;
this.element.val(this._format(prevValue));
return;
}
if(key==="max"||key==="min"||key==="step"){
if(typeof value==="string"){
value=this._parse(value);
}
}
if(key==="icons"){
first=this.buttons.first().find(".ui-icon");
this._removeClass(first,null,this.options.icons.up);
this._addClass(first,null,value.up);
last=this.buttons.last().find(".ui-icon");
this._removeClass(last,null,this.options.icons.down);
this._addClass(last,null,value.down);
}
this._super(key,value);
},
_setOptionDisabled:function(value){
this._super(value);
this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!value);
this.element.prop("disabled",!!value);
this.buttons.button(value?"disable":"enable");
},
_setOptions:spinnerModifer(function(options){
this._super(options);
}),
_parse:function(val){
if(typeof val==="string"&&val!==""){
val=window.Globalize&&this.options.numberFormat?
Globalize.parseFloat(val,10,this.options.culture):+val;
}
return val===""||isNaN(val)?null:val;
},
_format:function(value){
if(value===""){
return"";
}
return window.Globalize&&this.options.numberFormat?
Globalize.format(value,this.options.numberFormat,this.options.culture):
value;
},
_refresh:function(){
this.element.attr({
"aria-valuemin":this.options.min,
"aria-valuemax":this.options.max,
"aria-valuenow":this._parse(this.element.val())
});
},
isValid:function(){
var value=this.value();
if(value===null){
return false;
}
return value===this._adjustValue(value);
},
_value:function(value,allowAny){
var parsed;
if(value!==""){
parsed=this._parse(value);
if(parsed!==null){
if(!allowAny){
parsed=this._adjustValue(parsed);
}
value=this._format(parsed);
}
}
this.element.val(value);
this._refresh();
},
_destroy:function(){
this.element
.prop("disabled",false)
.removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
this.uiSpinner.replaceWith(this.element);
},
stepUp:spinnerModifer(function(steps){
this._stepUp(steps);
}),
_stepUp:function(steps){
if(this._start()){
this._spin((steps||1)*this.options.step);
this._stop();
}
},
stepDown:spinnerModifer(function(steps){
this._stepDown(steps);
}),
_stepDown:function(steps){
if(this._start()){
this._spin((steps||1)*-this.options.step);
this._stop();
}
},
pageUp:spinnerModifer(function(pages){
this._stepUp((pages||1)*this.options.page);
}),
pageDown:spinnerModifer(function(pages){
this._stepDown((pages||1)*this.options.page);
}),
value:function(newVal){
if(!arguments.length){
return this._parse(this.element.val());
}
spinnerModifer(this._value).call(this,newVal);
},
widget:function(){
return this.uiSpinner;
}
});
if($.uiBackCompat!==false){
$.widget("ui.spinner",$.ui.spinner,{
_enhance:function(){
this.uiSpinner=this.element
.attr("autocomplete","off")
.wrap(this._uiSpinnerHtml())
.parent()
.append(this._buttonHtml());
},
_uiSpinnerHtml:function(){
return"<span>";
},
_buttonHtml:function(){
return"<a></a><a></a>";
}
});
}
var widgetsSpinner=$.ui.spinner;
$.widget("ui.tabs",{
version:"1.12.1",
delay:300,
options:{
active:null,
classes:{
"ui-tabs":"ui-corner-all",
"ui-tabs-nav":"ui-corner-all",
"ui-tabs-panel":"ui-corner-bottom",
"ui-tabs-tab":"ui-corner-top"
},
collapsible:false,
event:"click",
heightStyle:"content",
hide:null,
show:null,
activate:null,
beforeActivate:null,
beforeLoad:null,
load:null
},
_isLocal:(function(){
var rhash=/#.*$/;
return function(anchor){
var anchorUrl,locationUrl;
anchorUrl=anchor.href.replace(rhash,"");
locationUrl=location.href.replace(rhash,"");
try{
anchorUrl=decodeURIComponent(anchorUrl);
}catch(error){}
try{
locationUrl=decodeURIComponent(locationUrl);
}catch(error){}
return anchor.hash.length>1&&anchorUrl===locationUrl;
};
})(),
_create:function(){
var that=this,
options=this.options;
this.running=false;
this._addClass("ui-tabs","ui-widget ui-widget-content");
this._toggleClass("ui-tabs-collapsible",null,options.collapsible);
this._processTabs();
options.active=this._initialActive();
if($.isArray(options.disabled)){
options.disabled=$.unique(options.disabled.concat(
$.map(this.tabs.filter(".ui-state-disabled"),function(li){
return that.tabs.index(li);
})
)).sort();
}
if(this.options.active!==false&&this.anchors.length){
this.active=this._findActive(options.active);
}else{
this.active=$();
}
this._refresh();
if(this.active.length){
this.load(options.active);
}
},
_initialActive:function(){
var active=this.options.active,
collapsible=this.options.collapsible,
locationHash=location.hash.substring(1);
if(active===null){
if(locationHash){
this.tabs.each(function(i,tab){
if($(tab).attr("aria-controls")===locationHash){
active=i;
return false;
}
});
}
if(active===null){
active=this.tabs.index(this.tabs.filter(".ui-tabs-active"));
}
if(active===null||active===-1){
active=this.tabs.length?0:false;
}
}
if(active!==false){
active=this.tabs.index(this.tabs.eq(active));
if(active===-1){
active=collapsible?false:0;
}
}
if(!collapsible&&active===false&&this.anchors.length){
active=0;
}
return active;
},
_getCreateEventData:function(){
return{
tab:this.active,
panel:!this.active.length?$():this._getPanelForTab(this.active)
};
},
_tabKeydown:function(event){
var focusedTab=$($.ui.safeActiveElement(this.document[0])).closest("li"),
selectedIndex=this.tabs.index(focusedTab),
goingForward=true;
if(this._handlePageNav(event)){
return;
}
switch(event.keyCode){
case $.ui.keyCode.RIGHT:
case $.ui.keyCode.DOWN:
selectedIndex++;
break;
case $.ui.keyCode.UP:
case $.ui.keyCode.LEFT:
goingForward=false;
selectedIndex--;
break;
case $.ui.keyCode.END:
selectedIndex=this.anchors.length-1;
break;
case $.ui.keyCode.HOME:
selectedIndex=0;
break;
case $.ui.keyCode.SPACE:
event.preventDefault();
clearTimeout(this.activating);
this._activate(selectedIndex);
return;
case $.ui.keyCode.ENTER:
event.preventDefault();
clearTimeout(this.activating);
this._activate(selectedIndex===this.options.active?false:selectedIndex);
return;
default:
return;
}
event.preventDefault();
clearTimeout(this.activating);
selectedIndex=this._focusNextTab(selectedIndex,goingForward);
if(!event.ctrlKey&&!event.metaKey){
focusedTab.attr("aria-selected","false");
this.tabs.eq(selectedIndex).attr("aria-selected","true");
this.activating=this._delay(function(){
this.option("active",selectedIndex);
},this.delay);
}
},
_panelKeydown:function(event){
if(this._handlePageNav(event)){
return;
}
if(event.ctrlKey&&event.keyCode===$.ui.keyCode.UP){
event.preventDefault();
this.active.trigger("focus");
}
},
_handlePageNav:function(event){
if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP){
this._activate(this._focusNextTab(this.options.active-1,false));
return true;
}
if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN){
this._activate(this._focusNextTab(this.options.active+1,true));
return true;
}
},
_findNextTab:function(index,goingForward){
var lastTabIndex=this.tabs.length-1;
function constrain(){
if(index>lastTabIndex){
index=0;
}
if(index<0){
index=lastTabIndex;
}
return index;
}
while($.inArray(constrain(),this.options.disabled)!==-1){
index=goingForward?index+1:index-1;
}
return index;
},
_focusNextTab:function(index,goingForward){
index=this._findNextTab(index,goingForward);
this.tabs.eq(index).trigger("focus");
return index;
},
_setOption:function(key,value){
if(key==="active"){
this._activate(value);
return;
}
this._super(key,value);
if(key==="collapsible"){
this._toggleClass("ui-tabs-collapsible",null,value);
if(!value&&this.options.active===false){
this._activate(0);
}
}
if(key==="event"){
this._setupEvents(value);
}
if(key==="heightStyle"){
this._setupHeightStyle(value);
}
},
_sanitizeSelector:function(hash){
return hash?hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):"";
},
refresh:function(){
var options=this.options,
lis=this.tablist.children(":has(a[href])");
options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){
return lis.index(tab);
});
this._processTabs();
if(options.active===false||!this.anchors.length){
options.active=false;
this.active=$();
}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){
if(this.tabs.length===options.disabled.length){
options.active=false;
this.active=$();
}else{
this._activate(this._findNextTab(Math.max(0,options.active-1),false));
}
}else{
options.active=this.tabs.index(this.active);
}
this._refresh();
},
_refresh:function(){
this._setOptionDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({
"aria-selected":"false",
"aria-expanded":"false",
tabIndex:-1
});
this.panels.not(this._getPanelForTab(this.active))
.hide()
.attr({
"aria-hidden":"true"
});
if(!this.active.length){
this.tabs.eq(0).attr("tabIndex",0);
}else{
this.active
.attr({
"aria-selected":"true",
"aria-expanded":"true",
tabIndex:0
});
this._addClass(this.active,"ui-tabs-active","ui-state-active");
this._getPanelForTab(this.active)
.show()
.attr({
"aria-hidden":"false"
});
}
},
_processTabs:function(){
var that=this,
prevTabs=this.tabs,
prevAnchors=this.anchors,
prevPanels=this.panels;
this.tablist=this._getList().attr("role","tablist");
this._addClass(this.tablist,"ui-tabs-nav",
"ui-helper-reset ui-helper-clearfix ui-widget-header");
this.tablist
.on("mousedown"+this.eventNamespace,"> li",function(event){
if($(this).is(".ui-state-disabled")){
event.preventDefault();
}
})
.on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){
if($(this).closest("li").is(".ui-state-disabled")){
this.blur();
}
});
this.tabs=this.tablist.find("> li:has(a[href])")
.attr({
role:"tab",
tabIndex:-1
});
this._addClass(this.tabs,"ui-tabs-tab","ui-state-default");
this.anchors=this.tabs.map(function(){
return $("a",this)[0];
})
.attr({
role:"presentation",
tabIndex:-1
});
this._addClass(this.anchors,"ui-tabs-anchor");
this.panels=$();
this.anchors.each(function(i,anchor){
var selector,panel,panelId,
anchorId=$(anchor).uniqueId().attr("id"),
tab=$(anchor).closest("li"),
originalAriaControls=tab.attr("aria-controls");
if(that._isLocal(anchor)){
selector=anchor.hash;
panelId=selector.substring(1);
panel=that.element.find(that._sanitizeSelector(selector));
}else{
panelId=tab.attr("aria-controls")||$({}).uniqueId()[0].id;
selector="#"+panelId;
panel=that.element.find(selector);
if(!panel.length){
panel=that._createPanel(panelId);
panel.insertAfter(that.panels[i-1]||that.tablist);
}
panel.attr("aria-live","polite");
}
if(panel.length){
that.panels=that.panels.add(panel);
}
if(originalAriaControls){
tab.data("ui-tabs-aria-controls",originalAriaControls);
}
tab.attr({
"aria-controls":panelId,
"aria-labelledby":anchorId
});
panel.attr("aria-labelledby",anchorId);
});
this.panels.attr("role","tabpanel");
this._addClass(this.panels,"ui-tabs-panel","ui-widget-content");
if(prevTabs){
this._off(prevTabs.not(this.tabs));
this._off(prevAnchors.not(this.anchors));
this._off(prevPanels.not(this.panels));
}
},
_getList:function(){
return this.tablist||this.element.find("ol, ul").eq(0);
},
_createPanel:function(id){
return $("<div>")
.attr("id",id)
.data("ui-tabs-destroy",true);
},
_setOptionDisabled:function(disabled){
var currentItem,li,i;
if($.isArray(disabled)){
if(!disabled.length){
disabled=false;
}else if(disabled.length===this.anchors.length){
disabled=true;
}
}
for(i=0;(li=this.tabs[i]);i++){
currentItem=$(li);
if(disabled===true||$.inArray(i,disabled)!==-1){
currentItem.attr("aria-disabled","true");
this._addClass(currentItem,null,"ui-state-disabled");
}else{
currentItem.removeAttr("aria-disabled");
this._removeClass(currentItem,null,"ui-state-disabled");
}
}
this.options.disabled=disabled;
this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,
disabled===true);
},
_setupEvents:function(event){
var events={};
if(event){
$.each(event.split(" "),function(index,eventName){
events[eventName]="_eventHandler";
});
}
this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(true,this.anchors,{
click:function(event){
event.preventDefault();
}
});
this._on(this.anchors,events);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs);
},
_setupHeightStyle:function(heightStyle){
var maxHeight,
parent=this.element.parent();
if(heightStyle==="fill"){
maxHeight=parent.height();
maxHeight-=this.element.outerHeight()-this.element.height();
this.element.siblings(":visible").each(function(){
var elem=$(this),
position=elem.css("position");
if(position==="absolute"||position==="fixed"){
return;
}
maxHeight-=elem.outerHeight(true);
});
this.element.children().not(this.panels).each(function(){
maxHeight-=$(this).outerHeight(true);
});
this.panels.each(function(){
$(this).height(Math.max(0,maxHeight-
$(this).innerHeight()+$(this).height()));
})
.css("overflow","auto");
}else if(heightStyle==="auto"){
maxHeight=0;
this.panels.each(function(){
maxHeight=Math.max(maxHeight,$(this).height("").height());
}).height(maxHeight);
}
},
_eventHandler:function(event){
var options=this.options,
active=this.active,
anchor=$(event.currentTarget),
tab=anchor.closest("li"),
clickedIsActive=tab[0]===active[0],
collapsing=clickedIsActive&&options.collapsible,
toShow=collapsing?$():this._getPanelForTab(tab),
toHide=!active.length?$():this._getPanelForTab(active),
eventData={
oldTab:active,
oldPanel:toHide,
newTab:collapsing?$():tab,
newPanel:toShow
};
event.preventDefault();
if(tab.hasClass("ui-state-disabled")||
tab.hasClass("ui-tabs-loading")||
this.running||
(clickedIsActive&&!options.collapsible)||
(this._trigger("beforeActivate",event,eventData)===false)){
return;
}
options.active=collapsing?false:this.tabs.index(tab);
this.active=clickedIsActive?$():tab;
if(this.xhr){
this.xhr.abort();
}
if(!toHide.length&&!toShow.length){
$.error("jQuery UI Tabs: Mismatching fragment identifier.");
}
if(toShow.length){
this.load(this.tabs.index(tab),event);
}
this._toggle(event,eventData);
},
_toggle:function(event,eventData){
var that=this,
toShow=eventData.newPanel,
toHide=eventData.oldPanel;
this.running=true;
function complete(){
that.running=false;
that._trigger("activate",event,eventData);
}
function show(){
that._addClass(eventData.newTab.closest("li"),"ui-tabs-active","ui-state-active");
if(toShow.length&&that.options.show){
that._show(toShow,that.options.show,complete);
}else{
toShow.show();
complete();
}
}
if(toHide.length&&this.options.hide){
this._hide(toHide,this.options.hide,function(){
that._removeClass(eventData.oldTab.closest("li"),
"ui-tabs-active","ui-state-active");
show();
});
}else{
this._removeClass(eventData.oldTab.closest("li"),
"ui-tabs-active","ui-state-active");
toHide.hide();
show();
}
toHide.attr("aria-hidden","true");
eventData.oldTab.attr({
"aria-selected":"false",
"aria-expanded":"false"
});
if(toShow.length&&toHide.length){
eventData.oldTab.attr("tabIndex",-1);
}else if(toShow.length){
this.tabs.filter(function(){
return $(this).attr("tabIndex")===0;
})
.attr("tabIndex",-1);
}
toShow.attr("aria-hidden","false");
eventData.newTab.attr({
"aria-selected":"true",
"aria-expanded":"true",
tabIndex:0
});
},
_activate:function(index){
var anchor,
active=this._findActive(index);
if(active[0]===this.active[0]){
return;
}
if(!active.length){
active=this.active;
}
anchor=active.find(".ui-tabs-anchor")[0];
this._eventHandler({
target:anchor,
currentTarget:anchor,
preventDefault:$.noop
});
},
_findActive:function(index){
return index===false?$():this.tabs.eq(index);
},
_getIndex:function(index){
if(typeof index==="string"){
index=this.anchors.index(this.anchors.filter("[href$='"+
$.ui.escapeSelector(index)+"']"));
}
return index;
},
_destroy:function(){
if(this.xhr){
this.xhr.abort();
}
this.tablist
.removeAttr("role")
.off(this.eventNamespace);
this.anchors
.removeAttr("role tabIndex")
.removeUniqueId();
this.tabs.add(this.panels).each(function(){
if($.data(this,"ui-tabs-destroy")){
$(this).remove();
}else{
$(this).removeAttr("role tabIndex "+
"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
}
});
this.tabs.each(function(){
var li=$(this),
prev=li.data("ui-tabs-aria-controls");
if(prev){
li
.attr("aria-controls",prev)
.removeData("ui-tabs-aria-controls");
}else{
li.removeAttr("aria-controls");
}
});
this.panels.show();
if(this.options.heightStyle!=="content"){
this.panels.css("height","");
}
},
enable:function(index){
var disabled=this.options.disabled;
if(disabled===false){
return;
}
if(index===undefined){
disabled=false;
}else{
index=this._getIndex(index);
if($.isArray(disabled)){
disabled=$.map(disabled,function(num){
return num!==index?num:null;
});
}else{
disabled=$.map(this.tabs,function(li,num){
return num!==index?num:null;
});
}
}
this._setOptionDisabled(disabled);
},
disable:function(index){
var disabled=this.options.disabled;
if(disabled===true){
return;
}
if(index===undefined){
disabled=true;
}else{
index=this._getIndex(index);
if($.inArray(index,disabled)!==-1){
return;
}
if($.isArray(disabled)){
disabled=$.merge([index],disabled).sort();
}else{
disabled=[index];
}
}
this._setOptionDisabled(disabled);
},
load:function(index,event){
index=this._getIndex(index);
var that=this,
tab=this.tabs.eq(index),
anchor=tab.find(".ui-tabs-anchor"),
panel=this._getPanelForTab(tab),
eventData={
tab:tab,
panel:panel
},
complete=function(jqXHR,status){
if(status==="abort"){
that.panels.stop(false,true);
}
that._removeClass(tab,"ui-tabs-loading");
panel.removeAttr("aria-busy");
if(jqXHR===that.xhr){
delete that.xhr;
}
};
if(this._isLocal(anchor[0])){
return;
}
this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData));
if(this.xhr&&this.xhr.statusText!=="canceled"){
this._addClass(tab,"ui-tabs-loading");
panel.attr("aria-busy","true");
this.xhr
.done(function(response,status,jqXHR){
setTimeout(function(){
panel.html(response);
that._trigger("load",event,eventData);
complete(jqXHR,status);
},1);
})
.fail(function(jqXHR,status){
setTimeout(function(){
complete(jqXHR,status);
},1);
});
}
},
_ajaxSettings:function(anchor,event,eventData){
var that=this;
return{
url:anchor.attr("href").replace(/#.*$/,""),
beforeSend:function(jqXHR,settings){
return that._trigger("beforeLoad",event,
$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData));
}
};
},
_getPanelForTab:function(tab){
var id=$(tab).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+id));
}
});
if($.uiBackCompat!==false){
$.widget("ui.tabs",$.ui.tabs,{
_processTabs:function(){
this._superApply(arguments);
this._addClass(this.tabs,"ui-tab");
}
});
}
var widgetsTabs=$.ui.tabs;
$.widget("ui.tooltip",{
version:"1.12.1",
options:{
classes:{
"ui-tooltip":"ui-corner-all ui-widget-shadow"
},
content:function(){
var title=$(this).attr("title")||"";
return $("<a>").text(title).html();
},
hide:true,
items:"[title]:not([disabled])",
position:{
my:"left top+15",
at:"left bottom",
collision:"flipfit flip"
},
show:true,
track:false,
close:null,
open:null
},
_addDescribedBy:function(elem,id){
var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);
describedby.push(id);
elem
.data("ui-tooltip-id",id)
.attr("aria-describedby",$.trim(describedby.join(" ")));
},
_removeDescribedBy:function(elem){
var id=elem.data("ui-tooltip-id"),
describedby=(elem.attr("aria-describedby")||"").split(/\s+/),
index=$.inArray(id,describedby);
if(index!==-1){
describedby.splice(index,1);
}
elem.removeData("ui-tooltip-id");
describedby=$.trim(describedby.join(" "));
if(describedby){
elem.attr("aria-describedby",describedby);
}else{
elem.removeAttr("aria-describedby");
}
},
_create:function(){
this._on({
mouseover:"open",
focusin:"open"
});
this.tooltips={};
this.parents={};
this.liveRegion=$("<div>")
.attr({
role:"log",
"aria-live":"assertive",
"aria-relevant":"additions"
})
.appendTo(this.document[0].body);
this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");
this.disabledTitles=$([]);
},
_setOption:function(key,value){
var that=this;
this._super(key,value);
if(key==="content"){
$.each(this.tooltips,function(id,tooltipData){
that._updateContent(tooltipData.element);
});
}
},
_setOptionDisabled:function(value){
this[value?"_disable":"_enable"]();
},
_disable:function(){
var that=this;
$.each(this.tooltips,function(id,tooltipData){
var event=$.Event("blur");
event.target=event.currentTarget=tooltipData.element[0];
that.close(event,true);
});
this.disabledTitles=this.disabledTitles.add(
this.element.find(this.options.items).addBack()
.filter(function(){
var element=$(this);
if(element.is("[title]")){
return element
.data("ui-tooltip-title",element.attr("title"))
.removeAttr("title");
}
})
);
},
_enable:function(){
this.disabledTitles.each(function(){
var element=$(this);
if(element.data("ui-tooltip-title")){
element.attr("title",element.data("ui-tooltip-title"));
}
});
this.disabledTitles=$([]);
},
open:function(event){
var that=this,
target=$(event?event.target:this.element)
.closest(this.options.items);
if(!target.length||target.data("ui-tooltip-id")){
return;
}
if(target.attr("title")){
target.data("ui-tooltip-title",target.attr("title"));
}
target.data("ui-tooltip-open",true);
if(event&&event.type==="mouseover"){
target.parents().each(function(){
var parent=$(this),
blurEvent;
if(parent.data("ui-tooltip-open")){
blurEvent=$.Event("blur");
blurEvent.target=blurEvent.currentTarget=this;
that.close(blurEvent,true);
}
if(parent.attr("title")){
parent.uniqueId();
that.parents[this.id]={
element:this,
title:parent.attr("title")
};
parent.attr("title","");
}
});
}
this._registerCloseHandlers(event,target);
this._updateContent(target,event);
},
_updateContent:function(target,event){
var content,
contentOption=this.options.content,
that=this,
eventType=event?event.type:null;
if(typeof contentOption==="string"||contentOption.nodeType||
contentOption.jquery){
return this._open(event,target,contentOption);
}
content=contentOption.call(target[0],function(response){
that._delay(function(){
if(!target.data("ui-tooltip-open")){
return;
}
if(event){
event.type=eventType;
}
this._open(event,target,response);
});
});
if(content){
this._open(event,target,content);
}
},
_open:function(event,target,content){
var tooltipData,tooltip,delayedShow,a11yContent,
positionOption=$.extend({},this.options.position);
if(!content){
return;
}
tooltipData=this._find(target);
if(tooltipData){
tooltipData.tooltip.find(".ui-tooltip-content").html(content);
return;
}
if(target.is("[title]")){
if(event&&event.type==="mouseover"){
target.attr("title","");
}else{
target.removeAttr("title");
}
}
tooltipData=this._tooltip(target);
tooltip=tooltipData.tooltip;
this._addDescribedBy(target,tooltip.attr("id"));
tooltip.find(".ui-tooltip-content").html(content);
this.liveRegion.children().hide();
a11yContent=$("<div>").html(tooltip.find(".ui-tooltip-content").html());
a11yContent.removeAttr("name").find("[name]").removeAttr("name");
a11yContent.removeAttr("id").find("[id]").removeAttr("id");
a11yContent.appendTo(this.liveRegion);
function position(event){
positionOption.of=event;
if(tooltip.is(":hidden")){
return;
}
tooltip.position(positionOption);
}
if(this.options.track&&event&&/^mouse/.test(event.type)){
this._on(this.document,{
mousemove:position
});
position(event);
}else{
tooltip.position($.extend({
of:target
},this.options.position));
}
tooltip.hide();
this._show(tooltip,this.options.show);
if(this.options.track&&this.options.show&&this.options.show.delay){
delayedShow=this.delayedShow=setInterval(function(){
if(tooltip.is(":visible")){
position(positionOption.of);
clearInterval(delayedShow);
}
},$.fx.interval);
}
this._trigger("open",event,{tooltip:tooltip});
},
_registerCloseHandlers:function(event,target){
var events={
keyup:function(event){
if(event.keyCode===$.ui.keyCode.ESCAPE){
var fakeEvent=$.Event(event);
fakeEvent.currentTarget=target[0];
this.close(fakeEvent,true);
}
}
};
if(target[0]!==this.element[0]){
events.remove=function(){
this._removeTooltip(this._find(target).tooltip);
};
}
if(!event||event.type==="mouseover"){
events.mouseleave="close";
}
if(!event||event.type==="focusin"){
events.focusout="close";
}
this._on(true,target,events);
},
close:function(event){
var tooltip,
that=this,
target=$(event?event.currentTarget:this.element),
tooltipData=this._find(target);
if(!tooltipData){
target.removeData("ui-tooltip-open");
return;
}
tooltip=tooltipData.tooltip;
if(tooltipData.closing){
return;
}
clearInterval(this.delayedShow);
if(target.data("ui-tooltip-title")&&!target.attr("title")){
target.attr("title",target.data("ui-tooltip-title"));
}
this._removeDescribedBy(target);
tooltipData.hiding=true;
tooltip.stop(true);
this._hide(tooltip,this.options.hide,function(){
that._removeTooltip($(this));
});
target.removeData("ui-tooltip-open");
this._off(target,"mouseleave focusout keyup");
if(target[0]!==this.element[0]){
this._off(target,"remove");
}
this._off(this.document,"mousemove");
if(event&&event.type==="mouseleave"){
$.each(this.parents,function(id,parent){
$(parent.element).attr("title",parent.title);
delete that.parents[id];
});
}
tooltipData.closing=true;
this._trigger("close",event,{tooltip:tooltip});
if(!tooltipData.hiding){
tooltipData.closing=false;
}
},
_tooltip:function(element){
var tooltip=$("<div>").attr("role","tooltip"),
content=$("<div>").appendTo(tooltip),
id=tooltip.uniqueId().attr("id");
this._addClass(content,"ui-tooltip-content");
this._addClass(tooltip,"ui-tooltip","ui-widget ui-widget-content");
tooltip.appendTo(this._appendTo(element));
return this.tooltips[id]={
element:element,
tooltip:tooltip
};
},
_find:function(target){
var id=target.data("ui-tooltip-id");
return id?this.tooltips[id]:null;
},
_removeTooltip:function(tooltip){
tooltip.remove();
delete this.tooltips[tooltip.attr("id")];
},
_appendTo:function(target){
var element=target.closest(".ui-front, dialog");
if(!element.length){
element=this.document[0].body;
}
return element;
},
_destroy:function(){
var that=this;
$.each(this.tooltips,function(id,tooltipData){
var event=$.Event("blur"),
element=tooltipData.element;
event.target=event.currentTarget=element[0];
that.close(event,true);
$("#"+id).remove();
if(element.data("ui-tooltip-title")){
if(!element.attr("title")){
element.attr("title",element.data("ui-tooltip-title"));
}
element.removeData("ui-tooltip-title");
}
});
this.liveRegion.remove();
}
});
if($.uiBackCompat!==false){
$.widget("ui.tooltip",$.ui.tooltip,{
options:{
tooltipClass:null
},
_tooltip:function(){
var tooltipData=this._superApply(arguments);
if(this.options.tooltipClass){
tooltipData.tooltip.addClass(this.options.tooltipClass);
}
return tooltipData;
}
});
}
var widgetsTooltip=$.ui.tooltip;
}));


/* ../plugins-dist/mediabox/javascript/jquery.colorbox.js?1551954394 */

(function($,document,window){
var
defaults={
html:false,
photo:false,
iframe:false,
inline:false,
transition:"elastic",
speed:300,
fadeOut:300,
width:false,
initialWidth:"600",
innerWidth:false,
maxWidth:false,
minWidth:false,
height:false,
initialHeight:"450",
innerHeight:false,
maxHeight:false,
minHeight:false,
scalePhotos:true,
scrolling:true,
opacity:0.9,
preloading:true,
className:false,
overlayClose:true,
escKey:true,
arrowKey:true,
top:false,
bottom:false,
left:false,
right:false,
fixed:false,
data:undefined,
closeButton:true,
fastIframe:true,
open:false,
reposition:true,
loop:true,
slideshow:false,
slideshowAuto:true,
slideshowSpeed:2500,
slideshowStart:"start slideshow",
slideshowStop:"stop slideshow",
photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
retinaImage:false,
retinaUrl:false,
retinaSuffix:'@2x.$1',
current:"image {current} of {total}",
previous:"previous",
next:"next",
close:"close",
xhrError:"This content failed to load.",
imgError:"This image failed to load.",
returnFocus:true,
trapFocus:true,
onOpen:false,
onLoad:false,
onComplete:false,
onCleanup:false,
onClosed:false,
rel:function(){
return this.rel;
},
href:function(){
return $(this).attr('href');
},
title:function(){
return this.title;
},
createImg:function(){
var img=new Image();
var attrs=$(this).data('cbox-img-attrs');
if(typeof attrs==='object'){
$.each(attrs,function(key,val){
img[key]=val;
});
}
return img;
},
createIframe:function(){
var iframe=document.createElement('iframe');
var attrs=$(this).data('cbox-iframe-attrs');
if(typeof attrs==='object'){
$.each(attrs,function(key,val){
iframe[key]=val;
});
}
if('frameBorder'in iframe){
iframe.frameBorder=0;
}
if('allowTransparency'in iframe){
iframe.allowTransparency="true";
}
iframe.name=(new Date()).getTime();
iframe.allowFullscreen=true;
return iframe;
}
},
colorbox='colorbox',
colorbox_class='box_mediabox box_modalbox',
prefix='cbox',
boxElement=prefix+'Element',
event_open=prefix+'_open',
event_load=prefix+'_load',
event_complete=prefix+'_complete',
event_cleanup=prefix+'_cleanup',
event_closed=prefix+'_closed',
event_purge=prefix+'_purge',
$overlay,
$box,
$wrap,
$content,
$topBorder,
$leftBorder,
$rightBorder,
$bottomBorder,
$related,
$window,
$loaded,
$loadingBay,
$loadingOverlay,
$title,
$current,
$slideshow,
$next,
$prev,
$close,
$groupControls,
$events=$('<a/>'),
settings,
interfaceHeight,
interfaceWidth,
loadedHeight,
loadedWidth,
index,
photo,
open,
active,
closing,
loadingTimer,
publicMethod,
div="div",
requests=0,
previousCSS={},
init;
function $tag(tag,id,css){
var element=document.createElement(tag);
if(id){
element.id=prefix+id;
}
if(css){
element.style.cssText=css;
}
return $(element);
}
function winheight(){
return window.innerHeight?window.innerHeight:$(window).height();
}
function Settings(element,options){
if(options!==Object(options)){
options={};
}
this.cache={};
this.el=element;
this.value=function(key){
var dataAttr;
if(this.cache[key]===undefined){
dataAttr=$(this.el).attr('data-cbox-'+key);
if(dataAttr!==undefined){
this.cache[key]=dataAttr;
}else if(options[key]!==undefined){
this.cache[key]=options[key];
}else if(defaults[key]!==undefined){
this.cache[key]=defaults[key];
}
}
return this.cache[key];
};
this.get=function(key){
var value=this.value(key);
return $.isFunction(value)?value.call(this.el,this):value;
};
}
function getIndex(increment){
var
max=$related.length,
newIndex=(index+increment)%max;
return(newIndex<0)?max+newIndex:newIndex;
}
function setSize(size,dimension){
return Math.round((/%/.test(size)?((dimension==='x'?$window.width():winheight())/100):1)*parseInt(size,10));
}
function isImage(settings,url){
return settings.get('photo')||settings.get('photoRegex').test(url);
}
function retinaUrl(settings,url){
return settings.get('retinaUrl')&&window.devicePixelRatio>1?url.replace(settings.get('photoRegex'),settings.get('retinaSuffix')):url;
}
function trapFocus(e){
if('contains'in $box[0]&&!$box[0].contains(e.target)&&e.target!==$overlay[0]){
e.stopPropagation();
$box.focus();
}
}
function setClass(str){
if(setClass.str!==str){
$box.add($overlay).removeClass(setClass.str).addClass(str);
setClass.str=str;
}
}
function getRelated(rel){
index=0;
if(rel&&rel!==false&&rel!=='nofollow'){
$related=$('.'+boxElement).filter(function(){
var options=$.data(this,colorbox);
var settings=new Settings(this,options);
return(settings.get('rel')===rel);
});
index=$related.index(settings.el);
if(index===-1){
$related=$related.add(settings.el);
index=$related.length-1;
}
}else{
$related=$(settings.el);
}
}
function trigger(event){
$(document).trigger(event);
$events.triggerHandler(event);
}
var slideshow=(function(){
var active,
className=prefix+"Slideshow_",
click="click."+prefix,
timeOut;
function clear(){
clearTimeout(timeOut);
}
function set(){
if(settings.get('loop')||$related[index+1]){
clear();
timeOut=setTimeout(publicMethod.next,settings.get('slideshowSpeed'));
}
}
function start(){
$slideshow
.html(settings.get('slideshowStop'))
.unbind(click)
.one(click,stop);
$events
.bind(event_complete,set)
.bind(event_load,clear);
$box.removeClass(className+"off").addClass(className+"on");
}
function stop(){
clear();
$events
.unbind(event_complete,set)
.unbind(event_load,clear);
$slideshow
.html(settings.get('slideshowStart'))
.unbind(click)
.one(click,function(){
publicMethod.next();
start();
});
$box.removeClass(className+"on").addClass(className+"off");
}
function reset(){
active=false;
$slideshow.hide();
clear();
$events
.unbind(event_complete,set)
.unbind(event_load,clear);
$box.removeClass(className+"off "+className+"on");
}
return function(){
if(active){
if(!settings.get('slideshow')){
$events.unbind(event_cleanup,reset);
reset();
}
}else{
if(settings.get('slideshow')&&$related[1]){
active=true;
$events.one(event_cleanup,reset);
if(settings.get('slideshowAuto')){
start();
}else{
stop();
}
$slideshow.show();
}
}
};
}());
function launch(element){
var options;
if(!closing){
options=$(element).data(colorbox);
settings=new Settings(element,options);
getRelated(settings.get('rel'));
if(!open){
open=active=true;
setClass(settings.get('className'));
$box.css({visibility:'hidden',display:'block',opacity:''});
$loaded=$tag(div,'LoadedContent','width:0; height:0; overflow:hidden; visibility:hidden');
$content.css({width:'',height:''}).append($loaded);
interfaceHeight=$topBorder.height()+$bottomBorder.height()+$content.outerHeight(true)-$content.height();
interfaceWidth=$leftBorder.width()+$rightBorder.width()+$content.outerWidth(true)-$content.width();
loadedHeight=$loaded.outerHeight(true);
loadedWidth=$loaded.outerWidth(true);
var initialWidth=setSize(settings.get('initialWidth'),'x');
var initialHeight=setSize(settings.get('initialHeight'),'y');
var maxWidth=settings.get('maxWidth');
var maxHeight=settings.get('maxHeight');
settings.w=Math.max((maxWidth!==false?Math.min(initialWidth,setSize(maxWidth,'x')):initialWidth)-loadedWidth-interfaceWidth,0);
settings.h=Math.max((maxHeight!==false?Math.min(initialHeight,setSize(maxHeight,'y')):initialHeight)-loadedHeight-interfaceHeight,0);
$loaded.css({width:'',height:settings.h});
publicMethod.position();
trigger(event_open);
settings.get('onOpen');
$groupControls.add($title).hide();
$box.focus();
if(settings.get('trapFocus')){
if(document.addEventListener){
document.addEventListener('focus',trapFocus,true);
$events.one(event_closed,function(){
document.removeEventListener('focus',trapFocus,true);
});
}
}
if(settings.get('returnFocus')){
$events.one(event_closed,function(){
$(settings.el).focus();
});
}
}
var opacity=parseFloat(settings.get('opacity'));
$overlay.css({
opacity:opacity===opacity?opacity:'',
cursor:settings.get('overlayClose')?'pointer':'',
visibility:'visible'
}).show();
if(settings.get('closeButton')){
$close.html(settings.get('close')).appendTo($content);
}else{
$close.appendTo('<div/>');
}
load();
}
}
function appendHTML(){
if(!$box){
init=false;
$window=$(window);
$box=$tag(div).attr({
id:colorbox,
'class':($.support.opacity===false?prefix+'IE ':'')+colorbox_class,
role:'dialog',
tabindex:'-1'
}).hide();
$overlay=$tag(div,"Overlay").hide();
$loadingOverlay=$([$tag(div,"LoadingOverlay")[0],$tag(div,"LoadingGraphic")[0]]);
$wrap=$tag(div,"Wrapper");
$content=$tag(div,"Content").append(
$title=$tag(div,"Title"),
$current=$tag(div,"Current"),
$prev=$('<button type="button"/>').attr({id:prefix+'Previous'}),
$next=$('<button type="button"/>').attr({id:prefix+'Next'}),
$slideshow=$('<button type="button"/>').attr({id:prefix+'Slideshow'}),
$loadingOverlay
);
$close=$('<button type="button"/>').attr({id:prefix+'Close'});
$wrap.append(
$tag(div).append(
$tag(div,"TopLeft"),
$topBorder=$tag(div,"TopCenter"),
$tag(div,"TopRight")
),
$tag(div,false,'clear:left').append(
$leftBorder=$tag(div,"MiddleLeft"),
$content,
$rightBorder=$tag(div,"MiddleRight")
),
$tag(div,false,'clear:left').append(
$tag(div,"BottomLeft"),
$bottomBorder=$tag(div,"BottomCenter"),
$tag(div,"BottomRight")
)
).find('div div').css({'float':'left'});
$loadingBay=$tag(div,false,'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
$groupControls=$next.add($prev).add($current).add($slideshow);
}
if(document.body&&!$box.parent().length){
$(document.body).append($overlay,$box.append($wrap,$loadingBay));
}
}
function addBindings(){
function clickHandler(e){
if(!(e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)){
e.preventDefault();
launch(this);
}
}
if($box){
if(!init){
init=true;
$next.click(function(){
publicMethod.next();
});
$prev.click(function(){
publicMethod.prev();
});
$close.click(function(){
publicMethod.close();
});
$overlay.click(function(){
if(settings.get('overlayClose')){
publicMethod.close();
}
});
$(document).bind('keydown.'+prefix,function(e){
var key=e.keyCode;
if(open&&settings.get('escKey')&&key===27){
e.preventDefault();
publicMethod.close();
}
if(open&&settings.get('arrowKey')&&$related[1]&&!e.altKey){
if(key===37){
e.preventDefault();
$prev.click();
}else if(key===39){
e.preventDefault();
$next.click();
}
}
});
if($.isFunction($.fn.on)){
$(document).on('click.'+prefix,'.'+boxElement,clickHandler);
}else{
$('.'+boxElement).live('click.'+prefix,clickHandler);
}
}
return true;
}
return false;
}
if($[colorbox]){
return;
}
$(appendHTML);
publicMethod=$.fn[colorbox]=$[colorbox]=function(options,callback){
var settings;
var $obj=this;
options=options||{};
if($.isFunction($obj)){
$obj=$('<a/>');
options.open=true;
}
if(!$obj[0]){
return $obj;
}
appendHTML();
if(addBindings()){
if(callback){
options.onComplete=callback;
}
$obj.each(function(){
var old=$.data(this,colorbox)||{};
$.data(this,colorbox,$.extend(old,options));
var eltclass=$(this).attr('class');
if(eltclass){
if(eltclass.indexOf("boxWidth-")!==-1){
var w=eltclass.match(/boxWidth-([^\s'">]*)/);
w=w[1].replace(/pc/,'%');
$.data(this,colorbox,$.extend($.data(this,colorbox),{width:w}));
}
if(eltclass.indexOf("boxHeight-")!==-1){
var h=eltclass.match(/boxHeight-([^\s'">]*)/);
h=h[1].replace(/pc/,'%');
$.data(this,colorbox,$.extend($.data(this,colorbox),{height:h}));
}
if(eltclass.indexOf("boxIframe")!==-1){
$.data(this,colorbox,$.extend($.data(this,colorbox),{iframe:true}));
}
if(eltclass.indexOf("boxInline")!==-1){
$.data(this,colorbox,$.extend($.data(this,colorbox),{inline:true}));
}
if(eltclass.indexOf("boxSlideshow_off")!==-1){
$.data(this,colorbox,$.extend($.data(this,colorbox),{slideshow:false}));
}
}
}).addClass(boxElement);
settings=new Settings($obj[0],options);
if(settings.get('open')){
launch($obj[0]);
}
}
return $obj;
};
publicMethod.position=function(speed,loadedCallback){
var
css,
top=0,
left=0,
offset=$box.offset(),
scrollTop,
scrollLeft;
$window.unbind('resize.'+prefix);
$box.css({top:-9e4,left:-9e4});
scrollTop=$window.scrollTop();
scrollLeft=$window.scrollLeft();
if(settings.get('fixed')){
offset.top-=scrollTop;
offset.left-=scrollLeft;
$box.css({position:'fixed'});
}else{
top=scrollTop;
left=scrollLeft;
$box.css({position:'absolute'});
}
if(settings.get('right')!==false){
left+=Math.max($window.width()-settings.w-loadedWidth-interfaceWidth-setSize(settings.get('right'),'x'),0);
}else if(settings.get('left')!==false){
left+=setSize(settings.get('left'),'x');
}else{
left+=Math.round(Math.max($window.width()-settings.w-loadedWidth-interfaceWidth,0)/2);
}
if(settings.get('bottom')!==false){
top+=Math.max(winheight()-settings.h-loadedHeight-interfaceHeight-setSize(settings.get('bottom'),'y'),0);
}else if(settings.get('top')!==false){
top+=setSize(settings.get('top'),'y');
}else{
top+=Math.round(Math.max(winheight()-settings.h-loadedHeight-interfaceHeight,0)/2);
}
$box.css({top:offset.top,left:offset.left,visibility:'visible'});
$wrap[0].style.width=$wrap[0].style.height="9999px";
function modalDimensions(){
$topBorder[0].style.width=$bottomBorder[0].style.width=$content[0].style.width=(parseInt($box[0].style.width,10)-interfaceWidth)+'px';
$content[0].style.height=$leftBorder[0].style.height=$rightBorder[0].style.height=(parseInt($box[0].style.height,10)-interfaceHeight)+'px';
}
css={width:settings.w+loadedWidth+interfaceWidth,height:settings.h+loadedHeight+interfaceHeight,top:top,left:left};
if(speed){
var tempSpeed=0;
$.each(css,function(i){
if(css[i]!==previousCSS[i]){
tempSpeed=speed;
return;
}
});
speed=tempSpeed;
}
previousCSS=css;
if(!speed){
$box.css(css);
}
$box.dequeue().animate(css,{
duration:speed||0,
complete:function(){
modalDimensions();
active=false;
$wrap[0].style.width=(settings.w+loadedWidth+interfaceWidth)+"px";
$wrap[0].style.height=(settings.h+loadedHeight+interfaceHeight)+"px";
if(settings.get('reposition')){
setTimeout(function(){
$window.bind('resize.'+prefix,publicMethod.position);
},1);
}
if($.isFunction(loadedCallback)){
loadedCallback();
}
},
step:modalDimensions
});
};
publicMethod.resize=function(options){
var scrolltop;
if(open){
options=options||{};
if(options.width){
settings.w=setSize(options.width,'x')-loadedWidth-interfaceWidth;
}
if(options.innerWidth){
settings.w=setSize(options.innerWidth,'x');
}
$loaded.css({width:settings.w});
if(options.height){
settings.h=setSize(options.height,'y')-loadedHeight-interfaceHeight;
}
if(options.innerHeight){
settings.h=setSize(options.innerHeight,'y');
}
if(!options.innerHeight&&!options.height){
scrolltop=$loaded.scrollTop();
$loaded.css({height:"auto"});
settings.h=$loaded.height();
}
$loaded.css({height:settings.h});
if(scrolltop){
$loaded.scrollTop(scrolltop);
}
publicMethod.position(settings.get('transition')==="none"?0:settings.get('speed'));
}
};
publicMethod.prep=function(object){
if(!open){
return;
}
var callback,speed=settings.get('transition')==="none"?0:settings.get('speed');
$loaded.remove();
$loaded=$tag(div,'LoadedContent').append(object);
function getWidth(){
settings.w=settings.w||$loaded.width();
settings.w=settings.minw&&settings.minw>settings.w?settings.minw:settings.w;
settings.w=settings.mw&&settings.mw<settings.w?settings.mw:settings.w;
return settings.w;
}
function getHeight(){
settings.h=settings.h||$loaded.height();
settings.h=settings.minh&&settings.minh>settings.h?settings.minh:settings.h;
settings.h=settings.mh&&settings.mh<settings.h?settings.mh:settings.h;
return settings.h;
}
$loaded.hide()
.appendTo($loadingBay.show())
.css({width:getWidth(),overflow:settings.get('scrolling')?'auto':'hidden'})
.css({height:getHeight()})
.prependTo($content);
$loadingBay.hide();
$(photo).css({'float':'none'});
setClass(settings.get('className'));
callback=function(){
var total=$related.length,
iframe,
complete;
if(!open){
return;
}
function removeFilter(){
if($.support.opacity===false){
$box[0].style.removeAttribute('filter');
}
}
complete=function(){
clearTimeout(loadingTimer);
$loadingOverlay.hide();
trigger(event_complete);
settings.get('onComplete');
};
$title.html(settings.get('title')).show();
$loaded.show();
if(total>1){
if(typeof settings.get('current')==="string"){
$current.html(settings.get('current').replace('{current}',index+1).replace('{total}',total)).show();
}
$next[(settings.get('loop')||index<total-1)?"show":"hide"]().html(settings.get('next'));
$prev[(settings.get('loop')||index)?"show":"hide"]().html(settings.get('previous'));
slideshow();
if(settings.get('preloading')){
$.each([getIndex(-1),getIndex(1)],function(){
var img,
i=$related[this],
settings=new Settings(i,$.data(i,colorbox)),
src=settings.get('href');
if(src&&isImage(settings,src)){
src=retinaUrl(settings,src);
img=document.createElement('img');
img.src=src;
}
});
}
}else{
$groupControls.hide();
}
if(settings.get('iframe')){
iframe=settings.get('createIframe');
if(!settings.get('scrolling')){
iframe.scrolling="no";
}
$(iframe)
.attr({
src:settings.get('href'),
'class':prefix+'Iframe'
})
.one('load',complete)
.appendTo($loaded);
$events.one(event_purge,function(){
iframe.src="//about:blank";
});
if(settings.get('fastIframe')){
$(iframe).trigger('load');
}
}else{
complete();
}
if(settings.get('transition')==='fade'){
$box.fadeTo(speed,1,removeFilter);
}else{
removeFilter();
}
};
if(settings.get('transition')==='fade'){
$box.fadeTo(speed,0,function(){
publicMethod.position(0,callback);
});
}else{
publicMethod.position(speed,callback);
}
};
function load(){
var href,setResize,prep=publicMethod.prep,$inline,request=++requests;
active=true;
photo=false;
trigger(event_purge);
trigger(event_load);
settings.get('onLoad');
settings.h=settings.get('height')?
setSize(settings.get('height'),'y')-loadedHeight-interfaceHeight:
settings.get('innerHeight')&&setSize(settings.get('innerHeight'),'y');
settings.w=settings.get('width')?
setSize(settings.get('width'),'x')-loadedWidth-interfaceWidth:
settings.get('innerWidth')&&setSize(settings.get('innerWidth'),'x');
settings.mw=settings.w;
settings.mh=settings.h;
settings.minw=settings.w;
settings.minh=settings.h;
if(settings.get('maxWidth')){
settings.mw=setSize(settings.get('maxWidth'),'x')-loadedWidth-interfaceWidth;
settings.mw=settings.w&&settings.w<settings.mw?settings.w:settings.mw;
}
if(settings.get('minWidth')){
settings.minw=setSize(settings.get('minWidth'),'x')-loadedWidth-interfaceWidth;
settings.minw=settings.w&&settings.w>settings.minw?settings.w:settings.minw;
}
if(settings.get('maxHeight')){
settings.mh=setSize(settings.get('maxHeight'),'y')-loadedHeight-interfaceHeight;
settings.mh=settings.h&&settings.h<settings.mh?settings.h:settings.mh;
}
if(settings.get('minHeight')){
settings.minh=setSize(settings.get('minHeight'),'y')-loadedHeight-interfaceHeight;
settings.minh=settings.h&&settings.h>settings.minh?settings.h:settings.minh;
}
href=settings.get('href');
loadingTimer=setTimeout(function(){
$loadingOverlay.show();
},100);
if(settings.get('inline')){
var $target=$(href).eq(0);
$inline=$('<div>').hide().insertBefore($target);
$events.one(event_purge,function(){
$inline.replaceWith($target);
});
prep($target);
}else if(settings.get('iframe')){
prep(" ");
}else if(settings.get('html')){
prep(settings.get('html'));
}else if(isImage(settings,href)){
href=retinaUrl(settings,href);
photo=settings.get('createImg');
$(photo)
.addClass(prefix+'Photo')
.bind('error.'+prefix,function(){
prep($tag(div,'Error').html(settings.get('imgError')));
})
.one('load',function(){
if(request!==requests){
return;
}
setTimeout(function(){
var percent;
if(settings.get('retinaImage')&&window.devicePixelRatio>1){
photo.height=photo.height/window.devicePixelRatio;
photo.width=photo.width/window.devicePixelRatio;
}
if(settings.get('scalePhotos')){
setResize=function(){
photo.height-=photo.height*percent;
photo.width-=photo.width*percent;
};
if(settings.mw&&photo.width>settings.mw){
percent=(photo.width-settings.mw)/photo.width;
setResize();
}
if(settings.mh&&photo.height>settings.mh){
percent=(photo.height-settings.mh)/photo.height;
setResize();
}
}
if(settings.h){
photo.style.marginTop=Math.max(settings.mh-photo.height,0)/2+'px';
}
if($related[1]&&(settings.get('loop')||$related[index+1])){
photo.style.cursor='pointer';
$(photo).bind('click.'+prefix,function(){
publicMethod.next();
});
}
photo.style.width=photo.width+'px';
photo.style.height=photo.height+'px';
prep(photo);
},1);
});
photo.src=href;
}else if(href){
$loadingBay.load(href,settings.get('data'),function(data,status){
if(request===requests){
prep(status==='error'?$tag(div,'Error').html(settings.get('xhrError')):$(this).contents());
}
});
}
}
publicMethod.next=function(){
if(!active&&$related[1]&&(settings.get('loop')||$related[index+1])){
index=getIndex(1);
launch($related[index]);
}
};
publicMethod.prev=function(){
if(!active&&$related[1]&&(settings.get('loop')||index)){
index=getIndex(-1);
launch($related[index]);
}
};
publicMethod.close=function(){
if(open&&!closing){
closing=true;
open=false;
trigger(event_cleanup);
settings.get('onCleanup');
$window.unbind('.'+prefix);
$overlay.fadeTo(settings.get('fadeOut')||0,0);
$box.stop().fadeTo(settings.get('fadeOut')||0,0,function(){
$box.hide();
$overlay.hide();
trigger(event_purge);
$loaded.remove();
setTimeout(function(){
closing=false;
trigger(event_closed);
settings.get('onClosed');
},1);
});
}
};
publicMethod.remove=function(){
if(!$box){return;}
$box.stop();
$[colorbox].close();
$box.stop(false,true).remove();
$overlay.remove();
closing=false;
$box=null;
$('.'+boxElement)
.removeData(colorbox)
.removeClass(boxElement);
$(document).unbind('click.'+prefix).unbind('keydown.'+prefix);
};
publicMethod.element=function(){
return $(settings.el);
};
publicMethod.settings=defaults;
}(jQuery,document,window));


/* ../plugins-dist/mediabox/javascript/spip.mediabox.js?1551954394 */

var mediaboxInit=function(){
var options={
transition:box_settings.trans,
speed:box_settings.speed,
maxWidth:box_settings.maxW,
maxHeight:box_settings.maxH,
minWidth:box_settings.minW,
minHeight:box_settings.minH,
opacity:box_settings.opa,
slideshowSpeed:box_settings.ssSpeed,
slideshowStart:box_settings.str_ssStart,
slideshowStop:box_settings.str_ssStop,
current:box_settings.str_cur,
previous:box_settings.str_prev,
next:box_settings.str_next,
close:box_settings.str_close,
splash_url:box_settings.splash_url
};
if(box_settings.sel_g){
jQuery(box_settings.sel_g,this).not('.hasbox,#colorbox')
.attr("onclick","")
.colorbox(jQuery.extend({},options,{rel:'galerieauto',slideshow:true,slideshowAuto:false}))
.addClass("hasbox");
}
if(box_settings.tt_img){
jQuery("a[type=\'image/jpeg\'],a[type=\'image/png\'],a[type=\'image/gif\']",this).not('.hasbox')
.attr("onclick","")
.colorbox(options)
.addClass("hasbox")
;
}
if(box_settings.sel_c){
jQuery(box_settings.sel_c).not('.hasbox')
.colorbox(jQuery.extend({},options,{slideshow:true,slideshowAuto:false}))
.addClass("hasbox")
;
}
};
if(typeof(box_settings)!='undefined')
(function($){if(typeof onAjaxLoad=="function")onAjaxLoad(mediaboxInit);$(mediaboxInit);})(jQuery);
;(function($){
$.fn.mediabox=function(options){
var cbox_options={
overlayClose:true,
iframe:false,
transition:box_settings.trans,
speed:box_settings.speed,
maxWidth:box_settings.maxW,
maxHeight:box_settings.maxH,
minWidth:box_settings.minW,
minHeight:box_settings.minH,
opacity:box_settings.opa,
slideshowStart:box_settings.str_ssStart,
slideshowStop:box_settings.str_ssStop,
current:box_settings.str_cur,
previous:box_settings.str_prev,
next:box_settings.str_next,
close:box_settings.str_close,
onOpen:(options&&options.onOpen)||null,
onComplete:(options&&options.onShow)||null,
onClosed:(options&&options.onClose)||null
};
if(this===jQuery.fn)
return $.colorbox($.extend(cbox_options,options));
else
return this.colorbox($.extend(cbox_options,options));
};
$.mediaboxClose=function(){$.fn.colorbox.close();};
$.mediabox=function(options){return jQuery.fn.mediabox(options);}
$.modalbox=function(href,options){$.fn.mediabox($.extend({href:href,inline:href.match(/^#/)?true:false,overlayClose:true},options));};
$.modalboxload=function(url,options){$.modalbox(url,options);};
$.modalboxclose=$.mediaboxClose;
})(jQuery);


/* ../plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1551954377 */

;(function($){
$.fn.markItUp=function(settings,extraSettings){
var method,params,options,ctrlKey,shiftKey,altKey;ctrlKey=shiftKey=altKey=false;
markitup_prompt=false;
if(typeof settings=='string'){
method=settings;
params=extraSettings;
}
options={id:'',
nameSpace:'',
root:'',
lang:'',
previewHandler:false,
previewInWindow:'',
previewInElement:'',
previewAutoRefresh:true,
previewPosition:'after',
previewTemplatePath:'~/templates/preview.html',
previewParser:false,
previewParserPath:'',
previewParserVar:'data',
previewParserAjaxType:'POST',
resizeHandle:true,
beforeInsert:'',
afterInsert:'',
onEnter:{},
onShiftEnter:{},
onCtrlEnter:{},
onTab:{},
markupSet:[{}]
};
$.extend(options,settings,extraSettings);
if(!options.root){
$('script').each(function(a,tag){
var miuScript=$(tag).get(0).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/);
if(miuScript!==null){
options.root=miuScript[1];
}
});
}
var uaMatch=function(ua){
ua=ua.toLowerCase();
var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||
ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||
[];
return{
browser:match[1]||"",
version:match[2]||"0"
};
};
var matched=uaMatch(navigator.userAgent);
var browser={};
if(matched.browser){
browser[matched.browser]=true;
browser.version=matched.version;
}
if(browser.chrome){
browser.webkit=true;
}else if(browser.webkit){
browser.safari=true;
}
return this.each(function(){
var $$,textarea,levels,scrollPosition,caretPosition,
clicked,hash,header,footer,previewWindow,template,iFrame,abort,
before,after;
$$=$(this);
textarea=this;
levels=[];
abort=false;
scrollPosition=caretPosition=0;
caretOffset=-1;
options.previewParserPath=localize(options.previewParserPath);
options.previewTemplatePath=localize(options.previewTemplatePath);
if(method){
switch(method){
case'remove':
remove();
break;
case'insert':
markup(params);
break;
default:
$.error('Method '+method+' does not exist on jQuery.markItUp');
}
return;
}
function localize(data,inText){
if(inText){
return data.replace(/("|')~\//g,"$1"+options.root);
}
return data.replace(/^~\//,options.root);
}
function init(){
id='';nameSpace='';
if(options.id){
id='id="'+options.id+'"';
}else if($$.attr("id")){
id='id="markItUp'+($$.attr("id").substr(0,1).toUpperCase())+($$.attr("id").substr(1))+'"';
}
if(options.nameSpace){
nameSpace='class="'+options.nameSpace+'"';
}
currentScrollPosition=$$.scrollTop();
$$.wrap('<div '+nameSpace+'></div>');
$$.wrap('<div '+id+' class="markItUp"></div>');
$$.wrap('<div class="markItUpContainer"></div>');
$$.addClass("markItUpEditor");
$$.scrollTop(currentScrollPosition);
header=$('<div class="markItUpHeader"></div>').insertBefore($$);
$(dropMenus(options.markupSet)).appendTo(header);
$(header).find("li.markItUpDropMenu ul:empty").parent().remove();
footer=$('<div class="markItUpFooter"></div>').insertAfter($$);
if(options.resizeHandle===true&&browser.safari!==true){
resizeHandle=$('<div class="markItUpResizeHandle"></div>')
.insertAfter($$)
.on("mousedown.markItUp",function(e){
var h=$$.height(),y=e.clientY,mouseMove,mouseUp;
mouseMove=function(e){
$$.css("height",Math.max(20,e.clientY+h-y)+"px");
return false;
};
mouseUp=function(e){
$("html").off("mousemove.markItUp",mouseMove).off("mouseup.markItUp",mouseUp);
return false;
};
$("html").on("mousemove.markItUp",mouseMove).on("mouseup.markItUp",mouseUp);
});
footer.append(resizeHandle);
}
$$.on('keydown.markItUp',keyPressed).on('keyup',keyPressed);
$$.on("insertion.markItUp",function(e,settings){
if(settings.target!==false){
get();
}
if(textarea===$.markItUp.focused){
markup(settings);
}
});
$$.on('focus.markItUp',function(){
$.markItUp.focused=this;
});
if(options.previewInElement){
refreshPreview();
}
}
function dropMenus(markupSet){
var ul=$('<ul></ul>'),i=0;
var lang=($$.attr('lang')||options.lang);
$('li:hover > ul',ul).css('display','block');
$.each(markupSet,function(){
var button=this,t='',title,li,j;
if((!lang||!button.lang||($.inArray(lang,button.lang)!=-1))
&&(!button.lang_not||($.inArray(lang,button.lang_not)==-1))){
button.title?title=(button.key)?(button.title||'')+' [Ctrl+'+button.key+']':(button.title||''):title=(button.key)?(button.name||'')+' [Ctrl+'+button.key+']':(button.name||'');
key=(button.key)?'accesskey="'+button.key+'"':'';
if(button.separator){
li=$('<li class="markItUpSeparator">'+(button.separator||'')+'</li>').appendTo(ul);
}else{
i++;
for(j=levels.length-1;j>=0;j--){
t+=levels[j]+"-";
}
li=$('<li class="markItUpButton markItUpButton'+t+(i)+' '+(button.className||'')+'"><a href="#" '+key+' title="'+title+'"><em>'+(button.name||'')+'</em></a></li>')
.on("contextmenu.markItUp",function(){
return false;
}).on('click.markItUp',function(e){
e.preventDefault();
}).on("focusin.markItUp",function(){
setTimeout(function(){
$$.focus();
},0);
}).on('mouseup',function(e){
if(button.call){
eval(button.call)(e);
}
setTimeout(function(){markup(button)},1);
return false;
}).on('mouseenter.markItUp',function(){
$('> ul',this).show();
$(document).one('click',function(){
$('ul ul',header).hide();
}
);
}).on('mouseleave.markItUp',function(){
$('> ul',this).hide();
}).appendTo(ul);
if(button.dropMenu){
levels.push(i);
$(li).addClass('markItUpDropMenu').append(dropMenus(button.dropMenu));
}
}
}
});
levels.pop();
return ul;
}
function magicMarkups(string){
if(string){
string=string.toString();
string=string.replace(/\(\!\(([\s\S]*?)\)\!\)/g,
function(x,a){
var b=a.split('|!|');
if(altKey===true){
return(b[1]!==undefined)?b[1]:b[0];
}else{
return(b[1]===undefined)?"":b[0];
}
}
);
string=string.replace(/\[\!\[([\s\S]*?)\]\!\]/g,
function(x,a){
var b=a.split(':!:');
if(abort===true){
return false;
}
markitup_prompt=true;
value=prompt(b[0],(b[1])?b[1]:'');
if(value===null){
abort=true;
}
setTimeout(function(){markitup_prompt=false;},500);
return value;
}
);
return string;
}
return"";
}
function prepare(action){
if($.isFunction(action)){
action=action(hash);
}
return magicMarkups(action);
}
function build(string){
var openWith=prepare(clicked.openWith);
var placeHolder=prepare(clicked.placeHolder);
var replaceWith=prepare(clicked.replaceWith);
var closeWith=prepare(clicked.closeWith);
var openBlockWith=prepare(clicked.openBlockWith);
var closeBlockWith=prepare(clicked.closeBlockWith);
var multiline=clicked.multiline;
if(replaceWith!==""){
block=openWith+replaceWith+closeWith;
}else if(selection===''&&placeHolder!==''){
block=openWith+placeHolder+closeWith;
}else if(multiline===true){
string=string||selection;
var lines=[string],blocks=[];
if(multiline===true){
lines=string.split(/\r?\n/);
}
for(var l=0;l<lines.length;l++){
line=lines[l];
var trailingSpaces;
if(trailingSpaces=line.match(/ *$/)){
blocks.push(openWith+line.replace(/ *$/g,'')+closeWith+trailingSpaces);
}else{
blocks.push(openWith+line+closeWith);
}
}
block=blocks.join("\n");
}else{
block=openWith+(string||selection)+closeWith;
}
block=openBlockWith+block+closeBlockWith;
return{block:block,
openBlockWith:openBlockWith,
openWith:openWith,
replaceWith:replaceWith,
placeHolder:placeHolder,
closeWith:closeWith,
closeBlockWith:closeBlockWith
};
}
function selectWord(){
selectionBeforeAfter(/\s|[.,;:!¡?¿()]/);
selectionSave();
}
function selectLine(){
selectionBeforeAfter(/\r?\n/);
selectionSave();
}
function selectionRemoveLast(pattern){
if(!pattern)pattern=/\s/;
last=selection[selection.length-1];
if(last&&last.match(pattern)){
set(caretPosition,selection.length-1);
get();
$.extend(hash,{caretPosition:caretPosition,scrollPosition:scrollPosition});
}
}
function selectionBeforeAfter(pattern){
if(!pattern)pattern=/\s/;
sautAvantIE=sautApresIE=0;
if(browser.msie){
lenSelection=selection.length-fixIeBug(selection);
if(caretPosition){
set(caretPosition-1,2);
sautAvantIE=fixIeBug(document.selection.createRange().text);
}
set(caretPosition,2);
sautApresIE=fixIeBug(document.selection.createRange().text);
set(0,caretPosition);
before=document.selection.createRange().text;
set(caretPosition+lenSelection,textarea.value.length);
after=document.selection.createRange().text;
set(caretPosition,lenSelection);
selection=document.selection.createRange().text;
}else{
before=textarea.value.substring(0,caretPosition);
after=textarea.value.substring(caretPosition+selection.length-fixIeBug(selection));
}
before=before.split(pattern);
after=after.split(pattern);
if(sautAvantIE)before.push("");
if(sautApresIE)after.unshift("");
}
function selectionSave(){
nb_before=before?before[before.length-1].length:0;
nb_after=after?after[0].length:0;
nb=nb_before+selection.length+nb_after-fixIeBug(selection);
caretPosition=caretPosition-nb_before;
set(caretPosition,nb);
get();
$.extend(hash,{selection:selection,caretPosition:caretPosition,scrollPosition:scrollPosition});
}
function markup(button){
var len,j,n,i;
hash=clicked=button;
get();
$.extend(hash,{line:"",
root:options.root,
textarea:textarea,
selection:(selection||''),
caretPosition:caretPosition,
ctrlKey:ctrlKey,
shiftKey:shiftKey,
altKey:altKey
}
);
if(button.selectionType){
if(button.selectionType=="word"){
if(!selection){
selectWord();
}else{
selectionRemoveLast(/\s/);
}
}
if(button.selectionType=="line"){
selectLine();
}
if(button.selectionType=="return"){
if(!browser.msie){
selectionBeforeAfter(/\r?\n/);
before_last=before[before.length-1];
after='';
if(r=before_last.match(/^-([*#]+) ?(.*)$/)){
if(r[2]){
button.replaceWith="\n-"+r[1]+' ';
before_last='';
}else{
button.replaceWith="\n";
}
}else{
before_last='';
button.replaceWith="\n";
}
before[before.length-1]=before_last;
selectionSave();
}
}
}
prepare(options.beforeInsert);
prepare(clicked.beforeInsert);
if((ctrlKey===true&&shiftKey===true)||button.multiline===true){
prepare(clicked.beforeMultiInsert);
}
$.extend(hash,{line:1});
if((ctrlKey===true&&shiftKey===true)||button.forceMultiline===true){
lines=selection.split(/\r?\n/);
for(j=0,n=lines.length,i=0;i<n;i++){
if(n==1||$.trim(lines[i])!==''){
$.extend(hash,{line:++j,selection:lines[i]});
lines[i]=build(lines[i]).block;
}else{
lines[i]="";
}
}
string={block:lines.join('\n')};
start=caretPosition;
len=string.block.length+((browser.opera)?n-1:0);
}else if(ctrlKey===true){
string=build(selection);
start=caretPosition+string.openWith.length;
len=string.block.length-string.openWith.length-string.closeWith.length;
len=len-(string.block.match(/ $/)?1:0);
len-=fixIeBug(string.block);
}else if(shiftKey===true){
string=build(selection);
start=caretPosition;
len=string.block.length;
len-=fixIeBug(string.block);
}else{
string=build(selection);
start=caretPosition+string.block.length;
len=0;
start-=fixIeBug(string.block);
}
if((selection===''&&string.replaceWith==='')){
caretOffset+=fixOperaBug(string.block);
start=caretPosition+string.openBlockWith.length+string.openWith.length;
len=string.block.length-string.openBlockWith.length-string.openWith.length-string.closeWith.length-string.closeBlockWith.length;
caretOffset=$$.val().substring(caretPosition,$$.val().length).length;
caretOffset-=fixOperaBug($$.val().substring(0,caretPosition));
}
$.extend(hash,{caretPosition:caretPosition,scrollPosition:scrollPosition});
if(string.block!==selection&&abort===false){
insert(string.block);
set(start,len);
}else{
caretOffset=-1;
}
get();
$.extend(hash,{line:'',selection:selection});
if((ctrlKey===true&&shiftKey===true)||button.multiline===true){
prepare(clicked.afterMultiInsert);
}
prepare(clicked.afterInsert);
prepare(options.afterInsert);
if(previewWindow&&options.previewAutoRefresh){
refreshPreview();
}
shiftKey=altKey=ctrlKey=abort=false;
}
function fixOperaBug(string){
if(browser.opera){
return string.length-string.replace(/\n*/g,'').length;
}
return 0;
}
function fixIeBug(string){
if(browser.msie){
return string.length-string.replace(/\r*/g,'').length;
}
return 0;
}
function insert(block){
if(document.selection){
var newSelection=document.selection.createRange();
newSelection.text=block;
}else{
textarea.value=textarea.value.substring(0,caretPosition)+block+textarea.value.substring(caretPosition+selection.length,textarea.value.length);
}
}
function set(start,len){
if(textarea.createTextRange){
if(browser.opera&&browser.version>=9.5&&len==0){
return false;
}
range=textarea.createTextRange();
range.collapse(true);
range.moveStart('character',start);
range.moveEnd('character',len);
range.select();
}else if(textarea.setSelectionRange){
textarea.setSelectionRange(start,start+len);
}
textarea.scrollTop=scrollPosition;
textarea.focus();
}
function get(){
textarea.focus();
scrollPosition=textarea.scrollTop;
if(document.selection){
selection=document.selection.createRange().text;
if(browser.msie){
var range=document.selection.createRange(),rangeCopy=range.duplicate();
rangeCopy.moveToElementText(textarea);
caretPosition=-1;
while(rangeCopy.inRange(range)){
rangeCopy.moveStart('character');
caretPosition++;
}
}else{
caretPosition=textarea.selectionStart;
}
}else{
caretPosition=textarea.selectionStart;
selection=textarea.value.substring(caretPosition,textarea.selectionEnd);
}
return selection;
}
function preview(){
if(typeof options.previewHandler==='function'){
previewWindow=true;
}else if(options.previewInElement){
previewWindow=$(options.previewInElement);
}else if(!previewWindow||previewWindow.closed){
if(options.previewInWindow){
previewWindow=window.open('','preview',options.previewInWindow);
$(window).unload(function(){
previewWindow.close();
});
}else{
iFrame=$('<iframe class="markItUpPreviewFrame"></iframe>');
if(options.previewPosition=='after'){
iFrame.insertAfter(footer);
}else{
iFrame.insertBefore(header);
}
previewWindow=iFrame[iFrame.length-1].contentWindow||frame[iFrame.length-1];
}
}else if(altKey===true){
if(iFrame){
iFrame.remove();
}else{
previewWindow.close();
}
previewWindow=iFrame=false;
}
if(!options.previewAutoRefresh){
refreshPreview();
}
if(options.previewInWindow){
previewWindow.focus();
}
}
function refreshPreview(){
renderPreview();
}
function renderPreview(){
var phtml;
var parsedData=$$.val();
if(options.previewParser&&typeof options.previewParser==='function'){
parsedData=options.previewParser(parsedData);
}
if(options.previewHandler&&typeof options.previewHandler==='function'){
options.previewHandler(parsedData);
}else if(options.previewParserPath!==''){
$.ajax({
type:options.previewParserAjaxType,
dataType:'text',
global:false,
url:options.previewParserPath,
data:options.previewParserVar+'='+encodeURIComponent(parsedData),
success:function(data){
writeInPreview(localize(data,1));
}
});
}else{
if(!template){
$.ajax({
url:options.previewTemplatePath,
dataType:'text',
global:false,
success:function(data){
writeInPreview(localize(data,1).replace(/<!-- content -->/g,$$.val()));
}
});
}
}
return false;
}
function writeInPreview(data){
if(options.previewInElement){
$(options.previewInElement).html(data);
}else if(previewWindow&&previewWindow.document){
try{
sp=previewWindow.document.documentElement.scrollTop
}catch(e){
sp=0;
}
previewWindow.document.open();
previewWindow.document.write(data);
previewWindow.document.close();
previewWindow.document.documentElement.scrollTop=sp;
}
}
function keyPressed(e){
shiftKey=e.shiftKey;
altKey=e.altKey;
ctrlKey=(!(e.altKey&&e.ctrlKey))?(e.ctrlKey||e.metaKey):false;
if(e.type==='keydown'){
if(ctrlKey===true){
li=$('a[accesskey="'+((e.keyCode==13)?'\\n':String.fromCharCode(e.keyCode))+'"]',header).parent('li');
if(li.length!==0){
ctrlKey=false;
setTimeout(function(){
li.triggerHandler('mouseup');
},1);
return false;
}
}
if(!browser.opera){
if(e.keyCode===13||e.keyCode===10){
if(ctrlKey===true){
ctrlKey=false;
markup(options.onCtrlEnter);
return options.onCtrlEnter.keepDefault;
}else if(shiftKey===true){
shiftKey=false;
markup(options.onShiftEnter);
return options.onShiftEnter.keepDefault;
}else{
markup(options.onEnter);
return options.onEnter.keepDefault;
}
}
if(e.keyCode===9){
if(shiftKey==true||ctrlKey==true||altKey==true){
return false;
}
if(caretOffset!==-1){
get();
caretOffset=$$.val().length-caretOffset;
set(caretOffset,0);
caretOffset=-1;
return false;
}else{
markup(options.onTab);
return options.onTab.keepDefault;
}
}
}
}
}
function remove(){
$$.off(".markItUp").removeClass('markItUpEditor');
$$.parent('div').parent('div.markItUp').parent('div').replaceWith($$);
var relativeRef=$$.parent('div').parent('div.markItUp').parent('div');
if(relativeRef.length){
relativeRef.replaceWith($$);
}
$$.data('markItUp',null);
}
init();
});
};
$.fn.markItUpRemove=function(){
return this.each(function(){
$(this).markItUp('remove');
}
);
};
$.markItUp=function(settings){
var options={target:false};
$.extend(options,settings);
if(options.target){
return $(options.target).each(function(){
$(this).focus();
$(this).trigger('insertion',[options]);
});
}else{
$('textarea').trigger('insertion',[options]);
}
};
})(jQuery);


/* ../plugins-dist/porte_plume/javascript/jquery.previsu_spip.js?1551954377 */
;(function($){
$.fn.previsu_spip=function(settings){
var options;
options={
previewParserPath:'',
previewParserVar:'data',
textEditer:'Editer',
textVoir:'Voir',
textFullScreen:'Plein écran'
};
$.extend(options,settings);
return this.each(function(){
var $$,textarea,tabs,preview;
$$=$(this);
textarea=this;
function init(){
$$.addClass("pp_previsualisation");
if(!$$.parent().has('.markItUpContainer').length){
$$.barre_outils('vide');
}
var mark=$$.parent();
tabs=$('<div class="markItUpTabs"></div>').prependTo(mark);
$(tabs).append(
'<a href="#fullscreen" class="fullscreen">'+options.textFullScreen+'</a>'+
'<a href="#previsuVoir" class="previsuVoir">'+options.textVoir+'</a>'+
'<a href="#previsuEditer" class="previsuEditer on">'+options.textEditer+'</a>'
);
preview=$('<div class="markItUpPreview"></div>').insertAfter(mark.find('.markItUpHeader'));
preview.hide();
var is_full_screen=false;
var objet=mark.parents('.formulaire_spip')[0].className.match(/formulaire_editer_(\w+)/);
objet=(objet?objet[1]:'');
var champ=mark.parents('.editer')[0].className.match(/editer_(\w+)/);
champ=(champ?champ[1].toUpperCase():'');
var textarea=mark.find('textarea.pp_previsualisation');
var preview=mark.find('.markItUpPreview');
var dir=textarea.attr('dir');
if(dir){
preview.attr('dir',dir);
}
tabs.find('.fullscreen').click(function(){
if(!mark.is('.fullscreen')){
textarea.data('height-origin',textarea.css('height'));
}
mark.toggleClass('fullscreen');
if(mark.is('.fullscreen')){
is_full_screen=true;
mark.find('.markItUpHeader a').show();
if(!mark.is('.livepreview')){
var original_texte="";
function refresh_preview(){
var texte=textarea.val();
if(original_texte==texte){
return;
}
renderPreview(preview.addClass('ajaxLoad'),texte,champ,objet);
original_texte=texte;
}
var timerPreview=null;
mark.addClass('livepreview').find('.markItUpEditor').on('keyup click change focus refreshpreview',function(e){
if(is_full_screen){
if(timerPreview)clearTimeout(timerPreview);
timerPreview=setTimeout(refresh_preview,500);
}
});
$(window).on('keyup',function(e){
if(is_full_screen){
if(e.type=='keyup'&&e.keyCode==27&&!markitup_prompt){
mark.removeClass('fullscreen');
textarea.css('height',textarea.data('height-origin'));
is_full_screen=false;
}
}
});
}
mark.find('.markItUpEditor').trigger('refreshpreview');
}
else{
textarea.css('height',textarea.data('height-origin'));
if($(this).next().hasClass('on')){
mark.find('.markItUpHeader a').hide();
}
is_full_screen=false;
}
return false;
});
tabs.find('.previsuVoir').click(function(){
preview.height(
mark.find('.markItUpEditor').height()
+mark.find('.markItUpFooter').height()
);
mark.find('.markItUpHeader a,.markItUpEditor,.markItUpFooter').hide();
$(this).addClass('on').next().removeClass('on');
renderPreview(
preview.show().addClass('ajaxLoad'),
mark.find('textarea.pp_previsualisation').val(),
champ,
objet,
false
);
return false;
});
tabs.find('.previsuEditer').click(function(){
mark.find('.markItUpPreview').hide();
mark.find('.markItUpHeader a,.markItUpEditor,.markItUpFooter').show();
$(this).addClass('on').prev().removeClass('on');
return false;
});
}
function renderPreview(node,val,champ,objet,async){
if(options.previewParserPath!==''){
$.ajax({
type:'POST',
async:typeof(async)=="undefined"?true:async,
url:options.previewParserPath,
data:'champ='+champ
+'&objet='+objet
+'&'+options.previewParserVar+'='+encodeURIComponent(val),
success:function(data){
node.html(data).removeClass('ajaxLoad');
$("a",node).attr("target","blank");
}
});
}
}
init();
});
};
})(jQuery);


/* ../local/cache-js/jsdyn-javascript_porte_plume_start_js-7b14a507.js?1551957526 */

barre_outils_edition={"nameSpace":"edition","previewAutoRefresh":false,"onEnter":{"keepDefault":false,"selectionType":"return","replaceWith":"\n"}
,"onShiftEnter":{"keepDefault":false,"replaceWith":"\n_ "}
,"onCtrlEnter":{"keepDefault":false,"replaceWith":"\n\n"}
,"markupSet":[{"name":"Transformer en {{{intertitre}}}","key":"H","className":"outil_header1","openWith":"\n{{{","closeWith":"}}}\n","selectionType":"line"}
,{"name":"Mettre en {{gras}}","key":"B","className":"outil_bold","replaceWith":function(h){return espace_si_accolade(h,'{{','}}');},"selectionType":"word"}
,{"name":"Mettre en {italique}","key":"I","className":"outil_italic","replaceWith":function(h){return espace_si_accolade(h,'{','}');},"selectionType":"word"}
,{"name":"Mettre en liste","className":"outil_liste_ul separateur_avant","replaceWith":function(h){return outil_liste(h,'*');},"selectionType":"line","forceMultiline":true,"dropMenu":[{"id":"liste_ol","name":"Mettre en liste numérotée","className":"outil_liste_ol","replaceWith":function(h){return outil_liste(h,'#');},"display":true,"selectionType":"line","forceMultiline":true}
,{"id":"desindenter","name":"Désindenter une liste","className":"outil_desindenter","replaceWith":function(h){return outil_desindenter(h);},"display":true,"selectionType":"line","forceMultiline":true}
,{"id":"indenter","name":"Indenter une liste","className":"outil_indenter","replaceWith":function(h){return outil_indenter(h);},"display":true,"selectionType":"line","forceMultiline":true}
]
}
,{"name":"Transformer en [lien hypertexte->http://...]","key":"L","className":"outil_link separateur separateur_apres sepLink","openWith":"[","closeWith":"->[![Veuillez indiquer l’adresse de votre lien (vous pouvez indiquer une adresse Internet sous la forme http://www.monsite.com, une adresse courriel, ou simplement indiquer le numéro d’un article de ce site.]!]]"}
,{"name":"Transformer en [[Note de bas de page]]","className":"outil_notes separateur_avant","openWith":"[[","closeWith":"]]","selectionType":"word"}
,{"name":"<quote>Citer un message</quote>","key":"Q","className":"outil_quote separateur separateur_apres sepGuillemets","openWith":"\n<quote>","closeWith":"</quote>\n","selectionType":"word","dropMenu":[{"id":"barre_poesie","name":"Mettre en forme comme une <poesie>poésie</poesie>","className":"outil_poesie","openWith":"\n<poesie>","closeWith":"</poesie>\n","display":true,"selectionType":"line"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets","openWith":"«","closeWith":"»","lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_simples","openWith":"“","closeWith":"”","display":true,"lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_de","openWith":"„","closeWith":"“","lang":["bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_de_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_de_simples","openWith":"&sbquo;","closeWith":"‘","display":true,"lang":["bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_simples separateur_avant","openWith":"“","closeWith":"”","lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_autres_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_uniques","openWith":"‘","closeWith":"’","display":true,"lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
,{"name":"Insérer des caractères spécifiques","className":"outil_caracteres separateur separateur_apres sepCaracteres separateur_avant","dropMenu":[{"id":"A_grave","name":"Insérer un À","className":"outil_a_maj_grave","replaceWith":"À","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"E_aigu","name":"Insérer un É","className":"outil_e_maj_aigu","replaceWith":"É","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"E_grave","name":"Insérer un È","className":"outil_e_maj_grave","replaceWith":"È","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"aelig","name":"Insérer un æ","className":"outil_aelig","replaceWith":"æ","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"AElig","name":"Insérer un Æ","className":"outil_aelig_maj","replaceWith":"Æ","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"oe","name":"Insérer un œ","className":"outil_oe","replaceWith":"œ","display":true,"lang":["fr"]
}
,{"id":"OE","name":"Insérer un Œ","className":"outil_oe_maj","replaceWith":"Œ","display":true,"lang":["fr"]
}
,{"id":"Ccedil","name":"Insérer un Ç","className":"outil_ccedil_maj","replaceWith":"Ç","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"uppercase","name":"Passer en majuscules","className":"outil_uppercase","replaceWith":function(markitup){return markitup.selection.toUpperCase()},"display":true,"lang":["fr","en"]
}
,{"id":"lowercase","name":"Passer en minuscules","className":"outil_lowercase","replaceWith":function(markitup){return markitup.selection.toLowerCase()},"display":true,"lang":["fr","en"]
}
]
}
,{"name":"Insérer un code informatique (code)","className":"outil_code separateur separateur_apres sepCode","openWith":"<code>","closeWith":"</code>","dropMenu":[{"id":"cadre","name":"Insérer un code préformaté (cadre)","className":"outil_cadre","openWith":"<cadre>\n","closeWith":"\n</cadre>","display":true}
]
}
]
}
function outil_liste(h,c){
if((s=h.selection)&&(r=s.match(/^-([*#]+) (.*)$/))){
r[1]=r[1].replace(/[#*]/g,c);
s='-'+r[1]+' '+r[2];
}else{
s='-'+c+' '+s;
}
return s;
}
function outil_indenter(h){
if(s=h.selection){
if(s.substr(0,2)=='-*'){
s='-**'+s.substr(2);
}else if(s.substr(0,2)=='-#'){
s='-##'+s.substr(2);
}else{
s='-* '+s;
}
}
return s;
}
function outil_desindenter(h){
if(s=h.selection){
if(s.substr(0,3)=='-**'){
s='-*'+s.substr(3);
}else if(s.substr(0,3)=='-* '){
s=s.substr(3);
}else if(s.substr(0,3)=='-##'){
s='-#'+s.substr(3);
}else if(s.substr(0,3)=='-# '){
s=s.substr(3);
}
}
return s;
}
function espace_si_accolade(h,openWith,closeWith){
if(s=h.selection){
if(s.charAt(0)=='{'){
return openWith+' '+s+' '+closeWith;
}
else if(c=h.textarea.selectionStart){
if(h.textarea.value.charAt(c-1)=='{'){
return' '+openWith+s+closeWith+' ';
}
}
}
return openWith+s+closeWith;
}
barre_outils_forum={"nameSpace":"forum","previewAutoRefresh":false,"onEnter":{"keepDefault":false,"selectionType":"return","replaceWith":"\n"}
,"onShiftEnter":{"keepDefault":false,"replaceWith":"\n_ "}
,"onCtrlEnter":{"keepDefault":false,"replaceWith":"\n\n"}
,"markupSet":[{"name":"Mettre en {{gras}}","key":"B","className":"outil_bold","replaceWith":function(h){return espace_si_accolade(h,'{{','}}');},"selectionType":"word"}
,{"name":"Mettre en {italique}","key":"I","className":"outil_italic separateur_avant","replaceWith":function(h){return espace_si_accolade(h,'{','}');},"selectionType":"word"}
,{"name":"Transformer en [lien hypertexte->http://...]","key":"L","className":"outil_link separateur separateur_apres sepLink separateur_avant","openWith":"[","closeWith":"->[![Veuillez indiquer l’adresse de votre lien (vous pouvez indiquer une adresse Internet sous la forme http://www.monsite.com, une adresse courriel, ou simplement indiquer le numéro d’un article de ce site.]!]]"}
,{"name":"<quote>Citer un message</quote>","key":"Q","className":"outil_quote separateur separateur_apres sepGuillemets","openWith":"\n<quote>","closeWith":"</quote>\n","selectionType":"word"}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets","openWith":"«","closeWith":"»","lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_simples","openWith":"“","closeWith":"”","display":true,"lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_de","openWith":"„","closeWith":"“","lang":["bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_de_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_de_simples","openWith":"&sbquo;","closeWith":"‘","display":true,"lang":["bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_simples separateur_avant","openWith":"“","closeWith":"”","lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_autres_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_uniques","openWith":"‘","closeWith":"’","display":true,"lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
]
}
function outil_liste(h,c){
if((s=h.selection)&&(r=s.match(/^-([*#]+) (.*)$/))){
r[1]=r[1].replace(/[#*]/g,c);
s='-'+r[1]+' '+r[2];
}else{
s='-'+c+' '+s;
}
return s;
}
function outil_indenter(h){
if(s=h.selection){
if(s.substr(0,2)=='-*'){
s='-**'+s.substr(2);
}else if(s.substr(0,2)=='-#'){
s='-##'+s.substr(2);
}else{
s='-* '+s;
}
}
return s;
}
function outil_desindenter(h){
if(s=h.selection){
if(s.substr(0,3)=='-**'){
s='-*'+s.substr(3);
}else if(s.substr(0,3)=='-* '){
s=s.substr(3);
}else if(s.substr(0,3)=='-##'){
s='-#'+s.substr(3);
}else if(s.substr(0,3)=='-# '){
s=s.substr(3);
}
}
return s;
}
function espace_si_accolade(h,openWith,closeWith){
if(s=h.selection){
if(s.charAt(0)=='{'){
return openWith+' '+s+' '+closeWith;
}
else if(c=h.textarea.selectionStart){
if(h.textarea.value.charAt(c-1)=='{'){
return' '+openWith+s+closeWith+' ';
}
}
}
return openWith+s+closeWith;
}
barre_outils_vide={"nameSpace":"vide","previewAutoRefresh":false,"markupSet":[]
}
;(function($){
$.fn.barre_outils=function(nom,settings){
options={
lang:'fr'
};
$.extend(options,settings);
return $(this)
.not('.markItUpEditor, .no_barre')
.markItUp(eval('barre_outils_'+nom),{lang:options.lang})
.parent().find('.markItUpButton a').attr('tabindex',-1)
.end();
};
$.fn.barre_previsualisation=function(settings){
options={
previewParserPath:"index.php?action=porte_plume_previsu",
textEditer:"Modifier",
textVoir:"Voir"
};
$.extend(options,settings);
return $(this)
.not('.pp_previsualisation, .no_previsualisation')
.previsu_spip(options)
.parent().find('.markItUpTabs a').attr('tabindex',-1)
.end();
};
$(window).on('load',function(){
function barrebouilles(){
$('.formulaire_spip textarea.inserer_barre_forum').barre_outils('forum');
$('.formulaire_spip textarea.inserer_barre_edition').barre_outils('edition');
$('.formulaire_spip textarea.inserer_previsualisation').barre_previsualisation();
$('textarea.textarea_forum').barre_outils('forum');
$('.formulaire_forum textarea[name=texte]').barre_outils('forum');
$('.formulaire_spip textarea[name=texte]')
.barre_outils('edition').end()
.barre_previsualisation();
}
barrebouilles();
onAjaxLoad(barrebouilles);
});
})(jQuery);


/* ../plugins-dist/porte_plume/javascript/porte_plume_forcer_hauteur.js?1551954377 */
function barre_forcer_hauteur(){
jQuery(".markItUpEditor",this==window?null:this).each(function(){
var hauteur_min=jQuery(this).height();
var hauteur_max=parseInt(jQuery(window).height())-200;
var hauteur=hauteur_min;
var signes=jQuery(this).val().length;
if(signes){
var hauteur_signes=Math.round(signes/4)+50;
if(hauteur_signes>hauteur_min&&hauteur_signes<hauteur_max){
hauteur=hauteur_signes;
}else{
if(hauteur_signes>hauteur_max){
hauteur=hauteur_max;
}
}
jQuery(this).height(hauteur);
}
});
}
jQuery(window).on("load",function(){
barre_forcer_hauteur();
onAjaxLoad(barre_forcer_hauteur);
});


