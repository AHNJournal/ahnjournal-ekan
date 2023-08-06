/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
};
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (typeof exports == 'object') {
		// For Node.js.
		module.exports = factory(root);
	} else if (typeof define == 'function' && define.amd) {
		// For AMD. Register as an anonymous module.
		define([], factory.bind(root, root));
	} else {
		// For browser globals (not exposing the function separately).
		factory(root);
	}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));
;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){z=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof U?function(){U(a)}:c()}function s(){var t=0,e=new H(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){var e=Q[t],n=Q[t+1];e(n),Q[t]=void 0,Q[t+1]=void 0}N=0}function f(){try{var t=Function("return this")().require("vertx");return U=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[V]&&x(r);var o=n._state;if(o){var i=arguments[o-1];z(function(){return T(o,r,i,n._result)})}else j(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return w(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function y(t,e,n){z(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?w(t,n):A(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function m(t,e){e._state===Z?A(t,e._result):e._state===$?S(t,e._result):j(e,void 0,function(e){return w(t,e)},function(e){return S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?m(t,n):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n)}function w(e,n){if(e===n)S(e,v());else if(t(n)){var r=void 0;try{r=n.then}catch(o){return void S(e,o)}b(e,n,r)}else A(e,n)}function g(t){t._onerror&&t._onerror(t._result),E(t)}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&z(E,t))}function S(t,e){t._state===X&&(t._state=$,t._result=e,z(g,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+$]=r,0===i&&t._state&&z(E,t)}function E(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=!0;if(i){try{s=r(o)}catch(a){c=!1,u=a}if(n===s)return void S(n,d())}else s=o;n._state!==X||(i&&c?w(n,s):c===!1?S(n,u):t===Z?A(n,s):t===$&&S(n,s))}function M(t,e){try{e(function(e){w(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function P(){return tt++}function x(t){t[V]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function C(){return new Error("Array Methods must be provided an Array")}function O(t){return new et(this,t).promise}function k(t){var e=this;return new e(L(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return S(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var L=K,N=0,U=void 0,W=void 0,z=function(t,e){Q[N]=t,Q[N+1]=e,N+=2,2===N&&(W?W(a):R())},B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof require?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[V]||x(this.promise),L(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,C())}return t.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(u){s=!0,i=u}if(o===l&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var c=new n(p);s?S(c,i):b(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===X&&(this._remaining--,t===$?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){return n._settledAt(Z,e,t)},function(t){return n._settledAt($,e,t)})},t}(),nt=function(){function t(e){this[V]=P(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&Y(),this instanceof t?M(this,e):q())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt.polyfill(),nt});;
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
//     Underscore.js 1.13.6
//     https://underscorejs.org
//     (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var n="1.13.6",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,o=t.push,i=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l="undefined"!=typeof DataView,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var o=Array(r+1);for(u=0;u<r;u++)o[u]=arguments[u];return o[r]=e,n.apply(this,o)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function w(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function x(n){var r="[object "+n+"]";return function(n){return a.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function"),k=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof k&&(T=function(n){return"function"==typeof n||!1});var D=T,R=x("Object"),F=l&&R(new DataView(new ArrayBuffer(8))),V="undefined"!=typeof Map&&R(new Map),P=x("DataView");var q=F?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:P,U=s||x("Array");function W(n,r){return null!=n&&f.call(n,r)}var z=x("Arguments");!function(){z(arguments)||(z=function(n){return W(n,"callee")})}();var L=z;function $(n){return O(n)&&y(n)}function C(n){return function(){return n}}function K(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function J(n){return function(r){return null==r?void 0:r[n]}}var G=J("byteLength"),H=K(G),Q=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var X=c?function(n){return h?h(n)&&!q(n):H(n)&&Q.test(a.call(n))}:C(!1),Y=J("length");function Z(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=b.length,u=n.constructor,o=D(u)&&u.prototype||e,i="constructor";for(W(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=b[t])in n&&n[i]!==o[i]&&!r.contains(i)&&r.push(i)}function nn(n){if(!_(n))return[];if(p)return p(n);var r=[];for(var t in n)W(n,t)&&r.push(t);return g&&Z(n,r),r}function rn(n,r){var t=nn(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function en(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}tn.VERSION=n,tn.prototype.value=function(){return this._wrapped},tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value,tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var o=typeof n;return("function"===o||"object"===o||"object"==typeof r)&&function n(r,t,e,o){r instanceof tn&&(r=r._wrapped);t instanceof tn&&(t=t._wrapped);var i=a.call(r);if(i!==a.call(t))return!1;if(F&&"[object Object]"==i&&q(r)){if(!q(t))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(en(r),en(t),e,o)}var f="[object Array]"===i;if(!f&&X(r)){if(G(r)!==G(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;f=!0}if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var c=r.constructor,l=t.constructor;if(c!==l&&!(D(c)&&c instanceof c&&D(l)&&l instanceof l)&&"constructor"in r&&"constructor"in t)return!1}o=o||[];var s=(e=e||[]).length;for(;s--;)if(e[s]===r)return o[s]===t;if(e.push(r),o.push(t),f){if((s=r.length)!==t.length)return!1;for(;s--;)if(!on(r[s],t[s],e,o))return!1}else{var p,v=nn(r);if(s=v.length,nn(t).length!==s)return!1;for(;s--;)if(p=v[s],!W(t,p)||!on(r[p],t[p],e,o))return!1}return e.pop(),o.pop(),!0}(n,r,t,e)}function an(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Z(n,r),r}function fn(n){var r=Y(n);return function(t){if(null==t)return!1;var e=an(t);if(Y(e))return!1;for(var u=0;u<r;u++)if(!D(t[n[u]]))return!1;return n!==hn||!D(t[cn])}}var cn="forEach",ln="has",sn=["clear","delete"],pn=["get",ln,"set"],vn=sn.concat(cn,pn),hn=sn.concat(pn),yn=["add"].concat(sn,cn,ln),dn=V?fn(vn):x("Map"),gn=V?fn(hn):x("WeakMap"),bn=V?fn(yn):x("Set"),mn=x("WeakSet");function jn(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function _n(n){for(var r={},t=nn(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function wn(n){var r=[];for(var t in n)D(n[t])&&r.push(t);return r.sort()}function An(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,f=0;f<a;f++){var c=i[f];r&&void 0!==t[c]||(t[c]=o[c])}return t}}var xn=An(an),Sn=An(nn),On=An(an,!0);function Mn(n){if(!_(n))return{};if(v)return v(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function En(n){return U(n)?n:[n]}function Bn(n){return tn.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){var e=Nn(n,Bn(r));return w(e)?t:e}function Tn(n){return n}function kn(n){return n=Sn({},n),function(r){return rn(r,n)}}function Dn(n){return n=Bn(n),function(r){return Nn(r,n)}}function Rn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return function(){return n.apply(r,arguments)}}function Fn(n,r,t){return null==n?Tn:D(n)?Rn(n,r,t):_(n)&&!U(n)?kn(n):Dn(n)}function Vn(n,r){return Fn(n,r,1/0)}function Pn(n,r,t){return tn.iteratee!==Vn?tn.iteratee(n,r):Fn(n,r,t)}function qn(){}function Un(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}tn.toPath=En,tn.iteratee=Vn;var Wn=Date.now||function(){return(new Date).getTime()};function zn(n){var r=function(r){return n[r]},t="(?:"+nn(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$n=zn(Ln),Cn=zn(_n(Ln)),Kn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Jn=/(.)^/,Gn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Hn=/\\|'|\r|\n|\u2028|\u2029/g;function Qn(n){return"\\"+Gn[n]}var Xn=/^\s*(\w|\$)+\s*$/;var Yn=0;function Zn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var o=Mn(n.prototype),i=n.apply(o,u);return _(i)?i:o}var nr=j((function(n,r){var t=nr.placeholder,e=function(){for(var u=0,o=r.length,i=Array(o),a=0;a<o;a++)i[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)i.push(arguments[u++]);return Zn(n,e,this,this,i)};return e}));nr.placeholder=tn;var rr=j((function(n,r,t){if(!D(n))throw new TypeError("Bind must be called on a function");var e=j((function(u){return Zn(n,e,r,this,t.concat(u))}));return e})),tr=K(Y);function er(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=Y(n);o<i;o++){var a=n[o];if(tr(a)&&(U(a)||L(a)))if(r>1)er(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var ur=j((function(n,r){var t=(r=er(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=rr(n[e],n)}return n}));var or=j((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),ir=nr(or,tn,1);function ar(n){return function(){return!n.apply(this,arguments)}}function fr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var cr=nr(fr,2);function lr(n,r,t){r=Pn(r,t);for(var e,u=nn(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function sr(n){return function(r,t,e){t=Pn(t,e);for(var u=Y(r),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(r[o],o,r))return o;return-1}}var pr=sr(1),vr=sr(-1);function hr(n,r,t,e){for(var u=(t=Pn(t,e,1))(r),o=0,i=Y(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function yr(n,r,t){return function(e,u,o){var a=0,f=Y(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+f,a):f=o>=0?Math.min(o+1,f):o+f+1;else if(t&&o&&f)return e[o=t(e,u)]===u?o:-1;if(u!=u)return(o=r(i.call(e,a,f),$))>=0?o+a:-1;for(o=n>0?a:f-1;o>=0&&o<f;o+=n)if(e[o]===u)return o;return-1}}var dr=yr(1,pr,hr),gr=yr(-1,vr);function br(n,r,t){var e=(tr(n)?pr:lr)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function mr(n,r,t){var e,u;if(r=Rn(r,t),tr(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var o=nn(n);for(e=0,u=o.length;e<u;e++)r(n[o[e]],o[e],n)}return n}function jr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function _r(n){var r=function(r,t,e,u){var o=!tr(r)&&nn(r),i=(o||r).length,a=n>0?0:i-1;for(u||(e=r[o?o[a]:a],a+=n);a>=0&&a<i;a+=n){var f=o?o[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var o=arguments.length>=3;return r(n,Rn(t,u,4),e,o)}}var wr=_r(1),Ar=_r(-1);function xr(n,r,t){var e=[];return r=Pn(r,t),mr(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function Sr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function Or(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function Mr(n,r,t,e){return tr(n)||(n=jn(n)),("number"!=typeof t||e)&&(t=0),dr(n,r,t)>=0}var Er=j((function(n,r,t){var e,u;return D(r)?u=r:(r=Bn(r),e=r.slice(0,-1),r=r[r.length-1]),jr(n,(function(n){var o=u;if(!o){if(e&&e.length&&(n=Nn(n,e)),null==n)return;o=n[r]}return null==o?o:o.apply(n,t)}))}));function Br(n,r){return jr(n,Dn(r))}function Nr(n,r,t){var e,u,o=-1/0,i=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e>o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}var Ir=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Tr(n){return n?U(n)?i.call(n):S(n)?n.match(Ir):tr(n)?jr(n,Tn):jn(n):[]}function kr(n,r,t){if(null==r||t)return tr(n)||(n=jn(n)),n[Un(n.length-1)];var e=Tr(n),u=Y(e);r=Math.max(Math.min(r,u),0);for(var o=u-1,i=0;i<r;i++){var a=Un(i,o),f=e[i];e[i]=e[a],e[a]=f}return e.slice(0,r)}function Dr(n,r){return function(t,e,u){var o=r?[[],[]]:{};return e=Pn(e,u),mr(t,(function(r,u){var i=e(r,u,t);n(o,r,i)})),o}}var Rr=Dr((function(n,r,t){W(n,t)?n[t].push(r):n[t]=[r]})),Fr=Dr((function(n,r,t){n[t]=r})),Vr=Dr((function(n,r,t){W(n,t)?n[t]++:n[t]=1})),Pr=Dr((function(n,r,t){n[t?0:1].push(r)}),!0);function qr(n,r,t){return r in t}var Ur=j((function(n,r){var t={},e=r[0];if(null==n)return t;D(e)?(r.length>1&&(e=Rn(e,r[1])),r=an(n)):(e=qr,r=er(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}return t})),Wr=j((function(n,r){var t,e=r[0];return D(e)?(e=ar(e),r.length>1&&(t=r[1])):(r=jr(er(r,!1,!1),String),e=function(n,t){return!Mr(r,t)}),Ur(n,e,t)}));function zr(n,r,t){return i.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Lr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:zr(n,n.length-r)}function $r(n,r,t){return i.call(n,null==r||t?1:r)}var Cr=j((function(n,r){return r=er(r,!0,!0),xr(n,(function(n){return!Mr(r,n)}))})),Kr=j((function(n,r){return Cr(n,r)}));function Jr(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=Pn(t,e));for(var u=[],o=[],i=0,a=Y(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?Mr(o,c)||(o.push(c),u.push(f)):Mr(u,f)||u.push(f)}return u}var Gr=j((function(n){return Jr(er(n,!0,!0))}));function Hr(n){for(var r=n&&Nr(n,Y).length||0,t=Array(r),e=0;e<r;e++)t[e]=Br(n,e);return t}var Qr=j(Hr);function Xr(n,r){return n._chain?tn(r).chain():r}function Yr(n){return mr(wn(n),(function(r){var t=tn[r]=n[r];tn.prototype[r]=function(){var n=[this._wrapped];return o.apply(n,arguments),Xr(this,t.apply(tn,n))}})),tn}mr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];tn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Xr(this,t)}})),mr(["concat","join","slice"],(function(n){var r=t[n];tn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Xr(this,n)}}));var Zr=Yr({__proto__:null,VERSION:n,restArguments:j,isObject:_,isNull:function(n){return null===n},isUndefined:w,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:q,isArray:U,isFunction:D,isArguments:L,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:$,isTypedArray:X,isEmpty:function(n){if(null==n)return!0;var r=Y(n);return"number"==typeof r&&(U(n)||S(n)||L(n))?0===r:0===Y(nn(n))},isMatch:rn,isEqual:function(n,r){return on(n,r)},isMap:dn,isWeakMap:gn,isSet:bn,isWeakSet:mn,keys:nn,allKeys:an,values:jn,pairs:function(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:_n,functions:wn,methods:wn,extend:xn,extendOwn:Sn,assign:Sn,defaults:On,create:function(n,r){var t=Mn(n);return r&&Sn(t,r),t},clone:function(n){return _(n)?U(n)?n.slice():xn({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=Bn(r)).length,e=0;e<t;e++){var u=r[e];if(!W(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=Pn(r,t);for(var e=nn(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:Tn,constant:C,noop:qn,toPath:En,property:Dn,propertyOf:function(n){return null==n?qn:function(r){return In(n,r)}},matcher:kn,matches:kn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Rn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Un,now:Wn,escape:$n,unescape:Cn,templateSettings:Kn,template:function(n,r,t){!r&&t&&(r=t),r=On({},r,tn.templateSettings);var e=RegExp([(r.escape||Jn).source,(r.interpolate||Jn).source,(r.evaluate||Jn).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(e,(function(r,t,e,i,a){return o+=n.slice(u,a).replace(Hn,Qn),u=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),r})),o+="';\n";var i,a=r.variable;if(a){if(!Xn.test(a))throw new Error("variable is not a bare identifier: "+a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{i=new Function(a,"_",o)}catch(n){throw n.source=o,n}var f=function(n){return i.call(this,n,tn)};return f.source="function("+a+"){\n"+o+"}",f},result:function(n,r,t){var e=(r=Bn(r)).length;if(!e)return D(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=D(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Yn+"";return n?n+r:r},chain:function(n){var r=tn(n);return r._chain=!0,r},iteratee:Vn,partial:nr,bind:rr,bindAll:ur,memoize:function(n,r){var t=function(e){var u=t.cache,o=""+(r?r.apply(this,arguments):e);return W(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t},delay:or,defer:ir,throttle:function(n,r,t){var e,u,o,i,a=0;t||(t={});var f=function(){a=!1===t.leading?0:Wn(),e=null,i=n.apply(u,o),e||(u=o=null)},c=function(){var c=Wn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,o=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,i=n.apply(u,o),e||(u=o=null)):e||!1===t.trailing||(e=setTimeout(f,l)),i};return c.cancel=function(){clearTimeout(e),a=0,e=u=o=null},c},debounce:function(n,r,t){var e,u,o,i,a,f=function(){var c=Wn()-u;r>c?e=setTimeout(f,r-c):(e=null,t||(i=n.apply(a,o)),e||(o=a=null))},c=j((function(c){return a=this,o=c,u=Wn(),e||(e=setTimeout(f,r),t&&(i=n.apply(a,o))),i}));return c.cancel=function(){clearTimeout(e),e=o=a=null},c},wrap:function(n,r){return nr(r,n)},negate:ar,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:fr,once:cr,findKey:lr,findIndex:pr,findLastIndex:vr,sortedIndex:hr,indexOf:dr,lastIndexOf:gr,find:br,detect:br,findWhere:function(n,r){return br(n,kn(r))},each:mr,forEach:mr,map:jr,collect:jr,reduce:wr,foldl:wr,inject:wr,reduceRight:Ar,foldr:Ar,filter:xr,select:xr,reject:function(n,r,t){return xr(n,ar(Pn(r)),t)},every:Sr,all:Sr,some:Or,any:Or,contains:Mr,includes:Mr,include:Mr,invoke:Er,pluck:Br,where:function(n,r){return xr(n,kn(r))},max:Nr,min:function(n,r,t){var e,u,o=1/0,i=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e<o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o},shuffle:function(n){return kr(n,1/0)},sample:kr,sortBy:function(n,r,t){var e=0;return r=Pn(r,t),Br(jr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:Rr,indexBy:Fr,countBy:Vr,partition:Pr,toArray:Tr,size:function(n){return null==n?0:tr(n)?n.length:nn(n).length},pick:Ur,omit:Wr,first:Lr,head:Lr,take:Lr,initial:zr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:$r(n,Math.max(0,n.length-r))},rest:$r,tail:$r,drop:$r,compact:function(n){return xr(n,Boolean)},flatten:function(n,r){return er(n,r,!1)},without:Kr,uniq:Jr,unique:Jr,union:Gr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Y(n);e<u;e++){var o=n[e];if(!Mr(r,o)){var i;for(i=1;i<t&&Mr(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Cr,unzip:Hr,transpose:Hr,zip:Qr,object:function(n,r){for(var t={},e=0,u=Y(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(i.call(n,e,e+=r));return t},mixin:Yr,default:tn});return Zr._=Zr,Zr}));;
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

(function(r){var n=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(t,e,i){n.Backbone=r(n,i,t,e)})}else if(typeof exports!=="undefined"){var t=require("underscore"),e;try{e=require("jquery")}catch(t){}r(n,exports,t,e)}else{n.Backbone=r(n,{},n._,n.jQuery||n.Zepto||n.ender||n.$)}})(function(t,h,x,e){var i=t.Backbone;var a=Array.prototype.slice;h.VERSION="1.4.1";h.$=e;h.noConflict=function(){t.Backbone=i;return this};h.emulateHTTP=false;h.emulateJSON=false;var r=h.Events={};var o=/\s+/;var l;var u=function(t,e,i,r,n){var s=0,a;if(i&&typeof i==="object"){if(r!==void 0&&"context"in n&&n.context===void 0)n.context=r;for(a=x.keys(i);s<a.length;s++){e=u(t,e,a[s],i[a[s]],n)}}else if(i&&o.test(i)){for(a=i.split(o);s<a.length;s++){e=t(e,a[s],r,n)}}else{e=t(e,i,r,n)}return e};r.on=function(t,e,i){this._events=u(n,this._events||{},t,e,{context:i,ctx:this,listening:l});if(l){var r=this._listeners||(this._listeners={});r[l.id]=l;l.interop=false}return this};r.listenTo=function(t,e,i){if(!t)return this;var r=t._listenId||(t._listenId=x.uniqueId("l"));var n=this._listeningTo||(this._listeningTo={});var s=l=n[r];if(!s){this._listenId||(this._listenId=x.uniqueId("l"));s=l=n[r]=new p(this,t)}var a=c(t,e,i,this);l=void 0;if(a)throw a;if(s.interop)s.on(e,i);return this};var n=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,r){try{t.on(e,i,r)}catch(t){return t}};r.off=function(t,e,i){if(!this._events)return this;this._events=u(s,this._events,t,e,{context:i,listeners:this._listeners});return this};r.stopListening=function(t,e,i){var r=this._listeningTo;if(!r)return this;var n=t?[t._listenId]:x.keys(r);for(var s=0;s<n.length;s++){var a=r[n[s]];if(!a)break;a.obj.off(e,i,this);if(a.interop)a.off(e,i)}if(x.isEmpty(r))this._listeningTo=void 0;return this};var s=function(t,e,i,r){if(!t)return;var n=r.context,s=r.listeners;var a=0,o;if(!e&&!n&&!i){for(o=x.keys(s);a<o.length;a++){s[o[a]].cleanup()}return}o=e?[e]:x.keys(t);for(;a<o.length;a++){e=o[a];var h=t[e];if(!h)break;var l=[];for(var u=0;u<h.length;u++){var c=h[u];if(i&&i!==c.callback&&i!==c.callback._callback||n&&n!==c.context){l.push(c)}else{var f=c.listening;if(f)f.off(e,i)}}if(l.length){t[e]=l}else{delete t[e]}}return t};r.once=function(t,e,i){var r=u(f,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(r,e,i)};r.listenToOnce=function(t,e,i){var r=u(f,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,r)};var f=function(t,e,i,r){if(i){var n=t[e]=x.once(function(){r(e,n);i.apply(this,arguments)});n._callback=i}return t};r.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];u(d,this._events,t,void 0,i);return this};var d=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)v(n,r);if(s)v(s,[e].concat(r))}return t};var v=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};var p=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};p.prototype.on=r.on;p.prototype.off=function(t,e){var i;if(this.interop){this._events=u(s,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};p.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};r.bind=r.on;r.unbind=r.off;x.extend(h,r);var g=h.Model=function(t,e){var i=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=x.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)i=this.parse(i,e)||{};var r=x.result(this,"defaults");i=x.defaults(x.extend({},r,i),r);this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};x.extend(g.prototype,r,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return x.clone(this.attributes)},sync:function(){return h.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return x.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!x.iteratee(t,this)(this.attributes)},set:function(t,e,i){if(t==null)return this;var r;if(typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i||(i={});if(!this._validate(r,i))return false;var n=i.unset;var s=i.silent;var a=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=x.clone(this.attributes);this.changed={}}var h=this.attributes;var l=this.changed;var u=this._previousAttributes;for(var c in r){e=r[c];if(!x.isEqual(h[c],e))a.push(c);if(!x.isEqual(u[c],e)){l[c]=e}else{delete l[c]}n?delete h[c]:h[c]=e}if(this.idAttribute in r){var f=this.id;this.id=this.get(this.idAttribute);this.trigger("changeId",this,f,i)}if(!s){if(a.length)this._pending=i;for(var d=0;d<a.length;d++){this.trigger("change:"+a[d],this,h[a[d]],i)}}if(o)return this;if(!s){while(this._pending){i=this._pending;this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,x.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,x.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!x.isEmpty(this.changed);return x.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?x.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var i={};var r;for(var n in t){var s=t[n];if(x.isEqual(e[n],s))continue;i[n]=s;r=true}return r?i:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return x.clone(this._previousAttributes)},fetch:function(i){i=x.extend({parse:true},i);var r=this;var n=i.success;i.success=function(t){var e=i.parse?r.parse(t,i):t;if(!r.set(e,i))return false;if(n)n.call(i.context,r,t,i);r.trigger("sync",r,t,i)};G(this,i);return this.sync("read",this,i)},save:function(t,e,i){var r;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i=x.extend({validate:true,parse:true},i);var n=i.wait;if(r&&!n){if(!this.set(r,i))return false}else if(!this._validate(r,i)){return false}var s=this;var a=i.success;var o=this.attributes;i.success=function(t){s.attributes=o;var e=i.parse?s.parse(t,i):t;if(n)e=x.extend({},r,e);if(e&&!s.set(e,i))return false;if(a)a.call(i.context,s,t,i);s.trigger("sync",s,t,i)};G(this,i);if(r&&n)this.attributes=x.extend({},o,r);var h=this.isNew()?"create":i.patch?"patch":"update";if(h==="patch"&&!i.attrs)i.attrs=r;var l=this.sync(h,this,i);this.attributes=o;return l},destroy:function(e){e=e?x.clone(e):{};var i=this;var r=e.success;var n=e.wait;var s=function(){i.stopListening();i.trigger("destroy",i,i.collection,e)};e.success=function(t){if(n)s();if(r)r.call(e.context,i,t,e);if(!i.isNew())i.trigger("sync",i,t,e)};var t=false;if(this.isNew()){x.defer(e.success)}else{G(this,e);t=this.sync("delete",this,e)}if(!n)s();return t},url:function(){var t=x.result(this,"urlRoot")||x.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},x.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=x.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,x.extend(e,{validationError:i}));return false}});var m=h.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,x.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var _={add:true,remove:false};var E=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};x.extend(m.prototype,r,{model:g,preinitialize:function(){},initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return h.sync.apply(this,arguments)},add:function(t,e){return this.set(t,x.extend({merge:false},e,_))},remove:function(t,e){e=x.extend({},e);var i=!x.isArray(t);t=i?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return i?r[0]:r},set:function(t,e){if(t==null)return;e=x.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var i=!x.isArray(t);t=i?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var n=[];var s=[];var a=[];var o=[];var h={};var l=e.add;var u=e.merge;var c=e.remove;var f=false;var d=this.comparator&&r==null&&e.sort!==false;var v=x.isString(this.comparator)?this.comparator:null;var p,g;for(g=0;g<t.length;g++){p=t[g];var m=this.get(p);if(m){if(u&&p!==m){var _=this._isModel(p)?p.attributes:p;if(e.parse)_=m.parse(_,e);m.set(_,e);a.push(m);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;n.push(m)}t[g]=m}else if(l){p=t[g]=this._prepareModel(p,e);if(p){s.push(p);this._addReference(p,e);h[p.cid]=true;n.push(p)}}}if(c){for(g=0;g<this.length;g++){p=this.models[g];if(!h[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&l&&c;if(n.length&&b){y=this.length!==n.length||x.some(this.models,function(t,e){return t!==n[e]});this.models.length=0;E(this.models,n,0);this.length=this.models.length}else if(s.length){if(d)f=true;E(this.models,s,r==null?this.length:r);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(g=0;g<s.length;g++){if(r!=null)e.index=r+g;p=s[g];p.trigger("add",p,this,e)}if(f||y)this.trigger("sort",this,e);if(s.length||o.length||a.length){e.changes={added:s,removed:o,merged:a};this.trigger("update",this,e)}}return i?t[0]:t},reset:function(t,e){e=e?x.clone(e):{};for(var i=0;i<this.models.length;i++){this._removeReference(this.models[i],e)}e.previousModels=this.models;this._reset();t=this.add(t,x.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,x.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,x.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return a.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t,t.idAttribute)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var i=e.length;if(x.isFunction(e))e=e.bind(this);if(i===1||x.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(i){i=x.extend({parse:true},i);var r=i.success;var n=this;i.success=function(t){var e=i.reset?"reset":"set";n[e](t,i);if(r)r.call(i.context,n,t,i);n.trigger("sync",n,t,i)};G(this,i);return this.sync("read",this,i)},create:function(t,e){e=e?x.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t,e){return t[e||this.model.prototype.idAttribute||"id"]},values:function(){return new b(this,I)},keys:function(){return new b(this,k)},entries:function(){return new b(this,S)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?x.clone(e):{};e.collection=this;var i;if(this.model.prototype){i=new this.model(t,e)}else{i=this.model(t,e)}if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes,n.idAttribute);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i},_isModel:function(t){return t instanceof g},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes,t.idAttribute);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes,t.idAttribute);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="changeId"){var n=this.modelId(e.previousAttributes(),e.idAttribute);var s=this.modelId(e.attributes,e.idAttribute);if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var y=typeof Symbol==="function"&&Symbol.iterator;if(y){m.prototype[y]=m.prototype.values}var b=function(t,e){this._collection=t;this._kind=e;this._index=0};var I=1;var k=2;var S=3;if(y){b.prototype[y]=function(){return this}}b.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===I){e=t}else{var i=this._collection.modelId(t.attributes,t.idAttribute);if(this._kind===k){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var A=h.View=function(t){this.cid=x.uniqueId("view");this.preinitialize.apply(this,arguments);x.extend(this,x.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];x.extend(A.prototype,r,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof h.$?t:h.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=x.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!x.isFunction(i))i=this[i];if(!i)continue;var r=e.match(T);this.delegate(r[1],r[2],i.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=x.extend({},x.result(this,"attributes"));if(this.id)t.id=x.result(this,"id");if(this.className)t["class"]=x.result(this,"className");this.setElement(this._createElement(x.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(x.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var H=function(r,t,n,s){switch(t){case 1:return function(){return r[n](this[s])};case 2:return function(t){return r[n](this[s],t)};case 3:return function(t,e){return r[n](this[s],C(t,this),e)};case 4:return function(t,e,i){return r[n](this[s],C(t,this),e,i)};default:return function(){var t=a.call(arguments);t.unshift(this[s]);return r[n].apply(r,t)}}};var $=function(i,r,t,n){x.each(t,function(t,e){if(r[e])i.prototype[e]=H(r,t,e,n)})};var C=function(e,t){if(x.isFunction(e))return e;if(x.isObject(e)&&!t._isModel(e))return R(e);if(x.isString(e))return function(t){return t.get(e)};return e};var R=function(t){var e=x.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};x.each([[m,M,"models"],[g,N,"attributes"]],function(t){var i=t[0],e=t[1],r=t[2];i.mixin=function(t){var e=x.reduce(x.functions(t),function(t,e){t[e]=0;return t},{});$(i,t,e,r)};$(i,x,e,r)});h.sync=function(t,e,r){var i=j[t];x.defaults(r||(r={}),{emulateHTTP:h.emulateHTTP,emulateJSON:h.emulateJSON});var n={type:i,dataType:"json"};if(!r.url){n.url=x.result(e,"url")||V()}if(r.data==null&&e&&(t==="create"||t==="update"||t==="patch")){n.contentType="application/json";n.data=JSON.stringify(r.attrs||e.toJSON(r))}if(r.emulateJSON){n.contentType="application/x-www-form-urlencoded";n.data=n.data?{model:n.data}:{}}if(r.emulateHTTP&&(i==="PUT"||i==="DELETE"||i==="PATCH")){n.type="POST";if(r.emulateJSON)n.data._method=i;var s=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",i);if(s)return s.apply(this,arguments)}}if(n.type!=="GET"&&!r.emulateJSON){n.processData=false}var a=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(a)a.call(r.context,t,e,i)};var o=r.xhr=h.ajax(x.extend(n,r));e.trigger("request",e,o,r);return o};var j={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};h.ajax=function(){return h.$.ajax.apply(h.$,arguments)};var O=h.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;x.extend(O.prototype,r,{preinitialize:function(){},initialize:function(){},route:function(i,r,n){if(!x.isRegExp(i))i=this._routeToRegExp(i);if(x.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;h.history.route(i,function(t){var e=s._extractParameters(i,t);if(s.execute(n,e,r)!==false){s.trigger.apply(s,["route:"+r].concat(e));s.trigger("route",r,e);h.history.trigger("route",s,r,e)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,e){h.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=x.result(this,"routes");var t,e=x.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return x.map(i,function(t,e){if(e===i.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=h.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;x.extend(B.prototype,r,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=x.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var i=document.body;var r=i.insertBefore(this.iframe,i.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var n=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){n("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){n("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(e){if(!this.matchRoot())return false;e=this.fragment=this.getFragment(e);return x.some(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}})},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=t.replace(W,"");var n=this.decodeFragment(t);if(this.fragment===n)return;this.fragment=n;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});h.history=new B;var D=function(t,e){var i=this;var r;if(t&&x.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}x.extend(r,i,e);r.prototype=x.create(i.prototype,t);r.prototype.constructor=r;r.__super__=i.prototype;return r};g.extend=m.extend=O.extend=A.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(e,i){var r=i.error;i.error=function(t){if(r)r.call(i.context,e,t,i);e.trigger("error",e,t,i)}};return h});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};
  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
window.Drupal = {
  behaviors: {},
  locale: {}
};
(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };
  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;
        case '!':
          processedArgs[key] = args[key];
          break;
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }
    if (keys.length === 0) {
      return str;
    }
    var key = keys.pop();
    var fragments = str.split(key);
    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }
    return fragments.join(args[key]);
  };
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }
    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');
    try {
      url = decodeURIComponent(url);
    } catch (e) {}
    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };
  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}
    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }
    return translations[index];
  };
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };
  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;
    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };
  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
      deprecatedProperty = _ref2.deprecatedProperty,
      message = _ref2.message;
    if (!Proxy || !Reflect) {
      return target;
    }
    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }
        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };
  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };
  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (window.jQuery) {
  jQuery.noConflict();
}
document.documentElement.className += ' js';
(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };
  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){"use strict";return e.ui=e.ui||{},e.ui.version="1.13.2"}));

/*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.extend(e.expr.pseudos,{data:e.expr.createPseudo?e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}})):function(n,t,r){return!!e.data(n,r[3])}})}));

/*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));

/*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.focusable=function(i,t){var n,s,r,u,a,o=i.nodeName.toLowerCase();return"area"===o?(s=(n=i.parentNode).name,!(!i.href||!s||"map"!==n.nodeName.toLowerCase())&&((r=e("img[usemap='#"+s+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(o)?(u=!i.disabled)&&(a=e(i).closest("fieldset")[0])&&(u=!a.disabled):u="a"===o&&i.href||t,u&&e(i).is(":visible")&&function(e){var i=e.css("visibility");for(;"inherit"===i;)i=(e=e.parent()).css("visibility");return"visible"===i}(e(i)))},e.extend(e.expr.pseudos,{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable}));

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())}));

/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";if(e.expr.pseudos||(e.expr.pseudos=e.expr[":"]),e.uniqueSort||(e.uniqueSort=e.unique),!e.escapeSelector){var n=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,t=function(e,n){return n?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e};e.escapeSelector=function(e){return(e+"").replace(n,t)}}e.fn.even&&e.fn.odd||e.fn.extend({even:function(){return this.filter((function(e){return e%2==0}))},odd:function(){return this.filter((function(e){return e%2==1}))}})}));

/*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.plugin={add:function(n,i,t){var u,o=e.ui[n].prototype;for(u in t)o.plugins[u]=o.plugins[u]||[],o.plugins[u].push([i,t[u]])},call:function(e,n,i,t){var u,o=e.plugins[n];if(o&&(t||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(u=0;u<o.length;u++)e.options[o[u][0]]&&o[u][1].apply(e.element,i)}}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.safeActiveElement=function(e){var n;try{n=e.activeElement}catch(t){n=e.body}return n||(n=e.body),n.nodeName||(n=e.body),n}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.safeBlur=function(n){n&&"body"!==n.nodeName.toLowerCase()&&e(n).trigger("blur")}}));

/*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.scrollParent=function(e){var s=this.css("position"),n="absolute"===s,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var e=t(this);return(!n||"static"!==e.css("position"))&&o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==s&&i.length?i:t(this[0].ownerDocument||document)}}));

/*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){"use strict";return i.fn.extend({uniqueId:(e=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++e)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var e}));

/*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";var e,i=0,s=Array.prototype.hasOwnProperty,n=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove");e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return s||(s=i,i=t.Widget),Array.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr.pseudos[u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(t,e){r[t]="function"==typeof e?function(){function s(){return i.prototype[t].apply(this,arguments)}function n(e){return i.prototype[t].apply(this,e)}return function(){var t,i=this._super,o=this._superApply;return this._super=s,this._superApply=n,t=e.apply(this,arguments),this._super=i,this._superApply=o,t}}():e})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,o,a=n.call(arguments,1),r=0,l=a.length;r<l;r++)for(i in a[r])o=a[r][i],s.call(a[r],i)&&void 0!==o&&(t.isPlainObject(o)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],o):t.widget.extend({},o):e[i]=o);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=n.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,n=t.data(this,s);return"instance"===o?(l=n,!1):n?"function"!=typeof n[o]||"_"===o.charAt(0)?t.error("no such method '"+o+"' for "+e+" widget instance"):(i=n[o].apply(n,r))!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(){var i=[];e.element.each((function(e,n){t.map(s.classesElementLookup,(function(t){return t})).some((function(t){return t.is(n)}))||i.push(n)})),s._on(t(i),{remove:"_untrackClassesElement"})}function o(o,a){var r,l;for(l=0;l<o.length;l++)r=s.classesElementLookup[o[l]]||t(),e.add?(n(),r=t(t.uniqueSort(r.get().concat(e.element.get())))):r=t(r.not(e.element).get()),s.classesElementLookup[o[l]]=r,i.push(o[l]),a&&e.classes[o[l]]&&i.push(e.classes[o[l]])}return(e=t.extend({element:this.element,classes:this.options.classes||{}},e)).keys&&o(e.keys.match(/\S+/g)||[],!0),e.extra&&o(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})),this._off(t(e.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!("function"==typeof a&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})?n={duration:n}:!0===n&&(n={}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));

/*!
 * jQuery UI Autocomplete 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./menu","../keycode","../position","../safe-active-element","../version","../widget"],e):e(jQuery)}((function(e){"use strict";return e.widget("ui.autocomplete",{version:"1.13.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,liveRegionTimer:null,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,u="input"===n;this.isMultiLine=o||!u&&this._isContentEditable(this.element),this.valueMethod=this.element[o||u?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,void(i=!0);t=!1,s=!1,i=!1;var o=e.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:t=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case o.UP:t=!0,this._keyEvent("previous",n);break;case o.DOWN:t=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||s.preventDefault());if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){if(s)return s=!1,void e.preventDefault();this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().attr({unselectable:"on"}).menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault()},menufocus:function(t,i){var s,n;if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",(function(){e(t.target).trigger(t.originalEvent)}));n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),(s=i.item.attr("aria-label")||n.value)&&String.prototype.trim.call(s).length&&(clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay((function(){this.liveRegion.html(e("<div>").text(s))}),100))},menuselect:function(t,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==e.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay((function(){this.previous=n,this.selectedItem=s}))),!1!==this._trigger("select",t,{item:s})&&this._value(s.value),this.term=this._value(),this.close(t),this.selectedItem=s}}),this.liveRegion=e("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(t){var i=this.menu.element[0];return t.target===this.element[0]||t.target===i||e.contains(i,t.target)},_closeOnClickOutside:function(e){this._isEventTargetInWidget(e)||this.close()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front, dialog")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;Array.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay((function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;t&&(!t||i||s)||(this.selectedItem=null,this.search(null,e))}),this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):!1!==this._trigger("search",t)?this._search(e):void 0},_search:function(e){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=++this.requestIndex;return function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")}.bind(this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,(function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})}))},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,(function(e,i){s._renderItemData(t,i)}))},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<div>").text(i.label)).appendTo(t)},_move:function(e,t){if(this.menu.element.is(":visible"))return this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[e](t);this.search(null,t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(e,t),t.preventDefault())},_isContentEditable:function(e){if(!e.length)return!1;var t=e.prop("contentEditable");return"inherit"===t?this._isContentEditable(e.parent()):"true"===t}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=new RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,(function(e){return s.test(e.label||e.value||e)}))}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay((function(){this.liveRegion.html(e("<div>").text(i))}),100))}}),e.ui.autocomplete}));

/*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.labels=function(){var e,s,i,n,a;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(a=(e=this.eq(0).parents().last()).add(e.length?e.siblings():this.siblings()),s="label[for='"+t.escapeSelector(i)+"']",n=n.add(a.find(s).addBack(s))),this.pushStack(n)):this.pushStack([])}}));

/*!
 * jQuery UI Menu 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],e):e(jQuery)}((function(e){"use strict";return e.widget("ui.menu",{version:"1.13.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.lastMousePosition={x:null,y:null},this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault(),this._activateItem(e)},"click .ui-menu-item":function(t){var i=e(t.target),s=e(e.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":"_activateItem","mousemove .ui-menu-item":"_activateItem",mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this._menuItems().first();t||this.focus(e,i)},blur:function(t){this._delay((function(){!e.contains(this.element[0],e.ui.safeActiveElement(this.document[0]))&&this.collapseAll(t)}))},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e,!0),this.mouseHandled=!1}})},_activateItem:function(t){if(!this.previousFilter&&(t.clientX!==this.lastMousePosition.x||t.clientY!==this.lastMousePosition.y)){this.lastMousePosition={x:t.clientX,y:t.clientY};var i=e(t.target).closest(".ui-menu-item"),s=e(t.currentTarget);i[0]===s[0]&&(s.is(".ui-state-active")||(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(t,s)))}},_destroy:function(){var t=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),t.children().each((function(){var t=e(this);t.data("ui-menu-submenu-caret")&&t.remove()}))},_keydown:function(t){var i,s,n,a,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,s=this.previousFilter||"",a=!1,n=t.keyCode>=96&&t.keyCode<=105?(t.keyCode-96).toString():String.fromCharCode(t.keyCode),clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),(i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i).length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay((function(){delete this.previousFilter}),1e3)):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,i,s,n,a=this,u=this.options.icons.submenu,o=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),i=o.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each((function(){var t=e(this),i=t.prev(),s=e("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+u),i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))})),this._addClass(i,"ui-menu","ui-widget ui-widget-content ui-front"),(t=o.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function(){var t=e(this);a._isDivider(t)&&a._addClass(t,"ui-menu-divider","ui-widget-content")})),n=(s=t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(s,"ui-menu-item")._addClass(n,"ui-menu-item-wrapper"),t.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){if("icons"===e){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,t.submenu)}this._super(e,t)},_setOptionDisabled:function(e){this._super(e),this.element.attr("aria-disabled",String(e)),this._toggleClass(null,"ui-state-disabled",!!e)},focus:function(e,t){var i,s,n;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay((function(){this._close()}),this.delay),(i=t.children(".ui-menu")).length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,u,o;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),u=this.activeMenu.height(),o=t.outerHeight(),n<0?this.activeMenu.scrollTop(a+n):n+o>u&&this.activeMenu.scrollTop(a+n-u+o))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",e,{item:this.active}),this.active=null)},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay((function(){this._close(),this._open(e)}),this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay((function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s}),i?0:this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this._menuItems(this.active.children(".ui-menu")).first();t&&t.length&&(this._open(t.parent()),this._delay((function(){this.focus(e,t)})))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_menuItems:function(e){return(e||this.element).find(this.options.items).filter(".ui-menu-item")},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").last():this.active[e+"All"](".ui-menu-item").first()),s&&s.length&&this.active||(s=this._menuItems(this.activeMenu)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;this.active?this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.innerHeight(),0===e.fn.jquery.indexOf("3.2.")&&(n+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.nextAll(".ui-menu-item").each((function(){return(i=e(this)).offset().top-s-n<0})),this.focus(t,i)):this.focus(t,this._menuItems(this.activeMenu)[this.active?"last":"first"]())):this.next(t)},previousPage:function(t){var i,s,n;this.active?this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.innerHeight(),0===e.fn.jquery.indexOf("3.2.")&&(n+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.prevAll(".ui-menu-item").each((function(){return(i=e(this)).offset().top-s+n>0})),this.focus(t,i)):this.focus(t,this._menuItems(this.activeMenu).first())):this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=new RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function(){return s.test(String.prototype.trim.call(e(this).children(".ui-menu-item-wrapper").text()))}))}})}));

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });
  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }
  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');
    if ($contextuals.length <= 1) {
      return;
    }
    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);
      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');
      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');
      $nestedContextual.css({
        top: $nestedContextual.position().top + height
      });
    }
  }
  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;
    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));
    var destination = "destination=".concat(Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath + window.location.search)));
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });
    var title = '';
    var $regionHeading = $region.find('h2');
    if ($regionHeading.length) {
      title = $regionHeading[0].textContent.trim();
    }
    var model = new contextual.StateModel({
      title: title
    });
    var viewOptions = $.extend({
      el: $contextual,
      model: model
    }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({
      el: $region,
      model: model
    }, options)));
    contextual.collection.add(model);
    $(document).trigger('drupalContextualLinkAdded', Drupal.deprecatedProperty({
      target: {
        $el: $contextual,
        $region: $region,
        model: model
      },
      deprecatedProperty: 'model',
      message: 'The model property is deprecated in drupal:9.4.0 and is removed from drupal:11.0.0. There is no replacement.'
    }));
    adjustIfNestedAndOverlapping($contextual);
  }
  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);
      var $placeholders = $(once('contextual-render', '[data-contextual-id]', context));
      if ($placeholders.length === 0) {
        return;
      }
      var ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token')
        });
      });
      var uncachedIDs = [];
      var uncachedTokens = [];
      ids.forEach(function (contextualID) {
        var html = storage.getItem("Drupal.contextual.".concat(contextualID.id));
        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find("[data-contextual-id=\"".concat(contextualID.id, "\"]:empty")).eq(0), html);
          });
          return;
        }
        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });
      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: {
            'ids[]': uncachedIDs,
            'tokens[]': uncachedTokens
          },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem("Drupal.contextual.".concat(contextualID), html);
              if (html.length > 0) {
                $placeholders = $context.find("[data-contextual-id=\"".concat(contextualID, "\"]"));
                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };
  Drupal.contextual = {
    views: [],
    regionViews: []
  };
  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel
  });
  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };
  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',
      regionIsHovered: false,
      hasFocus: false,
      isOpen: false,
      isLocked: false
    },
    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },
    render: function render() {
      var _this = this;
      var isOpen = this.model.get('isOpen');
      this.$el.find('.contextual-links').prop('hidden', !isOpen);
      var $trigger = this.$el.find('.trigger');
      $trigger.each(function (index, element) {
        element.textContent = Drupal.t('@action @title configuration options', {
          '@action': !isOpen ? _this.options.strings.open : _this.options.strings.close,
          '@title': _this.model.get('title')
        });
      }).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },
    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var touchStart = false;
      return {
        touchstart: function touchstart() {
          touchStart = true;
        },
        mouseenter: function mouseenter() {
          if (!touchStart) {
            this.model.set('regionIsHovered', true);
          }
        },
        mouseleave: function mouseleave() {
          if (!touchStart) {
            this.model.close().blur().set('regionIsHovered', false);
          }
        },
        mousemove: function mousemove() {
          touchStart = false;
        }
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      var touchStart = false;
      return {
        touchstart: function touchstart() {
          touchStart = true;
        },
        mouseenter: function mouseenter() {
          if (!touchStart) {
            this.model.focus();
          }
        },
        mousemove: function mousemove() {
          touchStart = false;
        },
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');
      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;
      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);
      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,o=e.tabbable={};t(o),o.noConflict=function(){return e.tabbable=n,o}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},a=function(e,t,o){var i=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&i.unshift(e),i=i.filter(o)},l=function e(t,o,i){for(var a=[],l=Array.from(t);l.length;){var u=l.shift();if("SLOT"===u.tagName){var c=u.assignedElements(),d=e(c.length?c:u.children,!0,i);i.flatten?a.push.apply(a,d):a.push({scope:u,candidates:d})}else{r.call(u,n)&&i.filter(u)&&(o||!t.includes(u))&&a.push(u);var f=u.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(u),s=!i.shadowRootFilter||i.shadowRootFilter(u);if(f&&s){var p=e(!0===f?u.children:f.children,!0,i);i.flatten?a.push.apply(a,p):a.push({scope:u,candidates:p})}else l.unshift.apply(l,u.children)}}return a},u=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},f=function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||i(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},s=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},p=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var a=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(a,"details:not([open]) *"))return!0;var l=i(e).host,u=(null==l?void 0:l.ownerDocument.contains(l))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return s(e)}else{if("function"==typeof o){for(var c=e;e;){var d=e.parentElement,f=i(e);if(d&&!d.shadowRoot&&!0===o(d))return s(e);e=e.assignedSlot?e.assignedSlot:d||f===e.ownerDocument?d:f.host}e=c}if(u)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!r.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},h=function(e,t){return!(f(t)||u(t)<0||!p(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},m=t.concat("iframe").join(",");e.focusable=function(e,t){return(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:p.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a(e,t.includeContainer,p.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,m)&&p(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&h(t,e)},e.tabbable=function(e,t){return function e(t){var n=[],o=[];return t.forEach((function(t,r){var i=!!t.scope,a=i?t.scope:t,l=u(a,i),c=i?e(t.candidates):a;0===l?i?n.push.apply(n,c):n.push(a):o.push({documentOrder:r,tabIndex:l,item:t,isScope:i,content:c})})),o.sort(c).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)}((t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:h.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):a(e,t.includeContainer,h.bind(null,t)))},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function ($, Drupal, drupalSettings) {
  var showWeight = JSON.parse(localStorage.getItem('Drupal.tableDrag.showWeight'));
  Drupal.behaviors.tableDrag = {
    attach: function attach(context, settings) {
      function initTableDrag(table, base) {
        if (table.length) {
          Drupal.tableDrag[base] = new Drupal.tableDrag(table[0], settings.tableDrag[base]);
        }
      }
      Object.keys(settings.tableDrag || {}).forEach(function (base) {
        initTableDrag($(once('tabledrag', "#".concat(base), context)), base);
      });
    }
  };
  Drupal.tableDrag = function (table, tableSettings) {
    var _this = this;
    var self = this;
    var $table = $(table);
    this.$table = $(table);
    this.table = table;
    this.tableSettings = tableSettings;
    this.dragObject = null;
    this.rowObject = null;
    this.oldRowElement = null;
    this.oldY = null;
    this.changed = false;
    this.maxDepth = 0;
    this.rtl = $(this.table).css('direction') === 'rtl' ? -1 : 1;
    this.striping = $(this.table).data('striping') === 1;
    this.scrollSettings = {
      amount: 4,
      interval: 50,
      trigger: 70
    };
    this.scrollInterval = null;
    this.scrollY = 0;
    this.windowHeight = 0;
    this.$toggleWeightButton = null;
    this.indentEnabled = false;
    Object.keys(tableSettings || {}).forEach(function (group) {
      Object.keys(tableSettings[group] || {}).forEach(function (n) {
        if (tableSettings[group][n].relationship === 'parent') {
          _this.indentEnabled = true;
        }
        if (tableSettings[group][n].limit > 0) {
          _this.maxDepth = tableSettings[group][n].limit;
        }
      });
    });
    if (this.indentEnabled) {
      this.indentCount = 1;
      var indent = Drupal.theme('tableDragIndentation');
      var testRow = $('<tr></tr>').addClass('draggable').appendTo(table);
      var testCell = $('<td></td>').appendTo(testRow).prepend(indent).prepend(indent);
      var $indentation = testCell.find('.js-indentation');
      this.indentAmount = $indentation.get(1).offsetLeft - $indentation.get(0).offsetLeft;
      testRow.remove();
    }
    $table.find('> tr.draggable, > tbody > tr.draggable').each(function () {
      self.makeDraggable(this);
    });
    var $toggleWeightWrapper = $(Drupal.theme('tableDragToggle'));
    this.$toggleWeightButton = $toggleWeightWrapper.find('[data-drupal-selector="tabledrag-toggle-weight"]');
    this.$toggleWeightButton.on('click', $.proxy(function (e) {
      e.preventDefault();
      this.toggleColumns();
    }, this));
    $table.before($toggleWeightWrapper);
    self.initColumns();
    $(document).on('touchmove', function (event) {
      return self.dragRow(event.originalEvent.touches[0], self);
    });
    $(document).on('touchend', function (event) {
      return self.dropRow(event.originalEvent.touches[0], self);
    });
    $(document).on('mousemove pointermove', function (event) {
      return self.dragRow(event, self);
    });
    $(document).on('mouseup pointerup', function (event) {
      return self.dropRow(event, self);
    });
    $(window).on('storage', $.proxy(function (e) {
      if (e.originalEvent.key === 'Drupal.tableDrag.showWeight') {
        showWeight = JSON.parse(e.originalEvent.newValue);
        this.displayColumns(showWeight);
      }
    }, this));
  };
  Drupal.tableDrag.prototype.initColumns = function () {
    var _this2 = this;
    var $table = this.$table;
    var hidden;
    var cell;
    var columnIndex;
    Object.keys(this.tableSettings || {}).forEach(function (group) {
      Object.keys(_this2.tableSettings[group]).some(function (tableSetting) {
        var field = $table.find(".".concat(_this2.tableSettings[group][tableSetting].target)).eq(0);
        if (field.length && _this2.tableSettings[group][tableSetting].hidden) {
          hidden = _this2.tableSettings[group][tableSetting].hidden;
          cell = field.closest('td');
          return true;
        }
        return false;
      });
      if (hidden && cell[0]) {
        columnIndex = cell.parent().find('> td').index(cell.get(0)) + 1;
        $table.find('> thead > tr, > tbody > tr, > tr').each(_this2.addColspanClass(columnIndex));
      }
    });
    this.displayColumns(showWeight);
  };
  Drupal.tableDrag.prototype.addColspanClass = function (columnIndex) {
    return function () {
      var $row = $(this);
      var index = columnIndex;
      var cells = $row.children();
      var cell;
      cells.each(function (n) {
        if (n < index && this.colSpan && this.colSpan > 1) {
          index -= this.colSpan - 1;
        }
      });
      if (index > 0) {
        cell = cells.filter(":nth-child(".concat(index, ")"));
        if (cell[0].colSpan && cell[0].colSpan > 1) {
          cell.addClass('tabledrag-has-colspan');
        } else {
          cell.addClass('tabledrag-hide');
        }
      }
    };
  };
  Drupal.tableDrag.prototype.displayColumns = function (displayWeight) {
    if (displayWeight) {
      this.showColumns();
    } else {
      this.hideColumns();
    }
    this.$toggleWeightButton.html(Drupal.theme('toggleButtonContent', displayWeight));
    $(once.filter('tabledrag', 'table')).trigger('columnschange', !!displayWeight);
  };
  Drupal.tableDrag.prototype.toggleColumns = function () {
    showWeight = !showWeight;
    this.displayColumns(showWeight);
    if (showWeight) {
      localStorage.setItem('Drupal.tableDrag.showWeight', showWeight);
    } else {
      localStorage.removeItem('Drupal.tableDrag.showWeight');
    }
  };
  Drupal.tableDrag.prototype.hideColumns = function () {
    var $tables = $(once.filter('tabledrag', 'table'));
    $tables.find('.tabledrag-hide').css('display', 'none');
    $tables.find('.tabledrag-handle').css('display', '');
    $tables.find('.tabledrag-has-colspan').each(function () {
      this.colSpan -= 1;
    });
  };
  Drupal.tableDrag.prototype.showColumns = function () {
    var $tables = $(once.filter('tabledrag', 'table'));
    $tables.find('.tabledrag-hide').css('display', '');
    $tables.find('.tabledrag-handle').css('display', 'none');
    $tables.find('.tabledrag-has-colspan').each(function () {
      this.colSpan += 1;
    });
  };
  Drupal.tableDrag.prototype.rowSettings = function (group, row) {
    var field = $(row).find(".".concat(group));
    var tableSettingsGroup = this.tableSettings[group];
    return Object.keys(tableSettingsGroup).map(function (delta) {
      var targetClass = tableSettingsGroup[delta].target;
      var rowSettings;
      if (field.is(".".concat(targetClass))) {
        rowSettings = {};
        Object.keys(tableSettingsGroup[delta]).forEach(function (n) {
          rowSettings[n] = tableSettingsGroup[delta][n];
        });
      }
      return rowSettings;
    }).filter(function (rowSetting) {
      return rowSetting;
    })[0];
  };
  Drupal.tableDrag.prototype.makeDraggable = function (item) {
    var self = this;
    var $item = $(item);
    $item.find('td:first-of-type').find('a').addClass('menu-item__link');
    var $handle = $(Drupal.theme('tableDragHandle'));
    var $indentationLast = $item.find('td:first-of-type').find('.js-indentation').eq(-1);
    if ($indentationLast.length) {
      $indentationLast.after($handle);
      self.indentCount = Math.max($item.find('.js-indentation').length, self.indentCount);
    } else {
      $item.find('td').eq(0).prepend($handle);
    }
    $handle.on('mousedown touchstart pointerdown', function (event) {
      event.preventDefault();
      if (event.originalEvent.type === 'touchstart') {
        event = event.originalEvent.touches[0];
      }
      self.dragStart(event, self, item);
    });
    $handle.on('click', function (e) {
      e.preventDefault();
    });
    $handle.on('focus', function () {
      self.safeBlur = true;
    });
    $handle.on('blur', function (event) {
      if (self.rowObject && self.safeBlur) {
        self.dropRow(event, self);
      }
    });
    $handle.on('keydown', function (event) {
      if (event.keyCode !== 9 && !self.rowObject) {
        self.rowObject = new self.row(item, 'keyboard', self.indentEnabled, self.maxDepth, true);
      }
      var keyChange = false;
      var groupHeight;
      switch (event.keyCode) {
        case 37:
        case 63234:
          keyChange = true;
          self.rowObject.indent(-1 * self.rtl);
          break;
        case 38:
        case 63232:
          {
            var $previousRow = $(self.rowObject.element).prev('tr').eq(0);
            var previousRow = $previousRow.get(0);
            while (previousRow && $previousRow.is(':hidden')) {
              $previousRow = $(previousRow).prev('tr').eq(0);
              previousRow = $previousRow.get(0);
            }
            if (previousRow) {
              self.safeBlur = false;
              self.rowObject.direction = 'up';
              keyChange = true;
              if ($(item).is('.tabledrag-root')) {
                groupHeight = 0;
                while (previousRow && $previousRow.find('.js-indentation').length) {
                  $previousRow = $(previousRow).prev('tr').eq(0);
                  previousRow = $previousRow.get(0);
                  groupHeight += $previousRow.is(':hidden') ? 0 : previousRow.offsetHeight;
                }
                if (previousRow) {
                  self.rowObject.swap('before', previousRow);
                  window.scrollBy(0, -groupHeight);
                }
              } else if (self.table.tBodies[0].rows[0] !== previousRow || $previousRow.is('.draggable')) {
                self.rowObject.swap('before', previousRow);
                self.rowObject.interval = null;
                self.rowObject.indent(0);
                window.scrollBy(0, -parseInt(item.offsetHeight, 10));
              }
              $handle.trigger('focus');
            }
            break;
          }
        case 39:
        case 63235:
          keyChange = true;
          self.rowObject.indent(self.rtl);
          break;
        case 40:
        case 63233:
          {
            var $nextRow = $(self.rowObject.group).eq(-1).next('tr').eq(0);
            var nextRow = $nextRow.get(0);
            while (nextRow && $nextRow.is(':hidden')) {
              $nextRow = $(nextRow).next('tr').eq(0);
              nextRow = $nextRow.get(0);
            }
            if (nextRow) {
              self.safeBlur = false;
              self.rowObject.direction = 'down';
              keyChange = true;
              if ($(item).is('.tabledrag-root')) {
                groupHeight = 0;
                var nextGroup = new self.row(nextRow, 'keyboard', self.indentEnabled, self.maxDepth, false);
                if (nextGroup) {
                  $(nextGroup.group).each(function () {
                    groupHeight += $(this).is(':hidden') ? 0 : this.offsetHeight;
                  });
                  var nextGroupRow = $(nextGroup.group).eq(-1).get(0);
                  self.rowObject.swap('after', nextGroupRow);
                  window.scrollBy(0, parseInt(groupHeight, 10));
                }
              } else {
                self.rowObject.swap('after', nextRow);
                self.rowObject.interval = null;
                self.rowObject.indent(0);
                window.scrollBy(0, parseInt(item.offsetHeight, 10));
              }
              $handle.trigger('focus');
            }
            break;
          }
      }
      if (self.rowObject && self.rowObject.changed === true) {
        $(item).addClass('drag');
        if (self.oldRowElement) {
          $(self.oldRowElement).removeClass('drag-previous');
        }
        self.oldRowElement = item;
        if (self.striping === true) {
          self.restripeTable();
        }
        self.onDrag();
      }
      if (keyChange) {
        return false;
      }
    });
    $handle.on('keypress', function (event) {
      switch (event.keyCode) {
        case 37:
        case 38:
        case 39:
        case 40:
          return false;
      }
    });
  };
  Drupal.tableDrag.prototype.dragStart = function (event, self, item) {
    self.dragObject = {};
    self.dragObject.initOffset = self.getPointerOffset(item, event);
    self.dragObject.initPointerCoords = self.pointerCoords(event);
    if (self.indentEnabled) {
      self.dragObject.indentPointerPos = self.dragObject.initPointerCoords;
    }
    if (self.rowObject) {
      $(self.rowObject.element).find('a.tabledrag-handle').trigger('blur');
    }
    self.rowObject = new self.row(item, 'pointer', self.indentEnabled, self.maxDepth, true);
    self.table.topY = $(self.table).offset().top;
    self.table.bottomY = self.table.topY + self.table.offsetHeight;
    $(item).addClass('drag');
    $('body').addClass('drag');
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }
    self.oldY = self.pointerCoords(event).y;
  };
  Drupal.tableDrag.prototype.dragRow = function (event, self) {
    if (self.dragObject) {
      self.currentPointerCoords = self.pointerCoords(event);
      var y = self.currentPointerCoords.y - self.dragObject.initOffset.y;
      var x = self.currentPointerCoords.x - self.dragObject.initOffset.x;
      if (y !== self.oldY) {
        self.rowObject.direction = y > self.oldY ? 'down' : 'up';
        self.oldY = y;
        var scrollAmount = self.checkScroll(self.currentPointerCoords.y);
        clearInterval(self.scrollInterval);
        if (scrollAmount > 0 && self.rowObject.direction === 'down' || scrollAmount < 0 && self.rowObject.direction === 'up') {
          self.setScroll(scrollAmount);
        }
        var currentRow = self.findDropTargetRow(x, y);
        if (currentRow) {
          if (self.rowObject.direction === 'down') {
            self.rowObject.swap('after', currentRow, self);
          } else {
            self.rowObject.swap('before', currentRow, self);
          }
          if (self.striping === true) {
            self.restripeTable();
          }
        }
      }
      if (self.indentEnabled) {
        var xDiff = self.currentPointerCoords.x - self.dragObject.indentPointerPos.x;
        var indentDiff = Math.round(xDiff / self.indentAmount);
        var indentChange = self.rowObject.indent(indentDiff);
        self.dragObject.indentPointerPos.x += self.indentAmount * indentChange * self.rtl;
        self.indentCount = Math.max(self.indentCount, self.rowObject.indents);
      }
      return false;
    }
  };
  Drupal.tableDrag.prototype.dropRow = function (event, self) {
    var droppedRow;
    var $droppedRow;
    if (self.rowObject !== null) {
      droppedRow = self.rowObject.element;
      $droppedRow = $(droppedRow);
      if (self.rowObject.changed === true) {
        self.updateFields(droppedRow);
        Object.keys(self.tableSettings || {}).forEach(function (group) {
          var rowSettings = self.rowSettings(group, droppedRow);
          if (rowSettings.relationship === 'group') {
            Object.keys(self.rowObject.children || {}).forEach(function (n) {
              self.updateField(self.rowObject.children[n], group);
            });
          }
        });
        self.rowObject.markChanged();
        if (self.changed === false) {
          $(Drupal.theme('tableDragChangedWarning')).insertBefore(self.table).hide().fadeIn('slow');
          self.changed = true;
        }
      }
      if (self.indentEnabled) {
        self.rowObject.removeIndentClasses();
      }
      if (self.oldRowElement) {
        $(self.oldRowElement).removeClass('drag-previous');
      }
      $droppedRow.removeClass('drag').addClass('drag-previous');
      self.oldRowElement = droppedRow;
      self.onDrop();
      self.rowObject = null;
    }
    if (self.dragObject !== null) {
      self.dragObject = null;
      $('body').removeClass('drag');
      clearInterval(self.scrollInterval);
    }
  };
  Drupal.tableDrag.prototype.pointerCoords = function (event) {
    if (event.pageX || event.pageY) {
      return {
        x: event.pageX,
        y: event.pageY
      };
    }
    return {
      x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
      y: event.clientY + document.body.scrollTop - document.body.clientTop
    };
  };
  Drupal.tableDrag.prototype.getPointerOffset = function (target, event) {
    var docPos = $(target).offset();
    var pointerPos = this.pointerCoords(event);
    return {
      x: pointerPos.x - docPos.left,
      y: pointerPos.y - docPos.top
    };
  };
  Drupal.tableDrag.prototype.findDropTargetRow = function (x, y) {
    var _this3 = this;
    var rows = $(this.table.tBodies[0].rows).not(':hidden');
    var _loop = function _loop(n) {
      var row = rows[n];
      var $row = $(row);
      var rowY = $row.offset().top;
      var rowHeight = void 0;
      if (row.offsetHeight === 0) {
        rowHeight = parseInt(row.firstChild.offsetHeight, 10) / 2;
      } else {
        rowHeight = parseInt(row.offsetHeight, 10) / 2;
      }
      if (y > rowY - rowHeight && y < rowY + rowHeight) {
        if (_this3.indentEnabled) {
          if (Object.keys(_this3.rowObject.group).some(function (o) {
            return _this3.rowObject.group[o] === row;
          })) {
            return {
              v: null
            };
          }
        } else if (row === _this3.rowObject.element) {
          return {
            v: null
          };
        }
        if (!_this3.rowObject.isValidSwap(row)) {
          return {
            v: null
          };
        }
        while ($row.is(':hidden') && $row.prev('tr').is(':hidden')) {
          $row = $row.prev('tr:first-of-type');
          row = $row.get(0);
        }
        return {
          v: row
        };
      }
    };
    for (var n = 0; n < rows.length; n++) {
      var _ret = _loop(n);
      if (_typeof(_ret) === "object") return _ret.v;
    }
    return null;
  };
  Drupal.tableDrag.prototype.updateFields = function (changedRow) {
    var _this4 = this;
    Object.keys(this.tableSettings || {}).forEach(function (group) {
      _this4.updateField(changedRow, group);
    });
  };
  Drupal.tableDrag.prototype.updateField = function (changedRow, group) {
    var rowSettings = this.rowSettings(group, changedRow);
    var $changedRow = $(changedRow);
    var sourceRow;
    var $previousRow;
    var previousRow;
    var useSibling;
    if (rowSettings.relationship === 'self' || rowSettings.relationship === 'group') {
      sourceRow = changedRow;
    } else if (rowSettings.relationship === 'sibling') {
      $previousRow = $changedRow.prev('tr:first-of-type');
      previousRow = $previousRow.get(0);
      var $nextRow = $changedRow.next('tr:first-of-type');
      var nextRow = $nextRow.get(0);
      sourceRow = changedRow;
      if ($previousRow.is('.draggable') && $previousRow.find(".".concat(group)).length) {
        if (this.indentEnabled) {
          if ($previousRow.find('.js-indentations').length === $changedRow.find('.js-indentations').length) {
            sourceRow = previousRow;
          }
        } else {
          sourceRow = previousRow;
        }
      } else if ($nextRow.is('.draggable') && $nextRow.find(".".concat(group)).length) {
        if (this.indentEnabled) {
          if ($nextRow.find('.js-indentations').length === $changedRow.find('.js-indentations').length) {
            sourceRow = nextRow;
          }
        } else {
          sourceRow = nextRow;
        }
      }
    } else if (rowSettings.relationship === 'parent') {
      $previousRow = $changedRow.prev('tr');
      previousRow = $previousRow;
      while ($previousRow.length && $previousRow.find('.js-indentation').length >= this.rowObject.indents) {
        $previousRow = $previousRow.prev('tr');
        previousRow = $previousRow;
      }
      if ($previousRow.length) {
        sourceRow = $previousRow.get(0);
      } else {
        sourceRow = $(this.table).find('tr.draggable:first-of-type').get(0);
        if (sourceRow === this.rowObject.element) {
          sourceRow = $(this.rowObject.group[this.rowObject.group.length - 1]).next('tr.draggable').get(0);
        }
        useSibling = true;
      }
    }
    this.copyDragClasses(sourceRow, changedRow, group);
    rowSettings = this.rowSettings(group, changedRow);
    if (useSibling) {
      rowSettings.relationship = 'sibling';
      rowSettings.source = rowSettings.target;
    }
    var targetClass = ".".concat(rowSettings.target);
    var targetElement = $changedRow.find(targetClass).get(0);
    if (targetElement) {
      var sourceClass = ".".concat(rowSettings.source);
      var sourceElement = $(sourceClass, sourceRow).get(0);
      switch (rowSettings.action) {
        case 'depth':
          targetElement.value = $(sourceElement).closest('tr').find('.js-indentation').length;
          break;
        case 'match':
          targetElement.value = sourceElement.value;
          break;
        case 'order':
          {
            var siblings = this.rowObject.findSiblings(rowSettings);
            if ($(targetElement).is('select')) {
              var values = [];
              $(targetElement).find('option').each(function () {
                values.push(this.value);
              });
              var maxVal = values[values.length - 1];
              $(siblings).find(targetClass).each(function () {
                if (values.length > 0) {
                  this.value = values.shift();
                } else {
                  this.value = maxVal;
                }
              });
            } else {
              var weight = 0;
              var $siblingTarget = $(siblings[0]).find(targetClass);
              if ($siblingTarget.length) {
                weight = parseInt($siblingTarget[0].value, 10) || 0;
              }
              $(siblings).find(targetClass).each(function () {
                this.value = weight;
                weight++;
              });
            }
            break;
          }
      }
    }
  };
  Drupal.tableDrag.prototype.copyDragClasses = function (sourceRow, targetRow, group) {
    var sourceElement = $(sourceRow).find(".".concat(group));
    var targetElement = $(targetRow).find(".".concat(group));
    if (sourceElement.length && targetElement.length) {
      targetElement[0].className = sourceElement[0].className;
    }
  };
  Drupal.tableDrag.prototype.checkScroll = function (cursorY) {
    var de = document.documentElement;
    var b = document.body;
    var windowHeight = window.innerHeight || (de.clientHeight && de.clientWidth !== 0 ? de.clientHeight : b.offsetHeight);
    this.windowHeight = windowHeight;
    var scrollY;
    if (document.all) {
      scrollY = !de.scrollTop ? b.scrollTop : de.scrollTop;
    } else {
      scrollY = window.pageYOffset ? window.pageYOffset : window.scrollY;
    }
    this.scrollY = scrollY;
    var trigger = this.scrollSettings.trigger;
    var delta = 0;
    if (cursorY - scrollY > windowHeight - trigger) {
      delta = trigger / (windowHeight + scrollY - cursorY);
      delta = delta > 0 && delta < trigger ? delta : trigger;
      return delta * this.scrollSettings.amount;
    }
    if (cursorY - scrollY < trigger) {
      delta = trigger / (cursorY - scrollY);
      delta = delta > 0 && delta < trigger ? delta : trigger;
      return -delta * this.scrollSettings.amount;
    }
  };
  Drupal.tableDrag.prototype.setScroll = function (scrollAmount) {
    var self = this;
    this.scrollInterval = setInterval(function () {
      self.checkScroll(self.currentPointerCoords.y);
      var aboveTable = self.scrollY > self.table.topY;
      var belowTable = self.scrollY + self.windowHeight < self.table.bottomY;
      if (scrollAmount > 0 && belowTable || scrollAmount < 0 && aboveTable) {
        window.scrollBy(0, scrollAmount);
      }
    }, this.scrollSettings.interval);
  };
  Drupal.tableDrag.prototype.restripeTable = function () {
    $(this.table).find('> tbody > tr.draggable, > tr.draggable').filter(':visible').filter(':odd').removeClass('odd').addClass('even').end().filter(':even').removeClass('even').addClass('odd');
  };
  Drupal.tableDrag.prototype.onDrag = function () {
    return null;
  };
  Drupal.tableDrag.prototype.onDrop = function () {
    return null;
  };
  Drupal.tableDrag.prototype.row = function (tableRow, method, indentEnabled, maxDepth, addClasses) {
    var $tableRow = $(tableRow);
    this.element = tableRow;
    this.method = method;
    this.group = [tableRow];
    this.groupDepth = $tableRow.find('.js-indentation').length;
    this.changed = false;
    this.table = $tableRow.closest('table')[0];
    this.indentEnabled = indentEnabled;
    this.maxDepth = maxDepth;
    this.direction = '';
    if (this.indentEnabled) {
      this.indents = $tableRow.find('.js-indentation').length;
      this.children = this.findChildren(addClasses);
      this.group = this.group.concat(this.children);
      for (var n = 0; n < this.group.length; n++) {
        this.groupDepth = Math.max($(this.group[n]).find('.js-indentation').length, this.groupDepth);
      }
    }
  };
  Drupal.tableDrag.prototype.row.prototype.findChildren = function (addClasses) {
    var parentIndentation = this.indents;
    var currentRow = $(this.element, this.table).next('tr.draggable');
    var rows = [];
    var child = 0;
    function rowIndentation(indentNum, el) {
      var self = $(el);
      if (child === 1 && indentNum === parentIndentation) {
        self.addClass('tree-child-first');
      }
      if (indentNum === parentIndentation) {
        self.addClass('tree-child');
      } else if (indentNum > parentIndentation) {
        self.addClass('tree-child-horizontal');
      }
    }
    while (currentRow.length) {
      if (currentRow.find('.js-indentation').length > parentIndentation) {
        child++;
        rows.push(currentRow[0]);
        if (addClasses) {
          currentRow.find('.js-indentation').each(rowIndentation);
        }
      } else {
        break;
      }
      currentRow = currentRow.next('tr.draggable');
    }
    if (addClasses && rows.length) {
      $(rows[rows.length - 1]).find(".js-indentation:nth-child(".concat(parentIndentation + 1, ")")).addClass('tree-child-last');
    }
    return rows;
  };
  Drupal.tableDrag.prototype.row.prototype.isValidSwap = function (row) {
    var $row = $(row);
    if (this.indentEnabled) {
      var prevRow;
      var nextRow;
      if (this.direction === 'down') {
        prevRow = row;
        nextRow = $row.next('tr').get(0);
      } else {
        prevRow = $row.prev('tr').get(0);
        nextRow = row;
      }
      this.interval = this.validIndentInterval(prevRow, nextRow);
      if (this.interval.min > this.interval.max) {
        return false;
      }
    }
    if (this.table.tBodies[0].rows[0] === row && $row.is(':not(.draggable)')) {
      return false;
    }
    return true;
  };
  Drupal.tableDrag.prototype.row.prototype.swap = function (position, row) {
    this.group.forEach(function (row) {
      Drupal.detachBehaviors(row, drupalSettings, 'move');
    });
    $(row)[position](this.group);
    this.group.forEach(function (row) {
      Drupal.attachBehaviors(row, drupalSettings);
    });
    this.changed = true;
    this.onSwap(row);
  };
  Drupal.tableDrag.prototype.row.prototype.validIndentInterval = function (prevRow, nextRow) {
    var $prevRow = $(prevRow);
    var maxIndent;
    var minIndent = nextRow ? $(nextRow).find('.js-indentation').length : 0;
    if (!prevRow || $prevRow.is(':not(.draggable)') || $(this.element).is('.tabledrag-root')) {
      maxIndent = 0;
    } else {
      maxIndent = $prevRow.find('.js-indentation').length + ($prevRow.is('.tabledrag-leaf') ? 0 : 1);
      if (this.maxDepth) {
        maxIndent = Math.min(maxIndent, this.maxDepth - (this.groupDepth - this.indents));
      }
    }
    return {
      min: minIndent,
      max: maxIndent
    };
  };
  Drupal.tableDrag.prototype.row.prototype.indent = function (indentDiff) {
    var $group = $(this.group);
    if (!this.interval) {
      var prevRow = $(this.element).prev('tr').get(0);
      var nextRow = $group.eq(-1).next('tr').get(0);
      this.interval = this.validIndentInterval(prevRow, nextRow);
    }
    var indent = this.indents + indentDiff;
    indent = Math.max(indent, this.interval.min);
    indent = Math.min(indent, this.interval.max);
    indentDiff = indent - this.indents;
    for (var n = 1; n <= Math.abs(indentDiff); n++) {
      if (indentDiff < 0) {
        $group.find('.js-indentation:first-of-type').remove();
        this.indents--;
      } else {
        $group.find('td:first-of-type').prepend(Drupal.theme('tableDragIndentation'));
        this.indents++;
      }
    }
    if (indentDiff) {
      this.changed = true;
      this.groupDepth += indentDiff;
      this.onIndent();
    }
    return indentDiff;
  };
  Drupal.tableDrag.prototype.row.prototype.findSiblings = function (rowSettings) {
    var siblings = [];
    var directions = ['prev', 'next'];
    var rowIndentation = this.indents;
    var checkRowIndentation;
    for (var d = 0; d < directions.length; d++) {
      var checkRow = $(this.element)[directions[d]]();
      while (checkRow.length) {
        if (checkRow.find(".".concat(rowSettings.target))) {
          if (this.indentEnabled) {
            checkRowIndentation = checkRow.find('.js-indentation').length;
          }
          if (!this.indentEnabled || checkRowIndentation === rowIndentation) {
            siblings.push(checkRow[0]);
          } else if (checkRowIndentation < rowIndentation) {
            break;
          }
        } else {
          break;
        }
        checkRow = checkRow[directions[d]]();
      }
      if (directions[d] === 'prev') {
        siblings.reverse();
        siblings.push(this.element);
      }
    }
    return siblings;
  };
  Drupal.tableDrag.prototype.row.prototype.removeIndentClasses = function () {
    var _this5 = this;
    Object.keys(this.children || {}).forEach(function (n) {
      $(_this5.children[n]).find('.js-indentation').removeClass('tree-child').removeClass('tree-child-first').removeClass('tree-child-last').removeClass('tree-child-horizontal');
    });
  };
  Drupal.tableDrag.prototype.row.prototype.markChanged = function () {
    var marker = Drupal.theme('tableDragChangedMarker');
    var cell = $(this.element).find('td:first-of-type');
    if (cell.find('abbr.tabledrag-changed').length === 0) {
      cell.append(marker);
    }
  };
  Drupal.tableDrag.prototype.row.prototype.onIndent = function () {
    return null;
  };
  Drupal.tableDrag.prototype.row.prototype.onSwap = function (swappedRow) {
    return null;
  };
  $.extend(Drupal.theme, {
    tableDragChangedMarker: function tableDragChangedMarker() {
      return "<abbr class=\"warning tabledrag-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr>");
    },
    tableDragIndentation: function tableDragIndentation() {
      return '<div class="js-indentation indentation">&nbsp;</div>';
    },
    tableDragChangedWarning: function tableDragChangedWarning() {
      return "<div class=\"tabledrag-changed-warning messages messages--warning\" role=\"alert\">".concat(Drupal.theme('tableDragChangedMarker'), " ").concat(Drupal.t('You have unsaved changes.'), "</div>");
    },
    tableDragToggle: function tableDragToggle() {
      return "<div class=\"tabledrag-toggle-weight-wrapper\" data-drupal-selector=\"tabledrag-toggle-weight-wrapper\">\n            <button type=\"button\" class=\"link tabledrag-toggle-weight\" data-drupal-selector=\"tabledrag-toggle-weight\"></button>\n            </div>";
    },
    toggleButtonContent: function toggleButtonContent(show) {
      return show ? Drupal.t('Hide row weights') : Drupal.t('Show row weights');
    },
    tableDragHandle: function tableDragHandle() {
      return "<a href=\"#\" title=\"".concat(Drupal.t('Drag to re-order'), "\"\n        class=\"tabledrag-handle\"><div class=\"handle\"></div></a>");
    }
  });
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  var autocomplete;
  function autocompleteSplitValues(value) {
    var result = [];
    var quote = false;
    var current = '';
    var valueLength = value.length;
    var character;
    for (var i = 0; i < valueLength; i++) {
      character = value.charAt(i);
      if (character === '"') {
        current += character;
        quote = !quote;
      } else if (character === ',' && !quote) {
        result.push(current.trim());
        current = '';
      } else {
        current += character;
      }
    }
    if (value.length > 0) {
      result.push(current.trim());
    }
    return result;
  }
  function extractLastTerm(terms) {
    return autocomplete.splitValues(terms).pop();
  }
  function searchHandler(event) {
    var options = autocomplete.options;
    if (options.isComposing) {
      return false;
    }
    var term = autocomplete.extractLastTerm(event.target.value);
    if (term.length > 0 && options.firstCharacterBlacklist.indexOf(term[0]) !== -1) {
      return false;
    }
    return term.length >= options.minLength;
  }
  function sourceData(request, response) {
    var elementId = this.element.attr('id');
    if (!(elementId in autocomplete.cache)) {
      autocomplete.cache[elementId] = {};
    }
    function showSuggestions(suggestions) {
      var tagged = autocomplete.splitValues(request.term);
      var il = tagged.length;
      for (var i = 0; i < il; i++) {
        var index = suggestions.indexOf(tagged[i]);
        if (index >= 0) {
          suggestions.splice(index, 1);
        }
      }
      response(suggestions);
    }
    var term = autocomplete.extractLastTerm(request.term);
    function sourceCallbackHandler(data) {
      autocomplete.cache[elementId][term] = data;
      showSuggestions(data);
    }
    if (autocomplete.cache[elementId].hasOwnProperty(term)) {
      showSuggestions(autocomplete.cache[elementId][term]);
    } else {
      var options = $.extend({
        success: sourceCallbackHandler,
        data: {
          q: term
        }
      }, autocomplete.ajax);
      $.ajax(this.element.attr('data-autocomplete-path'), options);
    }
  }
  function focusHandler() {
    return false;
  }
  function selectHandler(event, ui) {
    var terms = autocomplete.splitValues(event.target.value);
    terms.pop();
    terms.push(ui.item.value);
    event.target.value = terms.join(', ');
    return false;
  }
  function renderItem(ul, item) {
    return $('<li>').append($('<a>').html(item.label)).appendTo(ul);
  }
  Drupal.behaviors.autocomplete = {
    attach: function attach(context) {
      var $autocomplete = $(once('autocomplete', 'input.form-autocomplete', context));
      if ($autocomplete.length) {
        var blacklist = $autocomplete.attr('data-autocomplete-first-character-blacklist');
        $.extend(autocomplete.options, {
          firstCharacterBlacklist: blacklist || ''
        });
        $autocomplete.autocomplete(autocomplete.options).each(function () {
          $(this).data('ui-autocomplete')._renderItem = autocomplete.options.renderItem;
        });
        $autocomplete.on('compositionstart.autocomplete', function () {
          autocomplete.options.isComposing = true;
        });
        $autocomplete.on('compositionend.autocomplete', function () {
          autocomplete.options.isComposing = false;
        });
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        $(once.remove('autocomplete', 'input.form-autocomplete', context)).autocomplete('destroy');
      }
    }
  };
  autocomplete = {
    cache: {},
    splitValues: autocompleteSplitValues,
    extractLastTerm: extractLastTerm,
    options: {
      source: sourceData,
      focus: focusHandler,
      search: searchHandler,
      select: selectHandler,
      renderItem: renderItem,
      minLength: 1,
      firstCharacterBlacklist: '',
      isComposing: false
    },
    ajax: {
      dataType: 'json',
      jsonp: false
    }
  };
  Drupal.autocomplete = autocomplete;
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme('progressBar', id));
  };
  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
        $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            pb.setProgress(progress.percentage, progress.message, progress.label);
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();
      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;
  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };
  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };
  var drupalOnce = once;
  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }
  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }
  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, window, Drupal, drupalSettings, loadjs, _ref) {
  var isFocusable = _ref.isFocusable,
    tabbable = _ref.tabbable;
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = "#".concat(base);
        }
        once('drupal-ajax', $(elementSettings.selector)).forEach(function (el) {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }
      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      once('ajax', '.use-ajax-submit').forEach(function (el) {
        var elementSettings = {};
        elementSettings.url = $(el.form).attr('action');
        elementSettings.setClick = true;
        elementSettings.event = 'click';
        elementSettings.progress = {
          type: 'throbber'
        };
        elementSettings.base = el.id;
        elementSettings.element = el;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;
    if (xmlhttp.status) {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      }));
    } else {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
    }
    statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
    var pathText = "\n".concat(Drupal.t('Path: !uri', {
      '!uri': uri
    }));
    statusText = '';
    try {
      statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
        '!statusText': xmlhttp.statusText.trim()
      }));
    } catch (e) {}
    responseText = '';
    try {
      responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
        '!responseText': xmlhttp.responseText.trim()
      }));
    } catch (e) {}
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');
    var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    })) : '';
    customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    })) : '';
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    this.name = 'AjaxError';
  };
  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;
    if (!settings.progress && !element) {
      settings.progress = false;
    }
    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };
  Drupal.ajax.instances = [];
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };
  Drupal.ajax.bindAjaxLinks = function (element) {
    once('ajax', '.use-ajax', element).forEach(function (ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: 'throbber'
        },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');
      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };
  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;
    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }
    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;
    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }
    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }
    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      isInProgress: function isInProgress() {
        return ajax.ajaxing;
      },
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        var _this = this;
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }
        return Promise.resolve(ajax.success(response, status)).then(function () {
          ajax.ajaxing = false;
          $(document).trigger('ajaxSuccess', [xmlhttprequest, _this]);
          $(document).trigger('ajaxComplete', [xmlhttprequest, _this]);
          if (--$.active === 0) {
            $(document).trigger('ajaxStop');
          }
        });
      },
      error: function error(xmlhttprequest, status, _error) {
        ajax.ajaxing = false;
      },
      complete: function complete(xmlhttprequest, status) {
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };
    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }
    var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }
    ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });
    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }
    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';
  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }
    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
      return $.Deferred().reject();
    }
  };
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;
    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;
    if (ajax.ajaxing) {
      return;
    }
    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }
        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
    }
  };
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };
  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = '1';
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }
    $(this.element).prop('disabled', true);
    if (!this.progress || !this.progress.type) {
      return;
    }
    var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };
  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };
  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"message\">".concat(message, "</div>");
  };
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };
  Drupal.Ajax.prototype.commandExecutionQueue = function (response, status) {
    var _this2 = this;
    var ajaxCommands = this.commands;
    return Object.keys(response || {}).reduce(function (executionQueue, key) {
      return executionQueue.then(function () {
        var command = response[key].command;
        if (command && ajaxCommands[command]) {
          return ajaxCommands[command](_this2, response[key], status);
        }
      });
    }, Promise.resolve());
  };
  Drupal.Ajax.prototype.success = function (response, status) {
    var _this3 = this;
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
    var focusChanged = Object.keys(response || {}).some(function (key) {
      var _response$key = response[key],
        command = _response$key.command,
        method = _response$key.method;
      return command === 'focusFirst' || command === 'invoke' && method === 'focus';
    });
    return this.commandExecutionQueue(response, status).then(function () {
      if (!focusChanged && _this3.element && !$(_this3.element).data('disable-refocus')) {
        var target = false;
        for (var n = elementParents.length - 1; !target && n >= 0; n--) {
          target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
        }
        if (target) {
          $(target).trigger('focus');
        }
      }
      if (_this3.$form && document.body.contains(_this3.$form.get(0))) {
        var settings = _this3.settings || drupalSettings;
        Drupal.attachBehaviors(_this3.$form.get(0), settings);
      }
      _this3.settings = null;
    }).catch(function (error) {
      return console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error', {
        '!error': error
      }));
    });
  };
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }
    return effect;
  };
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.wrapper).show();
    $(this.element).prop('disabled', false);
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };
  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };
  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }
      $wrapper[method]($newContent);
      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }
      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }
      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }
      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    focusFirst: function focusFirst(ajax, response, status) {
      var focusChanged = false;
      var container = document.querySelector(response.selector);
      if (container) {
        var tabbableElements = tabbable(container);
        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          container.focus();
          focusChanged = true;
        }
      }
      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      document.querySelectorAll("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).forEach(function (item) {
        item.value = response.new;
      });
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    },
    add_js: function add_js(ajax, response, status) {
      var parentEl = document.querySelector(response.selector || 'body');
      var settings = ajax.settings || drupalSettings;
      var allUniqueBundleIds = response.data.map(function (script) {
        var uniqueBundleId = script.src + ajax.instanceIndex;
        loadjs(script.src, uniqueBundleId, {
          async: false,
          before: function before(path, scriptEl) {
            Object.keys(script).forEach(function (attributeKey) {
              scriptEl.setAttribute(attributeKey, script[attributeKey]);
            });
            parentEl.appendChild(scriptEl);
            return false;
          }
        });
        return uniqueBundleId;
      });
      return new Promise(function (resolve, reject) {
        loadjs.ready(allUniqueBundleIds, {
          success: function success() {
            Drupal.attachBehaviors(parentEl, settings);
            resolve();
          },
          error: function error(depsNotFound) {
            var message = Drupal.t("The following files could not be loaded: @dependencies", {
              '@dependencies': depsNotFound.join(', ')
            });
            reject(message);
          }
        });
      });
    }
  };
  var stopEvent = function stopEvent(xhr, settings) {
    return xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' && settings.isInProgress && settings.isInProgress();
  };
  $.extend(true, $.event.special, {
    ajaxSuccess: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          return false;
        }
      }
    },
    ajaxComplete: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          $.active++;
          return false;
        }
      }
    }
  });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);;
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t,n){"use strict";n.r(t),function(e){var n="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,i=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(n&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var r=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),i))}};function o(e){return e&&"[object Function]"==={}.toString.call(e)}function s(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function a(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function l(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=s(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+i)?e:l(a(e))}function u(e){return e&&e.referenceNode?e.referenceNode:e}var c=n&&!(!window.MSInputMethodContext||!document.documentMode),f=n&&/MSIE 10/.test(navigator.userAgent);function d(e){return 11===e?c:10===e?f:c||f}function h(e){if(!e)return document.documentElement;for(var t=d(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===s(n,"position")?h(n):n:e?e.ownerDocument.documentElement:document.documentElement}function p(e){return null!==e.parentNode?p(e.parentNode):e}function g(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,r=n?t:e,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var s,a,l=o.commonAncestorContainer;if(e!==l&&t!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&h(s.firstElementChild)!==s?h(l):l;var u=p(e);return u.host?g(u.host,t):g(e,p(t).host)}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"===i||"HTML"===i){var r=e.ownerDocument.documentElement,o=e.ownerDocument.scrollingElement||r;return o[n]}return e[n]}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=m(t,"top"),r=m(t,"left"),o=n?-1:1;return e.top+=i*o,e.bottom+=i*o,e.left+=r*o,e.right+=r*o,e}function y(e,t){var n="x"===t?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+i+"Width"])}function b(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],d(10)?parseInt(n["offset"+e])+parseInt(i["margin"+("Height"===e?"Top":"Left")])+parseInt(i["margin"+("Height"===e?"Bottom":"Right")]):0)}function _(e){var t=e.body,n=e.documentElement,i=d(10)&&getComputedStyle(n);return{height:b("Height",t,n,i),width:b("Width",t,n,i)}}var w=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},E=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),T=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function C(e){return x({},e,{right:e.left+e.width,bottom:e.top+e.height})}function S(e){var t={};try{if(d(10)){t=e.getBoundingClientRect();var n=m(e,"top"),i=m(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},o="HTML"===e.nodeName?_(e.ownerDocument):{},a=o.width||e.clientWidth||r.width,l=o.height||e.clientHeight||r.height,u=e.offsetWidth-a,c=e.offsetHeight-l;if(u||c){var f=s(e);u-=y(f,"x"),c-=y(f,"y"),r.width-=u,r.height-=c}return C(r)}function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=d(10),r="HTML"===t.nodeName,o=S(e),a=S(t),u=l(e),c=s(t),f=parseFloat(c.borderTopWidth),h=parseFloat(c.borderLeftWidth);n&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var p=C({top:o.top-a.top-f,left:o.left-a.left-h,width:o.width,height:o.height});if(p.marginTop=0,p.marginLeft=0,!i&&r){var g=parseFloat(c.marginTop),m=parseFloat(c.marginLeft);p.top-=f-g,p.bottom-=f-g,p.left-=h-m,p.right-=h-m,p.marginTop=g,p.marginLeft=m}return(i&&!n?t.contains(u):t===u&&"BODY"!==u.nodeName)&&(p=v(p,t)),p}function A(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=D(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),s=t?0:m(n),a=t?0:m(n,"left"),l={top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:r,height:o};return C(l)}function N(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===s(e,"position"))return!0;var n=a(e);return!!n&&N(n)}function I(e){if(!e||!e.parentElement||d())return document.documentElement;for(var t=e.parentElement;t&&"none"===s(t,"transform");)t=t.parentElement;return t||document.documentElement}function k(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},s=r?I(e):g(e,u(t));if("viewport"===i)o=A(s,r);else{var c=void 0;"scrollParent"===i?"BODY"===(c=l(a(t))).nodeName&&(c=e.ownerDocument.documentElement):c="window"===i?e.ownerDocument.documentElement:i;var f=D(c,s,r);if("HTML"!==c.nodeName||N(s))o=f;else{var d=_(e.ownerDocument),h=d.height,p=d.width;o.top+=f.top-f.marginTop,o.bottom=h+f.top,o.left+=f.left-f.marginLeft,o.right=p+f.left}}var m="number"==typeof(n=n||0);return o.left+=m?n:n.left||0,o.top+=m?n:n.top||0,o.right-=m?n:n.right||0,o.bottom-=m?n:n.bottom||0,o}function O(e){return e.width*e.height}function L(e,t,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=k(n,i,o,r),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},l=Object.keys(a).map((function(e){return x({key:e},a[e],{area:O(a[e])})})).sort((function(e,t){return t.area-e.area})),u=l.filter((function(e){var t=e.width,i=e.height;return t>=n.clientWidth&&i>=n.clientHeight})),c=u.length>0?u[0].key:l[0].key,f=e.split("-")[1];return c+(f?"-"+f:"")}function j(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=i?I(t):g(t,u(n));return D(n,r,i)}function P(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),i=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function H(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function q(e,t,n){n=n.split("-")[0];var i=P(e),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",u=o?"width":"height";return r[s]=t[s]+t[l]/2-i[l]/2,r[a]=n===a?t[a]-i[u]:t[H(a)],r}function R(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function M(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var i=R(e,(function(e){return e[t]===n}));return e.indexOf(i)}(e,"name",n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&o(n)&&(t.offsets.popper=C(t.offsets.popper),t.offsets.reference=C(t.offsets.reference),t=n(t,e))})),t}function F(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=j(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=L(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=q(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=M(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function B(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==document.body.style[o])return o}return null}function U(){return this.state.isDestroyed=!0,W(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[B("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function K(e){var t=e.ownerDocument;return t?t.defaultView:window}function $(e,t,n,i){n.updateBound=i,K(e).addEventListener("resize",n.updateBound,{passive:!0});var r=l(e);return function e(t,n,i,r){var o="BODY"===t.nodeName,s=o?t.ownerDocument.defaultView:t;s.addEventListener(n,i,{passive:!0}),o||e(l(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function Q(){this.state.eventsEnabled||(this.state=$(this.reference,this.options,this.state,this.scheduleUpdate))}function V(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,K(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function z(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&z(t[n])&&(i="px"),e.style[n]=t[n]+i}))}var X=n&&/Firefox/i.test(navigator.userAgent);function G(e,t,n){var i=R(e,(function(e){return e.name===t})),r=!!i&&e.some((function(e){return e.name===n&&e.enabled&&e.order<i.order}));if(!r){var o="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var J=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Z=J.slice(3);function ee(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Z.indexOf(e),i=Z.slice(n+1).concat(Z.slice(0,n));return t?i.reverse():i}var te="flip",ne="clockwise",ie="counterclockwise";function re(e,t,n,i){var r=[0,0],o=-1!==["right","left"].indexOf(i),s=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=s.indexOf(R(s,(function(e){return-1!==e.search(/,|\s/)})));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,u=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];return(u=u.map((function(e,i){var r=(1===i?!o:o)?"height":"width",s=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,i){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2];if(!o)return e;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return C(a)[t]/100*o}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o}return o}(e,r,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,i){z(n)&&(r[t]+=n*("-"===e[i-1]?-1:1))}))})),r}var oe={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var r=e.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",u=a?"width":"height",c={start:T({},l,o[l]),end:T({},l,o[l]+o[u]-s[u])};e.offsets.popper=x({},s,c[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,i=e.placement,r=e.offsets,o=r.popper,s=r.reference,a=i.split("-")[0],l=void 0;return l=z(+n)?[+n,0]:re(n,o,s,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),e.popper=o,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||h(e.instance.popper);e.instance.reference===n&&(n=h(n));var i=B("transform"),r=e.instance.popper.style,o=r.top,s=r.left,a=r[i];r.top="",r.left="",r[i]="";var l=k(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=o,r.left=s,r[i]=a,t.boundaries=l;var u=t.priority,c=e.offsets.popper,f={primary:function(e){var n=c[e];return c[e]<l[e]&&!t.escapeWithReference&&(n=Math.max(c[e],l[e])),T({},e,n)},secondary:function(e){var n="right"===e?"left":"top",i=c[n];return c[e]>l[e]&&!t.escapeWithReference&&(i=Math.min(c[n],l[e]-("right"===e?c.width:c.height))),T({},n,i)}};return u.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";c=x({},c,f[t](e))})),e.offsets.popper=c,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,r=e.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",u=s?"width":"height";return n[a]<o(i[l])&&(e.offsets.popper[l]=o(i[l])-n[u]),n[l]>o(i[a])&&(e.offsets.popper[l]=o(i[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!G(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],o=e.offsets,a=o.popper,l=o.reference,u=-1!==["left","right"].indexOf(r),c=u?"height":"width",f=u?"Top":"Left",d=f.toLowerCase(),h=u?"left":"top",p=u?"bottom":"right",g=P(i)[c];l[p]-g<a[d]&&(e.offsets.popper[d]-=a[d]-(l[p]-g)),l[d]+g>a[p]&&(e.offsets.popper[d]+=l[d]+g-a[p]),e.offsets.popper=C(e.offsets.popper);var m=l[d]+l[c]/2-g/2,v=s(e.instance.popper),y=parseFloat(v["margin"+f]),b=parseFloat(v["border"+f+"Width"]),_=m-e.offsets.popper[d]-y-b;return _=Math.max(Math.min(a[c]-g,_),0),e.arrowElement=i,e.offsets.arrow=(T(n={},d,Math.round(_)),T(n,h,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=k(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),i=e.placement.split("-")[0],r=H(i),o=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case te:s=[i,r];break;case ne:s=ee(i);break;case ie:s=ee(i,!0);break;default:s=t.behavior}return s.forEach((function(a,l){if(i!==a||s.length===l+1)return e;i=e.placement.split("-")[0],r=H(i);var u=e.offsets.popper,c=e.offsets.reference,f=Math.floor,d="left"===i&&f(u.right)>f(c.left)||"right"===i&&f(u.left)<f(c.right)||"top"===i&&f(u.bottom)>f(c.top)||"bottom"===i&&f(u.top)<f(c.bottom),h=f(u.left)<f(n.left),p=f(u.right)>f(n.right),g=f(u.top)<f(n.top),m=f(u.bottom)>f(n.bottom),v="left"===i&&h||"right"===i&&p||"top"===i&&g||"bottom"===i&&m,y=-1!==["top","bottom"].indexOf(i),b=!!t.flipVariations&&(y&&"start"===o&&h||y&&"end"===o&&p||!y&&"start"===o&&g||!y&&"end"===o&&m),_=!!t.flipVariationsByContent&&(y&&"start"===o&&p||y&&"end"===o&&h||!y&&"start"===o&&m||!y&&"end"===o&&g),w=b||_;(d||v||w)&&(e.flipped=!0,(d||v)&&(i=s[l+1]),w&&(o=function(e){return"end"===e?"start":"start"===e?"end":e}(o)),e.placement=i+(o?"-"+o:""),e.offsets.popper=x({},e.offsets.popper,q(e.instance.popper,e.offsets.reference,e.placement)),e=M(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),e.placement=H(t),e.offsets.popper=C(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!G(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=R(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,r=e.offsets.popper,o=R(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==o?o:t.gpuAcceleration,a=h(e.instance.popper),l=S(a),u={position:r.position},c=function(e,t){var n=e.offsets,i=n.popper,r=n.reference,o=Math.round,s=Math.floor,a=function(e){return e},l=o(r.width),u=o(i.width),c=-1!==["left","right"].indexOf(e.placement),f=-1!==e.placement.indexOf("-"),d=t?c||f||l%2==u%2?o:s:a,h=t?o:a;return{left:d(l%2==1&&u%2==1&&!f&&t?i.left-1:i.left),top:h(i.top),bottom:h(i.bottom),right:d(i.right)}}(e,window.devicePixelRatio<2||!X),f="bottom"===n?"top":"bottom",d="right"===i?"left":"right",p=B("transform"),g=void 0,m=void 0;if(m="bottom"===f?"HTML"===a.nodeName?-a.clientHeight+c.bottom:-l.height+c.bottom:c.top,g="right"===d?"HTML"===a.nodeName?-a.clientWidth+c.right:-l.width+c.right:c.left,s&&p)u[p]="translate3d("+g+"px, "+m+"px, 0)",u[f]=0,u[d]=0,u.willChange="transform";else{var v="bottom"===f?-1:1,y="right"===d?-1:1;u[f]=m*v,u[d]=g*y,u.willChange=f+", "+d}var b={"x-placement":e.placement};return e.attributes=x({},b,e.attributes),e.styles=x({},u,e.styles),e.arrowStyles=x({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return Y(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,i,r){var o=j(r,t,e,n.positionFixed),s=L(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),Y(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},se=function(){function e(t,n){var i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};w(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=r(this.update.bind(this)),this.options=x({},e.Defaults,s),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(x({},e.Defaults.modifiers,s.modifiers)).forEach((function(t){i.options.modifiers[t]=x({},e.Defaults.modifiers[t]||{},s.modifiers?s.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return x({name:e},i.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&o(e.onLoad)&&e.onLoad(i.reference,i.popper,i.options,e,i.state)})),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return E(e,[{key:"update",value:function(){return F.call(this)}},{key:"destroy",value:function(){return U.call(this)}},{key:"enableEventListeners",value:function(){return Q.call(this)}},{key:"disableEventListeners",value:function(){return V.call(this)}}]),e}();se.Utils=("undefined"!=typeof window?window:e).PopperUtils,se.placements=J,se.Defaults=oe,t.default=se}.call(this,n(5))},function(e,t,n){n(2),n(6),n(11),e.exports=n(13)},function(e,t,n){"use strict";n.r(t);n(3)},function(e,t,n){!function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}function a(e){var n=this,i=!1;return t(this).one(l.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||l.triggerTransitionEnd(n)}),e),this}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var l={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var n=t(e).css("transition-duration"),i=t(e).css("transition-delay"),r=parseFloat(n),o=parseFloat(i);return r||o?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=t[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?l.findShadowRoot(e.parentNode):null}};t.fn.emulateTransitionEnd=a,t.event.special[l.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var u=t.fn.alert,c={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},f="alert",d="fade",h="show",p=function(){function e(e){this._element=e}var n=e.prototype;return n.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},n.dispose=function(){t.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(e){var n=l.getSelectorFromElement(e),i=!1;return n&&(i=document.querySelector(n)),i||(i=t(e).closest("."+f)[0]),i},n._triggerCloseEvent=function(e){var n=t.Event(c.CLOSE);return t(e).trigger(n),n},n._removeElement=function(e){var n=this;if(t(e).removeClass(h),t(e).hasClass(d)){var i=l.getTransitionDurationFromElement(e);t(e).one(l.TRANSITION_END,(function(t){return n._destroyElement(e,t)})).emulateTransitionEnd(i)}else this._destroyElement(e)},n._destroyElement=function(e){t(e).detach().trigger(c.CLOSED).remove()},e._jQueryInterface=function(n){return this.each((function(){var i=t(this),r=i.data("bs.alert");r||(r=new e(this),i.data("bs.alert",r)),"close"===n&&r[n](this)}))},e._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},r(e,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),e}();t(document).on(c.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),t.fn.alert=p._jQueryInterface,t.fn.alert.Constructor=p,t.fn.alert.noConflict=function(){return t.fn.alert=u,p._jQueryInterface};var g=t.fn.button,m="active",v="btn",y="focus",b='[data-toggle^="button"]',_='[data-toggle="buttons"]',w='input:not([type="hidden"])',E=".active",T=".btn",x={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},C=function(){function e(e){this._element=e}var n=e.prototype;return n.toggle=function(){var e=!0,n=!0,i=t(this._element).closest(_)[0];if(i){var r=this._element.querySelector(w);if(r){if("radio"===r.type)if(r.checked&&this._element.classList.contains(m))e=!1;else{var o=i.querySelector(E);o&&t(o).removeClass(m)}if(e){if(r.hasAttribute("disabled")||i.hasAttribute("disabled")||r.classList.contains("disabled")||i.classList.contains("disabled"))return;r.checked=!this._element.classList.contains(m),t(r).trigger("change")}r.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(m)),e&&t(this._element).toggleClass(m)},n.dispose=function(){t.removeData(this._element,"bs.button"),this._element=null},e._jQueryInterface=function(n){return this.each((function(){var i=t(this).data("bs.button");i||(i=new e(this),t(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},r(e,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),e}();t(document).on(x.CLICK_DATA_API,b,(function(e){e.preventDefault();var n=e.target;t(n).hasClass(v)||(n=t(n).closest(T)),C._jQueryInterface.call(t(n),"toggle")})).on(x.FOCUS_BLUR_DATA_API,b,(function(e){var n=t(e.target).closest(T)[0];t(n).toggleClass(y,/^focus(in)?$/.test(e.type))})),t.fn.button=C._jQueryInterface,t.fn.button.Constructor=C,t.fn.button.noConflict=function(){return t.fn.button=g,C._jQueryInterface};var S="carousel",D=".bs.carousel",A=t.fn[S],N={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},I={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},k="next",O="prev",L="left",j="right",P={SLIDE:"slide.bs.carousel",SLID:"slid.bs.carousel",KEYDOWN:"keydown.bs.carousel",MOUSEENTER:"mouseenter.bs.carousel",MOUSELEAVE:"mouseleave.bs.carousel",TOUCHSTART:"touchstart.bs.carousel",TOUCHMOVE:"touchmove.bs.carousel",TOUCHEND:"touchend.bs.carousel",POINTERDOWN:"pointerdown.bs.carousel",POINTERUP:"pointerup.bs.carousel",DRAG_START:"dragstart.bs.carousel",LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},H="carousel",q="active",R="slide",M="carousel-item-right",F="carousel-item-left",W="carousel-item-next",B="carousel-item-prev",U="pointer-event",K=".active",$=".active.carousel-item",Q=".carousel-item",V=".carousel-item img",z=".carousel-item-next, .carousel-item-prev",Y=".carousel-indicators",X="[data-slide], [data-slide-to]",G='[data-ride="carousel"]',J={TOUCH:"touch",PEN:"pen"},Z=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(Y),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=e.prototype;return n.next=function(){this._isSliding||this._slide(k)},n.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide(O)},n.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(z)&&(l.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(e){var n=this;this._activeElement=this._element.querySelector($);var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(P.SLID,(function(){return n.to(e)}));else{if(i===e)return this.pause(),void this.cycle();var r=e>i?k:O;this._slide(r,this._items[e])}},n.dispose=function(){t(this._element).off(D),t.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(e){return e=s({},N,e),l.typeCheckConfig(S,e,I),e},n._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;t>0&&this.prev(),t<0&&this.next()}},n._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(P.KEYDOWN,(function(t){return e._keydown(t)})),"hover"===this._config.pause&&t(this._element).on(P.MOUSEENTER,(function(t){return e.pause(t)})).on(P.MOUSELEAVE,(function(t){return e.cycle(t)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&J[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&J[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout((function(t){return e.cycle(t)}),500+e._config.interval))};t(this._element.querySelectorAll(V)).on(P.DRAG_START,(function(e){return e.preventDefault()})),this._pointerEvent?(t(this._element).on(P.POINTERDOWN,(function(e){return n(e)})),t(this._element).on(P.POINTERUP,(function(e){return i(e)})),this._element.classList.add(U)):(t(this._element).on(P.TOUCHSTART,(function(e){return n(e)})),t(this._element).on(P.TOUCHMOVE,(function(t){return function(t){t.originalEvent.touches&&t.originalEvent.touches.length>1?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)})),t(this._element).on(P.TOUCHEND,(function(e){return i(e)})))}},n._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},n._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(Q)):[],this._items.indexOf(e)},n._getItemByDirection=function(e,t){var n=e===k,i=e===O,r=this._getItemIndex(t),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return t;var s=(r+(e===O?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},n._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),r=this._getItemIndex(this._element.querySelector($)),o=t.Event(P.SLIDE,{relatedTarget:e,direction:n,from:r,to:i});return t(this._element).trigger(o),o},n._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(K));t(n).removeClass(q);var i=this._indicatorsElement.children[this._getItemIndex(e)];i&&t(i).addClass(q)}},n._slide=function(e,n){var i,r,o,s=this,a=this._element.querySelector($),u=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),f=this._getItemIndex(c),d=Boolean(this._interval);if(e===k?(i=F,r=W,o=L):(i=M,r=B,o=j),c&&t(c).hasClass(q))this._isSliding=!1;else if(!this._triggerSlideEvent(c,o).isDefaultPrevented()&&a&&c){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(c);var h=t.Event(P.SLID,{relatedTarget:c,direction:o,from:u,to:f});if(t(this._element).hasClass(R)){t(c).addClass(r),l.reflow(c),t(a).addClass(i),t(c).addClass(i);var p=parseInt(c.getAttribute("data-interval"),10);p?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=p):this._config.interval=this._config.defaultInterval||this._config.interval;var g=l.getTransitionDurationFromElement(a);t(a).one(l.TRANSITION_END,(function(){t(c).removeClass(i+" "+r).addClass(q),t(a).removeClass(q+" "+r+" "+i),s._isSliding=!1,setTimeout((function(){return t(s._element).trigger(h)}),0)})).emulateTransitionEnd(g)}else t(a).removeClass(q),t(c).addClass(q),this._isSliding=!1,t(this._element).trigger(h);d&&this.cycle()}},e._jQueryInterface=function(n){return this.each((function(){var i=t(this).data("bs.carousel"),r=s({},N,t(this).data());"object"==typeof n&&(r=s({},r,n));var o="string"==typeof n?n:r.slide;if(i||(i=new e(this,r),t(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof o){if(void 0===i[o])throw new TypeError('No method named "'+o+'"');i[o]()}else r.interval&&r.ride&&(i.pause(),i.cycle())}))},e._dataApiClickHandler=function(n){var i=l.getSelectorFromElement(this);if(i){var r=t(i)[0];if(r&&t(r).hasClass(H)){var o=s({},t(r).data(),t(this).data()),a=this.getAttribute("data-slide-to");a&&(o.interval=!1),e._jQueryInterface.call(t(r),o),a&&t(r).data("bs.carousel").to(a),n.preventDefault()}}},r(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return N}}]),e}();t(document).on(P.CLICK_DATA_API,X,Z._dataApiClickHandler),t(window).on(P.LOAD_DATA_API,(function(){for(var e=[].slice.call(document.querySelectorAll(G)),n=0,i=e.length;n<i;n++){var r=t(e[n]);Z._jQueryInterface.call(r,r.data())}})),t.fn[S]=Z._jQueryInterface,t.fn[S].Constructor=Z,t.fn[S].noConflict=function(){return t.fn[S]=A,Z._jQueryInterface};var ee="collapse",te=t.fn[ee],ne={toggle:!0,parent:""},ie={toggle:"boolean",parent:"(string|element)"},re={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},oe="show",se="collapse",ae="collapsing",le="collapsed",ue="width",ce="height",fe=".show, .collapsing",de='[data-toggle="collapse"]',he=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(de)),i=0,r=n.length;i<r;i++){var o=n[i],s=l.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(s)).filter((function(t){return t===e}));null!==s&&a.length>0&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=e.prototype;return n.toggle=function(){t(this._element).hasClass(oe)?this.hide():this.show()},n.show=function(){var n,i,r=this;if(!(this._isTransitioning||t(this._element).hasClass(oe)||(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(fe)).filter((function(e){return"string"==typeof r._config.parent?e.getAttribute("data-parent")===r._config.parent:e.classList.contains(se)}))).length&&(n=null),n&&(i=t(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var o=t.Event(re.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){n&&(e._jQueryInterface.call(t(n).not(this._selector),"hide"),i||t(n).data("bs.collapse",null));var s=this._getDimension();t(this._element).removeClass(se).addClass(ae),this._element.style[s]=0,this._triggerArray.length&&t(this._triggerArray).removeClass(le).attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(s[0].toUpperCase()+s.slice(1)),u=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,(function(){t(r._element).removeClass(ae).addClass(se).addClass(oe),r._element.style[s]="",r.setTransitioning(!1),t(r._element).trigger(re.SHOWN)})).emulateTransitionEnd(u),this._element.style[s]=this._element[a]+"px"}}},n.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(oe)){var n=t.Event(re.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",l.reflow(this._element),t(this._element).addClass(ae).removeClass(se).removeClass(oe);var r=this._triggerArray.length;if(r>0)for(var o=0;o<r;o++){var s=this._triggerArray[o],a=l.getSelectorFromElement(s);null!==a&&(t([].slice.call(document.querySelectorAll(a))).hasClass(oe)||t(s).addClass(le).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[i]="";var u=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,(function(){e.setTransitioning(!1),t(e._element).removeClass(ae).addClass(se).trigger(re.HIDDEN)})).emulateTransitionEnd(u)}}},n.setTransitioning=function(e){this._isTransitioning=e},n.dispose=function(){t.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(e){return(e=s({},ne,e)).toggle=Boolean(e.toggle),l.typeCheckConfig(ee,e,ie),e},n._getDimension=function(){return t(this._element).hasClass(ue)?ue:ce},n._getParent=function(){var n,i=this;l.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',o=[].slice.call(n.querySelectorAll(r));return t(o).each((function(t,n){i._addAriaAndCollapsedClass(e._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(e,n){var i=t(e).hasClass(oe);n.length&&t(n).toggleClass(le,!i).attr("aria-expanded",i)},e._getTargetFromElement=function(e){var t=l.getSelectorFromElement(e);return t?document.querySelector(t):null},e._jQueryInterface=function(n){return this.each((function(){var i=t(this),r=i.data("bs.collapse"),o=s({},ne,i.data(),"object"==typeof n&&n?n:{});if(!r&&o.toggle&&/show|hide/.test(n)&&(o.toggle=!1),r||(r=new e(this,o),i.data("bs.collapse",r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n]()}}))},r(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ne}}]),e}();t(document).on(re.CLICK_DATA_API,de,(function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=t(this),i=l.getSelectorFromElement(this),r=[].slice.call(document.querySelectorAll(i));t(r).each((function(){var e=t(this),i=e.data("bs.collapse")?"toggle":n.data();he._jQueryInterface.call(e,i)}))})),t.fn[ee]=he._jQueryInterface,t.fn[ee].Constructor=he,t.fn[ee].noConflict=function(){return t.fn[ee]=te,he._jQueryInterface};var pe="dropdown",ge=t.fn[pe],me=new RegExp("38|40|27"),ve={HIDE:"hide.bs.dropdown",HIDDEN:"hidden.bs.dropdown",SHOW:"show.bs.dropdown",SHOWN:"shown.bs.dropdown",CLICK:"click.bs.dropdown",CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},ye="disabled",be="show",_e="dropup",we="dropright",Ee="dropleft",Te="dropdown-menu-right",xe="position-static",Ce='[data-toggle="dropdown"]',Se=".dropdown form",De=".dropdown-menu",Ae=".navbar-nav",Ne=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ie="top-start",ke="top-end",Oe="bottom-start",Le="bottom-end",je="right-start",Pe="left-start",He={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},qe={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Re=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=e.prototype;return i.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(ye)){var i=e._getParentFromElement(this._element),r=t(this._menu).hasClass(be);if(e._clearMenus(),!r){var o={relatedTarget:this._element},s=t.Event(ve.SHOW,o);if(t(i).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar){if(void 0===n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=i:l.isElement(this._config.reference)&&(a=this._config.reference,void 0!==this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&t(i).addClass(xe),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(i).closest(Ae).length&&t(document.body).children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(be),t(i).toggleClass(be).trigger(t.Event(ve.SHOWN,o))}}}},i.show=function(){if(!(this._element.disabled||t(this._element).hasClass(ye)||t(this._menu).hasClass(be))){var n={relatedTarget:this._element},i=t.Event(ve.SHOW,n),r=e._getParentFromElement(this._element);t(r).trigger(i),i.isDefaultPrevented()||(t(this._menu).toggleClass(be),t(r).toggleClass(be).trigger(t.Event(ve.SHOWN,n)))}},i.hide=function(){if(!this._element.disabled&&!t(this._element).hasClass(ye)&&t(this._menu).hasClass(be)){var n={relatedTarget:this._element},i=t.Event(ve.HIDE,n),r=e._getParentFromElement(this._element);t(r).trigger(i),i.isDefaultPrevented()||(t(this._menu).toggleClass(be),t(r).toggleClass(be).trigger(t.Event(ve.HIDDEN,n)))}},i.dispose=function(){t.removeData(this._element,"bs.dropdown"),t(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var e=this;t(this._element).on(ve.CLICK,(function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}))},i._getConfig=function(e){return e=s({},this.constructor.Default,t(this._element).data(),e),l.typeCheckConfig(pe,e,this.constructor.DefaultType),e},i._getMenuElement=function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(De))}return this._menu},i._getPlacement=function(){var e=t(this._element.parentNode),n=Oe;return e.hasClass(_e)?(n=Ie,t(this._menu).hasClass(Te)&&(n=ke)):e.hasClass(we)?n=je:e.hasClass(Ee)?n=Pe:t(this._menu).hasClass(Te)&&(n=Le),n},i._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},i._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=s({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},i._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),e},e._jQueryInterface=function(n){return this.each((function(){var i=t(this).data("bs.dropdown");if(i||(i=new e(this,"object"==typeof n?n:null),t(this).data("bs.dropdown",i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},e._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll(Ce)),r=0,o=i.length;r<o;r++){var s=e._getParentFromElement(i[r]),a=t(i[r]).data("bs.dropdown"),l={relatedTarget:i[r]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var u=a._menu;if(t(s).hasClass(be)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&t.contains(s,n.target))){var c=t.Event(ve.HIDE,l);t(s).trigger(c),c.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t(document.body).children().off("mouseover",null,t.noop),i[r].setAttribute("aria-expanded","false"),t(u).removeClass(be),t(s).removeClass(be).trigger(t.Event(ve.HIDDEN,l)))}}}},e._getParentFromElement=function(e){var t,n=l.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},e._dataApiKeydownHandler=function(n){if((/input|textarea/i.test(n.target.tagName)?!(32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||t(n.target).closest(De).length)):me.test(n.which))&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!t(this).hasClass(ye))){var i=e._getParentFromElement(this),r=t(i).hasClass(be);if(r&&(!r||27!==n.which&&32!==n.which)){var o=[].slice.call(i.querySelectorAll(Ne));if(0!==o.length){var s=o.indexOf(n.target);38===n.which&&s>0&&s--,40===n.which&&s<o.length-1&&s++,s<0&&(s=0),o[s].focus()}}else{if(27===n.which){var a=i.querySelector(Ce);t(a).trigger("focus")}t(this).trigger("click")}}},r(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return He}},{key:"DefaultType",get:function(){return qe}}]),e}();t(document).on(ve.KEYDOWN_DATA_API,Ce,Re._dataApiKeydownHandler).on(ve.KEYDOWN_DATA_API,De,Re._dataApiKeydownHandler).on(ve.CLICK_DATA_API+" "+ve.KEYUP_DATA_API,Re._clearMenus).on(ve.CLICK_DATA_API,Ce,(function(e){e.preventDefault(),e.stopPropagation(),Re._jQueryInterface.call(t(this),"toggle")})).on(ve.CLICK_DATA_API,Se,(function(e){e.stopPropagation()})),t.fn[pe]=Re._jQueryInterface,t.fn[pe].Constructor=Re,t.fn[pe].noConflict=function(){return t.fn[pe]=ge,Re._jQueryInterface};var Me=t.fn.modal,Fe={backdrop:!0,keyboard:!0,focus:!0,show:!0},We={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Be={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},Ue="modal-dialog-scrollable",Ke="modal-scrollbar-measure",$e="modal-backdrop",Qe="modal-open",Ve="fade",ze="show",Ye=".modal-dialog",Xe=".modal-body",Ge='[data-toggle="modal"]',Je='[data-dismiss="modal"]',Ze=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",et=".sticky-top",tt=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(Ye),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=e.prototype;return n.toggle=function(e){return this._isShown?this.hide():this.show(e)},n.show=function(e){var n=this;if(!this._isShown&&!this._isTransitioning){t(this._element).hasClass(Ve)&&(this._isTransitioning=!0);var i=t.Event(Be.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(Be.CLICK_DISMISS,Je,(function(e){return n.hide(e)})),t(this._dialog).on(Be.MOUSEDOWN_DISMISS,(function(){t(n._element).one(Be.MOUSEUP_DISMISS,(function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(e)})))}},n.hide=function(e){var n=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var i=t.Event(Be.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=t(this._element).hasClass(Ve);if(r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(Be.FOCUSIN),t(this._element).removeClass(ze),t(this._element).off(Be.CLICK_DISMISS),t(this._dialog).off(Be.MOUSEDOWN_DISMISS),r){var o=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,(function(e){return n._hideModal(e)})).emulateTransitionEnd(o)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(e){return t(e).off(".bs.modal")})),t(document).off(Be.FOCUSIN),t.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(e){return e=s({},Fe,e),l.typeCheckConfig("modal",e,We),e},n._showElement=function(e){var n=this,i=t(this._element).hasClass(Ve);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),t(this._dialog).hasClass(Ue)?this._dialog.querySelector(Xe).scrollTop=0:this._element.scrollTop=0,i&&l.reflow(this._element),t(this._element).addClass(ze),this._config.focus&&this._enforceFocus();var r=t.Event(Be.SHOWN,{relatedTarget:e}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(r)};if(i){var s=l.getTransitionDurationFromElement(this._dialog);t(this._dialog).one(l.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},n._enforceFocus=function(){var e=this;t(document).off(Be.FOCUSIN).on(Be.FOCUSIN,(function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()}))},n._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(Be.KEYDOWN_DISMISS,(function(t){27===t.which&&(t.preventDefault(),e.hide())})):this._isShown||t(this._element).off(Be.KEYDOWN_DISMISS)},n._setResizeEvent=function(){var e=this;this._isShown?t(window).on(Be.RESIZE,(function(t){return e.handleUpdate(t)})):t(window).off(Be.RESIZE)},n._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){t(document.body).removeClass(Qe),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(Be.HIDDEN)}))},n._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(Ve)?Ve:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=$e,i&&this._backdrop.classList.add(i),t(this._backdrop).appendTo(document.body),t(this._element).on(Be.CLICK_DISMISS,(function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())})),i&&l.reflow(this._backdrop),t(this._backdrop).addClass(ze),!e)return;if(!i)return void e();var r=l.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(l.TRANSITION_END,e).emulateTransitionEnd(r)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(ze);var o=function(){n._removeBackdrop(),e&&e()};if(t(this._element).hasClass(Ve)){var s=l.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(l.TRANSITION_END,o).emulateTransitionEnd(s)}else o()}else e&&e()},n._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(Ze)),i=[].slice.call(document.querySelectorAll(et));t(n).each((function(n,i){var r=i.style.paddingRight,o=t(i).css("padding-right");t(i).data("padding-right",r).css("padding-right",parseFloat(o)+e._scrollbarWidth+"px")})),t(i).each((function(n,i){var r=i.style.marginRight,o=t(i).css("margin-right");t(i).data("margin-right",r).css("margin-right",parseFloat(o)-e._scrollbarWidth+"px")}));var r=document.body.style.paddingRight,o=t(document.body).css("padding-right");t(document.body).data("padding-right",r).css("padding-right",parseFloat(o)+this._scrollbarWidth+"px")}t(document.body).addClass(Qe)},n._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(Ze));t(e).each((function(e,n){var i=t(n).data("padding-right");t(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(""+et));t(n).each((function(e,n){var i=t(n).data("margin-right");void 0!==i&&t(n).css("margin-right",i).removeData("margin-right")}));var i=t(document.body).data("padding-right");t(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var e=document.createElement("div");e.className=Ke,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},e._jQueryInterface=function(n,i){return this.each((function(){var r=t(this).data("bs.modal"),o=s({},Fe,t(this).data(),"object"==typeof n&&n?n:{});if(r||(r=new e(this,o),t(this).data("bs.modal",r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n](i)}else o.show&&r.show(i)}))},r(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Fe}}]),e}();t(document).on(Be.CLICK_DATA_API,Ge,(function(e){var n,i=this,r=l.getSelectorFromElement(this);r&&(n=document.querySelector(r));var o=t(n).data("bs.modal")?"toggle":s({},t(n).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var a=t(n).one(Be.SHOW,(function(e){e.isDefaultPrevented()||a.one(Be.HIDDEN,(function(){t(i).is(":visible")&&i.focus()}))}));tt._jQueryInterface.call(t(n),o,this)})),t.fn.modal=tt._jQueryInterface,t.fn.modal.Constructor=tt,t.fn.modal.noConflict=function(){return t.fn.modal=Me,tt._jQueryInterface};var nt=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],it={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},rt=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,ot=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function st(e,t,n){if(0===e.length)return e;if(n&&"function"==typeof n)return n(e);for(var i=(new window.DOMParser).parseFromString(e,"text/html"),r=Object.keys(t),o=[].slice.call(i.body.querySelectorAll("*")),s=function(e,n){var i=o[e],s=i.nodeName.toLowerCase();if(-1===r.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(t["*"]||[],t[s]||[]);a.forEach((function(e){(function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return-1===nt.indexOf(n)||Boolean(e.nodeValue.match(rt)||e.nodeValue.match(ot));for(var i=t.filter((function(e){return e instanceof RegExp})),r=0,o=i.length;r<o;r++)if(n.match(i[r]))return!0;return!1})(e,l)||i.removeAttribute(e.nodeName)}))},a=0,l=o.length;a<l;a++)s(a);return i.body.innerHTML}var at="tooltip",lt=t.fn.tooltip,ut=new RegExp("(^|\\s)bs-tooltip\\S+","g"),ct=["sanitize","whiteList","sanitizeFn"],ft={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},dt={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},ht={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:it},pt="show",gt="out",mt={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},vt="fade",yt="show",bt=".tooltip-inner",_t=".arrow",wt="hover",Et="focus",Tt="click",xt="manual",Ct=function(){function e(e,t){if(void 0===n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var i=e.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(yt))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var r=l.findShadowRoot(this.element),o=t.contains(null!==r?r:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!o)return;var s=this.getTipElement(),a=l.getUID(this.constructor.NAME);s.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&t(s).addClass(vt);var u="function"==typeof this.config.placement?this.config.placement.call(this,s,this.element):this.config.placement,c=this._getAttachment(u);this.addAttachmentClass(c);var f=this._getContainer();t(s).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(s).appendTo(f),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,s,{placement:c,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:_t},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),t(s).addClass(yt),"ontouchstart"in document.documentElement&&t(document.body).children().on("mouseover",null,t.noop);var d=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===gt&&e._leave(null,e)};if(t(this.tip).hasClass(vt)){var h=l.getTransitionDurationFromElement(this.tip);t(this.tip).one(l.TRANSITION_END,d).emulateTransitionEnd(h)}else d()}},i.hide=function(e){var n=this,i=this.getTipElement(),r=t.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==pt&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};if(t(this.element).trigger(r),!r.isDefaultPrevented()){if(t(i).removeClass(yt),"ontouchstart"in document.documentElement&&t(document.body).children().off("mouseover",null,t.noop),this._activeTrigger[Tt]=!1,this._activeTrigger[Et]=!1,this._activeTrigger[wt]=!1,t(this.tip).hasClass(vt)){var s=l.getTransitionDurationFromElement(i);t(i).one(l.TRANSITION_END,o).emulateTransitionEnd(s)}else o();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},i.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},i.setContent=function(){var e=this.getTipElement();this.setElementContent(t(e.querySelectorAll(bt)),this.getTitle()),t(e).removeClass(vt+" "+yt)},i.setElementContent=function(e,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=st(n,this.config.whiteList,this.config.sanitizeFn)),e.html(n)):e.text(n):this.config.html?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text())},i.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},i._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=s({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},i._getContainer=function(){return!1===this.config.container?document.body:l.isElement(this.config.container)?t(this.config.container):t(document).find(this.config.container)},i._getAttachment=function(e){return dt[e.toUpperCase()]},i._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,(function(t){return e.toggle(t)}));else if(n!==xt){var i=n===wt?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,r=n===wt?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,(function(t){return e._enter(t)})).on(r,e.config.selector,(function(t){return e._leave(t)}))}})),t(this.element).closest(".modal").on("hide.bs.modal",(function(){e.element&&e.hide()})),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?Et:wt]=!0),t(n.getTipElement()).hasClass(yt)||n._hoverState===pt?n._hoverState=pt:(clearTimeout(n._timeout),n._hoverState=pt,n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){n._hoverState===pt&&n.show()}),n.config.delay.show):n.show())},i._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?Et:wt]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=gt,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){n._hoverState===gt&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},i._getConfig=function(e){var n=t(this.element).data();return Object.keys(n).forEach((function(e){-1!==ct.indexOf(e)&&delete n[e]})),"number"==typeof(e=s({},this.constructor.Default,n,"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),l.typeCheckConfig(at,e,this.constructor.DefaultType),e.sanitize&&(e.template=st(e.template,e.whiteList,e.sanitizeFn)),e},i._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},i._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(ut);null!==n&&n.length&&e.removeClass(n.join(""))},i._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},i._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(vt),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},e._jQueryInterface=function(n){return this.each((function(){var i=t(this).data("bs.tooltip"),r="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new e(this,r),t(this).data("bs.tooltip",i)),"string"==typeof n)){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},r(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ht}},{key:"NAME",get:function(){return at}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return mt}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return ft}}]),e}();t.fn.tooltip=Ct._jQueryInterface,t.fn.tooltip.Constructor=Ct,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=lt,Ct._jQueryInterface};var St="popover",Dt=t.fn.popover,At=new RegExp("(^|\\s)bs-popover\\S+","g"),Nt=s({},Ct.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),It=s({},Ct.DefaultType,{content:"(string|element|function)"}),kt="fade",Ot="show",Lt=".popover-header",jt=".popover-body",Pt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Ht=function(e){var n,i;function o(){return e.apply(this,arguments)||this}i=e,(n=o).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var s=o.prototype;return s.isWithContent=function(){return this.getTitle()||this._getContent()},s.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},s.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},s.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(Lt),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(jt),n),e.removeClass(kt+" "+Ot)},s._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},s._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(At);null!==n&&n.length>0&&e.removeClass(n.join(""))},o._jQueryInterface=function(e){return this.each((function(){var n=t(this).data("bs.popover"),i="object"==typeof e?e:null;if((n||!/dispose|hide/.test(e))&&(n||(n=new o(this,i),t(this).data("bs.popover",n)),"string"==typeof e)){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},r(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Nt}},{key:"NAME",get:function(){return St}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return Pt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return It}}]),o}(Ct);t.fn.popover=Ht._jQueryInterface,t.fn.popover.Constructor=Ht,t.fn.popover.noConflict=function(){return t.fn.popover=Dt,Ht._jQueryInterface};var qt="scrollspy",Rt=t.fn[qt],Mt={offset:10,method:"auto",target:""},Ft={offset:"number",method:"string",target:"(string|element)"},Wt={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},Bt="dropdown-item",Ut="active",Kt='[data-spy="scroll"]',$t=".nav, .list-group",Qt=".nav-link",Vt=".nav-item",zt=".list-group-item",Yt=".dropdown",Xt=".dropdown-item",Gt=".dropdown-toggle",Jt="offset",Zt="position",en=function(){function e(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+Qt+","+this._config.target+" "+zt+","+this._config.target+" "+Xt,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(Wt.SCROLL,(function(e){return i._process(e)})),this.refresh(),this._process()}var n=e.prototype;return n.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?Jt:Zt,i="auto"===this._config.method?n:this._config.method,r=i===Zt?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(e){var n,o=l.getSelectorFromElement(e);if(o&&(n=document.querySelector(o)),n){var s=n.getBoundingClientRect();if(s.width||s.height)return[t(n)[i]().top+r,o]}return null})).filter((function(e){return e})).sort((function(e,t){return e[0]-t[0]})).forEach((function(t){e._offsets.push(t[0]),e._targets.push(t[1])}))},n.dispose=function(){t.removeData(this._element,"bs.scrollspy"),t(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(e){if("string"!=typeof(e=s({},Mt,"object"==typeof e&&e?e:{})).target){var n=t(e.target).attr("id");n||(n=l.getUID(qt),t(e.target).attr("id",n)),e.target="#"+n}return l.typeCheckConfig(qt,e,Ft),e},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;)this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&(void 0===this._offsets[r+1]||e<this._offsets[r+1])&&this._activate(this._targets[r])}},n._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",").map((function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'})),i=t([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass(Bt)?(i.closest(Yt).find(Gt).addClass(Ut),i.addClass(Ut)):(i.addClass(Ut),i.parents($t).prev(Qt+", "+zt).addClass(Ut),i.parents($t).prev(Vt).children(Qt).addClass(Ut)),t(this._scrollElement).trigger(Wt.ACTIVATE,{relatedTarget:e})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(e){return e.classList.contains(Ut)})).forEach((function(e){return e.classList.remove(Ut)}))},e._jQueryInterface=function(n){return this.each((function(){var i=t(this).data("bs.scrollspy");if(i||(i=new e(this,"object"==typeof n&&n),t(this).data("bs.scrollspy",i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},r(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Mt}}]),e}();t(window).on(Wt.LOAD_DATA_API,(function(){for(var e=[].slice.call(document.querySelectorAll(Kt)),n=e.length;n--;){var i=t(e[n]);en._jQueryInterface.call(i,i.data())}})),t.fn[qt]=en._jQueryInterface,t.fn[qt].Constructor=en,t.fn[qt].noConflict=function(){return t.fn[qt]=Rt,en._jQueryInterface};var tn=t.fn.tab,nn={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},rn="dropdown-menu",on="active",sn="disabled",an="fade",ln="show",un=".dropdown",cn=".nav, .list-group",fn=".active",dn="> li > .active",hn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',pn=".dropdown-toggle",gn="> .dropdown-menu .active",mn=function(){function e(e){this._element=e}var n=e.prototype;return n.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(on)||t(this._element).hasClass(sn))){var n,i,r=t(this._element).closest(cn)[0],o=l.getSelectorFromElement(this._element);if(r){var s="UL"===r.nodeName||"OL"===r.nodeName?dn:fn;i=(i=t.makeArray(t(r).find(s)))[i.length-1]}var a=t.Event(nn.HIDE,{relatedTarget:this._element}),u=t.Event(nn.SHOW,{relatedTarget:i});if(i&&t(i).trigger(a),t(this._element).trigger(u),!u.isDefaultPrevented()&&!a.isDefaultPrevented()){o&&(n=document.querySelector(o)),this._activate(this._element,r);var c=function(){var n=t.Event(nn.HIDDEN,{relatedTarget:e._element}),r=t.Event(nn.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(r)};n?this._activate(n,n.parentNode,c):c()}}},n.dispose=function(){t.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(e,n,i){var r=this,o=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?t(n).children(fn):t(n).find(dn))[0],s=i&&o&&t(o).hasClass(an),a=function(){return r._transitionComplete(e,o,i)};if(o&&s){var u=l.getTransitionDurationFromElement(o);t(o).removeClass(ln).one(l.TRANSITION_END,a).emulateTransitionEnd(u)}else a()},n._transitionComplete=function(e,n,i){if(n){t(n).removeClass(on);var r=t(n.parentNode).find(gn)[0];r&&t(r).removeClass(on),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(on),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),l.reflow(e),e.classList.contains(an)&&e.classList.add(ln),e.parentNode&&t(e.parentNode).hasClass(rn)){var o=t(e).closest(un)[0];if(o){var s=[].slice.call(o.querySelectorAll(pn));t(s).addClass(on)}e.setAttribute("aria-expanded",!0)}i&&i()},e._jQueryInterface=function(n){return this.each((function(){var i=t(this),r=i.data("bs.tab");if(r||(r=new e(this),i.data("bs.tab",r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n]()}}))},r(e,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),e}();t(document).on(nn.CLICK_DATA_API,hn,(function(e){e.preventDefault(),mn._jQueryInterface.call(t(this),"show")})),t.fn.tab=mn._jQueryInterface,t.fn.tab.Constructor=mn,t.fn.tab.noConflict=function(){return t.fn.tab=tn,mn._jQueryInterface};var vn=t.fn.toast,yn={CLICK_DISMISS:"click.dismiss.bs.toast",HIDE:"hide.bs.toast",HIDDEN:"hidden.bs.toast",SHOW:"show.bs.toast",SHOWN:"shown.bs.toast"},bn="fade",_n="hide",wn="show",En="showing",Tn={animation:"boolean",autohide:"boolean",delay:"number"},xn={animation:!0,autohide:!0,delay:500},Cn='[data-dismiss="toast"]',Sn=function(){function e(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var n=e.prototype;return n.show=function(){var e=this;t(this._element).trigger(yn.SHOW),this._config.animation&&this._element.classList.add(bn);var n=function(){e._element.classList.remove(En),e._element.classList.add(wn),t(e._element).trigger(yn.SHOWN),e._config.autohide&&e.hide()};if(this._element.classList.remove(_n),this._element.classList.add(En),this._config.animation){var i=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},n.hide=function(e){var n=this;this._element.classList.contains(wn)&&(t(this._element).trigger(yn.HIDE),e?this._close():this._timeout=setTimeout((function(){n._close()}),this._config.delay))},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(wn)&&this._element.classList.remove(wn),t(this._element).off(yn.CLICK_DISMISS),t.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(e){return e=s({},xn,t(this._element).data(),"object"==typeof e&&e?e:{}),l.typeCheckConfig("toast",e,this.constructor.DefaultType),e},n._setListeners=function(){var e=this;t(this._element).on(yn.CLICK_DISMISS,Cn,(function(){return e.hide(!0)}))},n._close=function(){var e=this,n=function(){e._element.classList.add(_n),t(e._element).trigger(yn.HIDDEN)};if(this._element.classList.remove(wn),this._config.animation){var i=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},e._jQueryInterface=function(n){return this.each((function(){var i=t(this),r=i.data("bs.toast");if(r||(r=new e(this,"object"==typeof n&&n),i.data("bs.toast",r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n](this)}}))},r(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Tn}},{key:"Default",get:function(){return xn}}]),e}();t.fn.toast=Sn._jQueryInterface,t.fn.toast.Constructor=Sn,t.fn.toast.noConflict=function(){return t.fn.toast=vn,Sn._jQueryInterface},function(){if(void 0===t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),e.Util=l,e.Alert=p,e.Button=C,e.Carousel=Z,e.Collapse=he,e.Dropdown=Re,e.Modal=tt,e.Popover=Ht,e.Scrollspy=en,e.Tab=mn,e.Toast=Sn,e.Tooltip=Ct,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(4),n(0))},function(e,t,n){var i;!function(t,n){"use strict";"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(n,r){"use strict";var o=[],s=n.document,a=Object.getPrototypeOf,l=o.slice,u=o.concat,c=o.push,f=o.indexOf,d={},h=d.toString,p=d.hasOwnProperty,g=p.toString,m=g.call(Object),v={},y=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},b=function(e){return null!=e&&e===e.window},_={type:!0,src:!0,nonce:!0,noModule:!0};function w(e,t,n){var i,r,o=(n=n||s).createElement("script");if(o.text=e,t)for(i in _)(r=t[i]||t.getAttribute&&t.getAttribute(i))&&o.setAttribute(i,r);n.head.appendChild(o).parentNode.removeChild(o)}function E(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[h.call(e)]||"object":typeof e}var T=function(e,t){return new T.fn.init(e,t)},x=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function C(e){var t=!!e&&"length"in e&&e.length,n=E(e);return!y(e)&&!b(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}T.fn=T.prototype={jquery:"3.4.1",constructor:T,length:0,toArray:function(){return l.call(this)},get:function(e){return null==e?l.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:o.sort,splice:o.splice},T.extend=T.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||y(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&s!==i&&(u&&i&&(T.isPlainObject(i)||(r=Array.isArray(i)))?(n=s[t],o=r&&!Array.isArray(n)?[]:r||T.isPlainObject(n)?n:{},r=!1,s[t]=T.extend(u,o,i)):void 0!==i&&(s[t]=i));return s},T.extend({expando:"jQuery"+("3.4.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==h.call(e))&&(!(t=a(e))||"function"==typeof(n=p.call(t,"constructor")&&t.constructor)&&g.call(n)===m)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){w(e,{nonce:t&&t.nonce})},each:function(e,t){var n,i=0;if(C(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(x,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?T.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:f.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,o=e.length,s=!n;r<o;r++)!t(e[r],r)!==s&&i.push(e[r]);return i},map:function(e,t,n){var i,r,o=0,s=[];if(C(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&s.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&s.push(r);return u.apply([],s)},guid:1,support:v}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=o[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){d["[object "+t+"]"]=t.toLowerCase()}));var S=function(e){var t,n,i,r,o,s,a,l,u,c,f,d,h,p,g,m,v,y,b,_="sizzle"+1*new Date,w=e.document,E=0,T=0,x=le(),C=le(),S=le(),D=le(),A=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,I=[],k=I.pop,O=I.push,L=I.push,j=I.slice,P=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",q="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+q+"*("+R+")(?:"+q+"*([*^$|!~]?=)"+q+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+q+"*\\]",F=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",W=new RegExp(q+"+","g"),B=new RegExp("^"+q+"+|((?:^|[^\\\\])(?:\\\\.)*)"+q+"+$","g"),U=new RegExp("^"+q+"*,"+q+"*"),K=new RegExp("^"+q+"*([>+~]|"+q+")"+q+"*"),$=new RegExp(q+"|>"),Q=new RegExp(F),V=new RegExp("^"+R+"$"),z={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+q+"*(even|odd|(([+-]|)(\\d*)n|)"+q+"*(?:([+-]|)"+q+"*(\\d+)|))"+q+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+q+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+q+"*((?:-\\d)?\\d*)"+q+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,X=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+q+"?|("+q+")|.)","ig"),ne=function(e,t,n){var i="0x"+t-65536;return i!=i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,re=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){d()},se=_e((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{L.apply(I=j.call(w.childNodes),w.childNodes),I[w.childNodes.length].nodeType}catch(e){L={apply:I.length?function(e,t){O.apply(e,j.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function ae(e,t,i,r){var o,a,u,c,f,p,v,y=t&&t.ownerDocument,E=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==E&&9!==E&&11!==E)return i;if(!r&&((t?t.ownerDocument||t:w)!==h&&d(t),t=t||h,g)){if(11!==E&&(f=Z.exec(e)))if(o=f[1]){if(9===E){if(!(u=t.getElementById(o)))return i;if(u.id===o)return i.push(u),i}else if(y&&(u=y.getElementById(o))&&b(t,u)&&u.id===o)return i.push(u),i}else{if(f[2])return L.apply(i,t.getElementsByTagName(e)),i;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(i,t.getElementsByClassName(o)),i}if(n.qsa&&!D[e+" "]&&(!m||!m.test(e))&&(1!==E||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===E&&$.test(e)){for((c=t.getAttribute("id"))?c=c.replace(ie,re):t.setAttribute("id",c=_),a=(p=s(e)).length;a--;)p[a]="#"+c+" "+be(p[a]);v=p.join(","),y=ee.test(e)&&ve(t.parentNode)||t}try{return L.apply(i,y.querySelectorAll(v)),i}catch(t){D(e,!0)}finally{c===_&&t.removeAttribute("id")}}}return l(e.replace(B,"$1"),t,i,r)}function le(){var e=[];return function t(n,r){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function ue(e){return e[_]=!0,e}function ce(e){var t=h.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){for(var n=e.split("|"),r=n.length;r--;)i.attrHandle[n[r]]=t}function de(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function he(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&se(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return ue((function(t){return t=+t,ue((function(n,i){for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))}))}))}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ae.support={},o=ae.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},d=ae.setDocument=function(e){var t,r,s=e?e.ownerDocument||e:w;return s!==h&&9===s.nodeType&&s.documentElement?(p=(h=s).documentElement,g=!o(h),w!==h&&(r=h.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",oe,!1):r.attachEvent&&r.attachEvent("onunload",oe)),n.attributes=ce((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ce((function(e){return e.appendChild(h.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=J.test(h.getElementsByClassName),n.getById=ce((function(e){return p.appendChild(e).id=_,!h.getElementsByName||!h.getElementsByName(_).length})),n.getById?(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,i,r,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=J.test(h.querySelectorAll))&&(ce((function(e){p.appendChild(e).innerHTML="<a id='"+_+"'></a><select id='"+_+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+q+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+q+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+_+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+_+"+*").length||m.push(".#.+[+~]")})),ce((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=h.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+q+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=J.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&ce((function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",F)})),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=J.test(p.compareDocumentPosition),b=t||J.test(p.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},A=t?function(e,t){if(e===t)return f=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e===h||e.ownerDocument===w&&b(w,e)?-1:t===h||t.ownerDocument===w&&b(w,t)?1:c?P(c,e)-P(c,t):0:4&i?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,s=[e],a=[t];if(!r||!o)return e===h?-1:t===h?1:r?-1:o?1:c?P(c,e)-P(c,t):0;if(r===o)return de(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?de(s[i],a[i]):s[i]===w?-1:a[i]===w?1:0},h):h},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if((e.ownerDocument||e)!==h&&d(e),n.matchesSelector&&g&&!D[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var i=y.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){D(t,!0)}return ae(t,h,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!==h&&d(e),b(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!==h&&d(e);var r=i.attrHandle[t.toLowerCase()],o=r&&N.call(i.attrHandle,t.toLowerCase())?r(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ae.escape=function(e){return(e+"").replace(ie,re)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,i=[],r=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(A),f){for(;t=e[o++];)t===e[o]&&(r=i.push(o));for(;r--;)e.splice(i[r],1)}return c=null,e},r=ae.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=r(t);return n},(i=ae.selectors={cacheLength:50,createPseudo:ue,match:z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return z.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Q.test(n)&&(t=s(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=x[e+" "];return t||(t=new RegExp("(^|"+q+")"+e+"("+q+"|$)"))&&x(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(i){var r=ae.attr(i,e);return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,d,h,p,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(m){if(o){for(;g;){for(d=t;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[s?m.firstChild:m.lastChild],s&&y){for(b=(h=(u=(c=(f=(d=m)[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===E&&u[1])&&u[2],d=h&&m.childNodes[h];d=++h&&d&&d[g]||(b=h=0)||p.pop();)if(1===d.nodeType&&++b&&d===t){c[e]=[E,h,b];break}}else if(y&&(b=h=(u=(c=(f=(d=t)[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===E&&u[1]),!1===b)for(;(d=++h&&d&&d[g]||(b=h=0)||p.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(y&&((c=(f=d[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[E,b]),d!==t)););return(b-=r)===i||b%i==0&&b/i>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return r[_]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ue((function(e,n){for(var i,o=r(e,t),s=o.length;s--;)e[i=P(e,o[s])]=!(n[i]=o[s])})):function(e){return r(e,0,n)}):r}},pseudos:{not:ue((function(e){var t=[],n=[],i=a(e.replace(B,"$1"));return i[_]?ue((function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))})):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}})),has:ue((function(e){return function(t){return ae(e,t).length>0}})),contains:ue((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||r(t)).indexOf(e)>-1}})),lang:ue((function(e){return V.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return X.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:me((function(e,t,n){for(var i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e})),gt:me((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=he(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=pe(t);function ye(){}function be(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function _e(e,t,n){var i=t.dir,r=t.next,o=r||i,s=n&&"parentNode"===o,a=T++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,r);return!1}:function(t,n,l){var u,c,f,d=[E,a];if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||s)if(c=(f=t[_]||(t[_]={}))[t.uniqueID]||(f[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((u=c[o])&&u[0]===E&&u[1]===a)return d[2]=u[2];if(c[o]=d,d[2]=e(t,n,l))return!0}return!1}}function we(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function Ee(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,u=null!=t;a<l;a++)(o=e[a])&&(n&&!n(o,i,r)||(s.push(o),u&&t.push(a)));return s}function Te(e,t,n,i,r,o){return i&&!i[_]&&(i=Te(i)),r&&!r[_]&&(r=Te(r,o)),ue((function(o,s,a,l){var u,c,f,d=[],h=[],p=s.length,g=o||function(e,t,n){for(var i=0,r=t.length;i<r;i++)ae(e,t[i],n);return n}(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:Ee(g,d,e,a,l),v=n?r||(o?e:p||i)?[]:s:m;if(n&&n(m,v,a,l),i)for(u=Ee(v,h),i(u,[],a,l),c=u.length;c--;)(f=u[c])&&(v[h[c]]=!(m[h[c]]=f));if(o){if(r||e){if(r){for(u=[],c=v.length;c--;)(f=v[c])&&u.push(m[c]=f);r(null,v=[],u,l)}for(c=v.length;c--;)(f=v[c])&&(u=r?P(o,f):d[c])>-1&&(o[u]=!(s[u]=f))}}else v=Ee(v===s?v.splice(p,v.length):v),r?r(null,s,v,l):L.apply(s,v)}))}function xe(e){for(var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=_e((function(e){return e===t}),a,!0),f=_e((function(e){return P(t,e)>-1}),a,!0),d=[function(e,n,i){var r=!s&&(i||n!==u)||((t=n).nodeType?c(e,n,i):f(e,n,i));return t=null,r}];l<o;l++)if(n=i.relative[e[l].type])d=[_e(we(d),n)];else{if((n=i.filter[e[l].type].apply(null,e[l].matches))[_]){for(r=++l;r<o&&!i.relative[e[r].type];r++);return Te(l>1&&we(d),l>1&&be(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(B,"$1"),n,l<r&&xe(e.slice(l,r)),r<o&&xe(e=e.slice(r)),r<o&&be(e))}d.push(n)}return we(d)}return ye.prototype=i.filters=i.pseudos,i.setFilters=new ye,s=ae.tokenize=function(e,t){var n,r,o,s,a,l,u,c=C[e+" "];if(c)return t?0:c.slice(0);for(a=e,l=[],u=i.preFilter;a;){for(s in n&&!(r=U.exec(a))||(r&&(a=a.slice(r[0].length)||a),l.push(o=[])),n=!1,(r=K.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),i.filter)!(r=z[s].exec(a))||u[s]&&!(r=u[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ae.error(e):C(e,l).slice(0)},a=ae.compile=function(e,t){var n,r=[],o=[],a=S[e+" "];if(!a){for(t||(t=s(e)),n=t.length;n--;)(a=xe(t[n]))[_]?r.push(a):o.push(a);(a=S(e,function(e,t){var n=t.length>0,r=e.length>0,o=function(o,s,a,l,c){var f,p,m,v=0,y="0",b=o&&[],_=[],w=u,T=o||r&&i.find.TAG("*",c),x=E+=null==w?1:Math.random()||.1,C=T.length;for(c&&(u=s===h||s||c);y!==C&&null!=(f=T[y]);y++){if(r&&f){for(p=0,s||f.ownerDocument===h||(d(f),a=!g);m=e[p++];)if(m(f,s||h,a)){l.push(f);break}c&&(E=x)}n&&((f=!m&&f)&&v--,o&&b.push(f))}if(v+=y,n&&y!==v){for(p=0;m=t[p++];)m(b,_,s,a);if(o){if(v>0)for(;y--;)b[y]||_[y]||(_[y]=k.call(l));_=Ee(_)}L.apply(l,_),c&&!o&&_.length>0&&v+t.length>1&&ae.uniqueSort(l)}return c&&(E=x,u=w),b};return n?ue(o):o}(o,r))).selector=e}return a},l=ae.select=function(e,t,n,r){var o,l,u,c,f,d="function"==typeof e&&e,h=!r&&s(e=d.selector||e);if(n=n||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(u=l[0]).type&&9===t.nodeType&&g&&i.relative[l[1].type]){if(!(t=(i.find.ID(u.matches[0].replace(te,ne),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(o=z.needsContext.test(e)?0:l.length;o--&&(u=l[o],!i.relative[c=u.type]);)if((f=i.find[c])&&(r=f(u.matches[0].replace(te,ne),ee.test(l[0].type)&&ve(t.parentNode)||t))){if(l.splice(o,1),!(e=r.length&&be(l)))return L.apply(n,r),n;break}}return(d||a(e,h))(r,t,!g,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=_.split("").sort(A).join("")===_,n.detectDuplicates=!!f,d(),n.sortDetached=ce((function(e){return 1&e.compareDocumentPosition(h.createElement("fieldset"))})),ce((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||fe("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ce((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||fe("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ce((function(e){return null==e.getAttribute("disabled")}))||fe(H,(function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),ae}(n);T.find=S,T.expr=S.selectors,T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=S.uniqueSort,T.text=S.getText,T.isXMLDoc=S.isXML,T.contains=S.contains,T.escapeSelector=S.escape;var D=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&T(e).is(n))break;i.push(e)}return i},A=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=T.expr.match.needsContext;function I(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var k=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function O(e,t,n){return y(t)?T.grep(e,(function(e,i){return!!t.call(e,i,e)!==n})):t.nodeType?T.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?T.grep(e,(function(e){return f.call(t,e)>-1!==n})):T.filter(t,e,n)}T.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?T.find.matchesSelector(i,e)?[i]:[]:T.find.matches(e,T.grep(t,(function(e){return 1===e.nodeType})))},T.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(T(e).filter((function(){for(t=0;t<i;t++)if(T.contains(r[t],this))return!0})));for(n=this.pushStack([]),t=0;t<i;t++)T.find(e,r[t],n);return i>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(O(this,e||[],!1))},not:function(e){return this.pushStack(O(this,e||[],!0))},is:function(e){return!!O(this,"string"==typeof e&&N.test(e)?T(e):e||[],!1).length}});var L,j=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t,n){var i,r;if(!e)return this;if(n=n||L,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:j.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:s,!0)),k.test(i[1])&&T.isPlainObject(t))for(i in t)y(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(r=s.getElementById(i[2]))&&(this[0]=r,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this)}).prototype=T.fn,L=T(s);var P=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function q(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0}))},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&T(e);if(!N.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?T.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?f.call(T(e),this[0]):f.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return D(e,"parentNode")},parentsUntil:function(e,t,n){return D(e,"parentNode",n)},next:function(e){return q(e,"nextSibling")},prev:function(e){return q(e,"previousSibling")},nextAll:function(e){return D(e,"nextSibling")},prevAll:function(e){return D(e,"previousSibling")},nextUntil:function(e,t,n){return D(e,"nextSibling",n)},prevUntil:function(e,t,n){return D(e,"previousSibling",n)},siblings:function(e){return A((e.parentNode||{}).firstChild,e)},children:function(e){return A(e.firstChild)},contents:function(e){return void 0!==e.contentDocument?e.contentDocument:(I(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},(function(e,t){T.fn[e]=function(n,i){var r=T.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=T.filter(i,r)),this.length>1&&(H[e]||T.uniqueSort(r),P.test(e)&&r.reverse()),this.pushStack(r)}}));var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function F(e){throw e}function W(e,t,n,i){var r;try{e&&y(r=e.promise)?r.call(e).done(t).fail(n):e&&y(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}T.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return T.each(e.match(R)||[],(function(e,n){t[n]=!0})),t}(e):T.extend({},e);var t,n,i,r,o=[],s=[],a=-1,l=function(){for(r=r||e.once,i=t=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=o.length,n=!1);e.memory||(n=!1),t=!1,r&&(o=n?[]:"")},u={add:function(){return o&&(n&&!t&&(a=o.length-1,s.push(n)),function t(n){T.each(n,(function(n,i){y(i)?e.unique&&u.has(i)||o.push(i):i&&i.length&&"string"!==E(i)&&t(i)}))}(arguments),n&&!t&&l()),this},remove:function(){return T.each(arguments,(function(e,t){for(var n;(n=T.inArray(t,o,n))>-1;)o.splice(n,1),n<=a&&a--})),this},has:function(e){return e?T.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return r=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return r=s=[],n||t||(o=n=""),this},locked:function(){return!!r},fireWith:function(e,n){return r||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!i}};return u},T.extend({Deferred:function(e){var t=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},pipe:function(){var e=arguments;return T.Deferred((function(n){T.each(t,(function(t,i){var r=y(e[i[4]])&&e[i[4]];o[i[1]]((function(){var e=r&&r.apply(this,arguments);e&&y(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[e]:arguments)}))})),e=null})).promise()},then:function(e,i,r){var o=0;function s(e,t,i,r){return function(){var a=this,l=arguments,u=function(){var n,u;if(!(e<o)){if((n=i.apply(a,l))===t.promise())throw new TypeError("Thenable self-resolution");u=n&&("object"==typeof n||"function"==typeof n)&&n.then,y(u)?r?u.call(n,s(o,t,M,r),s(o,t,F,r)):(o++,u.call(n,s(o,t,M,r),s(o,t,F,r),s(o,t,M,t.notifyWith))):(i!==M&&(a=void 0,l=[n]),(r||t.resolveWith)(a,l))}},c=r?u:function(){try{u()}catch(n){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(n,c.stackTrace),e+1>=o&&(i!==F&&(a=void 0,l=[n]),t.rejectWith(a,l))}};e?c():(T.Deferred.getStackHook&&(c.stackTrace=T.Deferred.getStackHook()),n.setTimeout(c))}}return T.Deferred((function(n){t[0][3].add(s(0,n,y(r)?r:M,n.notifyWith)),t[1][3].add(s(0,n,y(e)?e:M)),t[2][3].add(s(0,n,y(i)?i:F))})).promise()},promise:function(e){return null!=e?T.extend(e,r):r}},o={};return T.each(t,(function(e,n){var s=n[2],a=n[5];r[n[1]]=s.add,a&&s.add((function(){i=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),s.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=s.fireWith})),r.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,i=Array(n),r=l.call(arguments),o=T.Deferred(),s=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?l.call(arguments):n,--t||o.resolveWith(i,r)}};if(t<=1&&(W(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||y(r[n]&&r[n].then)))return o.then();for(;n--;)W(r[n],s(n),o.reject);return o.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&B.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},T.readyException=function(e){n.setTimeout((function(){throw e}))};var U=T.Deferred();function K(){s.removeEventListener("DOMContentLoaded",K),n.removeEventListener("load",K),T.ready()}T.fn.ready=function(e){return U.then(e).catch((function(e){T.readyException(e)})),this},T.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--T.readyWait:T.isReady)||(T.isReady=!0,!0!==e&&--T.readyWait>0||U.resolveWith(s,[T]))}}),T.ready.then=U.then,"complete"===s.readyState||"loading"!==s.readyState&&!s.documentElement.doScroll?n.setTimeout(T.ready):(s.addEventListener("DOMContentLoaded",K),n.addEventListener("load",K));var $=function(e,t,n,i,r,o,s){var a=0,l=e.length,u=null==n;if("object"===E(n))for(a in r=!0,n)$(e,t,a,n[a],!0,o,s);else if(void 0!==i&&(r=!0,y(i)||(s=!0),u&&(s?(t.call(e,i),t=null):(u=t,t=function(e,t,n){return u.call(T(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:u?t.call(e):l?t(e[0],n):o},Q=/^-ms-/,V=/-([a-z])/g;function z(e,t){return t.toUpperCase()}function Y(e){return e.replace(Q,"ms-").replace(V,z)}var X=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=T.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},X(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[Y(t)]=n;else for(i in t)r[Y(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][Y(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(Y):(t=Y(t))in i?[t]:t.match(R)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||T.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var J=new G,Z=new G,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g;function ne(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(n)}catch(e){}Z.set(e,t,n)}else n=void 0;return n}T.extend({hasData:function(e){return Z.hasData(e)||J.hasData(e)},data:function(e,t,n){return Z.access(e,t,n)},removeData:function(e,t){Z.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(r=Z.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=Y(i.slice(5)),ne(o,i,r[i]));J.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each((function(){Z.set(this,e)})):$(this,(function(t){var n;if(o&&void 0===t)return void 0!==(n=Z.get(o,e))||void 0!==(n=ne(o,e))?n:void 0;this.each((function(){Z.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){Z.remove(this,e)}))}}),T.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=J.get(e,t),n&&(!i||Array.isArray(n)?i=J.access(e,t,T.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),i=n.length,r=n.shift(),o=T._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,(function(){T.dequeue(e,t)}),o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:T.Callbacks("once memory").add((function(){J.remove(e,[t+"queue",n])}))})}}),T.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?T.queue(this[0],e):void 0===t?this:this.each((function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){T.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=T.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=J.get(o[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var ie=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,re=new RegExp("^(?:([+-])=|)("+ie+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],se=s.documentElement,ae=function(e){return T.contains(e.ownerDocument,e)},le={composed:!0};se.getRootNode&&(ae=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(le)===e.ownerDocument});var ue=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ae(e)&&"none"===T.css(e,"display")},ce=function(e,t,n,i){var r,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];for(o in r=n.apply(e,i||[]),t)e.style[o]=s[o];return r};function fe(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return T.css(e,t,"")},l=a(),u=n&&n[3]||(T.cssNumber[t]?"":"px"),c=e.nodeType&&(T.cssNumber[t]||"px"!==u&&+l)&&re.exec(T.css(e,t));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;s--;)T.style(e,t,c+u),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),c/=o;c*=2,T.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,r=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=r)),r}var de={};function he(e){var t,n=e.ownerDocument,i=e.nodeName,r=de[i];return r||(t=n.body.appendChild(n.createElement(i)),r=T.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),de[i]=r,r)}function pe(e,t){for(var n,i,r=[],o=0,s=e.length;o<s;o++)(i=e[o]).style&&(n=i.style.display,t?("none"===n&&(r[o]=J.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&ue(i)&&(r[o]=he(i))):"none"!==n&&(r[o]="none",J.set(i,"display",n)));for(o=0;o<s;o++)null!=r[o]&&(e[o].style.display=r[o]);return e}T.fn.extend({show:function(){return pe(this,!0)},hide:function(){return pe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ue(this)?T(this).show():T(this).hide()}))}});var ge=/^(?:checkbox|radio)$/i,me=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ve=/^$|^module$|\/(?:java|ecma)script/i,ye={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function be(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&I(e,t)?T.merge([e],n):n}function _e(e,t){for(var n=0,i=e.length;n<i;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}ye.optgroup=ye.option,ye.tbody=ye.tfoot=ye.colgroup=ye.caption=ye.thead,ye.th=ye.td;var we,Ee,Te=/<|&#?\w+;/;function xe(e,t,n,i,r){for(var o,s,a,l,u,c,f=t.createDocumentFragment(),d=[],h=0,p=e.length;h<p;h++)if((o=e[h])||0===o)if("object"===E(o))T.merge(d,o.nodeType?[o]:o);else if(Te.test(o)){for(s=s||f.appendChild(t.createElement("div")),a=(me.exec(o)||["",""])[1].toLowerCase(),l=ye[a]||ye._default,s.innerHTML=l[1]+T.htmlPrefilter(o)+l[2],c=l[0];c--;)s=s.lastChild;T.merge(d,s.childNodes),(s=f.firstChild).textContent=""}else d.push(t.createTextNode(o));for(f.textContent="",h=0;o=d[h++];)if(i&&T.inArray(o,i)>-1)r&&r.push(o);else if(u=ae(o),s=be(f.appendChild(o),"script"),u&&_e(s),n)for(c=0;o=s[c++];)ve.test(o.type||"")&&n.push(o);return f}we=s.createDocumentFragment().appendChild(s.createElement("div")),(Ee=s.createElement("input")).setAttribute("type","radio"),Ee.setAttribute("checked","checked"),Ee.setAttribute("name","t"),we.appendChild(Ee),v.checkClone=we.cloneNode(!0).cloneNode(!0).lastChild.checked,we.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!we.cloneNode(!0).lastChild.defaultValue;var Ce=/^key/,Se=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,De=/^([^.]*)(?:\.(.+)|)/;function Ae(){return!0}function Ne(){return!1}function Ie(e,t){return e===function(){try{return s.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,i,r,o){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)ke(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=Ne;else if(!r)return e;return 1===o&&(s=r,(r=function(e){return T().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=T.guid++)),e.each((function(){T.event.add(this,t,r,i,n)}))}function Oe(e,t,n){n?(J.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var i,r,o=J.get(this,t);if(1&e.isTrigger&&this[t]){if(o.length)(T.event.special[t]||{}).delegateType&&e.stopPropagation();else if(o=l.call(arguments),J.set(this,t,o),i=n(this,t),this[t](),o!==(r=J.get(this,t))||i?J.set(this,t,!1):r={},o!==r)return e.stopImmediatePropagation(),e.preventDefault(),r.value}else o.length&&(J.set(this,t,{value:T.event.trigger(T.extend(o[0],T.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===J.get(e,t)&&T.event.add(e,t,Ae)}T.event={global:{},add:function(e,t,n,i,r){var o,s,a,l,u,c,f,d,h,p,g,m=J.get(e);if(m)for(n.handler&&(n=(o=n).handler,r=o.selector),r&&T.find.matchesSelector(se,r),n.guid||(n.guid=T.guid++),(l=m.events)||(l=m.events={}),(s=m.handle)||(s=m.handle=function(t){return void 0!==T&&T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),u=(t=(t||"").match(R)||[""]).length;u--;)h=g=(a=De.exec(t[u])||[])[1],p=(a[2]||"").split(".").sort(),h&&(f=T.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,f=T.event.special[h]||{},c=T.extend({type:h,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&T.expr.match.needsContext.test(r),namespace:p.join(".")},o),(d=l[h])||((d=l[h]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,i,p,s)||e.addEventListener&&e.addEventListener(h,s)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,c):d.push(c),T.event.global[h]=!0)},remove:function(e,t,n,i,r){var o,s,a,l,u,c,f,d,h,p,g,m=J.hasData(e)&&J.get(e);if(m&&(l=m.events)){for(u=(t=(t||"").match(R)||[""]).length;u--;)if(h=g=(a=De.exec(t[u])||[])[1],p=(a[2]||"").split(".").sort(),h){for(f=T.event.special[h]||{},d=l[h=(i?f.delegateType:f.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)c=d[o],!r&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));s&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,p,m.handle)||T.removeEvent(e,h,m.handle),delete l[h])}else for(h in l)T.event.remove(e,h+t[u],n,i,!0);T.isEmptyObject(l)&&J.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,s,a=T.event.fix(e),l=new Array(arguments.length),u=(J.get(this,"events")||{})[a.type]||[],c=T.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,a)){for(s=T.event.handlers.call(this,a,u),t=0;(r=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!1!==o.namespace&&!a.rnamespace.test(o.namespace)||(a.handleObj=o,a.data=o.data,void 0!==(i=((T.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,l))&&!1===(a.result=i)&&(a.preventDefault(),a.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,i,r,o,s,a=[],l=t.delegateCount,u=e.target;if(l&&u.nodeType&&!("click"===e.type&&e.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],s={},n=0;n<l;n++)void 0===s[r=(i=t[n]).selector+" "]&&(s[r]=i.needsContext?T(r,this).index(u)>-1:T.find(r,this,null,[u]).length),s[r]&&o.push(i);o.length&&a.push({elem:u,handlers:o})}return u=this,l<t.length&&a.push({elem:u,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:y(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ge.test(t.type)&&t.click&&I(t,"input")&&Oe(t,"click",Ae),!1},trigger:function(e){var t=this||e;return ge.test(t.type)&&t.click&&I(t,"input")&&Oe(t,"click"),!0},_default:function(e){var t=e.target;return ge.test(t.type)&&t.click&&I(t,"input")&&J.get(t,"click")||I(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ae:Ne,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:Ne,isPropagationStopped:Ne,isImmediatePropagationStopped:Ne,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ae,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ae,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ae,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ce.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Se.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},(function(e,t){T.event.special[e]={setup:function(){return Oe(this,e,Ie),!1},trigger:function(){return Oe(this,e),!0},delegateType:t}})),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;return r&&(r===i||T.contains(i,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),T.fn.extend({on:function(e,t,n,i){return ke(this,e,t,n,i)},one:function(e,t,n,i){return ke(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,T(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ne),this.each((function(){T.event.remove(this,e,n,t)}))}});var Le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,je=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return I(e,"table")&&I(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function Re(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Me(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,i,r,o,s,a,l,u;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),s=J.set(t,o),u=o.events))for(r in delete s.handle,s.events={},u)for(n=0,i=u[r].length;n<i;n++)T.event.add(t,r,u[r][n]);Z.hasData(e)&&(a=Z.access(e),l=T.extend({},a),Z.set(t,l))}}function We(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ge.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Be(e,t,n,i){t=u.apply([],t);var r,o,s,a,l,c,f=0,d=e.length,h=d-1,p=t[0],g=y(p);if(g||d>1&&"string"==typeof p&&!v.checkClone&&Pe.test(p))return e.each((function(r){var o=e.eq(r);g&&(t[0]=p.call(this,r,o.html())),Be(o,t,n,i)}));if(d&&(o=(r=xe(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=o),o||i)){for(a=(s=T.map(be(r,"script"),Re)).length;f<d;f++)l=r,f!==h&&(l=T.clone(l,!0,!0),a&&T.merge(s,be(l,"script"))),n.call(e[f],l,f);if(a)for(c=s[s.length-1].ownerDocument,T.map(s,Me),f=0;f<a;f++)l=s[f],ve.test(l.type||"")&&!J.access(l,"globalEval")&&T.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?T._evalUrl&&!l.noModule&&T._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")}):w(l.textContent.replace(He,""),l,c))}return e}function Ue(e,t,n){for(var i,r=t?T.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||T.cleanData(be(i)),i.parentNode&&(n&&ae(i)&&_e(be(i,"script")),i.parentNode.removeChild(i));return e}T.extend({htmlPrefilter:function(e){return e.replace(Le,"<$1></$2>")},clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),l=ae(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(s=be(a),i=0,r=(o=be(e)).length;i<r;i++)We(o[i],s[i]);if(t)if(n)for(o=o||be(e),s=s||be(a),i=0,r=o.length;i<r;i++)Fe(o[i],s[i]);else Fe(e,a);return(s=be(a,"script")).length>0&&_e(s,!l&&be(e,"script")),a},cleanData:function(e){for(var t,n,i,r=T.event.special,o=0;void 0!==(n=e[o]);o++)if(X(n)){if(t=n[J.expando]){if(t.events)for(i in t.events)r[i]?T.event.remove(n,i):T.removeEvent(n,i,t.handle);n[J.expando]=void 0}n[Z.expando]&&(n[Z.expando]=void 0)}}}),T.fn.extend({detach:function(e){return Ue(this,e,!0)},remove:function(e){return Ue(this,e)},text:function(e){return $(this,(function(e){return void 0===e?T.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Be(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)}))},prepend:function(){return Be(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Be(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Be(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(be(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return T.clone(this,e,t)}))},html:function(e){return $(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!je.test(e)&&!ye[(me.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(be(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Be(this,arguments,(function(t){var n=this.parentNode;T.inArray(this,e)<0&&(T.cleanData(be(this)),n&&n.replaceChild(t,this))}),e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){T.fn[e]=function(e){for(var n,i=[],r=T(e),o=r.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),T(r[s])[t](n),c.apply(i,n.get());return this.pushStack(i)}}));var Ke=new RegExp("^("+ie+")(?!px)[a-z%]+$","i"),$e=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},Qe=new RegExp(oe.join("|"),"i");function Ve(e,t,n){var i,r,o,s,a=e.style;return(n=n||$e(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||ae(e)||(s=T.style(e,t)),!v.pixelBoxStyles()&&Ke.test(s)&&Qe.test(t)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=r,a.maxWidth=o)),void 0!==s?s+"":s}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",se.appendChild(u).appendChild(c);var e=n.getComputedStyle(c);i="1%"!==e.top,l=12===t(e.marginLeft),c.style.right="60%",a=36===t(e.right),r=36===t(e.width),c.style.position="absolute",o=12===t(c.offsetWidth/3),se.removeChild(u),c=null}}function t(e){return Math.round(parseFloat(e))}var i,r,o,a,l,u=s.createElement("div"),c=s.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===c.style.backgroundClip,T.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),o}}))}();var Ye=["Webkit","Moz","ms"],Xe=s.createElement("div").style,Ge={};function Je(e){var t=T.cssProps[e]||Ge[e];return t||(e in Xe?e:Ge[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ye.length;n--;)if((e=Ye[n]+t)in Xe)return e}(e)||e)}var Ze=/^(none|table(?!-c[ea]).+)/,et=/^--/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function it(e,t,n){var i=re.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function rt(e,t,n,i,r,o){var s="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=T.css(e,n+oe[s],!0,r)),i?("content"===n&&(l-=T.css(e,"padding"+oe[s],!0,r)),"margin"!==n&&(l-=T.css(e,"border"+oe[s]+"Width",!0,r))):(l+=T.css(e,"padding"+oe[s],!0,r),"padding"!==n?l+=T.css(e,"border"+oe[s]+"Width",!0,r):a+=T.css(e,"border"+oe[s]+"Width",!0,r));return!i&&o>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))||0),l}function ot(e,t,n){var i=$e(e),r=(!v.boxSizingReliable()||n)&&"border-box"===T.css(e,"boxSizing",!1,i),o=r,s=Ve(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);if(Ke.test(s)){if(!n)return s;s="auto"}return(!v.boxSizingReliable()&&r||"auto"===s||!parseFloat(s)&&"inline"===T.css(e,"display",!1,i))&&e.getClientRects().length&&(r="border-box"===T.css(e,"boxSizing",!1,i),(o=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+rt(e,t,n||(r?"border":"content"),o,i,s)+"px"}function st(e,t,n,i,r){return new st.prototype.init(e,t,n,i,r)}T.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ve(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,s,a=Y(t),l=et.test(t),u=e.style;if(l||(t=Je(a)),s=T.cssHooks[t]||T.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:u[t];"string"===(o=typeof n)&&(r=re.exec(n))&&r[1]&&(n=fe(e,t,r),o="number"),null!=n&&n==n&&("number"!==o||l||(n+=r&&r[3]||(T.cssNumber[a]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,i){var r,o,s,a=Y(t);return et.test(t)||(t=Je(a)),(s=T.cssHooks[t]||T.cssHooks[a])&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=Ve(e,t,i)),"normal"===r&&t in nt&&(r=nt[t]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),T.each(["height","width"],(function(e,t){T.cssHooks[t]={get:function(e,n,i){if(n)return!Ze.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,t,i):ce(e,tt,(function(){return ot(e,t,i)}))},set:function(e,n,i){var r,o=$e(e),s=!v.scrollboxSize()&&"absolute"===o.position,a=(s||i)&&"border-box"===T.css(e,"boxSizing",!1,o),l=i?rt(e,t,i,a,o):0;return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-rt(e,t,"border",!1,o)-.5)),l&&(r=re.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),it(0,n,l)}}})),T.cssHooks.marginLeft=ze(v.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Ve(e,"marginLeft"))||e.getBoundingClientRect().left-ce(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),T.each({margin:"",padding:"",border:"Width"},(function(e,t){T.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+oe[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(T.cssHooks[e+t].set=it)})),T.fn.extend({css:function(e,t){return $(this,(function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=$e(e),r=t.length;s<r;s++)o[t[s]]=T.css(e,t[s],!1,i);return o}return void 0!==n?T.style(e,t,n):T.css(e,t)}),e,t,arguments.length>1)}}),T.Tween=st,st.prototype={constructor:st,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(T.cssNumber[n]?"":"px")},cur:function(){var e=st.propHooks[this.prop];return e&&e.get?e.get(this):st.propHooks._default.get(this)},run:function(e){var t,n=st.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):st.propHooks._default.set(this),this}},st.prototype.init.prototype=st.prototype,st.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||!T.cssHooks[e.prop]&&null==e.elem.style[Je(e.prop)]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)}}},st.propHooks.scrollTop=st.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=st.prototype.init,T.fx.step={};var at,lt,ut=/^(?:toggle|show|hide)$/,ct=/queueHooks$/;function ft(){lt&&(!1===s.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(ft):n.setTimeout(ft,T.fx.interval),T.fx.tick())}function dt(){return n.setTimeout((function(){at=void 0})),at=Date.now()}function ht(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=oe[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function pt(e,t,n){for(var i,r=(gt.tweeners[t]||[]).concat(gt.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))return i}function gt(e,t,n){var i,r,o=0,s=gt.prefilters.length,a=T.Deferred().always((function(){delete l.elem})),l=function(){if(r)return!1;for(var t=at||dt(),n=Math.max(0,u.startTime+u.duration-t),i=1-(n/u.duration||0),o=0,s=u.tweens.length;o<s;o++)u.tweens[o].run(i);return a.notifyWith(e,[u,i,n]),i<1&&s?n:(s||a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:at||dt(),duration:n.duration,tweens:[],createTween:function(t,n){var i=T.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(i),i},stop:function(t){var n=0,i=t?u.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)u.tweens[n].run(1);return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),c=u.props;for(!function(e,t){var n,i,r,o,s;for(n in e)if(r=t[i=Y(n)],o=e[n],Array.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(s=T.cssHooks[i])&&"expand"in s)for(n in o=s.expand(o),delete e[i],o)n in e||(e[n]=o[n],t[n]=r);else t[i]=r}(c,u.opts.specialEasing);o<s;o++)if(i=gt.prefilters[o].call(u,e,c,u.opts))return y(i.stop)&&(T._queueHooks(u.elem,u.opts.queue).stop=i.stop.bind(i)),i;return T.map(c,pt,u),y(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),T.fx.timer(T.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}T.Animation=T.extend(gt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return fe(n.elem,e,re.exec(t),n),n}]},tweener:function(e,t){y(e)?(t=e,e=["*"]):e=e.match(R);for(var n,i=0,r=e.length;i<r;i++)n=e[i],gt.tweeners[n]=gt.tweeners[n]||[],gt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,s,a,l,u,c,f="width"in t||"height"in t,d=this,h={},p=e.style,g=e.nodeType&&ue(e),m=J.get(e,"fxshow");for(i in n.queue||(null==(s=T._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always((function(){d.always((function(){s.unqueued--,T.queue(e,"fx").length||s.empty.fire()}))}))),t)if(r=t[i],ut.test(r)){if(delete t[i],o=o||"toggle"===r,r===(g?"hide":"show")){if("show"!==r||!m||void 0===m[i])continue;g=!0}h[i]=m&&m[i]||T.style(e,i)}if((l=!T.isEmptyObject(t))||!T.isEmptyObject(h))for(i in f&&1===e.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(u=m&&m.display)&&(u=J.get(e,"display")),"none"===(c=T.css(e,"display"))&&(u?c=u:(pe([e],!0),u=e.style.display||u,c=T.css(e,"display"),pe([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===T.css(e,"float")&&(l||(d.done((function(){p.display=u})),null==u&&(c=p.display,u="none"===c?"":c)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),l=!1,h)l||(m?"hidden"in m&&(g=m.hidden):m=J.access(e,"fxshow",{display:u}),o&&(m.hidden=!g),g&&pe([e],!0),d.done((function(){for(i in g||pe([e]),J.remove(e,"fxshow"),h)T.style(e,i,h[i])}))),l=pt(g?m[i]:0,i,d),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?gt.prefilters.unshift(e):gt.prefilters.push(e)}}),T.speed=function(e,t,n){var i=e&&"object"==typeof e?T.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};return T.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in T.fx.speeds?i.duration=T.fx.speeds[i.duration]:i.duration=T.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){y(i.old)&&i.old.call(this),i.queue&&T.dequeue(this,i.queue)},i},T.fn.extend({fadeTo:function(e,t,n,i){return this.filter(ue).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=T.isEmptyObject(e),o=T.speed(t,n,i),s=function(){var t=gt(this,T.extend({},e),o);(r||J.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each((function(){var t=!0,r=null!=e&&e+"queueHooks",o=T.timers,s=J.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&ct.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));!t&&n||T.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=J.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=T.timers,s=i?i.length:0;for(n.finish=!0,T.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish}))}}),T.each(["toggle","show","hide"],(function(e,t){var n=T.fn[t];T.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ht(t,!0),e,i,r)}})),T.each({slideDown:ht("show"),slideUp:ht("hide"),slideToggle:ht("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){T.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(at=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),at=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){lt||(lt=!0,ft())},T.fx.stop=function(){lt=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(e,t){return e=T.fx&&T.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,i){var r=n.setTimeout(t,e);i.stop=function(){n.clearTimeout(r)}}))},function(){var e=s.createElement("input"),t=s.createElement("select").appendChild(s.createElement("option"));e.type="checkbox",v.checkOn=""!==e.value,v.optSelected=t.selected,(e=s.createElement("input")).value="t",e.type="radio",v.radioValue="t"===e.value}();var mt,vt=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return $(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){T.removeAttr(this,e)}))}}),T.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?T.prop(e,t,n):(1===o&&T.isXMLDoc(e)||(r=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=T.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&I(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(R);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=vt[t]||T.find.attr;vt[t]=function(e,t,i){var r,o,s=t.toLowerCase();return i||(o=vt[s],vt[s]=r,r=null!=n(e,t,i)?s:null,vt[s]=o),r}}));var yt=/^(?:input|select|textarea|button)$/i,bt=/^(?:a|area)$/i;function _t(e){return(e.match(R)||[]).join(" ")}function wt(e){return e.getAttribute&&e.getAttribute("class")||""}function Et(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}T.fn.extend({prop:function(e,t){return $(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[T.propFix[e]||e]}))}}),T.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&T.isXMLDoc(e)||(t=T.propFix[t]||t,r=T.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):yt.test(e.nodeName)||bt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){T.propFix[this.toLowerCase()]=this})),T.fn.extend({addClass:function(e){var t,n,i,r,o,s,a,l=0;if(y(e))return this.each((function(t){T(this).addClass(e.call(this,t,wt(this)))}));if((t=Et(e)).length)for(;n=this[l++];)if(r=wt(n),i=1===n.nodeType&&" "+_t(r)+" "){for(s=0;o=t[s++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");r!==(a=_t(i))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,r,o,s,a,l=0;if(y(e))return this.each((function(t){T(this).removeClass(e.call(this,t,wt(this)))}));if(!arguments.length)return this.attr("class","");if((t=Et(e)).length)for(;n=this[l++];)if(r=wt(n),i=1===n.nodeType&&" "+_t(r)+" "){for(s=0;o=t[s++];)for(;i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");r!==(a=_t(i))&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):y(e)?this.each((function(n){T(this).toggleClass(e.call(this,n,wt(this),t),t)})):this.each((function(){var t,r,o,s;if(i)for(r=0,o=T(this),s=Et(e);t=s[r++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=wt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+_t(wt(n))+" ").indexOf(t)>-1)return!0;return!1}});var Tt=/\r/g;T.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=y(e),this.each((function(n){var r;1===this.nodeType&&(null==(r=i?e.call(this,n,T(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=T.map(r,(function(e){return null==e?"":e+""}))),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}))):r?(t=T.valHooks[r.type]||T.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(Tt,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:_t(T.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?o+1:r.length;for(i=o<0?l:s?o:0;i<l;i++)if(((n=r[i]).selected||i===o)&&!n.disabled&&(!n.parentNode.disabled||!I(n.parentNode,"optgroup"))){if(t=T(n).val(),s)return t;a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,o=T.makeArray(t),s=r.length;s--;)((i=r[s]).selected=T.inArray(T.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),T.each(["radio","checkbox"],(function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},v.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),v.focusin="onfocusin"in n;var xt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(e,t,i,r){var o,a,l,u,c,f,d,h,g=[i||s],m=p.call(e,"type")?e.type:e,v=p.call(e,"namespace")?e.namespace.split("."):[];if(a=h=l=i=i||s,3!==i.nodeType&&8!==i.nodeType&&!xt.test(m+T.event.triggered)&&(m.indexOf(".")>-1&&(v=m.split("."),m=v.shift(),v.sort()),c=m.indexOf(":")<0&&"on"+m,(e=e[T.expando]?e:new T.Event(m,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=v.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:T.makeArray(t,[e]),d=T.event.special[m]||{},r||!d.trigger||!1!==d.trigger.apply(i,t))){if(!r&&!d.noBubble&&!b(i)){for(u=d.delegateType||m,xt.test(u+m)||(a=a.parentNode);a;a=a.parentNode)g.push(a),l=a;l===(i.ownerDocument||s)&&g.push(l.defaultView||l.parentWindow||n)}for(o=0;(a=g[o++])&&!e.isPropagationStopped();)h=a,e.type=o>1?u:d.bindType||m,(f=(J.get(a,"events")||{})[e.type]&&J.get(a,"handle"))&&f.apply(a,t),(f=c&&a[c])&&f.apply&&X(a)&&(e.result=f.apply(a,t),!1===e.result&&e.preventDefault());return e.type=m,r||e.isDefaultPrevented()||d._default&&!1!==d._default.apply(g.pop(),t)||!X(i)||c&&y(i[m])&&!b(i)&&((l=i[c])&&(i[c]=null),T.event.triggered=m,e.isPropagationStopped()&&h.addEventListener(m,Ct),i[m](),e.isPropagationStopped()&&h.removeEventListener(m,Ct),T.event.triggered=void 0,l&&(i[c]=l)),e.result}},simulate:function(e,t,n){var i=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(i,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each((function(){T.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}}),v.focusin||T.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){T.event.simulate(t,e.target,T.event.fix(e))};T.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=J.access(i,t);r||i.addEventListener(e,n,!0),J.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=J.access(i,t)-1;r?J.access(i,t,r):(i.removeEventListener(e,n,!0),J.remove(i,t))}}}));var St=n.location,Dt=Date.now(),At=/\?/;T.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||T.error("Invalid XML: "+e),t};var Nt=/\[\]$/,It=/\r?\n/g,kt=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Lt(e,t,n,i){var r;if(Array.isArray(t))T.each(t,(function(t,r){n||Nt.test(e)?i(e,r):Lt(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)}));else if(n||"object"!==E(t))i(e,t);else for(r in t)Lt(e+"["+r+"]",t[r],n,i)}T.param=function(e,t){var n,i=[],r=function(e,t){var n=y(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,(function(){r(this.name,this.value)}));else for(n in e)Lt(n,e[n],t,r);return i.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&Ot.test(this.nodeName)&&!kt.test(e)&&(this.checked||!ge.test(e))})).map((function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,(function(e){return{name:t.name,value:e.replace(It,"\r\n")}})):{name:t.name,value:n.replace(It,"\r\n")}})).get()}});var jt=/%20/g,Pt=/#.*$/,Ht=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,Ft={},Wt={},Bt="*/".concat("*"),Ut=s.createElement("a");function Kt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(R)||[];if(y(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function $t(e,t,n,i){var r={},o=e===Wt;function s(a){var l;return r[a]=!0,T.each(e[a]||[],(function(e,a){var u=a(t,n,i);return"string"!=typeof u||o||r[u]?o?!(l=u):void 0:(t.dataTypes.unshift(u),s(u),!1)})),l}return s(t.dataTypes[0])||!r["*"]&&s("*")}function Qt(e,t){var n,i,r=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&T.extend(!0,e,i),e}Ut.href=St.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:St.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Qt(Qt(e,T.ajaxSettings),t):Qt(T.ajaxSettings,e)},ajaxPrefilter:Kt(Ft),ajaxTransport:Kt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var i,r,o,a,l,u,c,f,d,h,p=T.ajaxSetup({},t),g=p.context||p,m=p.context&&(g.nodeType||g.jquery)?T(g):T.event,v=T.Deferred(),y=T.Callbacks("once memory"),b=p.statusCode||{},_={},w={},E="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(c){if(!a)for(a={};t=qt.exec(o);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?o:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,_[e]=t),this},overrideMimeType:function(e){return null==c&&(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)x.always(e[x.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||E;return i&&i.abort(t),C(0,t),this}};if(v.promise(x),p.url=((e||p.url||St.href)+"").replace(Mt,St.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(R)||[""],null==p.crossDomain){u=s.createElement("a");try{u.href=p.url,u.href=u.href,p.crossDomain=Ut.protocol+"//"+Ut.host!=u.protocol+"//"+u.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=T.param(p.data,p.traditional)),$t(Ft,p,t,x),c)return x;for(d in(f=T.event&&p.global)&&0==T.active++&&T.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Rt.test(p.type),r=p.url.replace(Pt,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(jt,"+")):(h=p.url.slice(r.length),p.data&&(p.processData||"string"==typeof p.data)&&(r+=(At.test(r)?"&":"?")+p.data,delete p.data),!1===p.cache&&(r=r.replace(Ht,"$1"),h=(At.test(r)?"&":"?")+"_="+Dt+++h),p.url=r+h),p.ifModified&&(T.lastModified[r]&&x.setRequestHeader("If-Modified-Since",T.lastModified[r]),T.etag[r]&&x.setRequestHeader("If-None-Match",T.etag[r])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&x.setRequestHeader("Content-Type",p.contentType),x.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Bt+"; q=0.01":""):p.accepts["*"]),p.headers)x.setRequestHeader(d,p.headers[d]);if(p.beforeSend&&(!1===p.beforeSend.call(g,x,p)||c))return x.abort();if(E="abort",y.add(p.complete),x.done(p.success),x.fail(p.error),i=$t(Wt,p,t,x)){if(x.readyState=1,f&&m.trigger("ajaxSend",[x,p]),c)return x;p.async&&p.timeout>0&&(l=n.setTimeout((function(){x.abort("timeout")}),p.timeout));try{c=!1,i.send(_,C)}catch(e){if(c)throw e;C(-1,e)}}else C(-1,"No Transport");function C(e,t,s,a){var u,d,h,_,w,E=t;c||(c=!0,l&&n.clearTimeout(l),i=void 0,o=a||"",x.readyState=e>0?4:0,u=e>=200&&e<300||304===e,s&&(_=function(e,t,n){for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)o=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s||(s=r)}o=o||s}if(o)return o!==l[0]&&l.unshift(o),n[o]}(p,x,s)),_=function(e,t,n,i){var r,o,s,a,l,u={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(s=u[l+" "+o]||u["* "+o]))for(r in u)if((a=r.split(" "))[1]===o&&(s=u[l+" "+a[0]]||u["* "+a[0]])){!0===s?s=u[r]:!0!==u[r]&&(o=a[0],c.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(p,_,x,u),u?(p.ifModified&&((w=x.getResponseHeader("Last-Modified"))&&(T.lastModified[r]=w),(w=x.getResponseHeader("etag"))&&(T.etag[r]=w)),204===e||"HEAD"===p.type?E="nocontent":304===e?E="notmodified":(E=_.state,d=_.data,u=!(h=_.error))):(h=E,!e&&E||(E="error",e<0&&(e=0))),x.status=e,x.statusText=(t||E)+"",u?v.resolveWith(g,[d,E,x]):v.rejectWith(g,[x,E,h]),x.statusCode(b),b=void 0,f&&m.trigger(u?"ajaxSuccess":"ajaxError",[x,p,u?d:h]),y.fireWith(g,[x,E]),f&&(m.trigger("ajaxComplete",[x,p]),--T.active||T.event.trigger("ajaxStop")))}return x},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],(function(e,t){T[t]=function(e,n,i,r){return y(n)&&(r=r||i,i=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:r,data:n,success:i},T.isPlainObject(e)&&e))}})),T._evalUrl=function(e,t){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return y(e)?this.each((function(t){T(this).wrapInner(e.call(this,t))})):this.each((function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=y(e);return this.each((function(n){T(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){T(this).replaceWith(this.childNodes)})),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},zt=T.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,T.ajaxTransport((function(e){var t,i;if(v.cors||zt&&!e.crossDomain)return{send:function(r,o){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(s,r[s]);t=function(e){return function(){t&&(t=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Vt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),i=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&n.setTimeout((function(){t&&i()}))},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),T.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),T.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(i,r){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),s.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Yt,Xt=[],Gt=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||T.expando+"_"+Dt++;return this[e]=!0,e}}),T.ajaxPrefilter("json jsonp",(function(e,t,i){var r,o,s,a=!1!==e.jsonp&&(Gt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Gt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return s||T.error(r+" was not called"),s[0]},e.dataTypes[0]="json",o=n[r],n[r]=function(){s=arguments},i.always((function(){void 0===o?T(n).removeProp(r):n[r]=o,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),s&&y(o)&&o(s[0]),s=o=void 0})),"script"})),v.createHTMLDocument=((Yt=s.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Yt.childNodes.length),T.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((i=(t=s.implementation.createHTMLDocument("")).createElement("base")).href=s.location.href,t.head.appendChild(i)):t=s),o=!n&&[],(r=k.exec(e))?[t.createElement(r[1])]:(r=xe([e],t,o),o&&o.length&&T(o).remove(),T.merge([],r.childNodes)));var i,r,o},T.fn.load=function(e,t,n){var i,r,o,s=this,a=e.indexOf(" ");return a>-1&&(i=_t(e.slice(a)),e=e.slice(0,a)),y(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&T.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done((function(e){o=arguments,s.html(i?T("<div>").append(T.parseHTML(e)).find(i):e)})).always(n&&function(e,t){s.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){T.fn[t]=function(e){return this.on(t,e)}})),T.expr.pseudos.animated=function(e){return T.grep(T.timers,(function(t){return e===t.elem})).length},T.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,u=T.css(e,"position"),c=T(e),f={};"static"===u&&(e.style.position="relative"),a=c.offset(),o=T.css(e,"top"),l=T.css(e,"left"),("absolute"===u||"fixed"===u)&&(o+l).indexOf("auto")>-1?(s=(i=c.position()).top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),y(t)&&(t=t.call(e,n,T.extend({},a))),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+r),"using"in t?t.using.call(e,f):c.css(f)}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){T.offset.setOffset(this,e,t)}));var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===T.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((r=T(e).offset()).top+=T.css(e,"borderTopWidth",!0),r.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-T.css(i,"marginTop",!0),left:t.left-r.left-T.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||se}))}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;T.fn[e]=function(i){return $(this,(function(e,i,r){var o;if(b(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r}),e,i,arguments.length)}})),T.each(["top","left"],(function(e,t){T.cssHooks[t]=ze(v.pixelPosition,(function(e,n){if(n)return n=Ve(e,t),Ke.test(n)?T(e).position()[t]+"px":n}))})),T.each({Height:"height",Width:"width"},(function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,i){T.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===o?"margin":"border");return $(this,(function(t,n,r){var o;return b(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?T.css(t,n,a):T.style(t,n,r,a)}),t,s?r:void 0,s)}}))})),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),T.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),T.proxy=function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))return i=l.call(arguments,2),(r=function(){return e.apply(t||this,i.concat(l.call(arguments)))}).guid=e.guid=e.guid||T.guid++,r},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=I,T.isFunction=y,T.isWindow=b,T.camelCase=Y,T.type=E,T.now=Date.now,T.isNumeric=function(e){var t=T.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},void 0===(i=function(){return T}.apply(t,[]))||(e.exports=i);var Jt=n.jQuery,Zt=n.$;return T.noConflict=function(e){return n.$===T&&(n.$=Zt),e&&n.jQuery===T&&(n.jQuery=Jt),T},r||(n.jQuery=n.$=T),T}))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){},,,,,function(e,t){},,function(e,t){}]);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='".concat(queryString, "']") : ':not([data-drupal-link-query])';
      var originalSelectors = ["[data-drupal-link-system-path=\"".concat(path.currentPath, "\"]")];
      var selectors;
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }
      selectors = [].concat(originalSelectors.map(function (selector) {
        return "".concat(selector, ":not([hreflang])");
      }), originalSelectors.map(function (selector) {
        return "".concat(selector, "[hreflang=\"").concat(path.currentLanguage, "\"]");
      }));
      selectors = selectors.map(function (current) {
        return current + querySelector;
      });
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, window) {
  function TableResponsive(table) {
    this.table = table;
    this.$table = $(table);
    this.showText = Drupal.t('Show all columns');
    this.hideText = Drupal.t('Hide lower priority columns');
    this.$headers = this.$table.find('th');
    this.$link = $('<button type="button" class="link tableresponsive-toggle"></button>').attr('title', Drupal.t('Show table cells that were hidden to make the table fit within a small screen.')).on('click', $.proxy(this, 'eventhandlerToggleColumns'));
    this.$table.before($('<div class="tableresponsive-toggle-columns"></div>').append(this.$link));
    $(window).on('resize.tableresponsive', $.proxy(this, 'eventhandlerEvaluateColumnVisibility')).trigger('resize.tableresponsive');
  }
  Drupal.behaviors.tableResponsive = {
    attach: function attach(context, settings) {
      once('tableresponsive', 'table.responsive-enabled', context).forEach(function (table) {
        TableResponsive.tables.push(new TableResponsive(table));
      });
    }
  };
  $.extend(TableResponsive, {
    tables: []
  });
  $.extend(TableResponsive.prototype, {
    eventhandlerEvaluateColumnVisibility: function eventhandlerEvaluateColumnVisibility(e) {
      var pegged = parseInt(this.$link.data('pegged'), 10);
      var hiddenLength = this.$headers.filter('.priority-medium:hidden, .priority-low:hidden').length;
      if (hiddenLength > 0) {
        this.$link.show();
        this.$link[0].textContent = this.showText;
      }
      if (!pegged && hiddenLength === 0) {
        this.$link.hide();
        this.$link[0].textContent = this.hideText;
      }
    },
    eventhandlerToggleColumns: function eventhandlerToggleColumns(e) {
      e.preventDefault();
      var self = this;
      var $hiddenHeaders = this.$headers.filter('.priority-medium:hidden, .priority-low:hidden');
      this.$revealedCells = this.$revealedCells || $();
      if ($hiddenHeaders.length > 0) {
        $hiddenHeaders.each(function (index, element) {
          var $header = $(this);
          var position = $header.prevAll('th').length;
          self.$table.find('tbody tr').each(function () {
            var $cells = $(this).find('td').eq(position);
            $cells.show();
            self.$revealedCells = $().add(self.$revealedCells).add($cells);
          });
          $header.show();
          self.$revealedCells = $().add(self.$revealedCells).add($header);
        });
        this.$link[0].textContent = this.hideText;
        this.$link.data('pegged', 1);
      } else {
        this.$revealedCells.hide();
        this.$revealedCells.each(function (index, element) {
          var $cell = $(this);
          var properties = $cell.attr('style').split(';');
          var newProps = [];
          var match = /^display\s*:\s*none$/;
          for (var i = 0; i < properties.length; i++) {
            var prop = properties[i];
            prop.trim();
            var isDisplayNone = match.exec(prop);
            if (isDisplayNone) {
              continue;
            }
            newProps.push(prop);
          }
          $cell.attr('style', newProps.join(';'));
        });
        this.$link[0].textContent = this.showText;
        this.$link.data('pegged', 0);
        $(window).trigger('resize.tableresponsive');
      }
    }
  });
  Drupal.TableResponsive = TableResponsive;
})(jQuery, Drupal, window);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, _ref) {
  var isTabbable = _ref.isTabbable;
  $.extend($.expr[':'], {
    tabbable: function tabbable(element) {
      Drupal.deprecationError({
        message: 'The :tabbable selector is deprecated in Drupal 9.2.0 and will be removed in Drupal 11.0.0. Use the core/tabbable library instead. See https://www.drupal.org/node/3183730'
      });
      if (element.tagName === 'SUMMARY' || element.tagName === 'DETAILS') {
        var tabIndex = element.getAttribute('tabIndex');
        if (tabIndex === null || tabIndex < 0) {
          return false;
        }
      }
      return isTabbable(element);
    }
  });
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($) {
  var cachedScrollbarWidth = null;
  var max = Math.max,
    abs = Math.abs;
  var regexHorizontal = /left|center|right/;
  var regexVertical = /top|center|bottom/;
  var regexOffset = /[+-]\d+(\.[\d]+)?%?/;
  var regexPosition = /^\w+/;
  var regexPercent = /%$/;
  var _position = $.fn.position;
  function getOffsets(offsets, width, height) {
    return [parseFloat(offsets[0]) * (regexPercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (regexPercent.test(offsets[1]) ? height / 100 : 1)];
  }
  function parseCss(element, property) {
    return parseInt($.css(element, property), 10) || 0;
  }
  function getDimensions(elem) {
    var raw = elem[0];
    if (raw.nodeType === 9) {
      return {
        width: elem.width(),
        height: elem.height(),
        offset: {
          top: 0,
          left: 0
        }
      };
    }
    if ($.isWindow(raw)) {
      return {
        width: elem.width(),
        height: elem.height(),
        offset: {
          top: elem.scrollTop(),
          left: elem.scrollLeft()
        }
      };
    }
    if (raw.preventDefault) {
      return {
        width: 0,
        height: 0,
        offset: {
          top: raw.pageY,
          left: raw.pageX
        }
      };
    }
    return {
      width: elem.outerWidth(),
      height: elem.outerHeight(),
      offset: elem.offset()
    };
  }
  var collisions = {
    fit: {
      left: function left(position, data) {
        var within = data.within;
        var withinOffset = within.isWindow ? within.scrollLeft : within.offset.left;
        var outerWidth = within.width;
        var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
        var overLeft = withinOffset - collisionPosLeft;
        var overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
        var newOverRight;
        if (data.collisionWidth > outerWidth) {
          if (overLeft > 0 && overRight <= 0) {
            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
            position.left += overLeft - newOverRight;
          } else if (overRight > 0 && overLeft <= 0) {
            position.left = withinOffset;
          } else if (overLeft > overRight) {
            position.left = withinOffset + outerWidth - data.collisionWidth;
          } else {
            position.left = withinOffset;
          }
        } else if (overLeft > 0) {
          position.left += overLeft;
        } else if (overRight > 0) {
          position.left -= overRight;
        } else {
          position.left = max(position.left - collisionPosLeft, position.left);
        }
      },
      top: function top(position, data) {
        var within = data.within;
        var withinOffset = within.isWindow ? within.scrollTop : within.offset.top;
        var outerHeight = data.within.height;
        var collisionPosTop = position.top - data.collisionPosition.marginTop;
        var overTop = withinOffset - collisionPosTop;
        var overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
        var newOverBottom;
        if (data.collisionHeight > outerHeight) {
          if (overTop > 0 && overBottom <= 0) {
            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
            position.top += overTop - newOverBottom;
          } else if (overBottom > 0 && overTop <= 0) {
            position.top = withinOffset;
          } else if (overTop > overBottom) {
            position.top = withinOffset + outerHeight - data.collisionHeight;
          } else {
            position.top = withinOffset;
          }
        } else if (overTop > 0) {
          position.top += overTop;
        } else if (overBottom > 0) {
          position.top -= overBottom;
        } else {
          position.top = max(position.top - collisionPosTop, position.top);
        }
      }
    },
    flip: {
      left: function left(position, data) {
        var within = data.within;
        var withinOffset = within.offset.left + within.scrollLeft;
        var outerWidth = within.width;
        var offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left;
        var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
        var overLeft = collisionPosLeft - offsetLeft;
        var overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft;
        var myOffset = data.my[0] === 'left' ? -data.elemWidth : data.my[0] === 'right' ? data.elemWidth : 0;
        var atOffset = data.at[0] === 'left' ? data.targetWidth : data.at[0] === 'right' ? -data.targetWidth : 0;
        var offset = -2 * data.offset[0];
        var newOverRight;
        var newOverLeft;
        if (overLeft < 0) {
          newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
          if (newOverRight < 0 || newOverRight < abs(overLeft)) {
            position.left += myOffset + atOffset + offset;
          }
        } else if (overRight > 0) {
          newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
          if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
            position.left += myOffset + atOffset + offset;
          }
        }
      },
      top: function top(position, data) {
        var within = data.within;
        var withinOffset = within.offset.top + within.scrollTop;
        var outerHeight = within.height;
        var offsetTop = within.isWindow ? within.scrollTop : within.offset.top;
        var collisionPosTop = position.top - data.collisionPosition.marginTop;
        var overTop = collisionPosTop - offsetTop;
        var overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop;
        var top = data.my[1] === 'top';
        var myOffset = top ? -data.elemHeight : data.my[1] === 'bottom' ? data.elemHeight : 0;
        var atOffset = data.at[1] === 'top' ? data.targetHeight : data.at[1] === 'bottom' ? -data.targetHeight : 0;
        var offset = -2 * data.offset[1];
        var newOverTop;
        var newOverBottom;
        if (overTop < 0) {
          newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
          if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
            position.top += myOffset + atOffset + offset;
          }
        } else if (overBottom > 0) {
          newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
          if (newOverTop > 0 || abs(newOverTop) < overBottom) {
            position.top += myOffset + atOffset + offset;
          }
        }
      }
    },
    flipfit: {
      left: function left() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        collisions.flip.left.apply(this, args);
        collisions.fit.left.apply(this, args);
      },
      top: function top() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        collisions.flip.top.apply(this, args);
        collisions.fit.top.apply(this, args);
      }
    }
  };
  $.position = {
    scrollbarWidth: function scrollbarWidth() {
      if (cachedScrollbarWidth !== undefined) {
        return cachedScrollbarWidth;
      }
      var div = $('<div ' + "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" + "<div style='height:100px;width:auto;'></div></div>");
      var innerDiv = div.children()[0];
      $('body').append(div);
      var w1 = innerDiv.offsetWidth;
      div.css('overflow', 'scroll');
      var w2 = innerDiv.offsetWidth;
      if (w1 === w2) {
        w2 = div[0].clientWidth;
      }
      div.remove();
      cachedScrollbarWidth = w1 - w2;
      return cachedScrollbarWidth;
    },
    getScrollInfo: function getScrollInfo(within) {
      var overflowX = within.isWindow || within.isDocument ? '' : within.element.css('overflow-x');
      var overflowY = within.isWindow || within.isDocument ? '' : within.element.css('overflow-y');
      var hasOverflowX = overflowX === 'scroll' || overflowX === 'auto' && within.width < within.element[0].scrollWidth;
      var hasOverflowY = overflowY === 'scroll' || overflowY === 'auto' && within.height < within.element[0].scrollHeight;
      return {
        width: hasOverflowY ? $.position.scrollbarWidth() : 0,
        height: hasOverflowX ? $.position.scrollbarWidth() : 0
      };
    },
    getWithinInfo: function getWithinInfo(element) {
      var withinElement = $(element || window);
      var isWindow = $.isWindow(withinElement[0]);
      var isDocument = !!withinElement[0] && withinElement[0].nodeType === 9;
      var hasOffset = !isWindow && !isDocument;
      return {
        element: withinElement,
        isWindow: isWindow,
        isDocument: isDocument,
        offset: hasOffset ? $(element).offset() : {
          left: 0,
          top: 0
        },
        scrollLeft: withinElement.scrollLeft(),
        scrollTop: withinElement.scrollTop(),
        width: withinElement.outerWidth(),
        height: withinElement.outerHeight()
      };
    }
  };
  $.fn.position = function (options) {
    if (!options || !options.of) {
      return _position.apply(this, arguments);
    }
    options = $.extend({}, options);
    var within = $.position.getWithinInfo(options.within);
    var scrollInfo = $.position.getScrollInfo(within);
    var collision = (options.collision || 'flip').split(' ');
    var offsets = {};
    var target = typeof options.of === 'string' ? $(document).find(options.of) : $(options.of);
    var dimensions = getDimensions(target);
    var targetWidth = dimensions.width;
    var targetHeight = dimensions.height;
    var targetOffset = dimensions.offset;
    if (target[0].preventDefault) {
      options.at = 'left top';
    }
    var basePosition = $.extend({}, targetOffset);
    $.each(['my', 'at'], function () {
      var pos = (options[this] || '').split(' ');
      if (pos.length === 1) {
        pos = regexHorizontal.test(pos[0]) ? pos.concat(['center']) : regexVertical.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
      }
      pos[0] = regexHorizontal.test(pos[0]) ? pos[0] : 'center';
      pos[1] = regexVertical.test(pos[1]) ? pos[1] : 'center';
      var horizontalOffset = regexOffset.exec(pos[0]);
      var verticalOffset = regexOffset.exec(pos[1]);
      offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];
      options[this] = [regexPosition.exec(pos[0])[0], regexPosition.exec(pos[1])[0]];
    });
    if (collision.length === 1) {
      collision[1] = collision[0];
    }
    if (options.at[0] === 'right') {
      basePosition.left += targetWidth;
    } else if (options.at[0] === 'center') {
      basePosition.left += targetWidth / 2;
    }
    if (options.at[1] === 'bottom') {
      basePosition.top += targetHeight;
    } else if (options.at[1] === 'center') {
      basePosition.top += targetHeight / 2;
    }
    var atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
    basePosition.left += atOffset[0];
    basePosition.top += atOffset[1];
    return this.each(function () {
      var using;
      var elem = $(this);
      var elemWidth = elem.outerWidth();
      var elemHeight = elem.outerHeight();
      var marginLeft = parseCss(this, 'marginLeft');
      var marginTop = parseCss(this, 'marginTop');
      var collisionWidth = elemWidth + marginLeft + parseCss(this, 'marginRight') + scrollInfo.width;
      var collisionHeight = elemHeight + marginTop + parseCss(this, 'marginBottom') + scrollInfo.height;
      var position = $.extend({}, basePosition);
      var myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
      if (options.my[0] === 'right') {
        position.left -= elemWidth;
      } else if (options.my[0] === 'center') {
        position.left -= elemWidth / 2;
      }
      if (options.my[1] === 'bottom') {
        position.top -= elemHeight;
      } else if (options.my[1] === 'center') {
        position.top -= elemHeight / 2;
      }
      position.left += myOffset[0];
      position.top += myOffset[1];
      var collisionPosition = {
        marginLeft: marginLeft,
        marginTop: marginTop
      };
      $.each(['left', 'top'], function (i, dir) {
        if (collisions[collision[i]]) {
          collisions[collision[i]][dir](position, {
            targetWidth: targetWidth,
            targetHeight: targetHeight,
            elemWidth: elemWidth,
            elemHeight: elemHeight,
            collisionPosition: collisionPosition,
            collisionWidth: collisionWidth,
            collisionHeight: collisionHeight,
            offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
            my: options.my,
            at: options.at,
            within: within,
            elem: elem
          });
        }
      });
      if (options.using) {
        using = function using(props) {
          var left = targetOffset.left - position.left;
          var right = left + targetWidth - elemWidth;
          var top = targetOffset.top - position.top;
          var bottom = top + targetHeight - elemHeight;
          var feedback = {
            target: {
              element: target,
              left: targetOffset.left,
              top: targetOffset.top,
              width: targetWidth,
              height: targetHeight
            },
            element: {
              element: elem,
              left: position.left,
              top: position.top,
              width: elemWidth,
              height: elemHeight
            },
            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
          };
          if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
            feedback.horizontal = 'center';
          }
          if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
            feedback.vertical = 'middle';
          }
          if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
            feedback.important = 'horizontal';
          } else {
            feedback.important = 'vertical';
          }
          options.using.call(this, props, feedback);
        };
      }
      elem.offset($.extend(position, {
        using: using
      }));
    });
  };
  if (!$.hasOwnProperty('ui')) {
    $.ui = {};
  }
  $.ui.position = collisions;
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  var states = {
    postponed: []
  };
  Drupal.states = states;
  function invert(a, invertState) {
    return invertState && typeof a !== 'undefined' ? !a : a;
  }
  function _compare2(a, b) {
    if (a === b) {
      return typeof a === 'undefined' ? a : true;
    }
    return typeof a === 'undefined' || typeof b === 'undefined';
  }
  function ternary(a, b) {
    if (typeof a === 'undefined') {
      return b;
    }
    if (typeof b === 'undefined') {
      return a;
    }
    return a && b;
  }
  Drupal.behaviors.states = {
    attach: function attach(context, settings) {
      var $states = $(context).find('[data-drupal-states]');
      var il = $states.length;
      var _loop = function _loop(i) {
        var config = JSON.parse($states[i].getAttribute('data-drupal-states'));
        Object.keys(config || {}).forEach(function (state) {
          new states.Dependent({
            element: $($states[i]),
            state: states.State.sanitize(state),
            constraints: config[state]
          });
        });
      };
      for (var i = 0; i < il; i++) {
        _loop(i);
      }
      while (states.postponed.length) {
        states.postponed.shift()();
      }
    }
  };
  states.Dependent = function (args) {
    var _this = this;
    $.extend(this, {
      values: {},
      oldValue: null
    }, args);
    this.dependees = this.getDependees();
    Object.keys(this.dependees || {}).forEach(function (selector) {
      _this.initializeDependee(selector, _this.dependees[selector]);
    });
  };
  states.Dependent.comparisons = {
    RegExp: function RegExp(reference, value) {
      return reference.test(value);
    },
    Function: function Function(reference, value) {
      return reference(value);
    },
    Number: function Number(reference, value) {
      return typeof value === 'string' ? _compare2(reference.toString(), value) : _compare2(reference, value);
    }
  };
  states.Dependent.prototype = {
    initializeDependee: function initializeDependee(selector, dependeeStates) {
      var _this2 = this;
      this.values[selector] = {};
      Object.keys(dependeeStates).forEach(function (i) {
        var state = dependeeStates[i];
        if ($.inArray(state, dependeeStates) === -1) {
          return;
        }
        state = states.State.sanitize(state);
        _this2.values[selector][state.name] = null;
        $(selector).on("state:".concat(state), {
          selector: selector,
          state: state
        }, function (e) {
          _this2.update(e.data.selector, e.data.state, e.value);
        });
        new states.Trigger({
          selector: selector,
          state: state
        });
      });
    },
    compare: function compare(reference, selector, state) {
      var value = this.values[selector][state.name];
      if (reference.constructor.name in states.Dependent.comparisons) {
        return states.Dependent.comparisons[reference.constructor.name](reference, value);
      }
      return _compare2(reference, value);
    },
    update: function update(selector, state, value) {
      if (value !== this.values[selector][state.name]) {
        this.values[selector][state.name] = value;
        this.reevaluate();
      }
    },
    reevaluate: function reevaluate() {
      var value = this.verifyConstraints(this.constraints);
      if (value !== this.oldValue) {
        this.oldValue = value;
        value = invert(value, this.state.invert);
        this.element.trigger({
          type: "state:".concat(this.state),
          value: value,
          trigger: true
        });
      }
    },
    verifyConstraints: function verifyConstraints(constraints, selector) {
      var result;
      if ($.isArray(constraints)) {
        var hasXor = $.inArray('xor', constraints) === -1;
        var len = constraints.length;
        for (var i = 0; i < len; i++) {
          if (constraints[i] !== 'xor') {
            var constraint = this.checkConstraints(constraints[i], selector, i);
            if (constraint && (hasXor || result)) {
              return hasXor;
            }
            result = result || constraint;
          }
        }
      } else if ($.isPlainObject(constraints)) {
        for (var n in constraints) {
          if (constraints.hasOwnProperty(n)) {
            result = ternary(result, this.checkConstraints(constraints[n], selector, n));
            if (result === false) {
              return false;
            }
          }
        }
      }
      return result;
    },
    checkConstraints: function checkConstraints(value, selector, state) {
      if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
        state = null;
      } else if (typeof selector === 'undefined') {
        selector = state;
        state = null;
      }
      if (state !== null) {
        state = states.State.sanitize(state);
        return invert(this.compare(value, selector, state), state.invert);
      }
      return this.verifyConstraints(value, selector);
    },
    getDependees: function getDependees() {
      var cache = {};
      var _compare = this.compare;
      this.compare = function (reference, selector, state) {
        (cache[selector] || (cache[selector] = [])).push(state.name);
      };
      this.verifyConstraints(this.constraints);
      this.compare = _compare;
      return cache;
    }
  };
  states.Trigger = function (args) {
    $.extend(this, args);
    if (this.state in states.Trigger.states) {
      this.element = $(this.selector);
      if (!this.element.data("trigger:".concat(this.state))) {
        this.initialize();
      }
    }
  };
  states.Trigger.prototype = {
    initialize: function initialize() {
      var _this3 = this;
      var trigger = states.Trigger.states[this.state];
      if (typeof trigger === 'function') {
        trigger.call(window, this.element);
      } else {
        Object.keys(trigger || {}).forEach(function (event) {
          _this3.defaultTrigger(event, trigger[event]);
        });
      }
      this.element.data("trigger:".concat(this.state), true);
    },
    defaultTrigger: function defaultTrigger(event, valueFn) {
      var oldValue = valueFn.call(this.element);
      this.element.on(event, $.proxy(function (e) {
        var value = valueFn.call(this.element, e);
        if (oldValue !== value) {
          this.element.trigger({
            type: "state:".concat(this.state),
            value: value,
            oldValue: oldValue
          });
          oldValue = value;
        }
      }, this));
      states.postponed.push($.proxy(function () {
        this.element.trigger({
          type: "state:".concat(this.state),
          value: oldValue,
          oldValue: null
        });
      }, this));
    }
  };
  states.Trigger.states = {
    empty: {
      keyup: function keyup() {
        return this.val() === '';
      },
      change: function change() {
        return this.val() === '';
      }
    },
    checked: {
      change: function change() {
        var checked = false;
        this.each(function () {
          checked = $(this).prop('checked');
          return !checked;
        });
        return checked;
      }
    },
    value: {
      keyup: function keyup() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }
        return this.val();
      },
      change: function change() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }
        return this.val();
      }
    },
    collapsed: {
      collapsed: function collapsed(e) {
        return typeof e !== 'undefined' && 'value' in e ? e.value : !this.is('[open]');
      }
    }
  };
  states.State = function (state) {
    this.pristine = state;
    this.name = state;
    var process = true;
    do {
      while (this.name.charAt(0) === '!') {
        this.name = this.name.substring(1);
        this.invert = !this.invert;
      }
      if (this.name in states.State.aliases) {
        this.name = states.State.aliases[this.name];
      } else {
        process = false;
      }
    } while (process);
  };
  states.State.sanitize = function (state) {
    if (state instanceof states.State) {
      return state;
    }
    return new states.State(state);
  };
  states.State.aliases = {
    enabled: '!disabled',
    invisible: '!visible',
    invalid: '!valid',
    untouched: '!touched',
    optional: '!required',
    filled: '!empty',
    unchecked: '!checked',
    irrelevant: '!relevant',
    expanded: '!collapsed',
    open: '!collapsed',
    closed: 'collapsed',
    readwrite: '!readonly'
  };
  states.State.prototype = {
    invert: false,
    toString: function toString() {
      return this.name;
    }
  };
  var $document = $(document);
  $document.on('state:disabled', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea').prop('disabled', e.value);
    }
  });
  $document.on('state:required', function (e) {
    if (e.trigger) {
      if (e.value) {
        var label = "label".concat(e.target.id ? "[for=".concat(e.target.id, "]") : '');
        var $label = $(e.target).attr({
          required: 'required',
          'aria-required': 'true'
        }).closest('.js-form-item, .js-form-wrapper').find(label);
        if (!$label.hasClass('js-form-required').length) {
          $label.addClass('js-form-required form-required');
        }
      } else {
        $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
      }
    }
  });
  $document.on('state:visible', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value);
    }
  });
  $document.on('state:checked', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-wrapper').find('input').prop('checked', e.value).trigger('change');
    }
  });
  $document.on('state:collapsed', function (e) {
    if (e.trigger) {
      if ($(e.target).is('[open]') === e.value) {
        $(e.target).find('> summary').trigger('click');
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (Modernizr, Drupal, once) {
  Drupal.behaviors.date = {
    attach: function attach(context, settings) {
      if (Modernizr.inputtypes.date === false) {
        once('datepicker', '[data-drupal-field-elements="date-time"]').forEach(function (dateTime) {
          var dateInput = dateTime.querySelector('input[type="date"]');
          var timeInput = dateTime.querySelector('input[type="time"]');
          var help = Drupal.theme.dateTimeHelp({
            dateId: "".concat(dateInput.id, "--description"),
            dateDesc: dateInput.dataset.help,
            timeId: "".concat(timeInput.id, "--description"),
            timeDesc: timeInput.dataset.help
          });
          [dateInput, timeInput].forEach(function (input) {
            input.setAttribute('aria-describedby', "".concat(input.id, "--description"));
            input.setAttribute('type', 'text');
          });
          Drupal.DatepickerPolyfill.attachDescription(dateTime, help);
        });
        once('datepicker', '[data-drupal-field-elements="date"]').forEach(function (date) {
          var dateInput = date.querySelector('input[type="date"]');
          var help = Drupal.theme.dateHelp({
            dateDesc: dateInput.dataset.help
          });
          var id = "".concat(date.id, "--description");
          dateInput.setAttribute('aria-describedby', id);
          dateInput.setAttribute('type', 'text');
          Drupal.DatepickerPolyfill.attachDescription(date, help, id);
        });
      }
    }
  };
  Drupal.DatepickerPolyfill = function () {
    function _class() {
      _classCallCheck(this, _class);
    }
    _createClass(_class, null, [{
      key: "attachDescription",
      value: function attachDescription(element, help, id) {
        var description = element.nextElementSibling;
        if (!(description && description.getAttribute('data-drupal-field-elements') === 'description')) {
          description = Drupal.DatepickerPolyfill.descriptionWrapperElement(id);
          element.parentNode.insertBefore(description, element.nextSibling);
        }
        description.insertAdjacentHTML('beforeend', help);
      }
    }, {
      key: "descriptionWrapperElement",
      value: function descriptionWrapperElement(id) {
        var description = document.createElement('div');
        description.classList.add('description');
        description.setAttribute('data-drupal-field-elements', 'description');
        if (id) {
          description.setAttribute('id', id);
        }
        return description;
      }
    }]);
    return _class;
  }();
  Drupal.theme.dateHelp = function (_ref) {
    var dateDesc = _ref.dateDesc;
    return "<div class=\"no-native-datepicker-help\">".concat(dateDesc, "</div>");
  };
  Drupal.theme.dateTimeHelp = function (_ref2) {
    var dateId = _ref2.dateId,
      timeId = _ref2.timeId,
      dateDesc = _ref2.dateDesc,
      timeDesc = _ref2.timeDesc;
    return "<div class=\"no-native-datepicker-help\">\n       <span id=\"".concat(dateId, "\">").concat(dateDesc, "</span> <span id=\"").concat(timeId, "\">").concat(timeDesc, "</span>\n     </div>");
  };
})(Modernizr, Drupal, once);;
(function($, Drupal, drupalSettings) {

  Drupal.behaviors.leaflet = {
    attach: function(context, settings) {

      $.each(settings.leaflet, function(m, data) {
        $('#' + data.mapid, context).each(function() {
          let $container = $(this);
          let mapid = data.mapid;

          // If the attached context contains any leaflet maps, make sure we have a Drupal.leaflet_widget object.
          if ($container.data('leaflet') === undefined) {
            $container.data('leaflet', new Drupal.Leaflet(L.DomUtil.get(mapid), mapid, data.map));
            if (data.features.length > 0) {

              // Initialize the Drupal.Leaflet.[data.mapid] object,
              // for possible external interaction.
              Drupal.Leaflet[mapid].markers = {};
              Drupal.Leaflet[mapid].features = {};

              // Add Leaflet Map Features.
              $container.data('leaflet').add_features(mapid, data.features, true);
            }

            // Add the leaflet map to our settings object to make it accessible.
            // @NOTE: This is used by the Leaflet Widget module.
            data.lMap = $container.data('leaflet').lMap;

            // Set map position features.
            $container.data('leaflet').fitbounds(mapid);
          }

          else {
            // If we already had a map instance, add new features.
            // @TODO Does this work? Needs testing.
            if (data.features !== undefined) {
              $container.data('leaflet').add_features(mapid, data.features);
            }
          }
          // After having initialized the Leaflet Map and added features,
          // allow other modules to get access to it via trigger.
          // NOTE: don't change this trigger arguments print, for back porting
          // compatibility.
          $(document).trigger('leafletMapInit', [data.map, data.lMap, mapid]);
          // (Keep also the pre-existing event for back port compatibility)
          $(document).trigger('leaflet.map', [data.map, data.lMap, mapid]);
        });
      });
    }
  };

  // Once the Leaflet Map is loaded with its features.
  $(document).on('leaflet.map', function(e, settings, lMap, mapid) {

    // Executes once per mapid.
    once('leaflet_map_event_' + mapid, 'html').forEach(function() {
      // Set the start center and the start zoom, and initialize the reset_map control.
      if (!Drupal.Leaflet[mapid].start_center && !Drupal.Leaflet[mapid].start_zoom) {
        Drupal.Leaflet[mapid].start_center = Drupal.Leaflet[mapid].lMap.getCenter();
        Drupal.Leaflet[mapid].start_zoom = Drupal.Leaflet[mapid].lMap.getZoom();
      }

      // Add the Map Reset Control if requested.
      if (settings.settings.reset_map && settings.settings.reset_map.control && !Drupal.Leaflet[mapid].reset_control) {
        // Create the DIV to hold the control and call the mapResetControl()
        // constructor passing in this DIV.
        let mapResetControlDiv = document.createElement('div');
        Drupal.Leaflet[mapid].reset_control = Drupal.Leaflet.prototype.map_reset_control(mapResetControlDiv, mapid).addTo(Drupal.Leaflet[mapid].lMap);
      }

      // Add the Map Geocoder Control if requested.
      if (Drupal.Leaflet.prototype.map_geocoder_control) {
        let mapGeocoderControlDiv = document.createElement('div');
        Drupal.Leaflet[mapid].geocoder_control = Drupal.Leaflet.prototype.map_geocoder_control(mapGeocoderControlDiv, mapid).addTo(Drupal.Leaflet[mapid].lMap);
        let geocoder_settings = drupalSettings.leaflet[mapid].map.settings.geocoder.settings;
        Drupal.Leaflet.prototype.map_geocoder_control.autocomplete(mapid, geocoder_settings);
      }

      // Attach leaflet ajax popup listeners.
      Drupal.Leaflet[mapid].lMap.on('popupopen', function(e) {
        let element = e.popup._contentNode;
        let content = $('[data-leaflet-ajax-popup]', element);
        if (content.length) {
          let url = content.data('leaflet-ajax-popup');
          Drupal.ajax({url: url}).execute().done(function () {

            // Copy the html we received via AJAX to the popup, so we won't
            // have to make another AJAX call (#see 3258780).
            e.popup.setContent(element.innerHTML);

            //Call update() so Leaflet refreshes the map, panning it if
            // necessary to bring the full popup into view (#see 3258780).
            e.popup.update();

            // Attach drupal behaviors on new content.
            Drupal.attachBehaviors(element, drupalSettings);
          });
        }
      });
    });
  });

  Drupal.Leaflet = function(container, mapid, map_definition) {
    this.container = container;
    this.mapid = mapid;
    this.map_definition = map_definition;
    this.settings = this.map_definition.settings;
    this.bounds = [];
    this.base_layers = {};
    this.overlays = {};
    this.lMap = null;
    this.start_center = null;
    this.start_zoom = null;
    this.layer_control = null;
    this.initialise(mapid);
  };

  Drupal.Leaflet.prototype.initialise = function(mapid) {
    let self = this;
    // Instantiate a new Leaflet map.
    self.lMap = new L.Map(self.mapid, self.settings);

    // Set the public map object, to make it accessible from outside.
    Drupal.Leaflet[mapid] = {};
    // Define immediately the l.Map property, to make sub-methods mapid specific.
    Drupal.Leaflet[mapid].lMap = self.lMap;

    // Add map layers (base and overlay layers).
    let i = 0;
    for (let key in self.map_definition.layers) {
      let layer = self.map_definition.layers[key];
      // Distinguish between "base" and "overlay" layers.
      // Default to "base" in case "layer_type" has not been defined in hook_leaflet_map_info().
      layer.layer_type = (typeof layer.layer_type === 'undefined') ? 'base' : layer.layer_type;

      switch (layer.layer_type) {
        case 'overlay':
          let overlay_layer = self.create_layer(layer, key);
          let layer_hidden = (typeof layer.layer_hidden === "undefined") ? false : layer.layer_hidden;
          self.add_overlay(key, overlay_layer, layer_hidden, mapid);
          break;

        default:
          self.add_base_layer(key, layer, i, mapid);
          // Only the first base layer needs to be added to the map - all the
          // others are accessed via the layer switcher.
          if (i === 0) {
            i++;
          }
          break;
      }
      i++;
    }

    // Set initial view, fallback to displaying the whole world.
    if (self.settings.center && self.settings.zoom) {
      self.lMap.setView(new L.LatLng(self.settings.center.lat, self.settings.center.lon), self.settings.zoom);
    }
    else {
      self.lMap.fitWorld();
    }

    // Add Fullscreen Control, if requested.
    if (self.settings.fullscreen && self.settings.fullscreen.control) {
      L.control.fullscreen(
        JSON.parse(self.settings.fullscreen.options)
      ).addTo(self.lMap);
    }

  };

  Drupal.Leaflet.prototype.initialise_layer_control = function(mapid) {
    let self = this;
    let count_layers = function(obj) {
      // Browser compatibility: Chrome, IE 9+, FF 4+, or Safari 5+.
      // @see http://kangax.github.com/es5-compat-table/
      return Object.keys(obj).length;
    };

    // Only add a layer switcher if it is enabled in settings, and we have
    // at least two base layers or at least one overlay.
    if (Drupal.Leaflet[mapid].layer_control == null && self.settings.layerControl && (count_layers(self.base_layers) > 1 || count_layers(self.overlays) > 0)) {
      // Instantiate layer control, using settings.layerControl as settings.
      Drupal.Leaflet[mapid].layer_control = new L.Control.Layers(self.base_layers, self.overlays, self.settings.layerControlOptions);
      self.lMap.addControl(Drupal.Leaflet[mapid].layer_control);
    }
  };

  Drupal.Leaflet.prototype.add_base_layer = function(key, definition, i, mapid) {
    let self = this;
    let map_layer = self.create_layer(definition, key);
    self.base_layers[key] = map_layer;
    // Only the first base layer needs to be added to the map - all the others are accessed via the layer switcher.
    if (i === 0) {
      self.lMap.addLayer(map_layer);
    }
    if (Drupal.Leaflet[mapid].layer_control == null) {
      self.initialise_layer_control(mapid);
    }
    else {
      // If we already have a layer control, add the new base layer to it.
      Drupal.Leaflet[mapid].layer_control.addBaseLayer(map_layer, key);
    }
    Drupal.Leaflet[mapid].base_layers = self.base_layers;
  };

  Drupal.Leaflet.prototype.add_overlay = function(label, layer, layer_hidden, mapid) {
    let self = this;
    self.overlays[label] = layer;
    if (!layer_hidden) {
      Drupal.Leaflet[mapid].lMap.addLayer(layer);
    }

    if (Drupal.Leaflet[mapid].layer_control == null) {
      self.initialise_layer_control(mapid);
    }
    else {
      // If we already have a layer control, add the new overlay to it.
      Drupal.Leaflet[mapid].layer_control.addOverlay(layer, label);
    }
    Drupal.Leaflet[mapid].overlays = self.overlays;

  };

  Drupal.Leaflet.prototype.add_features = function(mapid, features, initial) {
    let self = this;
    for (let i = 0; i < features.length; i++) {
      let feature = features[i];
      let lFeature;

      // dealing with a layer group
      if (feature.group) {
        let lGroup = self.create_feature_group();
        for (let groupKey in feature.features) {
          let groupFeature = feature.features[groupKey];
          lFeature = self.create_feature(groupFeature);
          if (lFeature !== undefined) {
            if (lFeature.setStyle) {
              feature.path = feature.path ? (feature.path instanceof Object ? feature.path : JSON.parse(feature.path)) : {};
              lFeature.setStyle(feature.path);
            }
            if (groupFeature.popup) {
              lFeature.bindPopup(groupFeature.popup);
            }
            lGroup.addLayer(lFeature);
          }
        }

        // Add the group to the layer switcher.
        self.add_overlay(feature.label, lGroup, false, mapid);
      }
      else {
        lFeature = self.create_feature(feature);
        if (lFeature !== undefined) {
          if (lFeature.setStyle) {
            feature.path = feature.path ? (feature.path instanceof Object ? feature.path : JSON.parse(feature.path)) : {};
            lFeature.setStyle(feature.path);
          }
          self.lMap.addLayer(lFeature);

          if (feature.popup) {
            lFeature.bindPopup(feature.popup);
          }
        }
      }

      // Allow others to do something with the feature that was just added to the map.
      $(document).trigger('leaflet.feature', [lFeature, feature, self]);
    }

    // Allow plugins to do things after features have been added.
    $(document).trigger('leaflet.features', [initial || false, self])
  };

  Drupal.Leaflet.prototype.create_feature_group = function() {
    return new L.LayerGroup();
  };

  Drupal.Leaflet.prototype.create_feature = function(feature) {
    let self = this;
    let lFeature;
    switch (feature.type) {
      case 'point':
        lFeature = self.create_point(feature);
        break;

      case 'linestring':
        lFeature = self.create_linestring(feature);
        break;

      case 'polygon':
        lFeature = self.create_polygon(feature);
        break;

      case 'multipolygon':
        lFeature = self.create_multipolygon(feature);
        break;

      case 'multipolyline':
        lFeature = self.create_multipoly(feature);
        break;

      case 'json':
        lFeature = self.create_json(feature.json, feature.events);
        break;

      case 'multipoint':
      case 'geometrycollection':
        lFeature = self.create_collection(feature);
        break;

      default:
        return; // Crash and burn.
    }

    let options = {};
    if (feature.options) {
      for (let option in feature.options) {
        if (feature.options.hasOwnProperty(option)) {
          options[option] = feature.options[option];
        }
      }
      lFeature.setStyle(options);
    }

    if (feature.entity_id) {

      // Generate the markers object index based on entity id (and geofield
      // cardinality), and add the marker to the markers object.
      let entity_id = feature.entity_id;
      if (self.map_definition.geofield_cardinality && self.map_definition.geofield_cardinality !== 1) {
        let i = 0;
        while (Drupal.Leaflet[self.mapid].markers[entity_id + '-' + i]) {
          i++;
        }
        Drupal.Leaflet[self.mapid].markers[entity_id + '-' + i] = lFeature;
        Drupal.Leaflet[self.mapid].features[entity_id + '-' + i] = feature;
      }
      else {
        Drupal.Leaflet[self.mapid].markers[entity_id] = lFeature;
        Drupal.Leaflet[self.mapid].features[entity_id] = feature;
      }
    }
    return lFeature;
  };

  Drupal.Leaflet.prototype.create_layer = function(layer, key) {
    let self = this;
    let map_layer = new L.TileLayer(layer.urlTemplate);
    if (layer.type === 'wms') {
      map_layer = new L.tileLayer.wms(layer.urlTemplate, layer.options);
    }
    map_layer._leaflet_id = key;

    if (layer.options) {
      for (let option in layer.options) {
        map_layer.options[option] = layer.options[option];
      }
    }

    // Layers served from TileStream need this correction in the y coordinates.
    // TODO: Need to explore this more and find a more elegant solution.
    if (layer.type === 'tilestream') {
      map_layer.getTileUrl = function(tilePoint) {
        self._adjustTilePoint(tilePoint);
        let zoom = self._getZoomForUrl();
        return L.Util.template(self._url, L.Util.extend({
          s: self._getSubdomain(tilePoint),
          z: zoom,
          x: tilePoint.x,
          y: Math.pow(2, zoom) - tilePoint.y - 1
        }, self.options));
      }
    }
    return map_layer;
  };

  Drupal.Leaflet.prototype.create_icon = function(options) {
    let icon_options = {
      iconUrl: options.iconUrl,
    };

    // Override applicable marker defaults.
    if (options.iconSize) {
      icon_options.iconSize = new L.Point(parseInt(options.iconSize.x), parseInt(options.iconSize.y));
    }
    if (options.iconAnchor && options.iconAnchor.x && options.iconAnchor.y) {
      icon_options.iconAnchor = new L.Point(parseInt(options.iconAnchor.x), parseInt(options.iconAnchor.y));
    }
    if (options.popupAnchor && options.popupAnchor.x && options.popupAnchor.y) {
      icon_options.popupAnchor = new L.Point(parseInt(options.popupAnchor.x), parseInt(options.popupAnchor.y));
    }
    if (options.shadowUrl) {
      icon_options.shadowUrl = options.shadowUrl;
    }
    if (options.iconRetinaUrl) {
      icon_options.iconRetinaUrl = options.iconRetinaUrl;
    }
    if (options.shadowSize && options.shadowSize.x && options.shadowSize.y) {
      icon_options.shadowSize = new L.Point(parseInt(options.shadowSize.x), parseInt(options.shadowSize.y));
    }
    if (options.shadowAnchor && options.shadowAnchor.x && options.shadowAnchor.y) {
      icon_options.shadowAnchor = new L.Point(parseInt(options.shadowAnchor.x), parseInt(options.shadowAnchor.y));
    }
    if (options.className) {
      icon_options.className = options.className;
    }

    return new L.Icon(icon_options);
  };

  Drupal.Leaflet.prototype.create_divicon = function (options) {
    let html_class = options.html_class || '';
    let icon = new L.DivIcon({html: options.html, className: html_class});

    // override applicable marker defaults
    if (options.iconSize) {
      icon.options.iconSize = new L.Point(parseInt(options.iconSize.x, 10), parseInt(options.iconSize.y, 10));
    }
    if (options.iconAnchor && options.iconAnchor.x && options.iconAnchor.y) {
      icon.options.iconAnchor = new L.Point(parseInt(options.iconAnchor.x), parseInt(options.iconAnchor.y));
    }
    if (options.popupAnchor && !isNaN(options.popupAnchor.x) && !isNaN(options.popupAnchor.y)) {
      icon.options.popupAnchor = new L.Point(parseInt(options.popupAnchor.x), parseInt(options.popupAnchor.y));
    }

    return icon;
  };

  Drupal.Leaflet.prototype.create_point = function(marker) {
    let self = this;
    let latLng = new L.LatLng(marker.lat, marker.lon);
    self.bounds.push(latLng);
    let lMarker;
    let marker_title = marker.label ? marker.label.replace(/<[^>]*>/g, '').trim() : '';
    let options = {
      title: marker_title,
      className: marker.className || '',
      alt: marker_title,
    };

    lMarker = new L.Marker(latLng, options);

    if (marker.icon) {
      if (marker.icon.iconType && marker.icon.iconType === 'html' && marker.icon.html) {
        let icon = self.create_divicon(marker.icon);
        lMarker.setIcon(icon);
      }
      else if (marker.icon.iconType && marker.icon.iconType === 'circle_marker') {
        try {
          options = marker.icon.options ? JSON.parse(marker.icon.options) : {};
          options.radius = options.radius ? parseInt(options['radius']) : 10;
        }
        catch (e) {
          options = {};
        }
        lMarker = new L.CircleMarker(latLng, options);
      }
      else if (marker.icon.iconUrl) {
        marker.icon.iconSize = marker.icon.iconSize || {};
        marker.icon.iconSize.x = marker.icon.iconSize.x || this.naturalWidth;
        marker.icon.iconSize.y = marker.icon.iconSize.y || this.naturalHeight;
        if (marker.icon.shadowUrl) {
          marker.icon.shadowSize = marker.icon.shadowSize || {};
          marker.icon.shadowSize.x = marker.icon.shadowSize.x || this.naturalWidth;
          marker.icon.shadowSize.y = marker.icon.shadowSize.y || this.naturalHeight;
        }
        let icon = self.create_icon(marker.icon);
        lMarker.setIcon(icon);
      }
    }

    return lMarker;
  };

  Drupal.Leaflet.prototype.create_linestring = function(polyline) {
    let self = this;
    let latlngs = [];
    for (let i = 0; i < polyline.points.length; i++) {
      let latlng = new L.LatLng(polyline.points[i].lat, polyline.points[i].lon);
      latlngs.push(latlng);
      self.bounds.push(latlng);
    }
    return new L.Polyline(latlngs);
  };

  Drupal.Leaflet.prototype.create_collection = function(collection) {
    let self = this;
    let layers = new L.featureGroup();
    for (let x = 0; x < collection.component.length; x++) {
      layers.addLayer(self.create_feature(collection.component[x]));
    }
    return layers;
  };

  Drupal.Leaflet.prototype.create_polygon = function(polygon) {
    let self = this;
    let latlngs = [];
    for (let i = 0; i < polygon.points.length; i++) {
      let latlng = new L.LatLng(polygon.points[i].lat, polygon.points[i].lon);
      latlngs.push(latlng);
      self.bounds.push(latlng);
    }
    return new L.Polygon(latlngs);
  };

  Drupal.Leaflet.prototype.create_multipolygon = function(multipolygon) {
    let self = this;
    let polygons = [];
    for (let x = 0; x < multipolygon.component.length; x++) {
      let latlngs = [];
      let polygon = multipolygon.component[x];
      for (let i = 0; i < polygon.points.length; i++) {
        let latlng = new L.LatLng(polygon.points[i].lat, polygon.points[i].lon);
        latlngs.push(latlng);
        self.bounds.push(latlng);
      }
      polygons.push(latlngs);
    }
    return new L.Polygon(polygons);
  };

  Drupal.Leaflet.prototype.create_multipoly = function(multipoly) {
    let self = this;
    let polygons = [];
    for (let x = 0; x < multipoly.component.length; x++) {
      let latlngs = [];
      let polygon = multipoly.component[x];
      for (let i = 0; i < polygon.points.length; i++) {
        let latlng = new L.LatLng(polygon.points[i].lat, polygon.points[i].lon);
        latlngs.push(latlng);
        self.bounds.push(latlng);
      }
      polygons.push(latlngs);
    }
    if (multipoly.multipolyline) {
      return new L.polyline(polygons);
    }
    else {
      return new L.polygon(polygons);
    }
  };

  Drupal.Leaflet.prototype.create_json = function(json, events) {
    let lJSON = new L.GeoJSON();

    lJSON.options.onEachFeature = function(feature, layer) {
      for (let layer_id in layer._layers) {
        for (let i in layer._layers[layer_id]._latlngs) {
          Drupal.Leaflet.bounds.push(layer._layers[layer_id]._latlngs[i]);
        }
      }
      if (feature.properties.style) {
        layer.setStyle(feature.properties.style);
      }
      if (feature.properties.leaflet_id) {
        layer._leaflet_id = feature.properties.leaflet_id;
      }
      if (feature.properties.popup) {
        layer.bindPopup(feature.properties.popup);
      }
      for (e in events) {
        layerParam = {};
        layerParam[e] = eval(events[e]);
        layer.on(layerParam);
      }
    };

    lJSON.addData(json);
    return lJSON;
  };

  // Set Map initial map position and Zoom.  Different scenarios:
  //  1)  Force the initial map center and zoom to values provided by input settings
  //  2)  Fit multiple features onto map using Leaflet's fitBounds method
  //  3)  Fit a single polygon onto map using Leaflet's fitBounds method
  //  4)  Display a single marker using the specified zoom
  //  5)  Adjust the initial zoom using zoomFiner, if specified
  //  6)  Cater for a map with no features (use input settings for Zoom and Center, if supplied)
  //
  // @NOTE: This method used by Leaflet Markecluster module (don't remove/rename)
  Drupal.Leaflet.prototype.fitbounds = function(mapid) {
    let self = this;
    let start_zoom = self.settings.zoom ? self.settings.zoom : 12;
    // Note: self.settings.center might not be defined in case of Leaflet widget and Automatically locate user current position.
    let start_center = self.settings.center ? new L.LatLng(self.settings.center.lat, self.settings.center.lon) : new L.LatLng(0,0);

    //  Check whether the Zoom and Center are to be forced to use the input settings
    if (self.settings.map_position_force) {
      //  Set the Zoom and Center to values provided by the input settings
      Drupal.Leaflet[mapid].lMap.setView(start_center, start_zoom);
    } else {
      if (self.bounds.length === 0) {
        //  No features - set the Zoom and Center to values provided by the input settings, if specified
        Drupal.Leaflet[mapid].lMap.setView(start_center, start_zoom);
      } else {
        //  Set the Zoom and Center by using the Leaflet fitBounds function
        let bounds = new L.LatLngBounds(self.bounds);
        Drupal.Leaflet[mapid].lMap.fitBounds(bounds);
        start_center = bounds.getCenter();
        start_zoom = Drupal.Leaflet[mapid].lMap.getBoundsZoom(bounds);

        if (self.bounds.length === 1) {
          //  Single marker - set zoom to input settings
          Drupal.Leaflet[mapid].lMap.setZoom(self.settings.zoom);
          start_zoom = self.settings.zoom;
        }
      }

      // In case of map initial position not forced, and zooFiner not null/neutral,
      // adapt the Map Zoom and the Start Zoom accordingly.
      if (self.settings.hasOwnProperty('zoomFiner') && parseInt(self.settings.zoomFiner)) {
        start_zoom += parseFloat(self.settings.zoomFiner);
        Drupal.Leaflet[mapid].lMap.setView(start_center, start_zoom);
      }

      // Set the map start zoom and center.
      Drupal.Leaflet[mapid].start_zoom = start_zoom;
      Drupal.Leaflet[mapid].start_center = start_center;
    }

  };

  Drupal.Leaflet.prototype.map_reset = function(mapid) {
    Drupal.Leaflet[mapid].lMap.setView(Drupal.Leaflet[mapid].start_center, Drupal.Leaflet[mapid].start_zoom);
  };

  Drupal.Leaflet.prototype.map_reset_control = function(controlDiv, mapid) {
    let self = this;
    let reset_map_control_settings = drupalSettings.leaflet[mapid].map.settings.reset_map;
    let control = new L.Control({position: reset_map_control_settings.position});
    control.onAdd = function() {
      // Set CSS for the control border.
      let controlUI = L.DomUtil.create('div','resetzoom');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.margin = '6px';
      controlUI.style.textAlign = 'center';
      controlUI.title = Drupal.t('Click to reset the map to its initial state');
      controlUI.id = 'leaflet-map--' + mapid + '--reset-control';
      controlUI.disabled = true;
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      let controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontSize = '1.1em';
      controlText.style.lineHeight = '28px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = Drupal.t('Reset Map');
      controlUI.appendChild(controlText);

      L.DomEvent
        .disableClickPropagation(controlUI)
        .addListener(controlUI, 'click', function() {
          self.map_reset(mapid);
        },controlUI);
      return controlUI;
    };
    return control;
  };

})(jQuery, Drupal, drupalSettings);
;
(()=>{var t={9705:(t,e,i)=>{"use strict";var n=i(1540);function r(t){var e=[Infinity,Infinity,-Infinity,-Infinity];return n.coordEach(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}r["default"]=r,e.Z=r},4102:(t,e)=>{"use strict";function i(t,e,i){void 0===i&&(i={});var n={type:"Feature"};return(0===i.id||i.id)&&(n.id=i.id),i.bbox&&(n.bbox=i.bbox),n.properties=e||{},n.geometry=t,n}function n(t,e,n){if(void 0===n&&(n={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!d(t[0])||!d(t[1]))throw new Error("coordinates must contain numbers");return i({type:"Point",coordinates:t},e,n)}function r(t,e,n){void 0===n&&(n={});for(var r=0,a=t;r<a.length;r++){var o=a[r];if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<o[o.length-1].length;s++)if(o[o.length-1][s]!==o[0][s])throw new Error("First and last Position are not equivalent.")}return i({type:"Polygon",coordinates:t},e,n)}function a(t,e,n){if(void 0===n&&(n={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return i({type:"LineString",coordinates:t},e,n)}function o(t,e){void 0===e&&(e={});var i={type:"FeatureCollection"};return e.id&&(i.id=e.id),e.bbox&&(i.bbox=e.bbox),i.features=t,i}function s(t,e,n){return void 0===n&&(n={}),i({type:"MultiLineString",coordinates:t},e,n)}function l(t,e,n){return void 0===n&&(n={}),i({type:"MultiPoint",coordinates:t},e,n)}function h(t,e,n){return void 0===n&&(n={}),i({type:"MultiPolygon",coordinates:t},e,n)}function u(t,i){void 0===i&&(i="kilometers");var n=e.factors[i];if(!n)throw new Error(i+" units is invalid");return t*n}function c(t,i){void 0===i&&(i="kilometers");var n=e.factors[i];if(!n)throw new Error(i+" units is invalid");return t/n}function p(t){return 180*(t%(2*Math.PI))/Math.PI}function d(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.earthRadius=6371008.8,e.factors={centimeters:100*e.earthRadius,centimetres:100*e.earthRadius,degrees:e.earthRadius/111325,feet:3.28084*e.earthRadius,inches:39.37*e.earthRadius,kilometers:e.earthRadius/1e3,kilometres:e.earthRadius/1e3,meters:e.earthRadius,metres:e.earthRadius,miles:e.earthRadius/1609.344,millimeters:1e3*e.earthRadius,millimetres:1e3*e.earthRadius,nauticalmiles:e.earthRadius/1852,radians:1,yards:1.0936*e.earthRadius},e.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/e.earthRadius,yards:1.0936133},e.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},e.feature=i,e.geometry=function(t,e,i){switch(void 0===i&&(i={}),t){case"Point":return n(e).geometry;case"LineString":return a(e).geometry;case"Polygon":return r(e).geometry;case"MultiPoint":return l(e).geometry;case"MultiLineString":return s(e).geometry;case"MultiPolygon":return h(e).geometry;default:throw new Error(t+" is invalid")}},e.point=n,e.points=function(t,e,i){return void 0===i&&(i={}),o(t.map((function(t){return n(t,e)})),i)},e.polygon=r,e.polygons=function(t,e,i){return void 0===i&&(i={}),o(t.map((function(t){return r(t,e)})),i)},e.lineString=a,e.lineStrings=function(t,e,i){return void 0===i&&(i={}),o(t.map((function(t){return a(t,e)})),i)},e.featureCollection=o,e.multiLineString=s,e.multiPoint=l,e.multiPolygon=h,e.geometryCollection=function(t,e,n){return void 0===n&&(n={}),i({type:"GeometryCollection",geometries:t},e,n)},e.round=function(t,e){if(void 0===e&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var i=Math.pow(10,e||0);return Math.round(t*i)/i},e.radiansToLength=u,e.lengthToRadians=c,e.lengthToDegrees=function(t,e){return p(c(t,e))},e.bearingToAzimuth=function(t){var e=t%360;return e<0&&(e+=360),e},e.radiansToDegrees=p,e.degreesToRadians=function(t){return t%360*Math.PI/180},e.convertLength=function(t,e,i){if(void 0===e&&(e="kilometers"),void 0===i&&(i="kilometers"),!(t>=0))throw new Error("length must be a positive number");return u(c(t,e),i)},e.convertArea=function(t,i,n){if(void 0===i&&(i="meters"),void 0===n&&(n="kilometers"),!(t>=0))throw new Error("area must be a positive number");var r=e.areaFactors[i];if(!r)throw new Error("invalid original units");var a=e.areaFactors[n];if(!a)throw new Error("invalid final units");return t/r*a},e.isNumber=d,e.isObject=function(t){return!!t&&t.constructor===Object},e.validateBBox=function(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!d(t))throw new Error("bbox must only contain numbers")}))},e.validateId=function(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")}},1540:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(4102);function r(t,e,i){if(null!==t)for(var n,a,o,s,l,h,u,c,p=0,d=0,f=t.type,g="FeatureCollection"===f,_="Feature"===f,m=g?t.features.length:1,y=0;y<m;y++){l=(c=!!(u=g?t.features[y].geometry:_?t.geometry:t)&&"GeometryCollection"===u.type)?u.geometries.length:1;for(var v=0;v<l;v++){var L=0,b=0;if(null!==(s=c?u.geometries[v]:u)){h=s.coordinates;var k=s.type;switch(p=!i||"Polygon"!==k&&"MultiPolygon"!==k?0:1,k){case null:break;case"Point":if(!1===e(h,d,y,L,b))return!1;d++,L++;break;case"LineString":case"MultiPoint":for(n=0;n<h.length;n++){if(!1===e(h[n],d,y,L,b))return!1;d++,"MultiPoint"===k&&L++}"LineString"===k&&L++;break;case"Polygon":case"MultiLineString":for(n=0;n<h.length;n++){for(a=0;a<h[n].length-p;a++){if(!1===e(h[n][a],d,y,L,b))return!1;d++}"MultiLineString"===k&&L++,"Polygon"===k&&b++}"Polygon"===k&&L++;break;case"MultiPolygon":for(n=0;n<h.length;n++){for(b=0,a=0;a<h[n].length;a++){for(o=0;o<h[n][a].length-p;o++){if(!1===e(h[n][a][o],d,y,L,b))return!1;d++}b++}L++}break;case"GeometryCollection":for(n=0;n<s.geometries.length;n++)if(!1===r(s.geometries[n],e,i))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function a(t,e){var i;switch(t.type){case"FeatureCollection":for(i=0;i<t.features.length&&!1!==e(t.features[i].properties,i);i++);break;case"Feature":e(t.properties,0)}}function o(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var i=0;i<t.features.length&&!1!==e(t.features[i],i);i++);}function s(t,e){var i,n,r,a,o,s,l,h,u,c,p=0,d="FeatureCollection"===t.type,f="Feature"===t.type,g=d?t.features.length:1;for(i=0;i<g;i++){for(s=d?t.features[i].geometry:f?t.geometry:t,h=d?t.features[i].properties:f?t.properties:{},u=d?t.features[i].bbox:f?t.bbox:undefined,c=d?t.features[i].id:f?t.id:undefined,o=(l=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,r=0;r<o;r++)if(null!==(a=l?s.geometries[r]:s))switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(a,p,h,u,c))return!1;break;case"GeometryCollection":for(n=0;n<a.geometries.length;n++)if(!1===e(a.geometries[n],p,h,u,c))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,p,h,u,c))return!1;p++}}function l(t,e){s(t,(function(t,i,r,a,o){var s,l=null===t?null:t.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return!1!==e(n.feature(t,r,{bbox:a,id:o}),i,0)&&void 0}switch(l){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon"}for(var h=0;h<t.coordinates.length;h++){var u={type:s,coordinates:t.coordinates[h]};if(!1===e(n.feature(u,r),i,h))return!1}}))}function h(t,e){l(t,(function(t,i,a){var o=0;if(t.geometry){var s=t.geometry.type;if("Point"!==s&&"MultiPoint"!==s){var l,h=0,u=0,c=0;return!1!==r(t,(function(r,s,p,d,f){if(l===undefined||i>h||d>u||f>c)return l=r,h=i,u=d,c=f,void(o=0);var g=n.lineString([l,r],t.properties);if(!1===e(g,i,a,f,o))return!1;o++,l=r}))&&void 0}}}))}function u(t,e){if(!t)throw new Error("geojson is required");l(t,(function(t,i,r){if(null!==t.geometry){var a=t.geometry.type,o=t.geometry.coordinates;switch(a){case"LineString":if(!1===e(t,i,r,0,0))return!1;break;case"Polygon":for(var s=0;s<o.length;s++)if(!1===e(n.lineString(o[s],t.properties),i,r,s))return!1}}}))}e.coordAll=function(t){var e=[];return r(t,(function(t){e.push(t)})),e},e.coordEach=r,e.coordReduce=function(t,e,i,n){var a=i;return r(t,(function(t,n,r,o,s){a=0===n&&i===undefined?t:e(a,t,n,r,o,s)}),n),a},e.featureEach=o,e.featureReduce=function(t,e,i){var n=i;return o(t,(function(t,r){n=0===r&&i===undefined?t:e(n,t,r)})),n},e.findPoint=function(t,e){if(e=e||{},!n.isObject(e))throw new Error("options is invalid");var i,r=e.featureIndex||0,a=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.coordIndex||0,l=e.properties;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),l=l||t.features[r].properties,i=t.features[r].geometry;break;case"Feature":l=l||t.properties,i=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":i=t;break;default:throw new Error("geojson is invalid")}if(null===i)return null;var h=i.coordinates;switch(i.type){case"Point":return n.point(h,l,e);case"MultiPoint":return a<0&&(a=h.length+a),n.point(h[a],l,e);case"LineString":return s<0&&(s=h.length+s),n.point(h[s],l,e);case"Polygon":return o<0&&(o=h.length+o),s<0&&(s=h[o].length+s),n.point(h[o][s],l,e);case"MultiLineString":return a<0&&(a=h.length+a),s<0&&(s=h[a].length+s),n.point(h[a][s],l,e);case"MultiPolygon":return a<0&&(a=h.length+a),o<0&&(o=h[a].length+o),s<0&&(s=h[a][o].length-s),n.point(h[a][o][s],l,e)}throw new Error("geojson is invalid")},e.findSegment=function(t,e){if(e=e||{},!n.isObject(e))throw new Error("options is invalid");var i,r=e.featureIndex||0,a=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.segmentIndex||0,l=e.properties;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),l=l||t.features[r].properties,i=t.features[r].geometry;break;case"Feature":l=l||t.properties,i=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":i=t;break;default:throw new Error("geojson is invalid")}if(null===i)return null;var h=i.coordinates;switch(i.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=h.length+s-1),n.lineString([h[s],h[s+1]],l,e);case"Polygon":return o<0&&(o=h.length+o),s<0&&(s=h[o].length+s-1),n.lineString([h[o][s],h[o][s+1]],l,e);case"MultiLineString":return a<0&&(a=h.length+a),s<0&&(s=h[a].length+s-1),n.lineString([h[a][s],h[a][s+1]],l,e);case"MultiPolygon":return a<0&&(a=h.length+a),o<0&&(o=h[a].length+o),s<0&&(s=h[a][o].length-s-1),n.lineString([h[a][o][s],h[a][o][s+1]],l,e)}throw new Error("geojson is invalid")},e.flattenEach=l,e.flattenReduce=function(t,e,i){var n=i;return l(t,(function(t,r,a){n=0===r&&0===a&&i===undefined?t:e(n,t,r,a)})),n},e.geomEach=s,e.geomReduce=function(t,e,i){var n=i;return s(t,(function(t,r,a,o,s){n=0===r&&i===undefined?t:e(n,t,r,a,o,s)})),n},e.lineEach=u,e.lineReduce=function(t,e,i){var n=i;return u(t,(function(t,r,a,o){n=0===r&&i===undefined?t:e(n,t,r,a,o)})),n},e.propEach=a,e.propReduce=function(t,e,i){var n=i;return a(t,(function(t,r){n=0===r&&i===undefined?t:e(n,t,r)})),n},e.segmentEach=h,e.segmentReduce=function(t,e,i){var n=i,r=!1;return h(t,(function(t,a,o,s,l){n=!1===r&&i===undefined?t:e(n,t,a,o,s,l),r=!0})),n}},414:(t,e,i)=>{"use strict";i(7107);var n=i(2492),r=i.n(n);const a=JSON.parse('{"tooltips":{"placeMarker":"Click to place marker","firstVertex":"Click to place first vertex","continueLine":"Click to continue drawing","finishLine":"Click any existing marker to finish","finishPoly":"Click first marker to finish","finishRect":"Click to finish","startCircle":"Click to place circle center","finishCircle":"Click to finish circle","placeCircleMarker":"Click to place circle marker","placeText":"Click to place text"},"actions":{"finish":"Finish","cancel":"Cancel","removeLastVertex":"Remove Last Vertex"},"buttonTitles":{"drawMarkerButton":"Draw Marker","drawPolyButton":"Draw Polygons","drawLineButton":"Draw Polyline","drawCircleButton":"Draw Circle","drawRectButton":"Draw Rectangle","editButton":"Edit Layers","dragButton":"Drag Layers","cutButton":"Cut Layers","deleteButton":"Remove Layers","drawCircleMarkerButton":"Draw Circle Marker","snappingButton":"Snap dragged marker to other layers and vertices","pinningButton":"Pin shared vertices together","rotateButton":"Rotate Layers","drawTextButton":"Draw Text"}}'),o=JSON.parse('{"tooltips":{"placeMarker":"Platziere den Marker mit Klick","firstVertex":"Platziere den ersten Marker mit Klick","continueLine":"Klicke, um weiter zu zeichnen","finishLine":"Beende mit Klick auf existierenden Marker","finishPoly":"Beende mit Klick auf ersten Marker","finishRect":"Beende mit Klick","startCircle":"Platziere das Kreiszentrum mit Klick","finishCircle":"Beende den Kreis mit Klick","placeCircleMarker":"Platziere den Kreismarker mit Klick","placeText":"Platziere den Text mit Klick"},"actions":{"finish":"Beenden","cancel":"Abbrechen","removeLastVertex":"Letzten Vertex löschen"},"buttonTitles":{"drawMarkerButton":"Marker zeichnen","drawPolyButton":"Polygon zeichnen","drawLineButton":"Polyline zeichnen","drawCircleButton":"Kreis zeichnen","drawRectButton":"Rechteck zeichnen","editButton":"Layer editieren","dragButton":"Layer bewegen","cutButton":"Layer schneiden","deleteButton":"Layer löschen","drawCircleMarkerButton":"Kreismarker zeichnen","snappingButton":"Bewegter Layer an andere Layer oder Vertexe einhacken","pinningButton":"Vertexe an der gleichen Position verknüpfen","rotateButton":"Layer drehen","drawTextButton":"Text zeichnen"}}'),s=JSON.parse('{"tooltips":{"placeMarker":"Clicca per posizionare un Marker","firstVertex":"Clicca per posizionare il primo vertice","continueLine":"Clicca per continuare a disegnare","finishLine":"Clicca qualsiasi marker esistente per terminare","finishPoly":"Clicca il primo marker per terminare","finishRect":"Clicca per terminare","startCircle":"Clicca per posizionare il punto centrale del cerchio","finishCircle":"Clicca per terminare il cerchio","placeCircleMarker":"Clicca per posizionare un Marker del cherchio"},"actions":{"finish":"Termina","cancel":"Annulla","removeLastVertex":"Rimuovi l\'ultimo vertice"},"buttonTitles":{"drawMarkerButton":"Disegna Marker","drawPolyButton":"Disegna Poligoni","drawLineButton":"Disegna Polilinea","drawCircleButton":"Disegna Cerchio","drawRectButton":"Disegna Rettangolo","editButton":"Modifica Livelli","dragButton":"Sposta Livelli","cutButton":"Ritaglia Livelli","deleteButton":"Elimina Livelli","drawCircleMarkerButton":"Disegna Marker del Cerchio","snappingButton":"Snap ha trascinato il pennarello su altri strati e vertici","pinningButton":"Pin condiviso vertici insieme"}}'),l=JSON.parse('{"tooltips":{"placeMarker":"Klik untuk menempatkan marker","firstVertex":"Klik untuk menempatkan vertex pertama","continueLine":"Klik untuk meneruskan digitasi","finishLine":"Klik pada sembarang marker yang ada untuk mengakhiri","finishPoly":"Klik marker pertama untuk mengakhiri","finishRect":"Klik untuk mengakhiri","startCircle":"Klik untuk menempatkan titik pusat lingkaran","finishCircle":"Klik untuk mengakhiri lingkaran","placeCircleMarker":"Klik untuk menempatkan penanda lingkarann"},"actions":{"finish":"Selesai","cancel":"Batal","removeLastVertex":"Hilangkan Vertex Terakhir"},"buttonTitles":{"drawMarkerButton":"Digitasi Marker","drawPolyButton":"Digitasi Polygon","drawLineButton":"Digitasi Polyline","drawCircleButton":"Digitasi Lingkaran","drawRectButton":"Digitasi Segi Empat","editButton":"Edit Layer","dragButton":"Geser Layer","cutButton":"Potong Layer","deleteButton":"Hilangkan Layer","drawCircleMarkerButton":"Digitasi Penanda Lingkaran","snappingButton":"Jepretkan penanda yang ditarik ke lapisan dan simpul lain","pinningButton":"Sematkan simpul bersama bersama"}}'),h=JSON.parse('{"tooltips":{"placeMarker":"Adaugă un punct","firstVertex":"Apasă aici pentru a adăuga primul Vertex","continueLine":"Apasă aici pentru a continua desenul","finishLine":"Apasă pe orice obiect pentru a finisa desenul","finishPoly":"Apasă pe primul obiect pentru a finisa","finishRect":"Apasă pentru a finisa","startCircle":"Apasă pentru a desena un cerc","finishCircle":"Apasă pentru a finisa un cerc","placeCircleMarker":"Adaugă un punct"},"actions":{"finish":"Termină","cancel":"Anulează","removeLastVertex":"Șterge ultimul Vertex"},"buttonTitles":{"drawMarkerButton":"Adaugă o bulină","drawPolyButton":"Desenează un poligon","drawLineButton":"Desenează o linie","drawCircleButton":"Desenează un cerc","drawRectButton":"Desenează un dreptunghi","editButton":"Editează straturile","dragButton":"Mută straturile","cutButton":"Taie straturile","deleteButton":"Șterge straturile","drawCircleMarkerButton":"Desenează marcatorul cercului","snappingButton":"Fixați marcatorul glisat pe alte straturi și vârfuri","pinningButton":"Fixați vârfurile partajate împreună"}}'),u=JSON.parse('{"tooltips":{"placeMarker":"Нажмите, чтобы нанести маркер","firstVertex":"Нажмите, чтобы нанести первый объект","continueLine":"Нажмите, чтобы продолжить рисование","finishLine":"Нажмите любой существующий маркер для завершения","finishPoly":"Выберите первую точку, чтобы закончить","finishRect":"Нажмите, чтобы закончить","startCircle":"Нажмите, чтобы добавить центр круга","finishCircle":"Нажмите, чтобы задать радиус","placeCircleMarker":"Нажмите, чтобы нанести круговой маркер"},"actions":{"finish":"Завершить","cancel":"Отменить","removeLastVertex":"Отменить последнее действие"},"buttonTitles":{"drawMarkerButton":"Добавить маркер","drawPolyButton":"Рисовать полигон","drawLineButton":"Рисовать кривую","drawCircleButton":"Рисовать круг","drawRectButton":"Рисовать прямоугольник","editButton":"Редактировать слой","dragButton":"Перенести слой","cutButton":"Вырезать слой","deleteButton":"Удалить слой","drawCircleMarkerButton":"Добавить круговой маркер","snappingButton":"Привязать перетаскиваемый маркер к другим слоям и вершинам","pinningButton":"Связать общие точки вместе"}}'),c=JSON.parse('{"tooltips":{"placeMarker":"Presiona para colocar un marcador","firstVertex":"Presiona para colocar el primer vértice","continueLine":"Presiona para continuar dibujando","finishLine":"Presiona cualquier marcador existente para finalizar","finishPoly":"Presiona el primer marcador para finalizar","finishRect":"Presiona para finalizar","startCircle":"Presiona para colocar el centro del circulo","finishCircle":"Presiona para finalizar el circulo","placeCircleMarker":"Presiona para colocar un marcador de circulo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover ultimo vértice"},"buttonTitles":{"drawMarkerButton":"Dibujar Marcador","drawPolyButton":"Dibujar Polígono","drawLineButton":"Dibujar Línea","drawCircleButton":"Dibujar Circulo","drawRectButton":"Dibujar Rectángulo","editButton":"Editar Capas","dragButton":"Arrastrar Capas","cutButton":"Cortar Capas","deleteButton":"Remover Capas","drawCircleMarkerButton":"Dibujar Marcador de Circulo","snappingButton":"El marcador de Snap arrastrado a otras capas y vértices","pinningButton":"Fijar juntos los vértices compartidos"}}'),p=JSON.parse('{"tooltips":{"placeMarker":"Klik om een marker te plaatsen","firstVertex":"Klik om het eerste punt te plaatsen","continueLine":"Klik om te blijven tekenen","finishLine":"Klik op een bestaand punt om te beëindigen","finishPoly":"Klik op het eerst punt om te beëindigen","finishRect":"Klik om te beëindigen","startCircle":"Klik om het middelpunt te plaatsen","finishCircle":"Klik om de cirkel te beëindigen","placeCircleMarker":"Klik om een marker te plaatsen"},"actions":{"finish":"Bewaar","cancel":"Annuleer","removeLastVertex":"Verwijder laatste punt"},"buttonTitles":{"drawMarkerButton":"Plaats Marker","drawPolyButton":"Teken een vlak","drawLineButton":"Teken een lijn","drawCircleButton":"Teken een cirkel","drawRectButton":"Teken een vierkant","editButton":"Bewerk","dragButton":"Verplaats","cutButton":"Knip","deleteButton":"Verwijder","drawCircleMarkerButton":"Plaats Marker","snappingButton":"Snap gesleepte marker naar andere lagen en hoekpunten","pinningButton":"Speld gedeelde hoekpunten samen"}}'),d=JSON.parse('{"tooltips":{"placeMarker":"Cliquez pour placer un marqueur","firstVertex":"Cliquez pour placer le premier sommet","continueLine":"Cliquez pour continuer à dessiner","finishLine":"Cliquez sur n\'importe quel marqueur pour terminer","finishPoly":"Cliquez sur le premier marqueur pour terminer","finishRect":"Cliquez pour terminer","startCircle":"Cliquez pour placer le centre du cercle","finishCircle":"Cliquez pour finir le cercle","placeCircleMarker":"Cliquez pour placer le marqueur circulaire"},"actions":{"finish":"Terminer","cancel":"Annuler","removeLastVertex":"Retirer le dernier sommet"},"buttonTitles":{"drawMarkerButton":"Placer des marqueurs","drawPolyButton":"Dessiner des polygones","drawLineButton":"Dessiner des polylignes","drawCircleButton":"Dessiner un cercle","drawRectButton":"Dessiner un rectangle","editButton":"Éditer des calques","dragButton":"Déplacer des calques","cutButton":"Couper des calques","deleteButton":"Supprimer des calques","drawCircleMarkerButton":"Dessiner un marqueur circulaire","snappingButton":"Glisser le marqueur vers d\'autres couches et sommets","pinningButton":"Épingler ensemble les sommets partagés","rotateButton":"Tourner des calques"}}'),f=JSON.parse('{"tooltips":{"placeMarker":"单击放置标记","firstVertex":"单击放置首个顶点","continueLine":"单击继续绘制","finishLine":"单击任何存在的标记以完成","finishPoly":"单击第一个标记以完成","finishRect":"单击完成","startCircle":"单击放置圆心","finishCircle":"单击完成圆形","placeCircleMarker":"点击放置圆形标记"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最后的顶点"},"buttonTitles":{"drawMarkerButton":"绘制标记","drawPolyButton":"绘制多边形","drawLineButton":"绘制线段","drawCircleButton":"绘制圆形","drawRectButton":"绘制长方形","editButton":"编辑图层","dragButton":"拖拽图层","cutButton":"剪切图层","deleteButton":"删除图层","drawCircleMarkerButton":"画圆圈标记","snappingButton":"将拖动的标记捕捉到其他图层和顶点","pinningButton":"将共享顶点固定在一起"}}'),g=JSON.parse('{"tooltips":{"placeMarker":"單擊放置標記","firstVertex":"單擊放置第一個頂點","continueLine":"單擊繼續繪製","finishLine":"單擊任何存在的標記以完成","finishPoly":"單擊第一個標記以完成","finishRect":"單擊完成","startCircle":"單擊放置圓心","finishCircle":"單擊完成圓形","placeCircleMarker":"點擊放置圓形標記"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最後一個頂點"},"buttonTitles":{"drawMarkerButton":"放置標記","drawPolyButton":"繪製多邊形","drawLineButton":"繪製線段","drawCircleButton":"繪製圓形","drawRectButton":"繪製方形","editButton":"編輯圖形","dragButton":"移動圖形","cutButton":"裁切圖形","deleteButton":"刪除圖形","drawCircleMarkerButton":"畫圓圈標記","snappingButton":"將拖動的標記對齊到其他圖層和頂點","pinningButton":"將共享頂點固定在一起"}}'),_={en:a,de:o,it:s,id:l,ro:h,ru:u,es:c,nl:p,fr:d,pt_br:JSON.parse('{"tooltips":{"placeMarker":"Clique para posicionar o marcador","firstVertex":"Clique para posicionar o primeiro vértice","continueLine":"Clique para continuar desenhando","finishLine":"Clique em qualquer marcador existente para finalizar","finishPoly":"Clique no primeiro ponto para fechar o polígono","finishRect":"Clique para finalizar","startCircle":"Clique para posicionar o centro do círculo","finishCircle":"Clique para fechar o círculo","placeCircleMarker":"Clique para posicionar o marcador circular"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover último vértice"},"buttonTitles":{"drawMarkerButton":"Desenhar um marcador","drawPolyButton":"Desenhar um polígono","drawLineButton":"Desenhar uma polilinha","drawCircleButton":"Desenhar um círculo","drawRectButton":"Desenhar um retângulo","editButton":"Editar camada(s)","dragButton":"Mover camada(s)","cutButton":"Recortar camada(s)","deleteButton":"Remover camada(s)","drawCircleMarkerButton":"Marcador de círculos de desenho","snappingButton":"Marcador arrastado para outras camadas e vértices","pinningButton":"Vértices compartilhados de pinos juntos"}}'),zh:f,zh_tw:g,pl:JSON.parse('{"tooltips":{"placeMarker":"Kliknij, aby ustawić znacznik","firstVertex":"Kliknij, aby ustawić pierwszy punkt","continueLine":"Kliknij, aby kontynuować rysowanie","finishLine":"Kliknij dowolny punkt, aby zakończyć","finishPoly":"Kliknij pierwszy punkt, aby zakończyć","finishRect":"Kliknij, aby zakończyć","startCircle":"Kliknij, aby ustawić środek koła","finishCircle":"Kliknij, aby zakończyć rysowanie koła","placeCircleMarker":"Kliknij, aby ustawić okrągły znacznik"},"actions":{"finish":"Zakończ","cancel":"Anuluj","removeLastVertex":"Usuń ostatni punkt"},"buttonTitles":{"drawMarkerButton":"Narysuj znacznik","drawPolyButton":"Narysuj wielokąt","drawLineButton":"Narysuj ścieżkę","drawCircleButton":"Narysuj koło","drawRectButton":"Narysuj prostokąt","editButton":"Edytuj","dragButton":"Przesuń","cutButton":"Wytnij","deleteButton":"Usuń","drawCircleMarkerButton":"Narysuj okrągły znacznik","snappingButton":"Snap przeciągnięty marker na inne warstwy i wierzchołki","pinningButton":"Sworzeń wspólne wierzchołki razem"}}'),sv:JSON.parse('{"tooltips":{"placeMarker":"Klicka för att placera markör","firstVertex":"Klicka för att placera första hörnet","continueLine":"Klicka för att fortsätta rita","finishLine":"Klicka på en existerande punkt för att slutföra","finishPoly":"Klicka på den första punkten för att slutföra","finishRect":"Klicka för att slutföra","startCircle":"Klicka för att placera cirkelns centrum","finishCircle":"Klicka för att slutföra cirkeln","placeCircleMarker":"Klicka för att placera cirkelmarkör"},"actions":{"finish":"Slutför","cancel":"Avbryt","removeLastVertex":"Ta bort sista hörnet"},"buttonTitles":{"drawMarkerButton":"Rita Markör","drawPolyButton":"Rita Polygoner","drawLineButton":"Rita Linje","drawCircleButton":"Rita Cirkel","drawRectButton":"Rita Rektangel","editButton":"Redigera Lager","dragButton":"Dra Lager","cutButton":"Klipp i Lager","deleteButton":"Ta bort Lager","drawCircleMarkerButton":"Rita Cirkelmarkör","snappingButton":"Snäpp dra markören till andra lager och hörn","pinningButton":"Fäst delade hörn tillsammans"}}'),el:JSON.parse('{"tooltips":{"placeMarker":"Κάντε κλικ για να τοποθετήσετε Δείκτη","firstVertex":"Κάντε κλικ για να τοποθετήσετε το πρώτο σημείο","continueLine":"Κάντε κλικ για να συνεχίσετε να σχεδιάζετε","finishLine":"Κάντε κλικ σε οποιονδήποτε υπάρχον σημείο για να ολοκληρωθεί","finishPoly":"Κάντε κλικ στο πρώτο σημείο για να τελειώσετε","finishRect":"Κάντε κλικ για να τελειώσετε","startCircle":"Κάντε κλικ για να τοποθετήσετε κέντρο Κύκλου","finishCircle":"Κάντε κλικ για να ολοκληρώσετε τον Κύκλο","placeCircleMarker":"Κάντε κλικ για να τοποθετήσετε Κυκλικό Δείκτη"},"actions":{"finish":"Τέλος","cancel":"Ακύρωση","removeLastVertex":"Κατάργηση τελευταίου σημείου"},"buttonTitles":{"drawMarkerButton":"Σχεδίαση Δείκτη","drawPolyButton":"Σχεδίαση Πολυγώνου","drawLineButton":"Σχεδίαση Γραμμής","drawCircleButton":"Σχεδίαση Κύκλου","drawRectButton":"Σχεδίαση Ορθογωνίου","editButton":"Επεξεργασία Επιπέδων","dragButton":"Μεταφορά Επιπέδων","cutButton":"Αποκοπή Επιπέδων","deleteButton":"Κατάργηση Επιπέδων","drawCircleMarkerButton":"Σχεδίαση Κυκλικού Δείκτη","snappingButton":"Προσκόλληση του Δείκτη μεταφοράς σε άλλα Επίπεδα και Κορυφές","pinningButton":"Περικοπή κοινών κορυφών μαζί"}}'),hu:JSON.parse('{"tooltips":{"placeMarker":"Kattintson a jelölő elhelyezéséhez","firstVertex":"Kattintson az első pont elhelyezéséhez","continueLine":"Kattintson a következő pont elhelyezéséhez","finishLine":"A befejezéshez kattintson egy meglévő pontra","finishPoly":"A befejezéshez kattintson az első pontra","finishRect":"Kattintson a befejezéshez","startCircle":"Kattintson a kör középpontjának elhelyezéséhez","finishCircle":"Kattintson a kör befejezéséhez","placeCircleMarker":"Kattintson a körjelölő elhelyezéséhez"},"actions":{"finish":"Befejezés","cancel":"Mégse","removeLastVertex":"Utolsó pont eltávolítása"},"buttonTitles":{"drawMarkerButton":"Jelölő rajzolása","drawPolyButton":"Poligon rajzolása","drawLineButton":"Vonal rajzolása","drawCircleButton":"Kör rajzolása","drawRectButton":"Négyzet rajzolása","editButton":"Elemek szerkesztése","dragButton":"Elemek mozgatása","cutButton":"Elemek vágása","deleteButton":"Elemek törlése","drawCircleMarkerButton":"Kör jelölő rajzolása","snappingButton":"Kapcsolja a jelöltőt másik elemhez vagy ponthoz","pinningButton":"Közös pontok összekötése"}}'),da:JSON.parse('{"tooltips":{"placeMarker":"Tryk for at placere en markør","firstVertex":"Tryk for at placere det første punkt","continueLine":"Tryk for at fortsætte linjen","finishLine":"Tryk på et eksisterende punkt for at afslutte","finishPoly":"Tryk på det første punkt for at afslutte","finishRect":"Tryk for at afslutte","startCircle":"Tryk for at placere cirklens center","finishCircle":"Tryk for at afslutte cirklen","placeCircleMarker":"Tryk for at placere en cirkelmarkør"},"actions":{"finish":"Afslut","cancel":"Afbryd","removeLastVertex":"Fjern sidste punkt"},"buttonTitles":{"drawMarkerButton":"Placer markør","drawPolyButton":"Tegn polygon","drawLineButton":"Tegn linje","drawCircleButton":"Tegn cirkel","drawRectButton":"Tegn firkant","editButton":"Rediger","dragButton":"Træk","cutButton":"Klip","deleteButton":"Fjern","drawCircleMarkerButton":"Tegn cirkelmarkør","snappingButton":"Fastgør trukket markør til andre elementer","pinningButton":"Sammenlæg delte elementer"}}'),no:JSON.parse('{"tooltips":{"placeMarker":"Klikk for å plassere punkt","firstVertex":"Klikk for å plassere første punkt","continueLine":"Klikk for å tegne videre","finishLine":"Klikk på et eksisterende punkt for å fullføre","finishPoly":"Klikk første punkt for å fullføre","finishRect":"Klikk for å fullføre","startCircle":"Klikk for å sette sirkel midtpunkt","finishCircle":"Klikk for å fullføre sirkel","placeCircleMarker":"Klikk for å plassere sirkel"},"actions":{"finish":"Fullfør","cancel":"Kanseller","removeLastVertex":"Fjern forrige punkt"},"buttonTitles":{"drawMarkerButton":"Tegn Punkt","drawPolyButton":"Tegn Flate","drawLineButton":"Tegn Linje","drawCircleButton":"Tegn Sirkel","drawRectButton":"Tegn rektangel","editButton":"Rediger Objekter","dragButton":"Dra Objekter","cutButton":"Kutt Objekter","deleteButton":"Fjern Objekter","drawCircleMarkerButton":"Tegn sirkel-punkt","snappingButton":"Fest dratt punkt til andre objekter og punkt","pinningButton":"Pin delte punkt sammen"}}'),fa:JSON.parse('{"tooltips":{"placeMarker":"کلیک برای جانمایی نشان","firstVertex":"کلیک برای رسم اولین رأس","continueLine":"کلیک برای ادامه رسم","finishLine":"کلیک روی هر نشان موجود برای پایان","finishPoly":"کلیک روی اولین نشان برای پایان","finishRect":"کلیک برای پایان","startCircle":"کلیک برای رسم مرکز دایره","finishCircle":"کلیک برای پایان رسم دایره","placeCircleMarker":"کلیک برای رسم نشان دایره"},"actions":{"finish":"پایان","cancel":"لفو","removeLastVertex":"حذف آخرین رأس"},"buttonTitles":{"drawMarkerButton":"درج نشان","drawPolyButton":"رسم چندضلعی","drawLineButton":"رسم خط","drawCircleButton":"رسم دایره","drawRectButton":"رسم چهارضلعی","editButton":"ویرایش لایه‌ها","dragButton":"جابجایی لایه‌ها","cutButton":"برش لایه‌ها","deleteButton":"حذف لایه‌ها","drawCircleMarkerButton":"رسم نشان دایره","snappingButton":"نشانگر را به لایه‌ها و رئوس دیگر بکشید","pinningButton":"رئوس مشترک را با هم پین کنید","rotateButton":"چرخش لایه"}}'),ua:JSON.parse('{"tooltips":{"placeMarker":"Натисніть, щоб нанести маркер","firstVertex":"Натисніть, щоб нанести першу вершину","continueLine":"Натисніть, щоб продовжити малювати","finishLine":"Натисніть будь-який існуючий маркер для завершення","finishPoly":"Виберіть перший маркер, щоб завершити","finishRect":"Натисніть, щоб завершити","startCircle":"Натисніть, щоб додати центр кола","finishCircle":"Натисніть, щоб завершити коло","placeCircleMarker":"Натисніть, щоб нанести круговий маркер"},"actions":{"finish":"Завершити","cancel":"Відмінити","removeLastVertex":"Видалити попередню вершину"},"buttonTitles":{"drawMarkerButton":"Малювати маркер","drawPolyButton":"Малювати полігон","drawLineButton":"Малювати криву","drawCircleButton":"Малювати коло","drawRectButton":"Малювати прямокутник","editButton":"Редагувати шари","dragButton":"Перенести шари","cutButton":"Вирізати шари","deleteButton":"Видалити шари","drawCircleMarkerButton":"Малювати круговий маркер","snappingButton":"Прив’язати перетягнутий маркер до інших шарів та вершин","pinningButton":"Зв\'язати спільні вершини разом"}}'),tr:JSON.parse('{"tooltips":{"placeMarker":"İşaretçi yerleştirmek için tıklayın","firstVertex":"İlk tepe noktasını yerleştirmek için tıklayın","continueLine":"Çizime devam etmek için tıklayın","finishLine":"Bitirmek için mevcut herhangi bir işaretçiyi tıklayın","finishPoly":"Bitirmek için ilk işaretçiyi tıklayın","finishRect":"Bitirmek için tıklayın","startCircle":"Daire merkezine yerleştirmek için tıklayın","finishCircle":"Daireyi bitirmek için tıklayın","placeCircleMarker":"Daire işaretçisi yerleştirmek için tıklayın"},"actions":{"finish":"Bitir","cancel":"İptal","removeLastVertex":"Son köşeyi kaldır"},"buttonTitles":{"drawMarkerButton":"Çizim İşaretçisi","drawPolyButton":"Çokgenler çiz","drawLineButton":"Çoklu çizgi çiz","drawCircleButton":"Çember çiz","drawRectButton":"Dikdörtgen çiz","editButton":"Katmanları düzenle","dragButton":"Katmanları sürükle","cutButton":"Katmanları kes","deleteButton":"Katmanları kaldır","drawCircleMarkerButton":"Daire işaretçisi çiz","snappingButton":"Sürüklenen işaretçiyi diğer katmanlara ve köşelere yapıştır","pinningButton":"Paylaşılan köşeleri birbirine sabitle"}}'),cz:JSON.parse('{"tooltips":{"placeMarker":"Kliknutím vytvoříte značku","firstVertex":"Kliknutím vytvoříte první objekt","continueLine":"Kliknutím pokračujte v kreslení","finishLine":"Kliknutí na libovolnou existující značku pro dokončení","finishPoly":"Vyberte první bod pro dokončení","finishRect":"Klikněte pro dokončení","startCircle":"Kliknutím přidejte střed kruhu","finishCircle":"Нажмите, чтобы задать радиус","placeCircleMarker":"Kliknutím nastavte poloměr"},"actions":{"finish":"Dokončit","cancel":"Zrušit","removeLastVertex":"Zrušit poslední akci"},"buttonTitles":{"drawMarkerButton":"Přidat značku","drawPolyButton":"Nakreslit polygon","drawLineButton":"Nakreslit křivku","drawCircleButton":"Nakreslit kruh","drawRectButton":"Nakreslit obdélník","editButton":"Upravit vrstvu","dragButton":"Přeneste vrstvu","cutButton":"Vyjmout vrstvu","deleteButton":"Smazat vrstvu","drawCircleMarkerButton":"Přidat kruhovou značku","snappingButton":"Navázat tažnou značku k dalším vrstvám a vrcholům","pinningButton":"Spojit společné body dohromady"}}')};function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const b={_globalEditModeEnabled:!1,enableGlobalEditMode:function(t){this._globalEditModeEnabled=!0,this.Toolbar.toggleButton("editMode",this.globalEditModeEnabled()),L.PM.Utils.findLayers(this.map).forEach((function(e){e.pm.enable(t)})),this.throttledReInitEdit||(this.throttledReInitEdit=L.Util.throttle(this.handleLayerAdditionInGlobalEditMode,100,this)),this._addedLayers={},this.map.on("layeradd",this._layerAdded,this),this.map.on("layeradd",this.throttledReInitEdit,this),this._fireGlobalEditModeToggled(!0)},disableGlobalEditMode:function(){this._globalEditModeEnabled=!1,L.PM.Utils.findLayers(this.map).forEach((function(t){t.pm.disable()})),this.map.off("layeradd",this.throttledReInitEdit,this),this.Toolbar.toggleButton("editMode",this.globalEditModeEnabled()),this._fireGlobalEditModeToggled(!1)},globalEditEnabled:function(){return this.globalEditModeEnabled()},globalEditModeEnabled:function(){return this._globalEditModeEnabled},toggleGlobalEditMode:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.globalOptions;this.globalEditModeEnabled()?this.disableGlobalEditMode():this.enableGlobalEditMode(t)},handleLayerAdditionInGlobalEditMode:function(){var t=this._addedLayers;for(var e in this._addedLayers={},t){var i=t[e];this._isRelevantForEdit(i)&&this.globalEditModeEnabled()&&i.pm.enable(y({},this.globalOptions))}},_layerAdded:function(t){var e=t.layer;this._addedLayers[L.stamp(e)]=e},_isRelevantForEdit:function(t){return t.pm&&!(t instanceof L.LayerGroup)&&(!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore)&&!t._pmTempLayer&&t.pm.options.allowEditing}};const k={_globalDragModeEnabled:!1,enableGlobalDragMode:function(){var t=L.PM.Utils.findLayers(this.map);this._globalDragModeEnabled=!0,this._addedLayersDrag={},t.forEach((function(t){t.pm.enableLayerDrag()})),this.throttledReInitDrag||(this.throttledReInitDrag=L.Util.throttle(this.reinitGlobalDragMode,100,this)),this.map.on("layeradd",this.throttledReInitDrag,this),this.map.on("layeradd",this._layerAddedDrag,this),this.Toolbar.toggleButton("dragMode",this.globalDragModeEnabled()),this._fireGlobalDragModeToggled(!0)},disableGlobalDragMode:function(){var t=L.PM.Utils.findLayers(this.map);this._globalDragModeEnabled=!1,t.forEach((function(t){t.pm.disableLayerDrag()})),this.map.off("layeradd",this.throttledReInitDrag,this),this.Toolbar.toggleButton("dragMode",this.globalDragModeEnabled()),this._fireGlobalDragModeToggled(!1)},globalDragModeEnabled:function(){return!!this._globalDragModeEnabled},toggleGlobalDragMode:function(){this.globalDragModeEnabled()?this.disableGlobalDragMode():this.enableGlobalDragMode()},reinitGlobalDragMode:function(){var t=this._addedLayersDrag;for(var e in this._addedLayersDrag={},t){var i=t[e];this._isRelevantForDrag(i)&&this.globalDragModeEnabled()&&i.pm.enableLayerDrag()}},_layerAddedDrag:function(t){var e=t.layer;this._addedLayersDrag[L.stamp(e)]=e},_isRelevantForDrag:function(t){return t.pm&&!(t instanceof L.LayerGroup)&&(!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore)&&!t._pmTempLayer&&t.pm.options.draggable}};const M={_globalRemovalModeEnabled:!1,enableGlobalRemovalMode:function(){var t=this;this._globalRemovalModeEnabled=!0,this.map.eachLayer((function(e){t._isRelevantForRemoval(e)&&(e.pm.disable(),e.on("click",t.removeLayer,t))})),this.throttledReInitRemoval||(this.throttledReInitRemoval=L.Util.throttle(this.reinitGlobalRemovalMode,100,this)),this.map.on("layeradd",this.throttledReInitRemoval,this),this.Toolbar.toggleButton("removalMode",this.globalRemovalModeEnabled()),this._fireGlobalRemovalModeToggled(!0)},disableGlobalRemovalMode:function(){var t=this;this._globalRemovalModeEnabled=!1,this.map.eachLayer((function(e){e.off("click",t.removeLayer,t)})),this.map.off("layeradd",this.throttledReInitRemoval,this),this.Toolbar.toggleButton("removalMode",this.globalRemovalModeEnabled()),this._fireGlobalRemovalModeToggled(!1)},globalRemovalEnabled:function(){return this.globalRemovalModeEnabled()},globalRemovalModeEnabled:function(){return!!this._globalRemovalModeEnabled},toggleGlobalRemovalMode:function(){this.globalRemovalModeEnabled()?this.disableGlobalRemovalMode():this.enableGlobalRemovalMode()},reinitGlobalRemovalMode:function(t){var e=t.layer;this._isRelevantForRemoval(e)&&this.globalRemovalModeEnabled()&&(this.disableGlobalRemovalMode(),this.enableGlobalRemovalMode())},removeLayer:function(t){var e=t.target;this._isRelevantForRemoval(e)&&!e.pm.dragging()&&(e.removeFrom(this.map.pm._getContainingLayer()),e.remove(),e instanceof L.LayerGroup?(this._fireRemoveLayerGroup(e),this._fireRemoveLayerGroup(this.map,e)):(e.pm._fireRemove(e),e.pm._fireRemove(this.map,e)))},_isRelevantForRemoval:function(t){return t.pm&&!(t instanceof L.LayerGroup)&&(!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore)&&!t._pmTempLayer&&t.pm.options.allowRemoval}};const x={_globalRotateModeEnabled:!1,enableGlobalRotateMode:function(){var t=this;this._globalRotateModeEnabled=!0,L.PM.Utils.findLayers(this.map).filter((function(t){return t instanceof L.Polyline})).forEach((function(e){t._isRelevantForRotate(e)&&e.pm.enableRotate()})),this.throttledReInitRotate||(this.throttledReInitRotate=L.Util.throttle(this._reinitGlobalRotateMode,100,this)),this.map.on("layeradd",this.throttledReInitRotate,this),this.Toolbar.toggleButton("rotateMode",this.globalRotateModeEnabled()),this._fireGlobalRotateModeToggled()},disableGlobalRotateMode:function(){this._globalRotateModeEnabled=!1,L.PM.Utils.findLayers(this.map).filter((function(t){return t instanceof L.Polyline})).forEach((function(t){t.pm.disableRotate()})),this.map.off("layeradd",this.throttledReInitRotate,this),this.Toolbar.toggleButton("rotateMode",this.globalRotateModeEnabled()),this._fireGlobalRotateModeToggled()},globalRotateModeEnabled:function(){return!!this._globalRotateModeEnabled},toggleGlobalRotateMode:function(){this.globalRotateModeEnabled()?this.disableGlobalRotateMode():this.enableGlobalRotateMode()},_reinitGlobalRotateMode:function(t){var e=t.layer;this._isRelevantForRotate(e)&&this.globalRotateModeEnabled()&&(this.disableGlobalRotateMode(),this.enableGlobalRotateMode())},_isRelevantForRotate:function(t){return t.pm&&!(t instanceof L.LayerGroup)&&(!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore)&&!t._pmTempLayer&&t.pm.options.allowRotation}};function w(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?w(Object(i),!0).forEach((function(e){P(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function P(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var E={_fireDrawStart:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Draw",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:drawstart",{shape:this._shape,workingLayer:this._layer},t,e)},_fireDrawEnd:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Draw",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:drawend",{shape:this._shape},t,e)},_fireCreate:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Draw",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._map,"pm:create",{shape:this._shape,marker:t,layer:t},e,i)},_fireCenterPlaced:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Draw",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},i="Draw"===t?this._layer:undefined,n="Draw"!==t?this._layer:undefined;this.__fire(this._layer,"pm:centerplaced",{shape:this._shape,workingLayer:i,layer:n,latlng:this._layer.getLatLng()},t,e)},_fireCut:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Draw",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(t,"pm:cut",{shape:this._shape,layer:e,originalLayer:i},n,r)},_fireEdit:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._layer,e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(t,"pm:edit",{layer:this._layer,shape:this.getShape()},e,i)},_fireEnable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:enable",{layer:this._layer,shape:this.getShape()},t,e)},_fireDisable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:disable",{layer:this._layer,shape:this.getShape()},t,e)},_fireUpdate:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:update",{layer:this._layer,shape:this.getShape()},t,e)},_fireMarkerDragStart:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:markerdragstart",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:e},i,n)},_fireMarkerDrag:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:markerdrag",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:e},i,n)},_fireMarkerDragEnd:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined,n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Edit",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this._layer,"pm:markerdragend",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:e,intersectionReset:i},n,r)},_fireDragStart:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:dragstart",{layer:this._layer,shape:this.getShape()},t,e)},_fireDrag:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._layer,"pm:drag",C(C({},t),{},{shape:this.getShape()}),e,i)},_fireDragEnd:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:dragend",{layer:this._layer,shape:this.getShape()},t,e)},_fireDragEnable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:dragenable",{layer:this._layer,shape:this.getShape()},t,e)},_fireDragDisable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:dragdisable",{layer:this._layer,shape:this.getShape()},t,e)},_fireRemove:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:remove",{layer:e,shape:this.getShape()},i,n)},_fireVertexAdded:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Edit",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this._layer,"pm:vertexadded",{layer:this._layer,workingLayer:this._layer,marker:t,indexPath:e,latlng:i,shape:this.getShape()},n,r)},_fireVertexRemoved:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:vertexremoved",{layer:this._layer,marker:t,indexPath:e,shape:this.getShape()},i,n)},_fireVertexClick:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:vertexclick",{layer:this._layer,markerEvent:t,indexPath:e,shape:this.getShape()},i,n)},_fireIntersect:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._layer,"pm:intersect",{layer:this._layer,intersection:t,shape:this.getShape()},e,i)},_fireLayerReset:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:layerreset",{layer:this._layer,markerEvent:t,indexPath:e,shape:this.getShape()},i,n)},_fireChange:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._layer,"pm:change",{layer:this._layer,latlngs:t,shape:this.getShape()},e,i)},_fireTextChange:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._layer,"pm:textchange",{layer:this._layer,text:t,shape:this.getShape()},e,i)},_fireSnapDrag:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Snapping",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:snapdrag",e,i,n)},_fireSnap:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Snapping",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:snap",e,i,n)},_fireUnsnap:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Snapping",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:unsnap",e,i,n)},_fireRotationEnable:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Rotation",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:rotateenable",{layer:this._layer,helpLayer:this._rotatePoly,shape:this.getShape()},i,n)},_fireRotationDisable:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Rotation",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(t,"pm:rotatedisable",{layer:this._layer,shape:this.getShape()},e,i)},_fireRotationStart:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Rotation",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:rotatestart",{layer:this._rotationLayer,helpLayer:this._layer,startAngle:this._startAngle,originLatLngs:e},i,n)},_fireRotation:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:this._rotationLayer,r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"Rotation",a=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};this.__fire(t,"pm:rotate",{layer:n,helpLayer:this._layer,startAngle:this._startAngle,angle:n.pm.getAngle(),angleDiff:e,oldLatLngs:i,newLatLngs:n.getLatLngs()},r,a)},_fireRotationEnd:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Rotation",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(t,"pm:rotateend",{layer:this._rotationLayer,helpLayer:this._layer,startAngle:e,angle:this._rotationLayer.pm.getAngle(),originLatLngs:i,newLatLngs:this._rotationLayer.getLatLngs()},n,r)},_fireActionClick:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Toolbar",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this._map,"pm:actionclick",{text:t.text,action:t,btnName:e,button:i},n,r)},_fireButtonClick:function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Toolbar",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._map,"pm:buttonclick",{btnName:t,button:e},i,n)},_fireLangChange:function(t,e,i,n){var r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"Global",a=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};this.__fire(this.map,"pm:langchange",{oldLang:t,activeLang:e,fallback:i,translations:n},r,a)},_fireGlobalDragModeToggled:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Global",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this.map,"pm:globaldragmodetoggled",{enabled:t,map:this.map},e,i)},_fireGlobalEditModeToggled:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Global",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this.map,"pm:globaleditmodetoggled",{enabled:t,map:this.map},e,i)},_fireGlobalRemovalModeToggled:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Global",i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this.map,"pm:globalremovalmodetoggled",{enabled:t,map:this.map},e,i)},_fireGlobalCutModeToggled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Global",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:globalcutmodetoggled",{enabled:!!this._enabled,map:this._map},t,e)},_fireGlobalDrawModeToggled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Global",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:globaldrawmodetoggled",{enabled:this._enabled,shape:this._shape,map:this._map},t,e)},_fireGlobalRotateModeToggled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Global",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this.map,"pm:globalrotatemodetoggled",{enabled:this.globalRotateModeEnabled(),map:this.map},t,e)},_fireRemoveLayerGroup:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:remove",{layer:e,shape:undefined},i,n)},_fireKeyeventEvent:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Global",r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this.map,"pm:keyevent",{event:t,eventType:e,focusOn:i},n,r)},__fire:function(t,e,i,n){var a=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};i=r()(i,a,{source:n}),L.PM.Utils._fireEvent(t,e,i)}};const S=E;const O={_lastEvents:{keydown:undefined,keyup:undefined,current:undefined},_initKeyListener:function(t){this.map=t,L.DomEvent.on(document,"keydown keyup",this._onKeyListener,this),L.DomEvent.on(window,"blur",this._onBlur,this)},_onKeyListener:function(t){var e="document";this.map.getContainer().contains(t.target)&&(e="map");var i={event:t,eventType:t.type,focusOn:e};this._lastEvents[t.type]=i,this._lastEvents.current=i,this.map.pm._fireKeyeventEvent(t,t.type,e)},_onBlur:function(t){t.altKey=!1;var e={event:t,eventType:t.type,focusOn:"document"};this._lastEvents[t.type]=e,this._lastEvents.current=e},getLastKeyEvent:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"current";return this._lastEvents[t]},isShiftKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.shiftKey},isAltKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.altKey},isCtrlKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.ctrlKey},isMetaKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.metaKey},getPressedKey:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.key}};var D=i(7361),R=i.n(D),B=i(8721),T=i.n(B);function I(t){var e=L.PM.activeLang;return T()(_,e)||(e="en"),R()(_[e],t)}function j(t){return!function e(t){return t.filter((function(t){return![null,"",undefined].includes(t)})).reduce((function(t,i){return t.concat(Array.isArray(i)?e(i):i)}),[])}(t).length}function A(t){return t.reduce((function(t,e){return 0!==e.length&&t.push(Array.isArray(e)?A(e):e),t}),[])}function G(t,e,i){for(var n,r,a,o=6378137,s=6356752.3142,l=1/298.257223563,h=t.lng,u=t.lat,c=i,p=Math.PI,d=e*p/180,f=Math.sin(d),g=Math.cos(d),_=(1-l)*Math.tan(u*p/180),m=1/Math.sqrt(1+_*_),y=_*m,v=Math.atan2(_,g),b=m*f,k=1-b*b,M=k*(o*o-s*s)/(s*s),x=1+M/16384*(4096+M*(M*(320-175*M)-768)),w=M/1024*(256+M*(M*(74-47*M)-128)),C=c/(s*x),P=2*Math.PI;Math.abs(C-P)>1e-12;){n=Math.cos(2*v+C),P=C,C=c/(s*x)+w*(r=Math.sin(C))*(n+w/4*((a=Math.cos(C))*(2*n*n-1)-w/6*n*(4*r*r-3)*(4*n*n-3)))}var E=y*r-m*a*g,S=Math.atan2(y*a+m*r*g,(1-l)*Math.sqrt(b*b+E*E)),O=l/16*k*(4+l*(4-3*k)),D=h+180*(Math.atan2(r*f,m*a-y*r*g)-(1-O)*l*b*(C+O*r*(n+O*a*(2*n*n-1))))/p,R=180*S/p;return L.latLng(D,R)}function N(t,e,i,n){for(var r,a,o=!(arguments.length>4&&arguments[4]!==undefined)||arguments[4],s=[],l=0;l<i;l+=1){if(o)r=G(t,360*l/i+n,e),a=L.latLng(r.lng,r.lat);else{var h=t.lat+Math.cos(2*l*Math.PI/i)*e,u=t.lng+Math.sin(2*l*Math.PI/i)*e;a=L.latLng(h,u)}s.push(a)}return s}function z(t,e,i,n){var r=function(t,e,i){var n=t.latLngToContainerPoint(e),r=t.latLngToContainerPoint(i),a=180*Math.atan2(r.y-n.y,r.x-n.x)/Math.PI+90;return a+(a<0?360:0)}(t,e,i);return function(t,e,i){e=(e+360)%360;var n=Math.PI/180,r=180/Math.PI,a=6378137,o=t.lng*n,s=t.lat*n,l=e*n,h=Math.sin(s),u=Math.cos(s),c=Math.cos(i/a),p=Math.sin(i/a),d=Math.asin(h*c+u*p*Math.cos(l)),f=o+Math.atan2(Math.sin(l)*p*u,c-h*Math.sin(d));return f=(f*=r)>180?f-360:f<-180?f+360:f,L.latLng([d*r,f])}(e,r,n)}function U(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t.getLatLngs();return t instanceof L.Polygon?L.polygon(e).getLatLngs():L.polyline(e).getLatLngs()}function F(t,e){var i,n;if(null!==(i=e.options.crs)&&void 0!==i&&null!==(n=i.projection)&&void 0!==n&&n.MAX_LATITUDE){var r,a,o=null===(r=e.options.crs)||void 0===r||null===(a=r.projection)||void 0===a?void 0:a.MAX_LATITUDE;t.lat=Math.max(Math.min(o,t.lat),-o)}return t}function V(t){return t.options.renderer||t._map&&(t._map._getPaneRenderer(t.options.pane)||t._map.options.renderer||t._map._renderer)||t._renderer}const K=L.Class.extend({includes:[b,k,M,x,S],initialize:function(t){this.map=t,this.Draw=new L.PM.Draw(t),this.Toolbar=new L.PM.Toolbar(t),this.Keyboard=O,this.globalOptions={snappable:!0,layerGroup:undefined,snappingOrder:["Marker","CircleMarker","Circle","Line","Polygon","Rectangle"],panes:{vertexPane:"markerPane",layerPane:"overlayPane",markerPane:"markerPane"},draggable:!0},this.Keyboard._initKeyListener(t)},setLang:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"en",e=arguments.length>1?arguments[1]:undefined,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"en",n=L.PM.activeLang;e&&(_[t]=r()(_[i],e)),L.PM.activeLang=t,this.map.pm.Toolbar.reinit(),this._fireLangChange(n,t,i,_[t])},addControls:function(t){this.Toolbar.addControls(t)},removeControls:function(){this.Toolbar.removeControls()},toggleControls:function(){this.Toolbar.toggleControls()},controlsVisible:function(){return this.Toolbar.isVisible},enableDraw:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Polygon",e=arguments.length>1?arguments[1]:undefined;"Poly"===t&&(t="Polygon"),this.Draw.enable(t,e)},disableDraw:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Polygon";"Poly"===t&&(t="Polygon"),this.Draw.disable(t)},setPathOptions:function(t){var e=this,i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n=i.ignoreShapes||[],r=i.merge||!1;this.map.pm.Draw.shapes.forEach((function(i){-1===n.indexOf(i)&&e.map.pm.Draw[i].setPathOptions(t,r)}))},getGlobalOptions:function(){return this.globalOptions},setGlobalOptions:function(t){var e=this,i=r()(this.globalOptions,t),n=!1;this.map.pm.Draw.CircleMarker.enabled()&&this.map.pm.Draw.CircleMarker.options.editable!==i.editable&&(this.map.pm.Draw.CircleMarker.disable(),n=!0),this.map.pm.Draw.shapes.forEach((function(t){e.map.pm.Draw[t].setOptions(i)})),n&&this.map.pm.Draw.CircleMarker.enable(),L.PM.Utils.findLayers(this.map).forEach((function(t){t.pm.setOptions(i)})),this.applyGlobalOptions(),this.globalOptions=i},applyGlobalOptions:function(){L.PM.Utils.findLayers(this.map).forEach((function(t){t.pm.enabled()&&t.pm.applyOptions()}))},globalDrawModeEnabled:function(){return!!this.Draw.getActiveShape()},globalCutModeEnabled:function(){return!!this.Draw.Cut.enabled()},enableGlobalCutMode:function(t){return this.Draw.Cut.enable(t)},toggleGlobalCutMode:function(t){return this.Draw.Cut.toggle(t)},disableGlobalCutMode:function(){return this.Draw.Cut.disable()},getGeomanLayers:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0],e=L.PM.Utils.findLayers(this.map);if(!t)return e;var i=L.featureGroup();return i._pmTempLayer=!0,e.forEach((function(t){i.addLayer(t)})),i},getGeomanDrawLayers:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0],e=L.PM.Utils.findLayers(this.map).filter((function(t){return!0===t._drawnByGeoman}));if(!t)return e;var i=L.featureGroup();return i._pmTempLayer=!0,e.forEach((function(t){i.addLayer(t)})),i},_getContainingLayer:function(){return this.globalOptions.layerGroup&&this.globalOptions.layerGroup instanceof L.LayerGroup?this.globalOptions.layerGroup:this.map},_isCRSSimple:function(){return this.map.options.crs===L.CRS.Simple},_touchEventCounter:0,_addTouchEvents:function(t){0===this._touchEventCounter&&(L.DomEvent.on(t,"touchmove",this._canvasTouchMove,this),L.DomEvent.on(t,"touchstart touchend touchcancel",this._canvasTouchClick,this)),this._touchEventCounter+=1},_removeTouchEvents:function(t){1===this._touchEventCounter&&(L.DomEvent.off(t,"touchmove",this._canvasTouchMove,this),L.DomEvent.off(t,"touchstart touchend touchcancel",this._canvasTouchClick,this)),this._touchEventCounter=this._touchEventCounter<=1?0:this._touchEventCounter-1},_canvasTouchMove:function(t){V(this.map)._onMouseMove(this._createMouseEvent("mousemove",t))},_canvasTouchClick:function(t){var e="";"touchstart"===t.type||"pointerdown"===t.type?e="mousedown":"touchend"===t.type||"pointerup"===t.type?e="mouseup":"touchcancel"!==t.type&&"pointercancel"!==t.type||(e="mouseup"),e&&V(this.map)._onClick(this._createMouseEvent(e,t))},_createMouseEvent:function(t,e){var i,n=e.touches[0]||e.changedTouches[0];try{i=new MouseEvent(t,{bubbles:e.bubbles,cancelable:e.cancelable,view:e.view,detail:n.detail,screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey,button:e.button,relatedTarget:e.relatedTarget})}catch(r){(i=document.createEvent("MouseEvents")).initMouseEvent(t,e.bubbles,e.cancelable,e.view,n.detail,n.screenX,n.screenY,n.clientX,n.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}return i}});function H(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function q(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?H(Object(i),!0).forEach((function(e){J(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function J(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const Y=L.Control.extend({includes:[S],options:{position:"topleft"},initialize:function(t){this._button=q(q({},this.options),t)},onAdd:function(t){return this._map=t,this._map.pm.Toolbar.options.oneBlock?this._container=this._map.pm.Toolbar._createContainer(this.options.position):"edit"===this._button.tool?this._container=this._map.pm.Toolbar.editContainer:"options"===this._button.tool?this._container=this._map.pm.Toolbar.optionsContainer:"custom"===this._button.tool?this._container=this._map.pm.Toolbar.customContainer:this._container=this._map.pm.Toolbar.drawContainer,this.buttonsDomNode=this._makeButton(this._button),this._container.appendChild(this.buttonsDomNode),this._container},onRemove:function(){return this.buttonsDomNode.remove(),this._container},getText:function(){return this._button.text},getIconUrl:function(){return this._button.iconUrl},destroy:function(){this._button={},this._update()},toggle:function(t){return this._button.toggleStatus="boolean"==typeof t?t:!this._button.toggleStatus,this._applyStyleClasses(),this._button.toggleStatus},toggled:function(){return this._button.toggleStatus},onCreate:function(){this.toggle(!1)},disable:function(){this.toggle(!1),this._button.disabled=!0,this._updateDisabled()},enable:function(){this._button.disabled=!1,this._updateDisabled()},_triggerClick:function(t){t&&t.preventDefault(),this._button.disabled||(this._button.onClick(t,{button:this,event:t}),this._clicked(t),this._button.afterClick(t,{button:this,event:t}))},_makeButton:function(t){var e=this,i=this.options.position.indexOf("right")>-1?"pos-right":"",n=L.DomUtil.create("div","button-container  ".concat(i),this._container);t.title&&n.setAttribute("title",t.title);var r=L.DomUtil.create("a","leaflet-buttons-control-button",n);r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.href="#";var a=L.DomUtil.create("div","leaflet-pm-actions-container ".concat(i),n),o=t.actions,s={cancel:{text:I("actions.cancel"),onClick:function(){this._triggerClick()}},finishMode:{text:I("actions.finish"),onClick:function(){this._triggerClick()}},removeLastVertex:{text:I("actions.removeLastVertex"),onClick:function(){this._map.pm.Draw[t.jsClass]._removeLastVertex()}},finish:{text:I("actions.finish"),onClick:function(e){this._map.pm.Draw[t.jsClass]._finishShape(e)}}};o.forEach((function(n){var r,o="string"==typeof n?n:n.name;if(s[o])r=s[o];else{if(!n.text)return;r=n}var l=L.DomUtil.create("a","leaflet-pm-action ".concat(i," action-").concat(o),a);if(l.setAttribute("role","button"),l.setAttribute("tabindex","0"),l.href="#",l.innerHTML=r.text,L.DomEvent.disableClickPropagation(l),L.DomEvent.on(l,"click",L.DomEvent.stop),!t.disabled&&r.onClick){L.DomEvent.addListener(l,"click",(function(i){i.preventDefault();var n="",a=e._map.pm.Toolbar.buttons;for(var o in a)if(a[o]._button===t){n=o;break}e._fireActionClick(r,n,t)}),e),L.DomEvent.addListener(l,"click",r.onClick,e)}})),t.toggleStatus&&L.DomUtil.addClass(n,"active");var l=L.DomUtil.create("div","control-icon",r);return t.iconUrl&&l.setAttribute("src",t.iconUrl),t.className&&L.DomUtil.addClass(l,t.className),L.DomEvent.disableClickPropagation(r),L.DomEvent.on(r,"click",L.DomEvent.stop),t.disabled||(L.DomEvent.addListener(r,"click",this._onBtnClick,this),L.DomEvent.addListener(r,"click",this._triggerClick,this)),t.disabled&&(L.DomUtil.addClass(r,"pm-disabled"),r.setAttribute("aria-disabled","true")),n},_applyStyleClasses:function(){this._container&&(this._button.toggleStatus&&!1!==this._button.cssToggle?(L.DomUtil.addClass(this.buttonsDomNode,"active"),L.DomUtil.addClass(this._container,"activeChild")):(L.DomUtil.removeClass(this.buttonsDomNode,"active"),L.DomUtil.removeClass(this._container,"activeChild")))},_onBtnClick:function(){this._button.disableOtherButtons&&this._map.pm.Toolbar.triggerClickOnToggledButtons(this);var t="",e=this._map.pm.Toolbar.buttons;for(var i in e)if(e[i]._button===this._button){t=i;break}this._fireButtonClick(t,this._button)},_clicked:function(){this._button.doToggle&&this.toggle()},_updateDisabled:function(){if(this._container){var t="pm-disabled",e=this.buttonsDomNode.children[0];this._button.disabled?(L.DomUtil.addClass(e,t),e.setAttribute("aria-disabled","true"),L.DomEvent.off(e,"click",this._triggerClick,this),L.DomEvent.off(e,"click",this._onBtnClick,this)):(L.DomUtil.removeClass(e,t),e.setAttribute("aria-disabled","false"),L.DomEvent.on(e,"click",this._triggerClick,this),L.DomEvent.on(e,"click",this._onBtnClick,this))}}});function X(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Z(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?X(Object(i),!0).forEach((function(e){$(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):X(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function $(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}L.Control.PMButton=Y;const Q=L.Class.extend({options:{drawMarker:!0,drawRectangle:!0,drawPolyline:!0,drawPolygon:!0,drawCircle:!0,drawCircleMarker:!0,drawText:!0,editMode:!0,dragMode:!0,cutPolygon:!0,removalMode:!0,rotateMode:!0,snappingOption:!0,drawControls:!0,editControls:!0,optionsControls:!0,customControls:!0,oneBlock:!1,position:"topleft",positions:{draw:"",edit:"",options:"",custom:""}},customButtons:[],initialize:function(t){this.init(t)},reinit:function(){var t=this.isVisible;this.removeControls(),this._defineButtons(),t&&this.addControls()},init:function(t){this.map=t,this.buttons={},this.isVisible=!1,this.drawContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"),this.editContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"),this.optionsContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control"),this.customContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control"),this._defineButtons()},_createContainer:function(t){var e="".concat(t,"Container");return this[e]||(this[e]=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-".concat(t," leaflet-bar leaflet-control"))),this[e]},getButtons:function(){return this.buttons},addControls:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.options;"undefined"!=typeof t.editPolygon&&(t.editMode=t.editPolygon),"undefined"!=typeof t.deleteLayer&&(t.removalMode=t.deleteLayer),L.Util.setOptions(this,t),this.applyIconStyle(),this.isVisible=!0,this._showHideButtons()},applyIconStyle:function(){var t=this.getButtons(),e={geomanIcons:{drawMarker:"control-icon leaflet-pm-icon-marker",drawPolyline:"control-icon leaflet-pm-icon-polyline",drawRectangle:"control-icon leaflet-pm-icon-rectangle",drawPolygon:"control-icon leaflet-pm-icon-polygon",drawCircle:"control-icon leaflet-pm-icon-circle",drawCircleMarker:"control-icon leaflet-pm-icon-circle-marker",editMode:"control-icon leaflet-pm-icon-edit",dragMode:"control-icon leaflet-pm-icon-drag",cutPolygon:"control-icon leaflet-pm-icon-cut",removalMode:"control-icon leaflet-pm-icon-delete",drawText:"control-icon leaflet-pm-icon-text"}};for(var i in t){var n=t[i];L.Util.setOptions(n,{className:e.geomanIcons[i]})}},removeControls:function(){var t=this.getButtons();for(var e in t)t[e].remove();this.isVisible=!1},toggleControls:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.options;this.isVisible?this.removeControls():this.addControls(t)},_addButton:function(t,e){return this.buttons[t]=e,this.options[t]=this.options[t]||!1,this.buttons[t]},triggerClickOnToggledButtons:function(t){var e=["snappingOption"];for(var i in this.buttons)!e.includes(i)&&this.buttons[i]!==t&&this.buttons[i].toggled()&&this.buttons[i]._triggerClick()},toggleButton:function(t,e){var i=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2];return"editPolygon"===t&&(t="editMode"),"deleteLayer"===t&&(t="removalMode"),i&&this.triggerClickOnToggledButtons(this.buttons[t]),!!this.buttons[t]&&this.buttons[t].toggle(e)},_defineButtons:function(){var t=this,e={className:"control-icon leaflet-pm-icon-marker",title:I("buttonTitles.drawMarkerButton"),jsClass:"Marker",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},i={title:I("buttonTitles.drawPolyButton"),className:"control-icon leaflet-pm-icon-polygon",jsClass:"Polygon",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["finish","removeLastVertex","cancel"]},n={className:"control-icon leaflet-pm-icon-polyline",title:I("buttonTitles.drawLineButton"),jsClass:"Line",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["finish","removeLastVertex","cancel"]},r={title:I("buttonTitles.drawCircleButton"),className:"control-icon leaflet-pm-icon-circle",jsClass:"Circle",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},a={title:I("buttonTitles.drawCircleMarkerButton"),className:"control-icon leaflet-pm-icon-circle-marker",jsClass:"CircleMarker",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},o={title:I("buttonTitles.drawRectButton"),className:"control-icon leaflet-pm-icon-rectangle",jsClass:"Rectangle",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},s={title:I("buttonTitles.editButton"),className:"control-icon leaflet-pm-icon-edit",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalEditMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},l={title:I("buttonTitles.dragButton"),className:"control-icon leaflet-pm-icon-drag",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalDragMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},h={title:I("buttonTitles.cutButton"),className:"control-icon leaflet-pm-icon-cut",jsClass:"Cut",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle({snappable:!0,cursorMarker:!0,allowSelfIntersection:!1})},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finish","removeLastVertex","cancel"]},u={title:I("buttonTitles.deleteButton"),className:"control-icon leaflet-pm-icon-delete",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalRemovalMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},c={title:I("buttonTitles.rotateButton"),className:"control-icon leaflet-pm-icon-rotate",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalRotateMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},p={className:"control-icon leaflet-pm-icon-text",title:I("buttonTitles.drawTextButton"),jsClass:"Text",onClick:function(){},afterClick:function(e,i){t.map.pm.Draw[i.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]};this._addButton("drawMarker",new L.Control.PMButton(e)),this._addButton("drawPolyline",new L.Control.PMButton(n)),this._addButton("drawRectangle",new L.Control.PMButton(o)),this._addButton("drawPolygon",new L.Control.PMButton(i)),this._addButton("drawCircle",new L.Control.PMButton(r)),this._addButton("drawCircleMarker",new L.Control.PMButton(a)),this._addButton("drawText",new L.Control.PMButton(p)),this._addButton("editMode",new L.Control.PMButton(s)),this._addButton("dragMode",new L.Control.PMButton(l)),this._addButton("cutPolygon",new L.Control.PMButton(h)),this._addButton("removalMode",new L.Control.PMButton(u)),this._addButton("rotateMode",new L.Control.PMButton(c))},_showHideButtons:function(){if(this.isVisible){this.removeControls(),this.isVisible=!0;var t=this.getButtons(),e=[];for(var i in!1===this.options.drawControls&&(e=e.concat(Object.keys(t).filter((function(e){return!t[e]._button.tool})))),!1===this.options.editControls&&(e=e.concat(Object.keys(t).filter((function(e){return"edit"===t[e]._button.tool})))),!1===this.options.optionsControls&&(e=e.concat(Object.keys(t).filter((function(e){return"options"===t[e]._button.tool})))),!1===this.options.customControls&&(e=e.concat(Object.keys(t).filter((function(e){return"custom"===t[e]._button.tool})))),t)if(this.options[i]&&-1===e.indexOf(i)){var n=t[i]._button.tool;n||(n="draw"),t[i].setPosition(this._getBtnPosition(n)),t[i].addTo(this.map)}}},_getBtnPosition:function(t){return this.options.positions&&this.options.positions[t]?this.options.positions[t]:this.options.position},setBlockPosition:function(t,e){this.options.positions[t]=e,this._showHideButtons(),this.changeControlOrder()},getBlockPositions:function(){return this.options.positions},copyDrawControl:function(t,e){if(!e)throw new TypeError("Button has no name");"object"!==W(e)&&(e={name:e});var i=this._btnNameMapping(t);if(!e.name)throw new TypeError("Button has no name");if(this.buttons[e.name])throw new TypeError("Button with this name already exists");var n=this.map.pm.Draw.createNewDrawInstance(e.name,i);return e=Z(Z({},this.buttons[i]._button),e),{drawInstance:n,control:this.createCustomControl(e)}},createCustomControl:function(t){if(!t.name)throw new TypeError("Button has no name");if(this.buttons[t.name])throw new TypeError("Button with this name already exists");t.onClick||(t.onClick=function(){}),t.afterClick||(t.afterClick=function(){}),!1!==t.toggle&&(t.toggle=!0),t.block&&(t.block=t.block.toLowerCase()),t.block&&"draw"!==t.block||(t.block=""),t.className?-1===t.className.indexOf("control-icon")&&(t.className="control-icon ".concat(t.className)):t.className="control-icon";var e={tool:t.block,className:t.className,title:t.title||"",jsClass:t.name,onClick:t.onClick,afterClick:t.afterClick,doToggle:t.toggle,toggleStatus:!1,disableOtherButtons:!0,cssToggle:t.toggle,position:this.options.position,actions:t.actions||[],disabled:!!t.disabled};!1!==this.options[t.name]&&(this.options[t.name]=!0);var i=this._addButton(t.name,new L.Control.PMButton(e));return this.changeControlOrder(),i},changeControlOrder:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],e=this._shapeMapping(),i=[];t.forEach((function(t){e[t]?i.push(e[t]):i.push(t)}));var n=this.getButtons(),r={};i.forEach((function(t){n[t]&&(r[t]=n[t])}));var a=Object.keys(n).filter((function(t){return!n[t]._button.tool}));a.forEach((function(t){-1===i.indexOf(t)&&(r[t]=n[t])}));var o=Object.keys(n).filter((function(t){return"edit"===n[t]._button.tool}));o.forEach((function(t){-1===i.indexOf(t)&&(r[t]=n[t])}));var s=Object.keys(n).filter((function(t){return"options"===n[t]._button.tool}));s.forEach((function(t){-1===i.indexOf(t)&&(r[t]=n[t])}));var l=Object.keys(n).filter((function(t){return"custom"===n[t]._button.tool}));l.forEach((function(t){-1===i.indexOf(t)&&(r[t]=n[t])})),Object.keys(n).forEach((function(t){-1===i.indexOf(t)&&(r[t]=n[t])})),this.map.pm.Toolbar.buttons=r,this._showHideButtons()},getControlOrder:function(){var t=this.getButtons(),e=[];for(var i in t)e.push(i);return e},changeActionsOfControl:function(t,e){var i=this._btnNameMapping(t);if(!i)throw new TypeError("No name passed");if(!e)throw new TypeError("No actions passed");if(!this.buttons[i])throw new TypeError("Button with this name not exists");this.buttons[i]._button.actions=e,this.changeControlOrder()},setButtonDisabled:function(t,e){var i=this._btnNameMapping(t);e?this.buttons[i].disable():this.buttons[i].enable()},_shapeMapping:function(){return{Marker:"drawMarker",Circle:"drawCircle",Polygon:"drawPolygon",Rectangle:"drawRectangle",Polyline:"drawPolyline",Line:"drawPolyline",CircleMarker:"drawCircleMarker",Edit:"editMode",Drag:"dragMode",Cut:"cutPolygon",Removal:"removalMode",Rotate:"rotateMode",Text:"drawText"}},_btnNameMapping:function(t){var e=this._shapeMapping();return e[t]?e[t]:t}});function tt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function et(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(i),!0).forEach((function(e){it(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):tt(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function it(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var nt={_initSnappableMarkers:function(){this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,this._assignEvents(this._markers),this._layer.off("pm:dragstart",this._unsnap,this),this._layer.on("pm:dragstart",this._unsnap,this)},_disableSnapping:function(){this._layer.off("pm:dragstart",this._unsnap,this)},_assignEvents:function(t){var e=this;t.forEach((function(t){Array.isArray(t)?e._assignEvents(t):(t.off("drag",e._handleSnapping,e),t.on("drag",e._handleSnapping,e),t.off("dragend",e._cleanupSnapping,e),t.on("dragend",e._cleanupSnapping,e))}))},_cleanupSnapping:function(){delete this._snapList,this.throttledList&&(this._map.off("layeradd",this.throttledList,this),this.throttledList=undefined),this._map.off("pm:remove",this._handleSnapLayerRemoval,this),this.debugIndicatorLines&&this.debugIndicatorLines.forEach((function(t){t.remove()}))},_handleThrottleSnapping:function(){this.throttledList&&this._createSnapList()},_handleSnapping:function(t){var e=this,i=t.target;if(i._snapped=!1,this.throttledList||(this.throttledList=L.Util.throttle(this._handleThrottleSnapping,100,this)),this._map.pm.Keyboard.isAltKeyPressed())return!1;if(this._snapList===undefined&&(this._createSnapList(),this._map.off("layeradd",this.throttledList,this),this._map.on("layeradd",this.throttledList,this)),this._snapList.length<=0)return!1;var n=this._calcClosestLayer(i.getLatLng(),this._snapList);if(0===Object.keys(n).length)return!1;var r,a=n.layer instanceof L.Marker||n.layer instanceof L.CircleMarker||!this.options.snapSegment;r=a?n.latlng:this._checkPrioritiySnapping(n);var o=this.options.snapDistance,s={marker:i,shape:this._shape,snapLatLng:r,segment:n.segment,layer:this._layer,workingLayer:this._layer,layerInteractedWith:n.layer,distance:n.distance};if(this._fireSnapDrag(s.marker,s),this._fireSnapDrag(this._layer,s),n.distance<o){i._orgLatLng=i.getLatLng(),i.setLatLng(r),i._snapped=!0,i._snapInfo=s;var l=this._snapLatLng||{},h=r||{};l.lat===h.lat&&l.lng===h.lng||(e._snapLatLng=r,e._fireSnap(i,s),e._fireSnap(e._layer,s))}else this._snapLatLng&&(this._unsnap(s),i._snapped=!1,this._fireUnsnap(s.marker,s),this._fireUnsnap(this._layer,s));return!0},_createSnapList:function(){var t=this,e=[],i=[],n=this._map;n.off("pm:remove",this._handleSnapLayerRemoval,this),n.on("pm:remove",this._handleSnapLayerRemoval,this),n.eachLayer((function(t){if((t instanceof L.Polyline||t instanceof L.Marker||t instanceof L.CircleMarker||t instanceof L.ImageOverlay)&&!0!==t.options.snapIgnore){if(t.options.snapIgnore===undefined&&(!L.PM.optIn&&!0===t.options.pmIgnore||L.PM.optIn&&!1!==t.options.pmIgnore))return;(t instanceof L.Circle||t instanceof L.CircleMarker)&&t.pm&&t.pm._hiddenPolyCircle?e.push(t.pm._hiddenPolyCircle):t instanceof L.ImageOverlay&&(t=L.rectangle(t.getBounds())),e.push(t);var n=L.polyline([],{color:"red",pmIgnore:!0});n._pmTempLayer=!0,i.push(n),(t instanceof L.Circle||t instanceof L.CircleMarker)&&i.push(n)}})),e=(e=(e=e.filter((function(e){return t._layer!==e}))).filter((function(t){return t._latlng||t._latlngs&&!j(t._latlngs)}))).filter((function(t){return!t._pmTempLayer})),this._otherSnapLayers?(this._otherSnapLayers.forEach((function(){var t=L.polyline([],{color:"red",pmIgnore:!0});t._pmTempLayer=!0,i.push(t)})),this._snapList=e.concat(this._otherSnapLayers)):this._snapList=e,this.debugIndicatorLines=i},_handleSnapLayerRemoval:function(t){var e=t.layer,i=this._snapList.findIndex((function(t){return t._leaflet_id===e._leaflet_id}));this._snapList.splice(i,1)},_calcClosestLayer:function(t,e){var i=this,n=[],r={};return e.forEach((function(e,a){if(!e._parentCopy||e._parentCopy!==i._layer){var o=i._calcLayerDistances(t,e);i.debugIndicatorLines[a]&&i.debugIndicatorLines[a].setLatLngs([t,o.latlng]),(r.distance===undefined||o.distance<=r.distance)&&(o.distance<r.distance&&(n=[]),(r=o).layer=e,n.push(r))}})),this._getClosestLayerByPriority(n)},_calcLayerDistances:function(t,e){var i,n,r,a=this,o=this._map,s=e instanceof L.Marker||e instanceof L.CircleMarker,l=e instanceof L.Polygon,h=t,u=s?e.getLatLng():e.getLatLngs();if(s)return{latlng:et({},u),distance:this._getDistance(o,u,h)};return function c(t){t.forEach((function(e,s){if(Array.isArray(e))c(e);else if(a.options.snapSegment){var u,p=e;u=l?s+1===t.length?0:s+1:s+1===t.length?undefined:s+1;var d=t[u];if(d){var f=a._getDistanceToSegment(o,h,p,d);(n===undefined||f<n)&&(n=f,r=[p,d])}}else{var g=a._getDistance(o,h,e);(n===undefined||g<n)&&(n=g,i=e)}}))}(u),this.options.snapSegment?{latlng:et({},this._getClosestPointOnSegment(o,t,r[0],r[1])),segment:r,distance:n}:{latlng:i,distance:n}},_getClosestLayerByPriority:function(t){t=t.sort((function(t,e){return t._leaflet_id-e._leaflet_id}));var e=this._map.pm.globalOptions.snappingOrder||[],i=0,n={};return e.concat(["Marker","CircleMarker","Circle","Line","Polygon","Rectangle"]).forEach((function(t){n[t]||(i+=1,n[t]=i)})),t.sort(function(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"asc";if(!e||0===Object.keys(e).length)return function(t,e){return t-e};for(var n,r=Object.keys(e),a=r.length-1,o={};a>=0;)n=r[a],o[n.toLowerCase()]=e[n],a-=1;function s(t){return t instanceof L.Marker?"Marker":t instanceof L.Circle?"Circle":t instanceof L.CircleMarker?"CircleMarker":t instanceof L.Rectangle?"Rectangle":t instanceof L.Polygon?"Polygon":t instanceof L.Polyline?"Line":undefined}return function(e,n){var r,a;if("instanceofShape"===t){if(r=s(e.layer).toLowerCase(),a=s(n.layer).toLowerCase(),!r||!a)return 0}else{if(!e.hasOwnProperty(t)||!n.hasOwnProperty(t))return 0;r=e[t].toLowerCase(),a=n[t].toLowerCase()}var l=r in o?o[r]:Number.MAX_SAFE_INTEGER,h=a in o?o[a]:Number.MAX_SAFE_INTEGER,u=0;return l<h?u=-1:l>h&&(u=1),"desc"===i?-1*u:u}}("instanceofShape",n)),t[0]||{}},_checkPrioritiySnapping:function(t){var e=this._map,i=t.segment[0],n=t.segment[1],r=t.latlng,a=this._getDistance(e,i,r),o=this._getDistance(e,n,r),s=a<o?i:n,l=a<o?a:o;if(this.options.snapMiddle){var h=L.PM.Utils.calcMiddleLatLng(e,i,n),u=this._getDistance(e,h,r);u<a&&u<o&&(s=h,l=u)}return et({},l<this.options.snapDistance?s:r)},_unsnap:function(){delete this._snapLatLng},_getClosestPointOnSegment:function(t,e,i,n){var r=t.getMaxZoom();r===Infinity&&(r=t.getZoom());var a=t.project(e,r),o=t.project(i,r),s=t.project(n,r),l=L.LineUtil.closestPointOnSegment(a,o,s);return t.unproject(l,r)},_getDistanceToSegment:function(t,e,i,n){var r=t.latLngToLayerPoint(e),a=t.latLngToLayerPoint(i),o=t.latLngToLayerPoint(n);return L.LineUtil.pointToSegmentDistance(r,a,o)},_getDistance:function(t,e,i){return t.latLngToLayerPoint(e).distanceTo(t.latLngToLayerPoint(i))}};const rt=nt;const at=L.Class.extend({includes:[rt,S],options:{snappable:!0,snapDistance:20,snapMiddle:!1,allowSelfIntersection:!0,tooltips:!0,templineStyle:{},hintlineStyle:{color:"#3388ff",dashArray:"5,5"},pathOptions:null,cursorMarker:!0,finishOn:null,markerStyle:{draggable:!0,icon:L.icon()},hideMiddleMarkers:!1,minRadiusCircle:null,maxRadiusCircle:null,minRadiusCircleMarker:null,maxRadiusCircleMarker:null,editable:!1,markerEditable:!0,continueDrawing:!1,snapSegment:!0,requireSnapToFinish:!1},setOptions:function(t){L.Util.setOptions(this,t)},getOptions:function(){return this.options},initialize:function(t){var e=this,i=new L.Icon.Default;i.options.tooltipAnchor=[0,0],this.options.markerStyle.icon=i,this._map=t,this.shapes=["Marker","CircleMarker","Line","Polygon","Rectangle","Circle","Cut","Text"],this.shapes.forEach((function(t){e[t]=new L.PM.Draw[t](e._map)})),this.Marker.setOptions({continueDrawing:!0}),this.CircleMarker.setOptions({continueDrawing:!0})},setPathOptions:function(t){var e=arguments.length>1&&arguments[1]!==undefined&&arguments[1];this.options.pathOptions=e?r()(this.options.pathOptions,t):t},getShapes:function(){return this.shapes},getShape:function(){return this._shape},enable:function(t,e){if(!t)throw new Error("Error: Please pass a shape as a parameter. Possible shapes are: ".concat(this.getShapes().join(",")));this.disable(),this[t].enable(e)},disable:function(){var t=this;this.shapes.forEach((function(e){t[e].disable()}))},addControls:function(){var t=this;this.shapes.forEach((function(e){t[e].addButton()}))},getActiveShape:function(){var t,e=this;return this.shapes.forEach((function(i){e[i]._enabled&&(t=i)})),t},_setGlobalDrawMode:function(){"Cut"===this._shape?this._fireGlobalCutModeToggled():this._fireGlobalDrawModeToggled();var t=L.PM.Utils.findLayers(this._map);this._enabled?t.forEach((function(t){L.PM.Utils.disablePopup(t)})):t.forEach((function(t){L.PM.Utils.enablePopup(t)}))},createNewDrawInstance:function(t,e){var i=this._getShapeFromBtnName(e);if(this[t])throw new TypeError("Draw Type already exists");if(!L.PM.Draw[i])throw new TypeError("There is no class L.PM.Draw.".concat(i));return this[t]=new L.PM.Draw[i](this._map),this[t].toolbarButtonName=t,this[t]._shape=t,this.shapes.push(t),this[e]&&this[t].setOptions(this[e].options),this[t].setOptions(this[t].options),this[t]},_getShapeFromBtnName:function(t){var e={drawMarker:"Marker",drawCircle:"Circle",drawPolygon:"Polygon",drawPolyline:"Line",drawRectangle:"Rectangle",drawCircleMarker:"CircleMarker",editMode:"Edit",dragMode:"Drag",cutPolygon:"Cut",removalMode:"Removal",rotateMode:"Rotate",drawText:"Text"};return e[t]?e[t]:this[t]?this[t]._shape:t},_finishLayer:function(t){t.pm&&(t.pm.setOptions(this.options),t.pm._shape=this._shape,t.pm._map=this._map),this._addDrawnLayerProp(t)},_addDrawnLayerProp:function(t){t._drawnByGeoman=!0},_setPane:function(t,e){"layerPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.layerPane||"overlayPane":"vertexPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.vertexPane||"markerPane":"markerPane"===e&&(t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.markerPane||"markerPane")},_isFirstLayer:function(){return 0===(this._map||this._layer._map).pm.getGeomanLayers().length}});at.Marker=at.extend({initialize:function(t){this._map=t,this._shape="Marker",this.toolbarButtonName="drawMarker"},enable:function(t){var e=this;L.Util.setOptions(this,t),this._enabled=!0,this._map.on("click",this._createMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._hintMarker=L.marker([0,0],this.options.markerStyle),this._setPane(this._hintMarker,"markerPane"),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.placeMarker"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._layer=this._hintMarker,this._map.on("mousemove",this._syncHintMarker,this),this.options.markerEditable&&this._map.eachLayer((function(t){e.isRelevantMarker(t)&&t.pm.enable()})),this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){var t=this;this._enabled&&(this._enabled=!1,this._map.off("click",this._createMarker,this),this._hintMarker.remove(),this._map.off("mousemove",this._syncHintMarker,this),this._map.eachLayer((function(e){t.isRelevantMarker(e)&&e.pm.disable()})),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},isRelevantMarker:function(t){return t instanceof L.Marker&&t.pm&&!t._pmTempLayer&&!t.pm._initTextMarker},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this._fireChange(this._hintMarker.getLatLng(),"Draw")},_createMarker:function(t){if(t.latlng&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),i=new L.Marker(e,this.options.markerStyle);this._setPane(i,"markerPane"),this._finishLayer(i),i.pm||(i.options.draggable=!1),i.addTo(this._map.pm._getContainingLayer()),i.pm&&this.options.markerEditable?i.pm.enable():i.dragging&&i.dragging.disable(),this._fireCreate(i),this._cleanupSnapping(),this.options.continueDrawing||this.disable()}}});var ot=6371008.8,st={centimeters:637100880,centimetres:637100880,degrees:57.22891354143274,feet:20902260.511392,inches:39.37*ot,kilometers:6371.0088,kilometres:6371.0088,meters:ot,metres:ot,miles:3958.761333810546,millimeters:6371008800,millimetres:6371008800,nauticalmiles:ot/1852,radians:1,yards:6967335.223679999};function lt(t,e,i){void 0===i&&(i={});var n={type:"Feature"};return(0===i.id||i.id)&&(n.id=i.id),i.bbox&&(n.bbox=i.bbox),n.properties=e||{},n.geometry=t,n}function ht(t,e,i){if(void 0===i&&(i={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!_t(t[0])||!_t(t[1]))throw new Error("coordinates must contain numbers");return lt({type:"Point",coordinates:t},e,i)}function ut(t,e,i){if(void 0===i&&(i={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return lt({type:"LineString",coordinates:t},e,i)}function ct(t,e){void 0===e&&(e={});var i={type:"FeatureCollection"};return e.id&&(i.id=e.id),e.bbox&&(i.bbox=e.bbox),i.features=t,i}function pt(t,e){void 0===e&&(e="kilometers");var i=st[e];if(!i)throw new Error(e+" units is invalid");return t*i}function dt(t,e){void 0===e&&(e="kilometers");var i=st[e];if(!i)throw new Error(e+" units is invalid");return t/i}function ft(t){return 180*(t%(2*Math.PI))/Math.PI}function gt(t){return t%360*Math.PI/180}function _t(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}function mt(t){var e,i,n={type:"FeatureCollection",features:[]};if("LineString"===(i="Feature"===t.type?t.geometry:t).type)e=[i.coordinates];else if("MultiLineString"===i.type)e=i.coordinates;else if("MultiPolygon"===i.type)e=[].concat.apply([],i.coordinates);else{if("Polygon"!==i.type)throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");e=i.coordinates}return e.forEach((function(t){e.forEach((function(e){for(var i=0;i<t.length-1;i++)for(var r=i;r<e.length-1;r++){if(t===e){if(1===Math.abs(i-r))continue;if(0===i&&r===t.length-2&&t[i][0]===t[t.length-1][0]&&t[i][1]===t[t.length-1][1])continue}var a=yt(t[i][0],t[i][1],t[i+1][0],t[i+1][1],e[r][0],e[r][1],e[r+1][0],e[r+1][1]);a&&n.features.push(ht([a[0],a[1]]))}}))})),n}function yt(t,e,i,n,r,a,o,s){var l,h,u,c,p={x:null,y:null,onLine1:!1,onLine2:!1};return 0===(l=(s-a)*(i-t)-(o-r)*(n-e))?null!==p.x&&null!==p.y&&p:(c=(i-t)*(h=e-a)-(n-e)*(u=t-r),h=((o-r)*h-(s-a)*u)/l,u=c/l,p.x=t+h*(i-t),p.y=e+h*(n-e),h>=0&&h<=1&&(p.onLine1=!0),u>=0&&u<=1&&(p.onLine2=!0),!(!p.onLine1||!p.onLine2)&&[p.x,p.y])}function vt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Lt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(i),!0).forEach((function(e){bt(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):vt(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function bt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function kt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Mt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?kt(Object(i),!0).forEach((function(e){xt(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):kt(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function xt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function wt(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Ct(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Pt(t){return"Feature"===t.type?t.geometry:t}function Et(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":"Feature"===t.type&&null!==t.geometry?t.geometry.type:t.type}function St(t,e,i){if(null!==t)for(var n,r,a,o,s,l,h,u,c=0,p=0,d=t.type,f="FeatureCollection"===d,g="Feature"===d,_=f?t.features.length:1,m=0;m<_;m++){s=(u=!!(h=f?t.features[m].geometry:g?t.geometry:t)&&"GeometryCollection"===h.type)?h.geometries.length:1;for(var y=0;y<s;y++){var v=0,L=0;if(null!==(o=u?h.geometries[y]:h)){l=o.coordinates;var b=o.type;switch(c=!i||"Polygon"!==b&&"MultiPolygon"!==b?0:1,b){case null:break;case"Point":if(!1===e(l,p,m,v,L))return!1;p++,v++;break;case"LineString":case"MultiPoint":for(n=0;n<l.length;n++){if(!1===e(l[n],p,m,v,L))return!1;p++,"MultiPoint"===b&&v++}"LineString"===b&&v++;break;case"Polygon":case"MultiLineString":for(n=0;n<l.length;n++){for(r=0;r<l[n].length-c;r++){if(!1===e(l[n][r],p,m,v,L))return!1;p++}"MultiLineString"===b&&v++,"Polygon"===b&&L++}"Polygon"===b&&v++;break;case"MultiPolygon":for(n=0;n<l.length;n++){for(L=0,r=0;r<l[n].length;r++){for(a=0;a<l[n][r].length-c;a++){if(!1===e(l[n][r][a],p,m,v,L))return!1;p++}L++}v++}break;case"GeometryCollection":for(n=0;n<o.geometries.length;n++)if(!1===St(o.geometries[n],e,i))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Ot(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var i=0;i<t.features.length&&!1!==e(t.features[i],i);i++);}function Dt(t,e){var i,n,r,a,o,s,l,h,u,c,p=0,d="FeatureCollection"===t.type,f="Feature"===t.type,g=d?t.features.length:1;for(i=0;i<g;i++){for(s=d?t.features[i].geometry:f?t.geometry:t,h=d?t.features[i].properties:f?t.properties:{},u=d?t.features[i].bbox:f?t.bbox:undefined,c=d?t.features[i].id:f?t.id:undefined,o=(l=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,r=0;r<o;r++)if(null!==(a=l?s.geometries[r]:s))switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(a,p,h,u,c))return!1;break;case"GeometryCollection":for(n=0;n<a.geometries.length;n++)if(!1===e(a.geometries[n],p,h,u,c))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,p,h,u,c))return!1;p++}}function Rt(t,e){Dt(t,(function(t,i,n,r,a){var o,s=null===t?null:t.type;switch(s){case null:case"Point":case"LineString":case"Polygon":return!1!==e(lt(t,n,{bbox:r,id:a}),i,0)&&void 0}switch(s){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon"}for(var l=0;l<t.coordinates.length;l++){var h=t.coordinates[l];if(!1===e(lt({type:o,coordinates:h},n),i,l))return!1}}))}at.Line=at.extend({initialize:function(t){this._map=t,this._shape="Line",this.toolbarButtonName="drawPolyline",this._doesSelfIntersect=!1},enable:function(t){L.Util.setOptions(this,t),this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.polyline([],this.options.templineStyle),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._layerGroup.addLayer(this._layer),this._hintline=L.polyline([],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._hintMarker=L.marker(this._map.getCenter(),{interactive:!1,zIndexOffset:100,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.firstVertex"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._map._container.style.cursor="crosshair",this._map.on("click",this._createVertex,this),this.options.finishOn&&"snap"!==this.options.finishOn&&this._map.on(this.options.finishOn,this._finishShape,this),"dblclick"===this.options.finishOn&&(this.tempMapDoubleClickZoomState=this._map.doubleClickZoom._enabled,this.tempMapDoubleClickZoomState&&this._map.doubleClickZoom.disable()),this._map.on("mousemove",this._syncHintMarker,this),this._hintMarker.on("move",this._syncHintLine,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[],this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._createVertex,this),this._map.off("mousemove",this._syncHintMarker,this),this.options.finishOn&&"snap"!==this.options.finishOn&&this._map.off(this.options.finishOn,this._finishShape,this),this.tempMapDoubleClickZoomState&&this._map.doubleClickZoom.enable(),this._map.removeLayer(this._layerGroup),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_syncHintLine:function(){var t=this._layer.getLatLngs();if(t.length>0){var e=t[t.length-1];this._hintline.setLatLngs([e,this._hintMarker.getLatLng()])}},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this.options.allowSelfIntersection||this._handleSelfIntersection(!0,t.latlng);var i=this._layer._defaultShape().slice();i.push(this._hintMarker.getLatLng()),this._change(i)},hasSelfIntersection:function(){return mt(this._layer.toGeoJSON(15)).features.length>0},_handleSelfIntersection:function(t,e){var i=L.polyline(this._layer.getLatLngs());t&&(e||(e=this._hintMarker.getLatLng()),i.addLatLng(e));var n=mt(i.toGeoJSON(15));this._doesSelfIntersect=n.features.length>0,this._doesSelfIntersect?this._hintline.setStyle({color:"#f00000ff"}):this._hintline.isEmpty()||this._hintline.setStyle(this.options.hintlineStyle)},_createVertex:function(t){if(this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,t.latlng),!this._doesSelfIntersect)){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();if(e.equals(this._layer.getLatLngs()[0]))this._finishShape(t);else{this._layer._latlngInfo=this._layer._latlngInfo||[],this._layer._latlngInfo.push({latlng:e,snapInfo:this._hintMarker._snapInfo}),this._layer.addLatLng(e);var i=this._createMarker(e);this._setTooltipText(),this._hintline.setLatLngs([e,e]),this._fireVertexAdded(i,undefined,e,"Draw"),this._change(this._layer.getLatLngs()),"snap"===this.options.finishOn&&this._hintMarker._snapped&&this._finishShape(t)}}},_removeLastVertex:function(){var t=this._layer.getLatLngs(),e=t.pop();if(t.length<1)this.disable();else{var i=this._layerGroup.getLayers().filter((function(t){return t instanceof L.Marker})).filter((function(t){return!L.DomUtil.hasClass(t._icon,"cursor-marker")})).find((function(t){return t.getLatLng()===e})),n=this._layerGroup.getLayers().filter((function(t){return t instanceof L.Marker})),r=L.PM.Utils.findDeepMarkerIndex(n,i).indexPath;this._layerGroup.removeLayer(i),this._layer.setLatLngs(t),this._syncHintLine(),this._setTooltipText(),this._fireVertexRemoved(i,r,"Draw"),this._change(this._layer.getLatLngs())}},_finishShape:function(){if((this.options.allowSelfIntersection||(this._handleSelfIntersection(!1),!this._doesSelfIntersect))&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){var t=this._layer.getLatLngs();if(!(t.length<=1)){var e=L.polyline(t,this.options.pathOptions);this._setPane(e,"layerPane"),this._finishLayer(e),e.addTo(this._map.pm._getContainingLayer()),this._fireCreate(e),this.options.snappable&&this._cleanupSnapping(),this.disable(),this.options.continueDrawing&&this.enable()}}},_createMarker:function(t){var e=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._pmTempLayer=!0,this._layerGroup.addLayer(e),e.on("click",this._finishShape,this),e},_setTooltipText:function(){var t="";t=I(this._layer.getLatLngs().flat().length<=1?"tooltips.continueLine":"tooltips.finishLine"),this._hintMarker.setTooltipContent(t)},_change:function(t){this._fireChange(t,"Draw")}}),at.Polygon=at.Line.extend({initialize:function(t){this._map=t,this._shape="Polygon",this.toolbarButtonName="drawPolygon"},_createMarker:function(t){var e=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._pmTempLayer=!0,this._layerGroup.addLayer(e),1===this._layer.getLatLngs().flat().length?(e.on("click",this._finishShape,this),this._tempSnapLayerIndex=this._otherSnapLayers.push(e)-1,this.options.snappable&&this._cleanupSnapping()):e.on("click",(function(){return 1})),e},_setTooltipText:function(){var t="";t=I(this._layer.getLatLngs().flat().length<=2?"tooltips.continueLine":"tooltips.finishPoly"),this._hintMarker.setTooltipContent(t)},_finishShape:function(){if((this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,this._layer.getLatLngs()[0]),!this._doesSelfIntersect))&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){var t=this._layer.getLatLngs();if(!(t.length<=2)){var e=L.polygon(t,this.options.pathOptions);this._setPane(e,"layerPane"),this._finishLayer(e),e.addTo(this._map.pm._getContainingLayer()),this._fireCreate(e),this._cleanupSnapping(),this._otherSnapLayers.splice(this._tempSnapLayerIndex,1),delete this._tempSnapLayerIndex,this.disable(),this.options.continueDrawing&&this.enable()}}}}),at.Rectangle=at.extend({initialize:function(t){this._map=t,this._shape="Rectangle",this.toolbarButtonName="drawRectangle"},enable:function(t){if(L.Util.setOptions(this,t),this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.rectangle([[0,0],[0,0]],this.options.pathOptions),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._startMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-start-marker"}),draggable:!1,zIndexOffset:-100,opacity:this.options.cursorMarker?1:0}),this._setPane(this._startMarker,"vertexPane"),this._startMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._startMarker),this._hintMarker=L.marker([0,0],{zIndexOffset:150,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.firstVertex"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this.options.cursorMarker){L.DomUtil.addClass(this._hintMarker._icon,"visible"),this._styleMarkers=[];for(var e=0;e<2;e+=1){var i=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-style-marker"}),draggable:!1,zIndexOffset:100});this._setPane(i,"vertexPane"),i._pmTempLayer=!0,this._layerGroup.addLayer(i),this._styleMarkers.push(i)}}this._map._container.style.cursor="crosshair",this._map.on("click",this._placeStartingMarkers,this),this._map.on("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[],this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeStartingMarkers,this),this._map.off("mousemove",this._syncHintMarker,this),this._map.removeLayer(this._layerGroup),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_placeStartingMarkers:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();L.DomUtil.addClass(this._startMarker._icon,"visible"),this._startMarker.setLatLng(e),this.options.cursorMarker&&this._styleMarkers&&this._styleMarkers.forEach((function(t){L.DomUtil.addClass(t._icon,"visible"),t.setLatLng(e)})),this._map.off("click",this._placeStartingMarkers,this),this._map.on("click",this._finishShape,this),this._hintMarker.setTooltipContent(I("tooltips.finishRect")),this._setRectangleOrigin()},_setRectangleOrigin:function(){var t=this._startMarker.getLatLng();t&&(this._layerGroup.addLayer(this._layer),this._layer.setLatLngs([t,t]),this._hintMarker.on("move",this._syncRectangleSize,this))},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}var i=this._layerGroup&&this._layerGroup.hasLayer(this._layer)?this._layer.getLatLngs():[this._hintMarker.getLatLng()];this._fireChange(i,"Draw")},_syncRectangleSize:function(){var t=this,e=F(this._startMarker.getLatLng(),this._map),i=F(this._hintMarker.getLatLng(),this._map),n=L.PM.Utils._getRotatedRectangle(e,i,this.options.rectangleAngle||0,this._map);if(this._layer.setLatLngs(n),this.options.cursorMarker&&this._styleMarkers){var r=[];n.forEach((function(t){t.equals(e,1e-8)||t.equals(i,1e-8)||r.push(t)})),r.forEach((function(e,i){try{t._styleMarkers[i].setLatLng(e)}catch(n){}}))}},_findCorners:function(){var t=this._layer.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]},_finishShape:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),i=this._startMarker.getLatLng();if(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer()){var n=L.rectangle([i,e],this.options.pathOptions);if(this.options.rectangleAngle){var r=L.PM.Utils._getRotatedRectangle(i,e,this.options.rectangleAngle||0,this._map);n.setLatLngs(r),n.pm&&n.pm._setAngle(this.options.rectangleAngle||0)}this._setPane(n,"layerPane"),this._finishLayer(n),n.addTo(this._map.pm._getContainingLayer()),this._fireCreate(n),this.disable(),this.options.continueDrawing&&this.enable()}}}),at.Circle=at.extend({initialize:function(t){this._map=t,this._shape="Circle",this.toolbarButtonName="drawCircle"},enable:function(t){L.Util.setOptions(this,t),this.options.radius=0,this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.circle([0,0],Lt(Lt({},this.options.templineStyle),{},{radius:0})),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._centerMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon"}),draggable:!1,zIndexOffset:100}),this._setPane(this._centerMarker,"vertexPane"),this._centerMarker._pmTempLayer=!0,this._hintMarker=L.marker([0,0],{zIndexOffset:110,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.startCircle"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._hintline=L.polyline([],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._map._container.style.cursor="crosshair",this._map.on("click",this._placeCenterMarker,this),this._map.on("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[],this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeCenterMarker,this),this._map.off("mousemove",this._syncHintMarker,this),this._map.removeLayer(this._layerGroup),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._getNewDestinationOfHintMarker();this._hintline.setLatLngs([t,e])},_syncCircleRadius:function(){var t,e=this._centerMarker.getLatLng(),i=this._hintMarker.getLatLng();t=this._map.options.crs===L.CRS.Simple?this._map.distance(e,i):e.distanceTo(i),this.options.minRadiusCircle&&t<this.options.minRadiusCircle?this._layer.setRadius(this.options.minRadiusCircle):this.options.maxRadiusCircle&&t>this.options.maxRadiusCircle?this._layer.setRadius(this.options.maxRadiusCircle):this._layer.setRadius(t)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this._handleHintMarkerSnapping();var i=this._layerGroup&&this._layerGroup.hasLayer(this._centerMarker)?this._centerMarker.getLatLng():this._hintMarker.getLatLng();this._fireChange(i,"Draw")},_placeCenterMarker:function(t){this._layerGroup.addLayer(this._layer),this._layerGroup.addLayer(this._centerMarker),this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();this._layerGroup.addLayer(this._layer),this._centerMarker.setLatLng(e),this._map.off("click",this._placeCenterMarker,this),this._map.on("click",this._finishShape,this),this._placeCircleCenter()},_placeCircleCenter:function(){var t=this._centerMarker.getLatLng();t&&(this._layer.setLatLng(t),this._hintMarker.on("move",this._syncHintLine,this),this._hintMarker.on("move",this._syncCircleRadius,this),this._hintMarker.setTooltipContent(I("tooltips.finishCircle")),this._fireCenterPlaced(),this._fireChange(this._layer.getLatLng(),"Draw"))},_finishShape:function(t){if(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer()){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e,i=this._centerMarker.getLatLng(),n=this._hintMarker.getLatLng();e=this._map.options.crs===L.CRS.Simple?this._map.distance(i,n):i.distanceTo(n),this.options.minRadiusCircle&&e<this.options.minRadiusCircle?e=this.options.minRadiusCircle:this.options.maxRadiusCircle&&e>this.options.maxRadiusCircle&&(e=this.options.maxRadiusCircle);var r=Lt(Lt({},this.options.pathOptions),{},{radius:e}),a=L.circle(i,r);this._setPane(a,"layerPane"),this._finishLayer(a),a.addTo(this._map.pm._getContainingLayer()),a.pm&&a.pm._updateHiddenPolyCircle(),this._fireCreate(a),this.disable(),this.options.continueDrawing&&this.enable()}},_getNewDestinationOfHintMarker:function(){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),i=t.distanceTo(e);return t.equals(L.latLng([0,0]))||(this.options.minRadiusCircle&&i<this.options.minRadiusCircle?e=z(this._map,t,e,this.options.minRadiusCircle):this.options.maxRadiusCircle&&i>this.options.maxRadiusCircle&&(e=z(this._map,t,e,this.options.maxRadiusCircle))),e},_handleHintMarkerSnapping:function(){if(this._hintMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),i=t.distanceTo(e);t.equals(L.latLng([0,0]))||(this.options.minRadiusCircle&&i<this.options.minRadiusCircle||this.options.maxRadiusCircle&&i>this.options.maxRadiusCircle)&&this._hintMarker.setLatLng(this._hintMarker._orgLatLng)}this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker())}}),at.CircleMarker=at.Marker.extend({initialize:function(t){this._map=t,this._shape="CircleMarker",this.toolbarButtonName="drawCircleMarker",this._layerIsDragging=!1},enable:function(t){var e=this;if(L.Util.setOptions(this,t),this._enabled=!0,this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this.options.editable){var i={};L.setOptions(i,this.options.templineStyle),i.radius=0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.circleMarker([0,0],i),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._centerMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon"}),draggable:!1,zIndexOffset:100}),this._setPane(this._centerMarker,"vertexPane"),this._centerMarker._pmTempLayer=!0,this._hintMarker=L.marker([0,0],{zIndexOffset:110,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.startCircle"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._hintline=L.polyline([],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._map.on("click",this._placeCenterMarker,this),this._map._container.style.cursor="crosshair"}else this._map.on("click",this._createMarker,this),this._hintMarker=L.circleMarker([0,0],this.options.templineStyle),this._setPane(this._hintMarker,"layerPane"),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this._layer=this._hintMarker,this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.placeCircleMarker"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip();this._map.on("mousemove",this._syncHintMarker,this),!this.options.editable&&this.options.markerEditable&&this._map.eachLayer((function(t){e.isRelevantMarker(t)&&t.pm.enable()})),this._layer.bringToBack(),this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){var t=this;this._enabled&&(this._enabled=!1,this.options.editable?(this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeCenterMarker,this),this._map.removeLayer(this._layerGroup)):(this._map.off("click",this._createMarker,this),this._map.eachLayer((function(e){t.isRelevantMarker(e)&&e.pm.disable()})),this._hintMarker.remove()),this._map.off("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},_placeCenterMarker:function(t){this._layerGroup.addLayer(this._layer),this._layerGroup.addLayer(this._centerMarker),this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();this._layerGroup.addLayer(this._layer),this._centerMarker.setLatLng(e),this._map.off("click",this._placeCenterMarker,this),this._map.on("click",this._finishShape,this),this._placeCircleCenter()},_placeCircleCenter:function(){var t=this._centerMarker.getLatLng();t&&(this._layer.setLatLng(t),this._hintMarker.on("move",this._syncHintLine,this),this._hintMarker.on("move",this._syncCircleRadius,this),this._hintMarker.setTooltipContent(I("tooltips.finishCircle")),this._fireCenterPlaced(),this._fireChange(this._layer.getLatLng(),"Draw"))},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._getNewDestinationOfHintMarker();this._hintline.setLatLngs([t,e])},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),i=this._map.project(t).distanceTo(this._map.project(e));this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker?this._layer.setRadius(this.options.minRadiusCircleMarker):this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker?this._layer.setRadius(this.options.maxRadiusCircleMarker):this._layer.setRadius(i)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this._handleHintMarkerSnapping();var i=this._layerGroup&&this._layerGroup.hasLayer(this._centerMarker)?this._centerMarker.getLatLng():this._hintMarker.getLatLng();this._fireChange(i,"Draw")},isRelevantMarker:function(t){return t instanceof L.CircleMarker&&!(t instanceof L.Circle)&&t.pm&&!t._pmTempLayer},_createMarker:function(t){if((!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())&&t.latlng&&!this._layerIsDragging){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),i=L.circleMarker(e,this.options.pathOptions);this._setPane(i,"layerPane"),this._finishLayer(i),i.addTo(this._map.pm._getContainingLayer()),i.pm&&this.options.markerEditable&&i.pm.enable(),this._fireCreate(i),this._cleanupSnapping(),this.options.continueDrawing||this.disable()}},_finishShape:function(t){if(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer()){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._centerMarker.getLatLng(),i=this._hintMarker.getLatLng(),n=this._map.project(e).distanceTo(this._map.project(i));this.options.editable&&(this.options.minRadiusCircleMarker&&n<this.options.minRadiusCircleMarker?n=this.options.minRadiusCircleMarker:this.options.maxRadiusCircleMarker&&n>this.options.maxRadiusCircleMarker&&(n=this.options.maxRadiusCircleMarker));var r=Mt(Mt({},this.options.pathOptions),{},{radius:n}),a=L.circleMarker(e,r);this._setPane(a,"layerPane"),this._finishLayer(a),a.addTo(this._map.pm._getContainingLayer()),a.pm&&a.pm._updateHiddenPolyCircle(),this._fireCreate(a),this.disable(),this.options.continueDrawing&&this.enable()}},_getNewDestinationOfHintMarker:function(){var t=this._hintMarker.getLatLng();if(this.options.editable){var e=this._centerMarker.getLatLng();if(e.equals(L.latLng([0,0])))return t;var i=this._map.project(e).distanceTo(this._map.project(t));this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker?t=z(this._map,e,t,this._pxRadiusToMeter(this.options.minRadiusCircleMarker)):this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker&&(t=z(this._map,e,t,this._pxRadiusToMeter(this.options.maxRadiusCircleMarker)))}return t},_handleHintMarkerSnapping:function(){if(this.options.editable){if(this._hintMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),i=this._map.project(t).distanceTo(this._map.project(e));(this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker||this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker)&&this._hintMarker.setLatLng(this._hintMarker._orgLatLng)}this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker())}},_pxRadiusToMeter:function(t){var e=this._centerMarker.getLatLng(),i=this._map.project(e),n=L.point(i.x+t,i.y);return this._map.unproject(n).distanceTo(e)}});const Bt=function(t){if(!t)throw new Error("geojson is required");var e=[];return Rt(t,(function(t){!function(t,e){var i=[],n=t.geometry;if(null!==n){switch(n.type){case"Polygon":i=Ct(n);break;case"LineString":i=[Ct(n)]}i.forEach((function(i){var n=function(t,e){var i=[];return t.reduce((function(t,n){var r,a,o,s,l,h,u=ut([t,n],e);return u.bbox=(a=n,o=(r=t)[0],s=r[1],l=a[0],h=a[1],[o<l?o:l,s<h?s:h,o>l?o:l,s>h?s:h]),i.push(u),n})),i}(i,t.properties);n.forEach((function(t){t.id=e.length,e.push(t)}))}))}}(t,e)})),ct(e)};var Tt=i(1787);function It(t,e){var i=Ct(t),n=Ct(e);if(2!==i.length)throw new Error("<intersects> line1 must only contain 2 coordinates");if(2!==n.length)throw new Error("<intersects> line2 must only contain 2 coordinates");var r=i[0][0],a=i[0][1],o=i[1][0],s=i[1][1],l=n[0][0],h=n[0][1],u=n[1][0],c=n[1][1],p=(c-h)*(o-r)-(u-l)*(s-a),d=(u-l)*(a-h)-(c-h)*(r-l),f=(o-r)*(a-h)-(s-a)*(r-l);if(0===p)return null;var g=d/p,_=f/p;return g>=0&&g<=1&&_>=0&&_<=1?ht([r+g*(o-r),a+g*(s-a)]):null}const jt=function(t,e){var i={},n=[];if("LineString"===t.type&&(t=lt(t)),"LineString"===e.type&&(e=lt(e)),"Feature"===t.type&&"Feature"===e.type&&null!==t.geometry&&null!==e.geometry&&"LineString"===t.geometry.type&&"LineString"===e.geometry.type&&2===t.geometry.coordinates.length&&2===e.geometry.coordinates.length){var r=It(t,e);return r&&n.push(r),ct(n)}var a=Tt();return a.load(Bt(e)),Ot(Bt(t),(function(t){Ot(a.search(t),(function(e){var r=It(t,e);if(r){var a=Ct(r).join(",");i[a]||(i[a]=!0,n.push(r))}}))})),ct(n)};const At=function(t,e,i){void 0===i&&(i={});var n=wt(t),r=wt(e),a=gt(r[1]-n[1]),o=gt(r[0]-n[0]),s=gt(n[1]),l=gt(r[1]),h=Math.pow(Math.sin(a/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(s)*Math.cos(l);return pt(2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h)),i.units)};const Gt=function(t){var e=t[0],i=t[1],n=t[2],r=t[3];if(At(t.slice(0,2),[n,i])>=At(t.slice(0,2),[e,r])){var a=(i+r)/2;return[e,a-(n-e)/2,n,a+(n-e)/2]}var o=(e+n)/2;return[o-(r-i)/2,i,o+(r-i)/2,r]};function Nt(t){var e=[Infinity,Infinity,-Infinity,-Infinity];return St(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}Nt["default"]=Nt;const zt=Nt;const Ut=function(t,e){void 0===e&&(e={});var i=e.precision,n=e.coordinates,r=e.mutate;if(i=i===undefined||null===i||isNaN(i)?6:i,n=n===undefined||null===n||isNaN(n)?3:n,!t)throw new Error("<geojson> is required");if("number"!=typeof i)throw new Error("<precision> must be a number");if("number"!=typeof n)throw new Error("<coordinates> must be a number");!1!==r&&r!==undefined||(t=JSON.parse(JSON.stringify(t)));var a=Math.pow(10,i);return St(t,(function(t){!function(t,e,i){t.length>i&&t.splice(i,t.length);for(var n=0;n<t.length;n++)t[n]=Math.round(t[n]*e)/e}(t,a,n)})),t};function Ft(t,e,i){if(void 0===i&&(i={}),!0===i.final)return function(t,e){var i=Ft(e,t);return i=(i+180)%360}(t,e);var n=wt(t),r=wt(e),a=gt(n[0]),o=gt(r[0]),s=gt(n[1]),l=gt(r[1]),h=Math.sin(o-a)*Math.cos(l),u=Math.cos(s)*Math.sin(l)-Math.sin(s)*Math.cos(l)*Math.cos(o-a);return ft(Math.atan2(h,u))}function Vt(t,e,i,n){void 0===n&&(n={});var r=wt(t),a=gt(r[0]),o=gt(r[1]),s=gt(i),l=dt(e,n.units),h=Math.asin(Math.sin(o)*Math.cos(l)+Math.cos(o)*Math.sin(l)*Math.cos(s));return ht([ft(a+Math.atan2(Math.sin(s)*Math.sin(l)*Math.cos(o),Math.cos(l)-Math.sin(o)*Math.sin(h))),ft(h)],n.properties)}const Kt=function(t,e,i){void 0===i&&(i={});var n=ht([Infinity,Infinity],{dist:Infinity}),r=0;return Rt(t,(function(t){for(var a=Ct(t),o=0;o<a.length-1;o++){var s=ht(a[o]);s.properties.dist=At(e,s,i);var l=ht(a[o+1]);l.properties.dist=At(e,l,i);var h=At(s,l,i),u=Math.max(s.properties.dist,l.properties.dist),c=Ft(s,l),p=Vt(e,u,c+90,i),d=Vt(e,u,c-90,i),f=jt(ut([p.geometry.coordinates,d.geometry.coordinates]),ut([s.geometry.coordinates,l.geometry.coordinates])),g=null;f.features.length>0&&((g=f.features[0]).properties.dist=At(e,g,i),g.properties.location=r+At(s,g,i)),s.properties.dist<n.properties.dist&&((n=s).properties.index=o,n.properties.location=r),l.properties.dist<n.properties.dist&&((n=l).properties.index=o+1,n.properties.location=r+h),g&&g.properties.dist<n.properties.dist&&((n=g).properties.index=o),r+=h}})),n};function Ht(t,e){var i=[],n=Tt();return Rt(e,(function(e){if(i.forEach((function(t,e){t.id=e})),i.length){var r=n.search(e);if(r.features.length){var a=Jt(e,r);i=i.filter((function(t){return t.id!==a.id})),n.remove(a),Ot(qt(a,e),(function(t){i.push(t),n.insert(t)}))}}else(i=qt(t,e).features).forEach((function(t){t.bbox||(t.bbox=Gt(zt(t)))})),n.load(ct(i))})),ct(i)}function qt(t,e){var i=[],n=Ct(t)[0],r=Ct(t)[t.geometry.coordinates.length-1];if(Yt(n,wt(e))||Yt(r,wt(e)))return ct([t]);var a=Tt(),o=Bt(t);a.load(o);var s=a.search(e);if(!s.features.length)return ct([t]);var l=Jt(e,s),h=function(t,e,i){var n=i;return Ot(t,(function(t,r){n=0===r&&i===undefined?t:e(n,t,r)})),n}(o,(function(t,n,r){var a=Ct(n)[1],o=wt(e);return r===l.id?(t.push(o),i.push(ut(t)),Yt(o,a)?[o]:[o,a]):(t.push(a),t)}),[n]);return h.length>1&&i.push(ut(h)),ct(i)}function Jt(t,e){if(!e.features.length)throw new Error("lines must contain features");if(1===e.features.length)return e.features[0];var i,n=Infinity;return Ot(e,(function(e){var r=Kt(e,t).properties.dist;r<n&&(i=e,n=r)})),i}function Yt(t,e){return t[0]===e[0]&&t[1]===e[1]}const Xt=function(t,e){if(!t)throw new Error("line is required");if(!e)throw new Error("splitter is required");var i=Et(t),n=Et(e);if("LineString"!==i)throw new Error("line must be LineString");if("FeatureCollection"===n)throw new Error("splitter cannot be a FeatureCollection");if("GeometryCollection"===n)throw new Error("splitter cannot be a GeometryCollection");var r=Ut(e,{precision:7});switch(n){case"Point":return qt(t,r);case"MultiPoint":return Ht(t,r);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return Ht(t,jt(t,r))}};function Zt(t,e,i){if(void 0===i&&(i={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var n=wt(t),r=Pt(e),a=r.type,o=e.bbox,s=r.coordinates;if(o&&!1===function(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}(n,o))return!1;"Polygon"===a&&(s=[s]);for(var l=!1,h=0;h<s.length&&!l;h++)if($t(n,s[h][0],i.ignoreBoundary)){for(var u=!1,c=1;c<s[h].length&&!u;)$t(n,s[h][c],!i.ignoreBoundary)&&(u=!0),c++;u||(l=!0)}return l}function $t(t,e,i){var n=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var r=0,a=e.length-1;r<e.length;a=r++){var o=e[r][0],s=e[r][1],l=e[a][0],h=e[a][1];if(t[1]*(o-l)+s*(l-t[0])+h*(t[0]-o)==0&&(o-t[0])*(l-t[0])<=0&&(s-t[1])*(h-t[1])<=0)return!i;s>t[1]!=h>t[1]&&t[0]<(l-o)*(t[1]-s)/(h-s)+o&&(n=!n)}return n}function Wt(t,e,i,n,r){var a=i[0],o=i[1],s=t[0],l=t[1],h=e[0],u=e[1],c=h-s,p=u-l,d=(i[0]-s)*p-(i[1]-l)*c;if(null!==r){if(Math.abs(d)>r)return!1}else if(0!==d)return!1;return n?"start"===n?Math.abs(c)>=Math.abs(p)?c>0?s<a&&a<=h:h<=a&&a<s:p>0?l<o&&o<=u:u<=o&&o<l:"end"===n?Math.abs(c)>=Math.abs(p)?c>0?s<=a&&a<h:h<a&&a<=s:p>0?l<=o&&o<u:u<o&&o<=l:"both"===n&&(Math.abs(c)>=Math.abs(p)?c>0?s<a&&a<h:h<a&&a<s:p>0?l<o&&o<u:u<o&&o<l):Math.abs(c)>=Math.abs(p)?c>0?s<=a&&a<=h:h<=a&&a<=s:p>0?l<=o&&o<=u:u<=o&&o<=l}const Qt=function(t,e,i){void 0===i&&(i={});for(var n=wt(t),r=Ct(e),a=0;a<r.length-1;a++){var o=!1;if(i.ignoreEndVertices&&(0===a&&(o="start"),a===r.length-2&&(o="end"),0===a&&a+1===r.length-1&&(o="both")),Wt(r[a],r[a+1],n,o,"undefined"==typeof i.epsilon?null:i.epsilon))return!0}return!1};function te(t,e){var i=Pt(t),n=Pt(e),r=i.type,a=n.type,o=i.coordinates,s=n.coordinates;switch(r){case"Point":if("Point"===a)return ie(o,s);throw new Error("feature2 "+a+" geometry not supported");case"MultiPoint":switch(a){case"Point":return function(t,e){var i,n=!1;for(i=0;i<t.coordinates.length;i++)if(ie(t.coordinates[i],e.coordinates)){n=!0;break}return n}(i,n);case"MultiPoint":return function(t,e){for(var i=0,n=e.coordinates;i<n.length;i++){for(var r=n[i],a=!1,o=0,s=t.coordinates;o<s.length;o++){if(ie(r,s[o])){a=!0;break}}if(!a)return!1}return!0}(i,n);default:throw new Error("feature2 "+a+" geometry not supported")}case"LineString":switch(a){case"Point":return Qt(n,i,{ignoreEndVertices:!0});case"LineString":return function(t,e){for(var i=!1,n=0,r=e.coordinates;n<r.length;n++){var a=r[n];if(Qt({type:"Point",coordinates:a},t,{ignoreEndVertices:!0})&&(i=!0),!Qt({type:"Point",coordinates:a},t,{ignoreEndVertices:!1}))return!1}return i}(i,n);case"MultiPoint":return function(t,e){for(var i=!1,n=0,r=e.coordinates;n<r.length;n++){var a=r[n];if(Qt(a,t,{ignoreEndVertices:!0})&&(i=!0),!Qt(a,t))return!1}if(i)return!0;return!1}(i,n);default:throw new Error("feature2 "+a+" geometry not supported")}case"Polygon":switch(a){case"Point":return Zt(n,i,{ignoreBoundary:!0});case"LineString":return function(t,e){var i=!1,n=0,r=zt(t),a=zt(e);if(!ee(r,a))return!1;for(;n<e.coordinates.length-1;n++){if(Zt({type:"Point",coordinates:ne(e.coordinates[n],e.coordinates[n+1])},t,{ignoreBoundary:!0})){i=!0;break}}return i}(i,n);case"Polygon":return function(t,e){if("Feature"===t.type&&null===t.geometry)return!1;if("Feature"===e.type&&null===e.geometry)return!1;var i=zt(t),n=zt(e);if(!ee(i,n))return!1;for(var r=Pt(e).coordinates,a=0,o=r;a<o.length;a++)for(var s=0,l=o[a];s<l.length;s++){if(!Zt(l[s],t))return!1}return!0}(i,n);case"MultiPoint":return function(t,e){for(var i=0,n=e.coordinates;i<n.length;i++){if(!Zt(n[i],t,{ignoreBoundary:!0}))return!1}return!0}(i,n);default:throw new Error("feature2 "+a+" geometry not supported")}default:throw new Error("feature1 "+r+" geometry not supported")}}function ee(t,e){return!(t[0]>e[0])&&(!(t[2]<e[2])&&(!(t[1]>e[1])&&!(t[3]<e[3])))}function ie(t,e){return t[0]===e[0]&&t[1]===e[1]}function ne(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var re=i(2676),ae=i.n(re);function oe(t){var e={type:"Feature"};return e.geometry=t,e}function se(t){return"Feature"===t.type?t.geometry:t}function le(t){return t.geometry.coordinates}function he(t){return oe({type:"Polygon",coordinates:t})}function ue(t){return oe({type:"MultiPolygon",coordinates:t})}function ce(t){return Array.isArray(t)?1+ce(t[0]):-1}function pe(t){t instanceof L.Polyline&&(t=t.toGeoJSON(15));var e=le(t),i=ce(e),n=[];return i>1?e.forEach((function(t){n.push(function(t){return oe({type:"LineString",coordinates:t})}(t))})):n.push(t),n}function de(t){var e=[];return t.eachLayer((function(t){e.push(le(t.toGeoJSON(15)))})),function(t){return oe({type:"MultiLineString",coordinates:t})}(e)}function fe(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,r,a=[],o=!0,s=!1;try{for(i=i.call(t);!(o=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(l){s=!0,r=l}finally{try{o||null==i["return"]||i["return"]()}finally{if(s)throw r}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return ge(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ge(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function _e(t){return function(t){if(Array.isArray(t))return me(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return me(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return me(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}at.Cut=at.Polygon.extend({initialize:function(t){this._map=t,this._shape="Cut",this.toolbarButtonName="cutPolygon"},_finishShape:function(){var t=this;if(this._editedLayers=[],this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,this._layer.getLatLngs()[0]),!this._doesSelfIntersect)){var e=this._layer.getLatLngs(),i=L.polygon(e,this.options.pathOptions);i._latlngInfos=this._layer._latlngInfo,this.cut(i),this._cleanupSnapping(),this._otherSnapLayers.splice(this._tempSnapLayerIndex,1),delete this._tempSnapLayerIndex,this._editedLayers.forEach((function(e){var i=e.layer,n=e.originalLayer;t._fireCut(n,i,n),t._fireCut(t._map,i,n),n.pm._fireEdit()})),this._editedLayers=[],this.disable(),this.options.continueDrawing&&this.enable()}},cut:function(t){var e=this,i=this._map._layers,n=t._latlngInfos||[];Object.keys(i).map((function(t){return i[t]})).filter((function(t){return t.pm})).filter((function(t){return!t._pmTempLayer})).filter((function(t){return!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore})).filter((function(t){return t instanceof L.Polyline})).filter((function(e){return e!==t})).filter((function(t){return t.pm.options.allowCutting})).filter((function(t){return!(e.options.layersToCut&&L.Util.isArray(e.options.layersToCut)&&e.options.layersToCut.length>0)||e.options.layersToCut.indexOf(t)>-1})).filter((function(t){return!e._layerGroup.hasLayer(t)})).filter((function(e){try{var i=!!jt(t.toGeoJSON(15),e.toGeoJSON(15)).features.length>0;return i||e instanceof L.Polyline&&!(e instanceof L.Polygon)?i:(n=t.toGeoJSON(15),r=e.toGeoJSON(15),a=se(n),o=se(r),!(0===(s=ae().intersection(a.coordinates,o.coordinates)).length||!(1===s.length?he(s[0]):ue(s))))}catch(l){return e instanceof L.Polygon&&console.error("You can't cut polygons with self-intersections"),!1}var n,r,a,o,s})).forEach((function(i){var r;if(i instanceof L.Polygon){var a=(r=L.polygon(i.getLatLngs())).getLatLngs();n.forEach((function(t){if(t&&t.snapInfo){var i=t.latlng,n=e._calcClosestLayer(i,[r]);if(n&&n.segment&&n.distance<e.options.snapDistance){var o=n.segment;if(o&&2===o.length){var s=L.PM.Utils._getIndexFromSegment(a,o),l=s.indexPath,h=s.parentPath,u=s.newIndex;(l.length>1?R()(a,h):a).splice(u,0,i)}}}}))}else r=i;var o=e._cutLayer(t,r),s=L.geoJSON(o,i.options);if(1===s.getLayers().length){var l=s.getLayers();s=fe(l,1)[0]}e._setPane(s,"layerPane");var h=s.addTo(e._map.pm._getContainingLayer());if(h.pm.enable(i.pm.options),h.pm.disable(),i._pmTempLayer=!0,t._pmTempLayer=!0,i.remove(),i.removeFrom(e._map.pm._getContainingLayer()),t.remove(),t.removeFrom(e._map.pm._getContainingLayer()),h.getLayers&&0===h.getLayers().length&&e._map.pm.removeLayer({target:h}),h instanceof L.LayerGroup?(h.eachLayer((function(t){e._addDrawnLayerProp(t)})),e._addDrawnLayerProp(h)):e._addDrawnLayerProp(h),e.options.layersToCut&&L.Util.isArray(e.options.layersToCut)&&e.options.layersToCut.length>0){var u=e.options.layersToCut.indexOf(i);u>-1&&e.options.layersToCut.splice(u,1)}e._editedLayers.push({layer:h,originalLayer:i})}))},_cutLayer:function(t,e){var i,n,r,a,o,s,l=L.geoJSON();if(e instanceof L.Polygon)n=e.toGeoJSON(15),r=t.toGeoJSON(15),a=se(n),o=se(r),i=0===(s=ae().difference(a.coordinates,o.coordinates)).length?null:1===s.length?he(s[0]):ue(s);else{var h=pe(e);h.forEach((function(e){var i=Xt(e,t.toGeoJSON(15));(i&&i.features.length>0?L.geoJSON(i):L.geoJSON(e)).getLayers().forEach((function(e){te(t.toGeoJSON(15),e.toGeoJSON(15))||e.addTo(l)}))})),i=h.length>1?de(l):l.toGeoJSON(15)}return i},_change:L.Util.falseFn}),at.Text=at.extend({initialize:function(t){this._map=t,this._shape="Text",this.toolbarButtonName="drawText"},enable:function(t){L.Util.setOptions(this,t),this._enabled=!0,this._map.on("click",this._createMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._hintMarker=L.marker(this._map.getCenter(),{interactive:!1,zIndexOffset:100,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(I("tooltips.placeText"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._layer=this._hintMarker,this._map.on("mousemove",this._syncHintMarker,this),this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map.off("click",this._createMarker,this),this._hintMarker.remove(),this._map.off("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}},_createMarker:function(t){var e;if(t.latlng&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var i=this._hintMarker.getLatLng();if(this.textArea=this._createTextArea(),null!==(e=this.options.textOptions)&&void 0!==e&&e.className){var n,r=this.options.textOptions.className.split(" ");(n=this.textArea.classList).add.apply(n,_e(r))}var a=this._createTextIcon(this.textArea),o=new L.Marker(i,{textMarker:!0,_textMarkerOverPM:!0,icon:a});if(this._setPane(o,"markerPane"),this._finishLayer(o),o.pm||(o.options.draggable=!1),o.addTo(this._map.pm._getContainingLayer()),o.pm){var s,l,h,u,c;o.pm.textArea=this.textArea,L.setOptions(o.pm,{removeIfEmpty:null===(s=null===(l=this.options.textOptions)||void 0===l?void 0:l.removeIfEmpty)||void 0===s||s});var p=null===(h=null===(u=this.options.textOptions)||void 0===u?void 0:u.focusAfterDraw)||void 0===h||h;o.pm._createTextMarker(p),null!==(c=this.options.textOptions)&&void 0!==c&&c.text&&o.pm.setText(this.options.textOptions.text)}this._fireCreate(o),this._cleanupSnapping(),this.disable(),this.options.continueDrawing&&this.enable()}},_createTextArea:function(){var t=document.createElement("textarea");return t.autofocus=!0,t.readOnly=!0,t.classList.add("pm-textarea","pm-disabled"),t},_createTextIcon:function(t){return L.divIcon({className:"pm-text-marker",html:t})}});const ye={enableLayerDrag:function(){if(this.options.draggable&&this._layer._map){this.disable(),this._layerDragEnabled=!0,this._map||(this._map=this._layer._map),(this._layer instanceof L.Marker||this._layer instanceof L.ImageOverlay)&&L.DomEvent.on(this._getDOMElem(),"dragstart",this._stopDOMImageDrag),this._layer.dragging&&this._layer.dragging.disable(),this._tempDragCoord=null,V(this._layer)instanceof L.Canvas?(this._layer.on("mouseout",this.removeDraggingClass,this),this._layer.on("mouseover",this.addDraggingClass,this)):this.addDraggingClass(),this._originalMapDragState=this._layer._map.dragging._enabled,this._safeToCacheDragState=!0;var t=this._getDOMElem();t&&(V(this._layer)instanceof L.Canvas?(this._layer.on("touchstart mousedown",this._dragMixinOnMouseDown,this),this._map.pm._addTouchEvents(t)):L.DomEvent.on(t,"touchstart mousedown",this._simulateMouseDownEvent,this)),this._fireDragEnable()}},disableLayerDrag:function(){this._layerDragEnabled=!1,V(this._layer)instanceof L.Canvas?(this._layer.off("mouseout",this.removeDraggingClass,this),this._layer.off("mouseover",this.addDraggingClass,this)):this.removeDraggingClass(),this._originalMapDragState&&this._dragging&&this._map.dragging.enable(),this._safeToCacheDragState=!1,this._layer.dragging&&this._layer.dragging.disable();var t=this._getDOMElem();t&&(V(this._layer)instanceof L.Canvas?(this._layer.off("touchstart mousedown",this._dragMixinOnMouseDown,this),this._map.pm._removeTouchEvents(t)):L.DomEvent.off(t,"touchstart mousedown",this._simulateMouseDownEvent,this)),this._layerDragged&&this._fireUpdate(),this._layerDragged=!1,this._fireDragDisable()},dragging:function(){return this._dragging},layerDragEnabled:function(){return!!this._layerDragEnabled},_simulateMouseDownEvent:function(t){var e={originalEvent:t,target:this._layer},i=t.touches?t.touches[0]:t;return e.containerPoint=this._map.mouseEventToContainerPoint(i),e.latlng=this._map.containerPointToLatLng(e.containerPoint),this._dragMixinOnMouseDown(e),!1},_simulateMouseMoveEvent:function(t){var e={originalEvent:t,target:this._layer},i=t.touches?t.touches[0]:t;return e.containerPoint=this._map.mouseEventToContainerPoint(i),e.latlng=this._map.containerPointToLatLng(e.containerPoint),this._dragMixinOnMouseMove(e),!1},_simulateMouseUpEvent:function(t){var e={originalEvent:t,target:this._layer};return-1===t.type.indexOf("touch")&&(e.containerPoint=this._map.mouseEventToContainerPoint(t),e.latlng=this._map.containerPointToLatLng(e.containerPoint)),this._dragMixinOnMouseUp(e),!1},_dragMixinOnMouseDown:function(t){if(!(t.originalEvent.button>0)){this._overwriteEventIfItComesFromMarker(t);var e=t._fromLayerSync,i=this._syncLayers("_dragMixinOnMouseDown",t);this._layer instanceof L.Marker&&(!this.options.snappable||e||i?this._disableSnapping():this._initSnappableMarkers()),this._layer instanceof L.CircleMarker&&!(this._layer instanceof L.Circle)&&(!this.options.snappable||e||i?this._layer.pm.options.editable?this._layer.pm._disableSnapping():this._layer.pm._disableSnappingDrag():this._layer.pm.options.editable||this._initSnappableMarkersDrag()),this._safeToCacheDragState&&(this._originalMapDragState=this._layer._map.dragging._enabled,this._safeToCacheDragState=!1),this._tempDragCoord=t.latlng,L.DomEvent.on(this._map.getContainer(),"touchend mouseup",this._simulateMouseUpEvent,this),L.DomEvent.on(this._map.getContainer(),"touchmove mousemove",this._simulateMouseMoveEvent,this)}},_dragMixinOnMouseMove:function(t){this._overwriteEventIfItComesFromMarker(t);var e=this._getDOMElem();this._syncLayers("_dragMixinOnMouseMove",t),this._dragging||(this._dragging=!0,L.DomUtil.addClass(e,"leaflet-pm-dragging"),this._layer instanceof L.Marker||this._layer.bringToFront(),this._originalMapDragState&&this._map.dragging.disable(),this._fireDragStart()),this._tempDragCoord||(this._tempDragCoord=t.latlng),this._onLayerDrag(t),this._layer instanceof L.CircleMarker&&this._layer.pm._updateHiddenPolyCircle()},_dragMixinOnMouseUp:function(t){var e=this,i=this._getDOMElem();return this._syncLayers("_dragMixinOnMouseUp",t),this._originalMapDragState&&this._map.dragging.enable(),this._safeToCacheDragState=!0,L.DomEvent.off(this._map.getContainer(),"touchmove mousemove",this._simulateMouseMoveEvent,this),L.DomEvent.off(this._map.getContainer(),"touchend mouseup",this._simulateMouseUpEvent,this),!!this._dragging&&(this._layer instanceof L.CircleMarker&&this._layer.pm._updateHiddenPolyCircle(),this._layerDragged=!0,window.setTimeout((function(){e._dragging=!1,i&&L.DomUtil.removeClass(i,"leaflet-pm-dragging"),e._fireDragEnd(),e._fireEdit()}),10),!0)},_onLayerDrag:function(t){var e=t.latlng,i=e.lat-this._tempDragCoord.lat,n=e.lng-this._tempDragCoord.lng,r=function u(t){return t.map((function(t){if(Array.isArray(t))return u(t);var e={lat:t.lat+i,lng:t.lng+n};return(t.alt||0===t.alt)&&(e.alt=t.alt),e}))};if(this._layer instanceof L.Circle||this._layer instanceof L.CircleMarker&&this._layer.options.editable){var a=r([this._layer.getLatLng()]);this._layer.setLatLng(a[0]),this._fireChange(this._layer.getLatLng(),"Edit")}else if(this._layer instanceof L.CircleMarker||this._layer instanceof L.Marker){var o=this._layer.getLatLng();this._layer._snapped&&(o=this._layer._orgLatLng);var s=r([o]);this._layer.setLatLng(s[0]),this._fireChange(this._layer.getLatLng(),"Edit")}else if(this._layer instanceof L.ImageOverlay){var l=r([this._layer.getBounds().getNorthWest(),this._layer.getBounds().getSouthEast()]);this._layer.setBounds(l),this._fireChange(this._layer.getBounds(),"Edit")}else{var h=r(this._layer.getLatLngs());this._layer.setLatLngs(h),this._fireChange(this._layer.getLatLngs(),"Edit")}this._tempDragCoord=e,t.layer=this._layer,this._fireDrag(t)},addDraggingClass:function(){var t=this._getDOMElem();t&&L.DomUtil.addClass(t,"leaflet-pm-draggable")},removeDraggingClass:function(){var t=this._getDOMElem();t&&L.DomUtil.removeClass(t,"leaflet-pm-draggable")},_getDOMElem:function(){var t=null;return this._layer._path?t=this._layer._path:this._layer._renderer&&this._layer._renderer._container?t=this._layer._renderer._container:this._layer._image?t=this._layer._image:this._layer._icon&&(t=this._layer._icon),t},_overwriteEventIfItComesFromMarker:function(t){t.target.getLatLng&&(!t.target._radius||t.target._radius<=10)&&(t.containerPoint=this._map.mouseEventToContainerPoint(t.originalEvent),t.latlng=this._map.containerPointToLatLng(t.containerPoint))},_syncLayers:function(t,e){var i=this;if(this.enabled())return!1;if(!e._fromLayerSync&&this._layer===e.target&&this.options.syncLayersOnDrag){e._fromLayerSync=!0;var n=[];if(L.Util.isArray(this.options.syncLayersOnDrag))n=this.options.syncLayersOnDrag,this.options.syncLayersOnDrag.forEach((function(t){t instanceof L.LayerGroup&&(n=n.concat(t.pm.getLayers(!0)))}));else if(!0===this.options.syncLayersOnDrag&&this._parentLayerGroup)for(var r in this._parentLayerGroup){var a=this._parentLayerGroup[r];a.pm&&(n=a.pm.getLayers(!0))}return L.Util.isArray(n)&&n.length>0&&(n=n.filter((function(t){return!!t.pm})).filter((function(t){return!!t.pm.options.draggable}))).forEach((function(n){n!==i._layer&&n.pm[t]&&(n._snapped=!1,n.pm[t](e))})),n.length>0}return!1},_stopDOMImageDrag:function(t){return t.preventDefault(),!1}};function ve(t,e,i){var n=i.getMaxZoom();if(n===Infinity&&(n=i.getZoom()),L.Util.isArray(t)){var r=[];return t.forEach((function(t){r.push(ve(t,e,i))})),r}return t instanceof L.LatLng?function(t,e,i,n){return i.unproject(e.transform(i.project(t,n)),n)}(t,e,i,n):null}function Le(t,e){e instanceof L.Layer&&(e=e.getLatLng());var i=t.getMaxZoom();return i===Infinity&&(i=t.getZoom()),t.project(e,i)}function be(t,e){var i=t.getMaxZoom();return i===Infinity&&(i=t.getZoom()),t.unproject(e,i)}var ke={_onRotateStart:function(t){this._preventRenderingMarkers(!0),this._rotationOriginLatLng=this._getRotationCenter().clone(),this._rotationOriginPoint=Le(this._map,this._rotationOriginLatLng),this._rotationStartPoint=Le(this._map,t.target.getLatLng()),this._initialRotateLatLng=U(this._layer),this._startAngle=this.getAngle();var e=U(this._rotationLayer,this._rotationLayer.pm._rotateOrgLatLng);this._fireRotationStart(this._rotationLayer,e),this._fireRotationStart(this._map,e)},_onRotate:function(t){var e=Le(this._map,t.target.getLatLng()),i=this._rotationStartPoint,n=this._rotationOriginPoint,r=Math.atan2(e.y-n.y,e.x-n.x)-Math.atan2(i.y-n.y,i.x-n.x);this._layer.setLatLngs(this._rotateLayer(r,this._initialRotateLatLng,this._rotationOriginLatLng,L.PM.Matrix.init(),this._map));var a=this;!function h(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[],i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:-1;if(i>-1&&e.push(i),L.Util.isArray(t[0]))t.forEach((function(t,i){return h(t,e.slice(),i)}));else{var n=R()(a._markers,e);t.forEach((function(t,e){n[e].setLatLng(t)}))}}(this._layer.getLatLngs());var o=U(this._rotationLayer);this._rotationLayer.setLatLngs(this._rotateLayer(r,this._rotationLayer.pm._rotateOrgLatLng,this._rotationOriginLatLng,L.PM.Matrix.init(),this._map));var s=180*r/Math.PI,l=(s=s<0?s+360:s)+this._startAngle;this._setAngle(l),this._rotationLayer.pm._setAngle(l),this._fireRotation(this._rotationLayer,s,o),this._fireRotation(this._map,s,o),this._rotationLayer.pm._fireChange(this._rotationLayer.getLatLngs(),"Rotation")},_onRotateEnd:function(){var t=this._startAngle;delete this._rotationOriginLatLng,delete this._rotationOriginPoint,delete this._rotationStartPoint,delete this._initialRotateLatLng,delete this._startAngle;var e=U(this._rotationLayer,this._rotationLayer.pm._rotateOrgLatLng);this._rotationLayer.pm._rotateOrgLatLng=U(this._rotationLayer),this._fireRotationEnd(this._rotationLayer,t,e),this._fireRotationEnd(this._map,t,e),this._rotationLayer.pm._fireEdit(this._rotationLayer,"Rotation"),this._preventRenderingMarkers(!1),this._layerRotated=!0},_rotateLayer:function(t,e,i,n,r){var a=Le(r,i);return this._matrix=n.clone().rotate(t,a).flip(),ve(e,this._matrix,r)},_setAngle:function(t){t=t<0?t+360:t,this._angle=t%360},_getRotationCenter:function(){var t=L.polygon(this._layer.getLatLngs(),{stroke:!1,fill:!1,pmIgnore:!0}).addTo(this._layer._map),e=t.getCenter();return t.removeFrom(this._layer._map),e},enableRotate:function(){if(this.options.allowRotation){this._rotatePoly=L.polygon(this._layer.getLatLngs(),{fill:!1,stroke:!1,pmIgnore:!1,snapIgnore:!0}).addTo(this._layer._map),this._rotatePoly.pm._setAngle(this.getAngle()),this._rotatePoly.pm.setOptions(this._layer._map.pm.getGlobalOptions()),this._rotatePoly.pm.setOptions({rotate:!0,snappable:!1,hideMiddleMarkers:!0}),this._rotatePoly.pm._rotationLayer=this._layer,this._rotatePoly.pm.enable(),this._rotateOrgLatLng=U(this._layer),this._rotateEnabled=!0,this._layer.on("remove",this.disableRotate,this),this._fireRotationEnable(this._layer),this._fireRotationEnable(this._layer._map)}else this.disableRotate()},disableRotate:function(){this.rotateEnabled()&&(this._rotatePoly.pm._layerRotated&&this._fireUpdate(),this._rotatePoly.pm._layerRotated=!1,this._rotatePoly.pm.disable(),this._rotatePoly.remove(),this._rotatePoly.pm.setOptions({rotate:!1}),this._rotatePoly=undefined,this._rotateOrgLatLng=undefined,this._layer.off("remove",this.disableRotate,this),this._rotateEnabled=!1,this._fireRotationDisable(this._layer),this._fireRotationDisable(this._layer._map))},rotateEnabled:function(){return this._rotateEnabled},rotateLayer:function(t){var e=this.getAngle(),i=this._layer.getLatLngs(),n=t*(Math.PI/180);this._layer.setLatLngs(this._rotateLayer(n,this._layer.getLatLngs(),this._getRotationCenter(),L.PM.Matrix.init(),this._layer._map)),this._rotateOrgLatLng=L.polygon(this._layer.getLatLngs()).getLatLngs(),this._setAngle(this.getAngle()+t),this.rotateEnabled()&&this._rotatePoly&&this._rotatePoly.pm.enabled()&&(this._rotatePoly.setLatLngs(this._rotateLayer(n,this._rotatePoly.getLatLngs(),this._getRotationCenter(),L.PM.Matrix.init(),this._rotatePoly._map)),this._rotatePoly.pm._initMarkers());var r=this.getAngle()-e;r=r<0?r+360:r,this._startAngle=e,this._fireRotation(this._layer,r,i,this._layer),this._fireRotation(this._map,r,i,this._layer),delete this._startAngle,this._fireChange(this._layer.getLatLngs(),"Rotation")},rotateLayerToAngle:function(t){var e=t-this.getAngle();this.rotateLayer(e)},getAngle:function(){return this._angle||0}};const Me=ke;const xe=L.Class.extend({includes:[ye,rt,Me,S],options:{snappable:!0,snapDistance:20,allowSelfIntersection:!0,allowSelfIntersectionEdit:!1,preventMarkerRemoval:!1,removeLayerBelowMinVertexCount:!0,limitMarkersToCount:-1,hideMiddleMarkers:!1,snapSegment:!0,syncLayersOnDrag:!1,draggable:!0,allowEditing:!0,allowRemoval:!0,allowCutting:!0,allowRotation:!0,addVertexOn:"click",removeVertexOn:"contextmenu",removeVertexValidation:undefined,addVertexValidation:undefined,moveVertexValidation:undefined},setOptions:function(t){L.Util.setOptions(this,t)},getOptions:function(){return this.options},applyOptions:function(){},isPolygon:function(){return this._layer instanceof L.Polygon},getShape:function(){return this._shape},_setPane:function(t,e){"layerPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.layerPane||"overlayPane":"vertexPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.vertexPane||"markerPane":"markerPane"===e&&(t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.markerPane||"markerPane")},remove:function(){(this._map||this._layer._map).pm.removeLayer({target:this._layer})},_vertexValidation:function(t,e){var i=e.target,n={layer:this._layer,marker:i,event:e},r="";return"move"===t?r="moveVertexValidation":"add"===t?r="addVertexValidation":"remove"===t&&(r="removeVertexValidation"),this.options[r]&&"function"==typeof this.options[r]&&!this.options[r](n)?("move"===t&&(i._cancelDragEventChain=i.getLatLng()),!1):(i._cancelDragEventChain=null,!0)},_vertexValidationDrag:function(t){return!t._cancelDragEventChain||(t._latlng=t._cancelDragEventChain,t.update(),!1)},_vertexValidationDragEnd:function(t){return!t._cancelDragEventChain||(t._cancelDragEventChain=null,!1)}});function we(t){return function(t){if(Array.isArray(t))return Ce(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return Ce(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ce(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}xe.LayerGroup=L.Class.extend({initialize:function(t){var e=this;this._layerGroup=t,this._layers=this.getLayers(),this._getMap(),this._layers.forEach((function(t){return e._initLayer(t)}));this._layerGroup.on("layeradd",L.Util.throttle((function(t){if(!t.layer._pmTempLayer){e._layers=e.getLayers();var i=e._layers.filter((function(t){return!t.pm._parentLayerGroup||!(e._layerGroup._leaflet_id in t.pm._parentLayerGroup)}));i.forEach((function(t){e._initLayer(t)})),i.length>0&&e._getMap()&&e._getMap().pm.globalEditModeEnabled()&&e.enabled()&&e.enable(e.getOptions())}}),100,this),this),this._layerGroup.on("layerremove",(function(t){e._removeLayerFromGroup(t.target)}),this);this._layerGroup.on("layerremove",L.Util.throttle((function(t){t.target._pmTempLayer||(e._layers=e.getLayers())}),100,this),this)},enable:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];0===e.length&&(this._layers=this.getLayers()),this._options=t,this._layers.forEach((function(i){i instanceof L.LayerGroup?-1===e.indexOf(i._leaflet_id)&&(e.push(i._leaflet_id),i.pm.enable(t,e)):i.pm.enable(t)}))},disable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];0===t.length&&(this._layers=this.getLayers()),this._layers.forEach((function(e){e instanceof L.LayerGroup?-1===t.indexOf(e._leaflet_id)&&(t.push(e._leaflet_id),e.pm.disable(t)):e.pm.disable()}))},enabled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];0===t.length&&(this._layers=this.getLayers());var e=this._layers.find((function(e){return e instanceof L.LayerGroup?-1===t.indexOf(e._leaflet_id)&&(t.push(e._leaflet_id),e.pm.enabled(t)):e.pm.enabled()}));return!!e},toggleEdit:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];0===e.length&&(this._layers=this.getLayers()),this._options=t,this._layers.forEach((function(i){i instanceof L.LayerGroup?-1===e.indexOf(i._leaflet_id)&&(e.push(i._leaflet_id),i.pm.toggleEdit(t,e)):i.pm.toggleEdit(t)}))},_initLayer:function(t){var e=L.Util.stamp(this._layerGroup);t.pm._parentLayerGroup||(t.pm._parentLayerGroup={}),t.pm._parentLayerGroup[e]=this._layerGroup},_removeLayerFromGroup:function(t){if(t.pm&&t.pm._layerGroup){var e=L.Util.stamp(this._layerGroup);delete t.pm._layerGroup[e]}},dragging:function(){if(this._layers=this.getLayers(),this._layers){var t=this._layers.find((function(t){return t.pm.dragging()}));return!!t}return!1},getOptions:function(){return this.options},_getMap:function(){var t;return this._map||(null===(t=this._layers.find((function(t){return!!t._map})))||void 0===t?void 0:t._map)||null},getLayers:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0],e=!(arguments.length>1&&arguments[1]!==undefined)||arguments[1],i=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2],n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[],r=[];return t?this._layerGroup.getLayers().forEach((function(t){r.push(t),t instanceof L.LayerGroup&&-1===n.indexOf(t._leaflet_id)&&(n.push(t._leaflet_id),r=r.concat(t.pm.getLayers(!0,!0,!0,n)))})):r=this._layerGroup.getLayers(),i&&(r=r.filter((function(t){return!(t instanceof L.LayerGroup)}))),e&&(r=(r=(r=r.filter((function(t){return!!t.pm}))).filter((function(t){return!t._pmTempLayer}))).filter((function(t){return!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore}))),r},setOptions:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];0===e.length&&(this._layers=this.getLayers()),this.options=t,this._layers.forEach((function(i){i.pm&&(i instanceof L.LayerGroup?-1===e.indexOf(i._leaflet_id)&&(e.push(i._leaflet_id),i.pm.setOptions(t,e)):i.pm.setOptions(t))}))}}),xe.Marker=xe.extend({_shape:"Marker",initialize:function(t){this._layer=t,this._enabled=!1,this._layer.on("dragend",this._onDragEnd,this)},enable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{draggable:!0};L.Util.setOptions(this,t),this.options.allowEditing&&this._layer._map?(this._map=this._layer._map,this.enabled()&&this.disable(),this.applyOptions(),this._layer.on("remove",this.disable,this),this._enabled=!0,this._fireEnable()):this.disable()},disable:function(){this.enabled()&&(this.disableLayerDrag(),this._layer.off("remove",this.disable,this),this._layer.off("contextmenu",this._removeMarker,this),this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable(),this._enabled=!1)},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping(),this.options.draggable?this.enableLayerDrag():this.disableLayerDrag(),this.options.preventMarkerRemoval||this._layer.on("contextmenu",this._removeMarker,this)},_removeMarker:function(t){var e=t.target;e.remove(),this._fireRemove(e),this._fireRemove(this._map,e)},_onDragEnd:function(){this._fireEdit(),this._layerEdited=!0},_initSnappableMarkers:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,t.off("pm:drag",this._handleSnapping,this),t.on("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.on("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)},_disableSnapping:function(){var t=this._layer;t.off("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this)}});const Pe={filterMarkerGroup:function(){this.markerCache=[],this.createCache(),this._layer.on("pm:edit",this.createCache,this),this.applyLimitFilters({}),this._layer.on("pm:disable",this._removeMarkerLimitEvents,this),this.options.limitMarkersToCount>-1&&(this._layer.on("pm:vertexremoved",this._initMarkers,this),this._map.on("mousemove",this.applyLimitFilters,this))},_removeMarkerLimitEvents:function(){this._map.off("mousemove",this.applyLimitFilters,this),this._layer.off("pm:edit",this.createCache,this),this._layer.off("pm:disable",this._removeMarkerLimitEvents,this),this._layer.off("pm:vertexremoved",this._initMarkers,this)},createCache:function(){var t=[].concat(we(this._markerGroup.getLayers()),we(this.markerCache));this.markerCache=t.filter((function(t,e,i){return i.indexOf(t)===e}))},renderLimits:function(t){var e=this;this.markerCache.forEach((function(i){t.includes(i)?e._markerGroup.addLayer(i):e._markerGroup.removeLayer(i)}))},applyLimitFilters:function(t){var e=t.latlng,i=void 0===e?{lat:0,lng:0}:e;if(!this._preventRenderMarkers){var n=we(this._filterClosestMarkers(i));this.renderLimits(n)}},_filterClosestMarkers:function(t){var e=we(this.markerCache),i=this.options.limitMarkersToCount;return e.sort((function(e,i){return e._latlng.distanceTo(t)-i._latlng.distanceTo(t)})),e.filter((function(t,e){return!(i>-1)||e<i}))},_preventRenderMarkers:!1,_preventRenderingMarkers:function(t){this._preventRenderMarkers=!!t}};function Ee(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,r,a=[],o=!0,s=!1;try{for(i=i.call(t);!(o=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(l){s=!0,r=l}finally{try{o||null==i["return"]||i["return"]()}finally{if(s)throw r}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Se(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Se(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Se(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function Oe(t){return function(t){if(Array.isArray(t))return De(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return De(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return De(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function De(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}xe.Line=xe.extend({includes:[Pe],_shape:"Line",initialize:function(t){this._layer=t,this._enabled=!1},enable:function(t){L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.options.allowEditing?(this.enabled()&&this.disable(),this._enabled=!0,this._initMarkers(),this.applyOptions(),this._layer.on("remove",this.disable,this),this.options.allowSelfIntersection||this._layer.on("pm:vertexremoved",this._handleSelfIntersectionOnVertexRemoval,this),this.options.allowSelfIntersection?this.cachedColor=undefined:("#f00000ff"!==this._layer.options.color?(this.cachedColor=this._layer.options.color,this.isRed=!1):this.isRed=!0,this._handleLayerStyle()),this._fireEnable()):this.disable())},disable:function(){if(this.enabled()&&!this._dragging){this._enabled=!1,this._markerGroup.clearLayers(),this._markerGroup.removeFrom(this._map),this._layer.off("remove",this.disable,this),this.options.allowSelfIntersection||this._layer.off("pm:vertexremoved",this._handleSelfIntersectionOnVertexRemoval,this);var t=this._layer._path?this._layer._path:this._layer._renderer._container;L.DomUtil.removeClass(t,"leaflet-pm-draggable"),this.hasSelfIntersection()&&L.DomUtil.removeClass(t,"leaflet-pm-invalid"),this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable()}},enabled:function(){return this._enabled},toggleEdit:function(t){return this.enabled()?this.disable():this.enable(t),this.enabled()},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping()},_initMarkers:function(){var t=this,e=this._map,i=this._layer.getLatLngs();this._markerGroup&&this._markerGroup.clearLayers(),this._markerGroup=new L.LayerGroup,this._markerGroup._pmTempLayer=!0;this._markers=function n(e){if(Array.isArray(e[0]))return e.map(n,t);var i=e.map(t._createMarker,t);return!0!==t.options.hideMiddleMarkers&&e.map((function(n,r){var a=t.isPolygon()?(r+1)%e.length:r+1;return t._createMiddleMarker(i[r],i[a])})),i}(i),this.filterMarkerGroup(),e.addLayer(this._markerGroup)},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._pmTempLayer=!0,this.options.rotate?(e.on("dragstart",this._onRotateStart,this),e.on("drag",this._onRotate,this),e.on("dragend",this._onRotateEnd,this)):(e.on("click",this._onVertexClick,this),e.on("dragstart",this._onMarkerDragStart,this),e.on("move",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this.options.preventMarkerRemoval||e.on(this.options.removeVertexOn,this._removeMarker,this)),this._markerGroup.addLayer(e),e},_createMiddleMarker:function(t,e){if(!t||!e)return!1;var i=L.PM.Utils.calcMiddleLatLng(this._map,t.getLatLng(),e.getLatLng()),n=this._createMarker(i),r=L.divIcon({className:"marker-icon marker-icon-middle"});return n.setIcon(r),n.leftM=t,n.rightM=e,t._middleMarkerNext=n,e._middleMarkerPrev=n,n.on(this.options.addVertexOn,this._onMiddleMarkerClick,this),n.on("movestart",this._onMiddleMarkerMoveStart,this),n},_onMiddleMarkerClick:function(t){var e=t.target;if(this._vertexValidation("add",t)){var i=L.divIcon({className:"marker-icon"});e.setIcon(i),this._addMarker(e,e.leftM,e.rightM)}},_onMiddleMarkerMoveStart:function(t){var e=t.target;e.on("moveend",this._onMiddleMarkerMoveEnd,this),this._vertexValidation("add",t)?(e._dragging=!0,this._addMarker(e,e.leftM,e.rightM)):e.on("move",this._onMiddleMarkerMovePrevent,this)},_onMiddleMarkerMovePrevent:function(t){var e=t.target;this._vertexValidationDrag(e)},_onMiddleMarkerMoveEnd:function(t){var e=t.target;if(e.off("move",this._onMiddleMarkerMovePrevent,this),e.off("moveend",this._onMiddleMarkerMoveEnd,this),this._vertexValidationDragEnd(e)){var i=L.divIcon({className:"marker-icon"});e.setIcon(i),setTimeout((function(){delete e._dragging}),100)}},_addMarker:function(t,e,i){t.off("movestart",this._onMiddleMarkerMoveStart,this),t.off(this.options.addVertexOn,this._onMiddleMarkerClick,this);var n=t.getLatLng(),r=this._layer._latlngs;delete t.leftM,delete t.rightM;var a=L.PM.Utils.findDeepMarkerIndex(this._markers,e),o=a.indexPath,s=a.index,l=a.parentPath,h=o.length>1?R()(r,l):r,u=o.length>1?R()(this._markers,l):this._markers;h.splice(s+1,0,n),u.splice(s+1,0,t),this._layer.setLatLngs(r),!0!==this.options.hideMiddleMarkers&&(this._createMiddleMarker(e,t),this._createMiddleMarker(t,i)),this._fireEdit(),this._layerEdited=!0,this._fireChange(this._layer.getLatLngs(),"Edit"),this._fireVertexAdded(t,L.PM.Utils.findDeepMarkerIndex(this._markers,t).indexPath,n),this.options.snappable&&this._initSnappableMarkers()},hasSelfIntersection:function(){return mt(this._layer.toGeoJSON(15)).features.length>0},_handleSelfIntersectionOnVertexRemoval:function(){this._handleLayerStyle(!0),this.hasSelfIntersection()&&(this._layer.setLatLngs(this._coordsBeforeEdit),this._coordsBeforeEdit=null,this._initMarkers())},_handleLayerStyle:function(t){var e=this._layer;if(this.hasSelfIntersection()){if(!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._updateDisabledMarkerStyle(this._markers,!0),this.isRed)return;t?this._flashLayer():(e.setStyle({color:"#f00000ff"}),this.isRed=!0),this._fireIntersect(mt(this._layer.toGeoJSON(15)))}else e.setStyle({color:this.cachedColor}),this.isRed=!1,!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._updateDisabledMarkerStyle(this._markers,!1)},_flashLayer:function(){var t=this;this.cachedColor||(this.cachedColor=this._layer.options.color),this._layer.setStyle({color:"#f00000ff"}),this.isRed=!0,window.setTimeout((function(){t._layer.setStyle({color:t.cachedColor}),t.isRed=!1}),200)},_updateDisabledMarkerStyle:function(t,e){var i=this;t.forEach((function(t){Array.isArray(t)?i._updateDisabledMarkerStyle(t,e):t._icon&&(e&&!i._checkMarkerAllowedToDrag(t)?L.DomUtil.addClass(t._icon,"vertexmarker-disabled"):L.DomUtil.removeClass(t._icon,"vertexmarker-disabled"))}))},_removeMarker:function(t){var e=t.target;if(this._vertexValidation("remove",t)){if(!this.options.allowSelfIntersection){var i=this._layer.getLatLngs();this._coordsBeforeEdit=JSON.parse(JSON.stringify(i))}var n=this._layer.getLatLngs(),r=L.PM.Utils.findDeepMarkerIndex(this._markers,e),a=r.indexPath,o=r.index,s=r.parentPath;if(a){var l=a.length>1?R()(n,s):n,h=a.length>1?R()(this._markers,s):this._markers;if(this.options.removeLayerBelowMinVertexCount||!(l.length<=2||this.isPolygon()&&l.length<=3)){l.splice(o,1),this._layer.setLatLngs(n),this.isPolygon()&&l.length<=2&&l.splice(0,l.length);var u=!1;if(l.length<=1&&(l.splice(0,l.length),this._layer.setLatLngs(n),this.disable(),this.enable(this.options),u=!0),j(n)&&this._layer.remove(),n=A(n),this._layer.setLatLngs(n),this._markers=A(this._markers),!u&&(h=a.length>1?R()(this._markers,s):this._markers,e._middleMarkerPrev&&this._markerGroup.removeLayer(e._middleMarkerPrev),e._middleMarkerNext&&this._markerGroup.removeLayer(e._middleMarkerNext),this._markerGroup.removeLayer(e),h)){var c,p;if(this.isPolygon()?(c=(o+1)%h.length,p=(o+(h.length-1))%h.length):(p=o-1<0?undefined:o-1,c=o+1>=h.length?undefined:o+1),c!==p){var d=h[p],f=h[c];!0!==this.options.hideMiddleMarkers&&this._createMiddleMarker(d,f)}h.splice(o,1)}this._fireEdit(),this._layerEdited=!0,this._fireVertexRemoved(e,a),this._fireChange(this._layer.getLatLngs(),"Edit")}else this._flashLayer()}}},updatePolygonCoordsFromMarkerDrag:function(t){var e=this._layer.getLatLngs(),i=t.getLatLng(),n=L.PM.Utils.findDeepMarkerIndex(this._markers,t),r=n.indexPath,a=n.index,o=n.parentPath;(r.length>1?R()(e,o):e).splice(a,1,i),this._layer.setLatLngs(e)},_getNeighborMarkers:function(t){var e=L.PM.Utils.findDeepMarkerIndex(this._markers,t),i=e.indexPath,n=e.index,r=e.parentPath,a=i.length>1?R()(this._markers,r):this._markers,o=(n+1)%a.length;return{prevMarker:a[(n+(a.length-1))%a.length],nextMarker:a[o]}},_checkMarkerAllowedToDrag:function(t){var e=this._getNeighborMarkers(t),i=e.prevMarker,n=e.nextMarker,r=L.polyline([i.getLatLng(),t.getLatLng()]),a=L.polyline([t.getLatLng(),n.getLatLng()]),o=jt(this._layer.toGeoJSON(15),r.toGeoJSON(15)).features.length,s=jt(this._layer.toGeoJSON(15),a.toGeoJSON(15)).features.length;return t.getLatLng()===this._markers[0][0].getLatLng()?s+=1:t.getLatLng()===this._markers[0][this._markers[0].length-1].getLatLng()&&(o+=1),!(o<=2&&s<=2)},_onMarkerDragStart:function(t){var e=t.target;if(this.cachedColor||(this.cachedColor=this._layer.options.color),this._vertexValidation("move",t)){var i=L.PM.Utils.findDeepMarkerIndex(this._markers,e).indexPath;this._fireMarkerDragStart(t,i),this.options.allowSelfIntersection||(this._coordsBeforeEdit=this._layer.getLatLngs()),!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this.hasSelfIntersection()?this._markerAllowedToDrag=this._checkMarkerAllowedToDrag(e):this._markerAllowedToDrag=null}},_onMarkerDrag:function(t){var e=t.target;if(this._vertexValidationDrag(e)){var i=L.PM.Utils.findDeepMarkerIndex(this._markers,e),n=i.indexPath,r=i.index,a=i.parentPath;if(n){if(!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this.hasSelfIntersection()&&!1===this._markerAllowedToDrag)return this._layer.setLatLngs(this._coordsBeforeEdit),this._initMarkers(),void this._handleLayerStyle();this.updatePolygonCoordsFromMarkerDrag(e);var o=n.length>1?R()(this._markers,a):this._markers,s=(r+1)%o.length,l=(r+(o.length-1))%o.length,h=e.getLatLng(),u=o[l].getLatLng(),c=o[s].getLatLng();if(e._middleMarkerNext){var p=L.PM.Utils.calcMiddleLatLng(this._map,h,c);e._middleMarkerNext.setLatLng(p)}if(e._middleMarkerPrev){var d=L.PM.Utils.calcMiddleLatLng(this._map,h,u);e._middleMarkerPrev.setLatLng(d)}this.options.allowSelfIntersection||this._handleLayerStyle(),this._fireMarkerDrag(t,n),this._fireChange(this._layer.getLatLngs(),"Edit")}}},_onMarkerDragEnd:function(t){var e=t.target;if(this._vertexValidationDragEnd(e)){var i=L.PM.Utils.findDeepMarkerIndex(this._markers,e).indexPath,n=this.hasSelfIntersection();n&&this.options.allowSelfIntersectionEdit&&this._markerAllowedToDrag&&(n=!1);var r=!this.options.allowSelfIntersection&&n;if(this._fireMarkerDragEnd(t,i,r),r)return this._layer.setLatLngs(this._coordsBeforeEdit),this._coordsBeforeEdit=null,this._initMarkers(),this.options.snappable&&this._initSnappableMarkers(),this._handleLayerStyle(),void this._fireLayerReset(t,i);!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._handleLayerStyle(),this._fireEdit(),this._layerEdited=!0,this._fireChange(this._layer.getLatLngs(),"Edit")}},_onVertexClick:function(t){var e=t.target;if(!e._dragging){var i=L.PM.Utils.findDeepMarkerIndex(this._markers,e).indexPath;this._fireVertexClick(t,i)}}}),xe.Polygon=xe.Line.extend({_shape:"Polygon",_checkMarkerAllowedToDrag:function(t){var e=this._getNeighborMarkers(t),i=e.prevMarker,n=e.nextMarker,r=L.polyline([i.getLatLng(),t.getLatLng()]),a=L.polyline([t.getLatLng(),n.getLatLng()]),o=jt(this._layer.toGeoJSON(15),r.toGeoJSON(15)).features.length,s=jt(this._layer.toGeoJSON(15),a.toGeoJSON(15)).features.length;return!(o<=2&&s<=2)}}),xe.Rectangle=xe.Polygon.extend({_shape:"Rectangle",_initMarkers:function(){var t=this,e=this._map,i=this._findCorners();this._markerGroup&&this._markerGroup.clearLayers(),this._markerGroup=new L.LayerGroup,this._markerGroup._pmTempLayer=!0,e.addLayer(this._markerGroup),this._markers=[],this._markers[0]=i.map(this._createMarker,this);var n=Ee(this._markers,1);this._cornerMarkers=n[0],this._layer.getLatLngs()[0].forEach((function(e,i){var n=t._cornerMarkers.find((function(t){return t._index===i}));n&&n.setLatLng(e)}))},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping(),this._addMarkerEvents()},_createMarker:function(t,e){var i=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(i,"vertexPane"),i._origLatLng=t,i._index=e,i._pmTempLayer=!0,this._markerGroup.addLayer(i),i},_addMarkerEvents:function(){var t=this;this._markers[0].forEach((function(e){e.on("dragstart",t._onMarkerDragStart,t),e.on("drag",t._onMarkerDrag,t),e.on("dragend",t._onMarkerDragEnd,t),t.options.preventMarkerRemoval||e.on("contextmenu",t._removeMarker,t)}))},_removeMarker:function(){return null},_onMarkerDragStart:function(t){if(this._vertexValidation("move",t)){var e=t.target,i=this._cornerMarkers;e._oppositeCornerLatLng=i.find((function(t){return t._index===(e._index+2)%4})).getLatLng(),e._snapped=!1,this._fireMarkerDragStart(t)}},_onMarkerDrag:function(t){var e=t.target;this._vertexValidationDrag(e)&&e._index!==undefined&&(this._adjustRectangleForMarkerMove(e),this._fireMarkerDrag(t),this._fireChange(this._layer.getLatLngs(),"Edit"))},_onMarkerDragEnd:function(t){var e=t.target;this._vertexValidationDragEnd(e)&&(this._cornerMarkers.forEach((function(t){delete t._oppositeCornerLatLng})),this._fireMarkerDragEnd(t),this._fireEdit(),this._layerEdited=!0,this._fireChange(this._layer.getLatLngs(),"Edit"))},_adjustRectangleForMarkerMove:function(t){L.extend(t._origLatLng,t._latlng);var e=L.PM.Utils._getRotatedRectangle(t.getLatLng(),t._oppositeCornerLatLng,this._angle||0,this._map);this._layer.setLatLngs(e),this._adjustAllMarkers(),this._layer.redraw()},_adjustAllMarkers:function(){var t=this,e=this._layer.getLatLngs()[0];e&&4!==e.length&&e.length>0?(e.forEach((function(e,i){t._cornerMarkers[i].setLatLng(e)})),this._cornerMarkers.slice(e.length).forEach((function(t){t.setLatLng(e[0])}))):e&&e.length?this._cornerMarkers.forEach((function(t){t.setLatLng(e[t._index])})):console.error("The layer has no LatLngs")},_findCorners:function(){var t=this._layer.getLatLngs()[0];return L.PM.Utils._getRotatedRectangle(t[0],t[2],this._angle||0,this._map)}}),xe.Circle=xe.extend({_shape:"Circle",initialize:function(t){this._layer=t,this._enabled=!1,this._updateHiddenPolyCircle()},enable:function(t){L.Util.setOptions(this,t),this._map=this._layer._map,this.options.allowEditing?(this.enabled()||this.disable(),this._enabled=!0,this._initMarkers(),this.applyOptions(),this._layer.on("remove",this.disable,this),this._updateHiddenPolyCircle(),this._fireEnable()):this.disable()},disable:function(){if(this.enabled()&&!this._dragging){this._centerMarker.off("dragstart",this._onCircleDragStart,this),this._centerMarker.off("drag",this._onCircleDrag,this),this._centerMarker.off("dragend",this._onCircleDragEnd,this),this._outerMarker.off("drag",this._handleOuterMarkerSnapping,this),this._layer.off("remove",this.disable,this),this._enabled=!1,this._helperLayers.clearLayers();var t=this._layer._path?this._layer._path:this._layer._renderer._container;L.DomUtil.removeClass(t,"leaflet-pm-draggable"),this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable()}},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},_initMarkers:function(){var t=this._map;this._helperLayers&&this._helperLayers.clearLayers(),this._helperLayers=new L.LayerGroup,this._helperLayers._pmTempLayer=!0,this._helperLayers.addTo(t);var e=this._layer.getLatLng(),i=this._layer._radius,n=this._getLatLngOnCircle(e,i);this._centerMarker=this._createCenterMarker(e),this._outerMarker=this._createOuterMarker(n),this._markers=[this._centerMarker,this._outerMarker],this._createHintLine(this._centerMarker,this._outerMarker)},applyOptions:function(){this.options.snappable?(this._initSnappableMarkers(),this._outerMarker.on("drag",this._handleOuterMarkerSnapping,this),this._outerMarker.on("move",this._syncHintLine,this),this._outerMarker.on("move",this._syncCircleRadius,this),this._centerMarker.on("move",this._moveCircle,this)):this._disableSnapping()},_createHintLine:function(t,e){var i=t.getLatLng(),n=e.getLatLng();this._hintline=L.polyline([i,n],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._helperLayers.addLayer(this._hintline)},_createCenterMarker:function(t){var e=this._createMarker(t);return L.DomUtil.addClass(e._icon,"leaflet-pm-draggable"),e.on("drag",this._moveCircle,this),e.on("dragstart",this._onCircleDragStart,this),e.on("drag",this._onCircleDrag,this),e.on("dragend",this._onCircleDragEnd,this),e},_createOuterMarker:function(t){var e=this._createMarker(t);return e.on("drag",this._resizeCircle,this),e},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._origLatLng=t,e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("drag",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this._helperLayers.addLayer(e),e},_resizeCircle:function(){this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()),this._syncHintLine(),this._syncCircleRadius()},_moveCircle:function(t){if(!t.target._cancelDragEventChain){var e=t.latlng;this._layer.setLatLng(e);var i=this._layer._radius,n=this._getLatLngOnCircle(e,i);this._outerMarker._latlng=n,this._outerMarker.update(),this._syncHintLine(),this._updateHiddenPolyCircle(),this._fireCenterPlaced("Edit"),this._fireChange(this._layer.getLatLng(),"Edit")}},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.distance(t,e);this.options.minRadiusCircle&&i<this.options.minRadiusCircle?this._layer.setRadius(this.options.minRadiusCircle):this.options.maxRadiusCircle&&i>this.options.maxRadiusCircle?this._layer.setRadius(this.options.maxRadiusCircle):this._layer.setRadius(i),this._updateHiddenPolyCircle(),this._fireChange(this._layer.getLatLng(),"Edit")},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng();this._hintline.setLatLngs([t,e])},_disableSnapping:function(){var t=this;this._markers.forEach((function(e){e.off("move",t._syncHintLine,t),e.off("move",t._syncCircleRadius,t),e.off("drag",t._handleSnapping,t),e.off("dragend",t._cleanupSnapping,t)})),this._layer.off("pm:dragstart",this._unsnap,this)},_onMarkerDragStart:function(t){this._vertexValidation("move",t)&&this._fireMarkerDragStart(t)},_onMarkerDrag:function(t){var e=t.target;this._vertexValidationDrag(e)&&this._fireMarkerDrag(t)},_onMarkerDragEnd:function(t){var e=t.target;this._vertexValidationDragEnd(e)&&(this._fireEdit(),this._layerEdited=!0,this._fireMarkerDragEnd(t))},_onCircleDragStart:function(t){this._vertexValidationDrag(t.target)?(delete this._vertexValidationReset,this._fireDragStart()):this._vertexValidationReset=!0},_onCircleDrag:function(t){this._vertexValidationReset||this._fireDrag(t)},_onCircleDragEnd:function(){this._vertexValidationReset?delete this._vertexValidationReset:this._fireDragEnd()},_updateHiddenPolyCircle:function(){var t=this._map&&this._map.pm._isCRSSimple();this._hiddenPolyCircle?this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(this._layer,200,!t).getLatLngs()):this._hiddenPolyCircle=L.PM.Utils.circleToPolygon(this._layer,200,!t),this._hiddenPolyCircle._parentCopy||(this._hiddenPolyCircle._parentCopy=this._layer)},_getLatLngOnCircle:function(t,e){var i=this._map.project(t),n=L.point(i.x+e,i.y);return this._map.unproject(n)},_getNewDestinationOfOuterMarker:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.distance(t,e);return this.options.minRadiusCircle&&i<this.options.minRadiusCircle?e=z(this._map,t,e,this.options.minRadiusCircle):this.options.maxRadiusCircle&&i>this.options.maxRadiusCircle&&(e=z(this._map,t,e,this.options.maxRadiusCircle)),e},_handleOuterMarkerSnapping:function(){if(this._outerMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.distance(t,e);(this.options.minRadiusCircle&&i<this.options.minRadiusCircle||this.options.maxRadiusCircle&&i>this.options.maxRadiusCircle)&&this._outerMarker.setLatLng(this._outerMarker._orgLatLng)}this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker())}}),xe.CircleMarker=xe.extend({_shape:"CircleMarker",initialize:function(t){this._layer=t,this._enabled=!1,this._updateHiddenPolyCircle()},enable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{draggable:!0,snappable:!0};L.Util.setOptions(this,t),this.options.allowEditing&&this._layer._map?(this._map=this._layer._map,this.enabled()&&this.disable(),this.applyOptions(),this._layer.on("remove",this.disable,this),this._enabled=!0,this._layer.on("pm:dragstart",this._onDragStart,this),this._layer.on("pm:drag",this._onMarkerDrag,this),this._layer.on("pm:dragend",this._onMarkerDragEnd,this),this._updateHiddenPolyCircle(),this._fireEnable()):this.disable()},disable:function(){this._dragging||(this._helperLayers&&this._helperLayers.clearLayers(),this._map||(this._map=this._layer._map),this._map||(this.options.editable?(this._map.off("move",this._syncMarkers,this),this._outerMarker&&this._outerMarker.on("drag",this._handleOuterMarkerSnapping,this)):this._map.off("move",this._updateHiddenPolyCircle,this)),this.disableLayerDrag(),this._layer.off("contextmenu",this._removeMarker,this),this._layer.off("remove",this.disable,this),this.enabled()&&(this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable()),this._enabled=!1)},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},applyOptions:function(){!this.options.editable&&this.options.draggable?this.enableLayerDrag():this.disableLayerDrag(),this.options.editable?(this._initMarkers(),this._map.on("move",this._syncMarkers,this)):this._map.on("move",this._updateHiddenPolyCircle,this),this.options.snappable?this.options.editable?(this._initSnappableMarkers(),this._centerMarker.on("drag",this._moveCircle,this),this.options.editable&&this._outerMarker.on("drag",this._handleOuterMarkerSnapping,this),this._outerMarker.on("move",this._syncHintLine,this),this._outerMarker.on("move",this._syncCircleRadius,this)):this._initSnappableMarkersDrag():this.options.editable?this._disableSnapping():this._disableSnappingDrag(),this.options.preventMarkerRemoval||this._layer.on("contextmenu",this._removeMarker,this)},_initMarkers:function(){var t=this._map;this._helperLayers&&this._helperLayers.clearLayers(),this._helperLayers=new L.LayerGroup,this._helperLayers._pmTempLayer=!0,this._helperLayers.addTo(t);var e=this._layer.getLatLng(),i=this._layer._radius,n=this._getLatLngOnCircle(e,i);this._centerMarker=this._createCenterMarker(e),this._outerMarker=this._createOuterMarker(n),this._markers=[this._centerMarker,this._outerMarker],this._createHintLine(this._centerMarker,this._outerMarker)},_getLatLngOnCircle:function(t,e){var i=this._map.project(t),n=L.point(i.x+e,i.y);return this._map.unproject(n)},_createHintLine:function(t,e){var i=t.getLatLng(),n=e.getLatLng();this._hintline=L.polyline([i,n],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._helperLayers.addLayer(this._hintline)},_createCenterMarker:function(t){var e=this._createMarker(t);return this.options.draggable?L.DomUtil.addClass(e._icon,"leaflet-pm-draggable"):e.dragging.disable(),e},_createOuterMarker:function(t){var e=this._createMarker(t);return e.on("drag",this._resizeCircle,this),e},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._origLatLng=t,e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("drag",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this._helperLayers.addLayer(e),e},_moveCircle:function(){var t=this._centerMarker.getLatLng();this._layer.setLatLng(t);var e=this._layer._radius,i=this._getLatLngOnCircle(t,e);this._outerMarker._latlng=i,this._outerMarker.update(),this._syncHintLine(),this._updateHiddenPolyCircle(),this._fireCenterPlaced("Edit"),this._fireChange(this._layer.getLatLng(),"Edit")},_syncMarkers:function(){var t=this._layer.getLatLng(),e=this._layer._radius,i=this._getLatLngOnCircle(t,e);this._outerMarker.setLatLng(i),this._centerMarker.setLatLng(t),this._syncHintLine(),this._updateHiddenPolyCircle()},_resizeCircle:function(){this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()),this._syncHintLine(),this._syncCircleRadius()},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.project(t).distanceTo(this._map.project(e));this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker?this._layer.setRadius(this.options.minRadiusCircleMarker):this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker?this._layer.setRadius(this.options.maxRadiusCircleMarker):this._layer.setRadius(i),this._updateHiddenPolyCircle(),this._fireChange(this._layer.getLatLng(),"Edit")},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng();this._hintline.setLatLngs([t,e])},_removeMarker:function(){this.options.editable&&this.disable(),this._layer.remove(),this._fireRemove(this._layer),this._fireRemove(this._map,this._layer)},_onDragStart:function(){this._map.pm.Draw.CircleMarker._layerIsDragging=!0},_onMarkerDragStart:function(t){this._vertexValidation("move",t)&&this._fireMarkerDragStart(t)},_onMarkerDrag:function(t){var e=t.target;e instanceof L.Marker&&!this._vertexValidationDrag(e)||this._fireMarkerDrag(t)},_onMarkerDragEnd:function(t){this._map.pm.Draw.CircleMarker._layerIsDragging=!1;var e=t.target;this._vertexValidationDragEnd(e)&&(this.options.editable&&(this._fireEdit(),this._layerEdited=!0),this._fireMarkerDragEnd(t))},_initSnappableMarkersDrag:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,t.off("pm:drag",this._handleSnapping,this),t.on("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.on("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)},_disableSnappingDrag:function(){var t=this._layer;t.off("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this)},_updateHiddenPolyCircle:function(){var t=this._layer._map||this._map;if(t){var e=L.PM.Utils.pxRadiusToMeterRadius(this._layer.getRadius(),t,this._layer.getLatLng()),i=L.circle(this._layer.getLatLng(),this._layer.options);i.setRadius(e);var n=t&&t.pm._isCRSSimple();this._hiddenPolyCircle?this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(i,200,!n).getLatLngs()):this._hiddenPolyCircle=L.PM.Utils.circleToPolygon(i,200,!n),this._hiddenPolyCircle._parentCopy||(this._hiddenPolyCircle._parentCopy=this._layer)}},_getNewDestinationOfOuterMarker:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.project(t).distanceTo(this._map.project(e));return this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker?e=z(this._map,t,e,L.PM.Utils.pxRadiusToMeterRadius(this.options.minRadiusCircleMarker,this._map,t)):this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker&&(e=z(this._map,t,e,L.PM.Utils.pxRadiusToMeterRadius(this.options.maxRadiusCircleMarker,this._map,t))),e},_handleOuterMarkerSnapping:function(){if(this._outerMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),i=this._map.project(t).distanceTo(this._map.project(e));(this.options.minRadiusCircleMarker&&i<this.options.minRadiusCircleMarker||this.options.maxRadiusCircleMarker&&i>this.options.maxRadiusCircleMarker)&&this._outerMarker.setLatLng(this._outerMarker._orgLatLng)}this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker())}}),xe.ImageOverlay=xe.extend({_shape:"ImageOverlay",initialize:function(t){this._layer=t,this._enabled=!1},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},enabled:function(){return this._enabled},enable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{draggable:!0,snappable:!0};L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.options.allowEditing?(this.enabled()||this.disable(),this.enableLayerDrag(),this._layer.on("remove",this.disable,this),this._enabled=!0,this._otherSnapLayers=this._findCorners(),this._fireEnable()):this.disable())},disable:function(){this._dragging||(this._map||(this._map=this._layer._map),this.disableLayerDrag(),this._layer.off("remove",this.disable,this),this.enabled()||(this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable()),this._enabled=!1)},_findCorners:function(){var t=this._layer.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]}}),xe.Text=xe.extend({_shape:"Text",initialize:function(t){this._layer=t,this._enabled=!1},enable:function(t){L.Util.setOptions(this,t),this.textArea&&(this.options.allowEditing&&this._layer._map?(this._map=this._layer._map,this.enabled()&&this.disable(),this.applyOptions(),this._focusChange(),this.textArea.readOnly=!1,this.textArea.classList.remove("pm-disabled"),this._layer.on("remove",this.disable,this),L.DomEvent.on(this.textArea,"input",this._autoResize,this),L.DomEvent.on(this.textArea,"focus",this._focusChange,this),L.DomEvent.on(this.textArea,"blur",this._focusChange,this),this._layer.on("dblclick",L.DomEvent.stop),L.DomEvent.off(this.textArea,"mousedown",this._preventTextSelection),this._enabled=!0,this._fireEnable()):this.disable())},disable:function(){if(this.enabled()){this._layer.off("remove",this.disable,this),L.DomEvent.off(this.textArea,"input",this._autoResize,this),L.DomEvent.off(this.textArea,"focus",this._focusChange,this),L.DomEvent.off(this.textArea,"blur",this._focusChange,this),L.DomEvent.off(document,"click",this._documentClick,this),this._focusChange(),this.textArea.readOnly=!0,this.textArea.classList.add("pm-disabled");var t=document.activeElement;this.textArea.focus(),this.textArea.selectionStart=0,this.textArea.selectionEnd=0,L.DomEvent.on(this.textArea,"mousedown",this._preventTextSelection),t.focus(),this._disableOnBlurActive=!1,this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable(),this._enabled=!1}},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping()},_initSnappableMarkers:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,t.off("pm:drag",this._handleSnapping,this),t.on("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.on("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)},_disableSnapping:function(){var t=this._layer;t.off("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this)},_autoResize:function(){this.textArea.style.height="1px",this.textArea.style.width="1px";var t=this.textArea.scrollHeight>21?this.textArea.scrollHeight:21,e=this.textArea.scrollWidth>16?this.textArea.scrollWidth:16;this.textArea.style.height="".concat(t,"px"),this.textArea.style.width="".concat(e,"px"),this._fireTextChange(this.getText())},_disableOnBlur:function(){var t=this;this._disableOnBlurActive=!0,setTimeout((function(){t.enabled()&&L.DomEvent.on(document,"click",t._documentClick,t)}),100)},_documentClick:function(t){t.target!==this.textArea&&(this.disable(),!this.getText()&&this.options.removeIfEmpty&&this.remove())},_focusChange:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this._hasFocus="focus"===t.type,this._hasFocus?this._applyFocus():this._removeFocus()},_applyFocus:function(){this.textArea.classList.add("pm-hasfocus"),this._map.dragging&&(this._safeToCacheDragState&&(this._originalMapDragState=this._map.dragging._enabled,this._safeToCacheDragState=!1),this._map.dragging.disable())},_removeFocus:function(){this._map.dragging&&(this._originalMapDragState&&this._map.dragging.enable(),this._safeToCacheDragState=!0),this.textArea.classList.remove("pm-hasfocus")},focus:function(){if(!this.enabled())throw new TypeError("Layer is not enabled");this.textArea.focus()},blur:function(){if(!this.enabled())throw new TypeError("Layer is not enabled");this.textArea.blur(),this._disableOnBlurActive&&this.disable()},hasFocus:function(){return this._hasFocus},getElement:function(){return this.textArea},setText:function(t){this.textArea.value=t,this._autoResize()},getText:function(){return this.textArea.value},_initTextMarker:function(){if(this.textArea=L.PM.Draw.Text.prototype._createTextArea.call(this),this.options.className){var t,e=this.options.className.split(" ");(t=this.textArea.classList).add.apply(t,Oe(e))}var i=L.PM.Draw.Text.prototype._createTextIcon.call(this,this.textArea);this._layer.setIcon(i),this._layer.once("add",this._createTextMarker,this)},_createTextMarker:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0];this._layer.getElement().tabIndex=-1,this.textArea.wrap="off",this.textArea.style.overflow="hidden",this.textArea.style.height=L.DomUtil.getStyle(this.textArea,"font-size"),this.textArea.style.width="1px",this._layer.options.text&&this.setText(this._layer.options.text),this._autoResize(),t&&(this.enable(),this.focus(),this._disableOnBlur())},_preventTextSelection:function(t){t.preventDefault()}});var Re=function(t,e,i,n,r,a){this._matrix=[t,e,i,n,r,a]};Re.init=function(){return new L.PM.Matrix(1,0,0,1,0,0)},Re.prototype={transform:function(t){return this._transform(t.clone())},_transform:function(t){var e=this._matrix,i=t.x,n=t.y;return t.x=e[0]*i+e[1]*n+e[4],t.y=e[2]*i+e[3]*n+e[5],t},untransform:function(t){var e=this._matrix;return new L.Point((t.x/e[0]-e[4])/e[0],(t.y/e[2]-e[5])/e[2])},clone:function(){var t=this._matrix;return new L.PM.Matrix(t[0],t[1],t[2],t[3],t[4],t[5])},translate:function(t){return t===undefined?new L.Point(this._matrix[4],this._matrix[5]):("number"==typeof t?(e=t,i=t):(e=t.x,i=t.y),this._add(1,0,0,1,e,i));var e,i},scale:function(t,e){return t===undefined?new L.Point(this._matrix[0],this._matrix[3]):(e=e||L.point(0,0),"number"==typeof t?(i=t,n=t):(i=t.x,n=t.y),this._add(i,0,0,n,e.x,e.y)._add(1,0,0,1,-e.x,-e.y));var i,n},rotate:function(t,e){var i=Math.cos(t),n=Math.sin(t);return e=e||new L.Point(0,0),this._add(i,n,-n,i,e.x,e.y)._add(1,0,0,1,-e.x,-e.y)},flip:function(){return this._matrix[1]*=-1,this._matrix[2]*=-1,this},_add:function(t,e,i,n,r,a){var o,s=[[],[],[]],l=this._matrix,h=[[l[0],l[2],l[4]],[l[1],l[3],l[5]],[0,0,1]],u=[[t,i,r],[e,n,a],[0,0,1]];t&&t instanceof L.PM.Matrix&&(u=[[(l=t._matrix)[0],l[2],l[4]],[l[1],l[3],l[5]],[0,0,1]]);for(var c=0;c<3;c+=1)for(var p=0;p<3;p+=1){o=0;for(var d=0;d<3;d+=1)o+=h[c][d]*u[d][p];s[c][p]=o}return this._matrix=[s[0][0],s[1][0],s[0][1],s[1][1],s[0][2],s[1][2]],this}};const Be=Re;var Te={calcMiddleLatLng:function(t,e,i){var n=t.project(e),r=t.project(i);return t.unproject(n._add(r)._divideBy(2))},findLayers:function(t){var e=[];return t.eachLayer((function(t){(t instanceof L.Polyline||t instanceof L.Marker||t instanceof L.Circle||t instanceof L.CircleMarker||t instanceof L.ImageOverlay)&&e.push(t)})),e=(e=(e=e.filter((function(t){return!!t.pm}))).filter((function(t){return!t._pmTempLayer}))).filter((function(t){return!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore}))},circleToPolygon:function(t){for(var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:60,i=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2],n=t.getLatLng(),r=t.getRadius(),a=N(n,r,e,0,i),o=[],s=0;s<a.length;s+=1){var l=[a[s].lat,a[s].lng];o.push(l)}return L.polygon(o,t.options)},disablePopup:function(t){t.getPopup()&&(t._tempPopupCopy=t.getPopup(),t.unbindPopup())},enablePopup:function(t){t._tempPopupCopy&&(t.bindPopup(t._tempPopupCopy),delete t._tempPopupCopy)},_fireEvent:function(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined&&arguments[3];t.fire(e,i,n);var r=this.getAllParentGroups(t),a=r.groups;a.forEach((function(t){t.fire(e,i,n)}))},getAllParentGroups:function(t){var e=[],i=[];return!t._pmLastGroupFetch||!t._pmLastGroupFetch.time||(new Date).getTime()-t._pmLastGroupFetch.time>1e3?(function n(t){for(var r in t._eventParents)if(-1===e.indexOf(r)){e.push(r);var a=t._eventParents[r];i.push(a),n(a)}}(t),t._pmLastGroupFetch={time:(new Date).getTime(),groups:i,groupIds:e},{groupIds:e,groups:i}):{groups:t._pmLastGroupFetch.groups,groupIds:t._pmLastGroupFetch.groupIds}},createGeodesicPolygon:N,getTranslation:I,findDeepCoordIndex:function(t,e){var i;t.some(function r(t){return function(n,a){var o=t.concat(a);return n.lat&&n.lat===e.lat&&n.lng===e.lng?(i=o,!0):Array.isArray(n)&&n.some(r(o))}}([]));var n={};return i&&(n={indexPath:i,index:i[i.length-1],parentPath:i.slice(0,i.length-1)}),n},findDeepMarkerIndex:function(t,e){var i;t.some(function r(t){return function(n,a){var o=t.concat(a);return n._leaflet_id===e._leaflet_id?(i=o,!0):Array.isArray(n)&&n.some(r(o))}}([]));var n={};return i&&(n={indexPath:i,index:i[i.length-1],parentPath:i.slice(0,i.length-1)}),n},_getIndexFromSegment:function(t,e){if(e&&2===e.length){var i=this.findDeepCoordIndex(t,e[0]),n=this.findDeepCoordIndex(t,e[1]),r=Math.max(i.index,n.index);return 0!==i.index&&0!==n.index||1===r||(r+=1),{indexA:i,indexB:n,newIndex:r,indexPath:i.indexPath,parentPath:i.parentPath}}return null},_getRotatedRectangle:function(t,e,i,n){var r=Le(n,t),a=Le(n,e),o=i*Math.PI/180,s=Math.cos(o),l=Math.sin(o),h=(a.x-r.x)*s+(a.y-r.y)*l,u=(a.y-r.y)*s-(a.x-r.x)*l,c=h*s+r.x,p=h*l+r.y,d=-u*l+r.x,f=u*s+r.y;return[be(n,r),be(n,{x:c,y:p}),be(n,a),be(n,{x:d,y:f})]},pxRadiusToMeterRadius:function(t,e,i){var n=e.project(i),r=L.point(n.x+t,n.y);return e.distance(e.unproject(r),i)}};const Ie=Te;L.PM=L.PM||{version:"2.13.0",Map:K,Toolbar:Q,Draw:at,Edit:xe,Utils:Ie,Matrix:Be,activeLang:"en",optIn:!1,initialize:function(t){this.addInitHooks(t)},setOptIn:function(t){this.optIn=!!t},addInitHooks:function(){L.Map.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Map(this)):this.options.pmIgnore||(this.pm=new L.PM.Map(this))})),L.LayerGroup.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.LayerGroup(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.LayerGroup(this))})),L.Marker.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.options.textMarker?(this.pm=new L.PM.Edit.Text(this),this.options._textMarkerOverPM||this.pm._initTextMarker(),delete this.options._textMarkerOverPM):this.pm=new L.PM.Edit.Marker(this)):this.options.pmIgnore||(this.options.textMarker?(this.pm=new L.PM.Edit.Text(this),this.options._textMarkerOverPM||this.pm._initTextMarker(),delete this.options._textMarkerOverPM):this.pm=new L.PM.Edit.Marker(this))})),L.CircleMarker.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.CircleMarker(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.CircleMarker(this))})),L.Polyline.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Line(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Line(this))})),L.Polygon.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Polygon(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Polygon(this))})),L.Rectangle.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Rectangle(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Rectangle(this))})),L.Circle.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Circle(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Circle(this))})),L.ImageOverlay.addInitHook((function(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.ImageOverlay(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.ImageOverlay(this))}))},reInitLayer:function(t){var e=this;t instanceof L.LayerGroup&&t.eachLayer((function(t){e.reInitLayer(t)})),t.pm||L.PM.optIn&&!1!==t.options.pmIgnore||t.options.pmIgnore||(t instanceof L.Map?t.pm=new L.PM.Map(t):t instanceof L.Marker?t.pm=new L.PM.Edit.Marker(t):t instanceof L.Circle?t.pm=new L.PM.Edit.Circle(t):t instanceof L.CircleMarker?t.pm=new L.PM.Edit.CircleMarker(t):t instanceof L.Rectangle?t.pm=new L.PM.Edit.Rectangle(t):t instanceof L.Polygon?t.pm=new L.PM.Edit.Polygon(t):t instanceof L.Polyline?t.pm=new L.PM.Edit.Line(t):t instanceof L.LayerGroup?t.pm=new L.PM.Edit.LayerGroup(t):t instanceof L.ImageOverlay&&(t.pm=new L.PM.Edit.ImageOverlay(t)))}},L.PM.initialize()},7107:()=>{Array.prototype.findIndex=Array.prototype.findIndex||function(t){if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof t)throw new TypeError("callback must be a function");for(var e=Object(this),i=e.length>>>0,n=arguments[1],r=0;r<i;r++)if(t.call(n,e[r],r,e))return r;return-1},Array.prototype.find=Array.prototype.find||function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("callback must be a function");for(var e=Object(this),i=e.length>>>0,n=arguments[1],r=0;r<i;r++){var a=e[r];if(t.call(n,a,r,e))return a}},"function"!=typeof Object.assign&&(Object.assign=function(t){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");t=Object(t);for(var e=1;e<arguments.length;e++){var i=arguments[e];if(null!=i)for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var i=Object(this),n=i.length>>>0;if(0===n)return!1;var r,a,o=0|e,s=Math.max(o>=0?o:n-Math.abs(o),0);for(;s<n;){if((r=i[s])===(a=t)||"number"==typeof r&&"number"==typeof a&&isNaN(r)&&isNaN(a))return!0;s++}return!1}})},1787:(t,e,i)=>{var n=i(2582),r=i(4102),a=i(1540),o=i(9705).Z,s=a.featureEach,l=(a.coordEach,r.polygon,r.featureCollection);function h(t){var e=new n(t);return e.insert=function(t){if("Feature"!==t.type)throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:o(t),n.prototype.insert.call(this,t)},e.load=function(t){var e=[];return Array.isArray(t)?t.forEach((function(t){if("Feature"!==t.type)throw new Error("invalid features");t.bbox=t.bbox?t.bbox:o(t),e.push(t)})):s(t,(function(t){if("Feature"!==t.type)throw new Error("invalid features");t.bbox=t.bbox?t.bbox:o(t),e.push(t)})),n.prototype.load.call(this,e)},e.remove=function(t,e){if("Feature"!==t.type)throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:o(t),n.prototype.remove.call(this,t,e)},e.clear=function(){return n.prototype.clear.call(this)},e.search=function(t){var e=n.prototype.search.call(this,this.toBBox(t));return l(e)},e.collides=function(t){return n.prototype.collides.call(this,this.toBBox(t))},e.all=function(){var t=n.prototype.all.call(this);return l(t)},e.toJSON=function(){return n.prototype.toJSON.call(this)},e.fromJSON=function(t){return n.prototype.fromJSON.call(this,t)},e.toBBox=function(t){var e;if(t.bbox)e=t.bbox;else if(Array.isArray(t)&&4===t.length)e=t;else if(Array.isArray(t)&&6===t.length)e=[t[0],t[1],t[3],t[4]];else if("Feature"===t.type)e=o(t);else{if("FeatureCollection"!==t.type)throw new Error("invalid geojson");e=o(t)}return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}},e}t.exports=h,t.exports["default"]=h},1989:(t,e,i)=>{var n=i(1789),r=i(401),a=i(7667),o=i(1327),s=i(1866);function l(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype["delete"]=r,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},8407:(t,e,i)=>{var n=i(7040),r=i(4125),a=i(2117),o=i(7518),s=i(4705);function l(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype["delete"]=r,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},7071:(t,e,i)=>{var n=i(852)(i(5639),"Map");t.exports=n},3369:(t,e,i)=>{var n=i(4785),r=i(1285),a=i(6e3),o=i(9916),s=i(5265);function l(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype["delete"]=r,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},6384:(t,e,i)=>{var n=i(8407),r=i(7465),a=i(3779),o=i(7599),s=i(4758),l=i(4309);function h(t){var e=this.__data__=new n(t);this.size=e.size}h.prototype.clear=r,h.prototype["delete"]=a,h.prototype.get=o,h.prototype.has=s,h.prototype.set=l,t.exports=h},2705:(t,e,i)=>{var n=i(5639).Symbol;t.exports=n},1149:(t,e,i)=>{var n=i(5639).Uint8Array;t.exports=n},6874:t=>{t.exports=function(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}},4636:(t,e,i)=>{var n=i(2545),r=i(5694),a=i(1469),o=i(4144),s=i(5776),l=i(6719),h=Object.prototype.hasOwnProperty;t.exports=function(t,e){var i=a(t),u=!i&&r(t),c=!i&&!u&&o(t),p=!i&&!u&&!c&&l(t),d=i||u||c||p,f=d?n(t.length,String):[],g=f.length;for(var _ in t)!e&&!h.call(t,_)||d&&("length"==_||c&&("offset"==_||"parent"==_)||p&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||s(_,g))||f.push(_);return f}},9932:t=>{t.exports=function(t,e){for(var i=-1,n=null==t?0:t.length,r=Array(n);++i<n;)r[i]=e(t[i],i,t);return r}},6556:(t,e,i)=>{var n=i(9465),r=i(7813);t.exports=function(t,e,i){(i!==undefined&&!r(t[e],i)||i===undefined&&!(e in t))&&n(t,e,i)}},4865:(t,e,i)=>{var n=i(9465),r=i(7813),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,i){var o=t[e];a.call(t,e)&&r(o,i)&&(i!==undefined||e in t)||n(t,e,i)}},8470:(t,e,i)=>{var n=i(7813);t.exports=function(t,e){for(var i=t.length;i--;)if(n(t[i][0],e))return i;return-1}},9465:(t,e,i)=>{var n=i(8777);t.exports=function(t,e,i){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[e]=i}},3118:(t,e,i)=>{var n=i(3218),r=Object.create,a=function(){function t(){}return function(e){if(!n(e))return{};if(r)return r(e);t.prototype=e;var i=new t;return t.prototype=undefined,i}}();t.exports=a},8483:(t,e,i)=>{var n=i(5063)();t.exports=n},7786:(t,e,i)=>{var n=i(1811),r=i(327);t.exports=function(t,e){for(var i=0,a=(e=n(e,t)).length;null!=t&&i<a;)t=t[r(e[i++])];return i&&i==a?t:undefined}},4239:(t,e,i)=>{var n=i(2705),r=i(9607),a=i(2333),o=n?n.toStringTag:undefined;t.exports=function(t){return null==t?t===undefined?"[object Undefined]":"[object Null]":o&&o in Object(t)?r(t):a(t)}},8565:t=>{var e=Object.prototype.hasOwnProperty;t.exports=function(t,i){return null!=t&&e.call(t,i)}},9454:(t,e,i)=>{var n=i(4239),r=i(7005);t.exports=function(t){return r(t)&&"[object Arguments]"==n(t)}},8458:(t,e,i)=>{var n=i(3560),r=i(5346),a=i(3218),o=i(346),s=/^\[object .+?Constructor\]$/,l=Function.prototype,h=Object.prototype,u=l.toString,c=h.hasOwnProperty,p=RegExp("^"+u.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||r(t))&&(n(t)?p:s).test(o(t))}},8749:(t,e,i)=>{var n=i(4239),r=i(1780),a=i(7005),o={};o["[object Float32Array]"]=o["[object Float64Array]"]=o["[object Int8Array]"]=o["[object Int16Array]"]=o["[object Int32Array]"]=o["[object Uint8Array]"]=o["[object Uint8ClampedArray]"]=o["[object Uint16Array]"]=o["[object Uint32Array]"]=!0,o["[object Arguments]"]=o["[object Array]"]=o["[object ArrayBuffer]"]=o["[object Boolean]"]=o["[object DataView]"]=o["[object Date]"]=o["[object Error]"]=o["[object Function]"]=o["[object Map]"]=o["[object Number]"]=o["[object Object]"]=o["[object RegExp]"]=o["[object Set]"]=o["[object String]"]=o["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&r(t.length)&&!!o[n(t)]}},313:(t,e,i)=>{var n=i(3218),r=i(5726),a=i(3498),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return a(t);var e=r(t),i=[];for(var s in t)("constructor"!=s||!e&&o.call(t,s))&&i.push(s);return i}},2980:(t,e,i)=>{var n=i(6384),r=i(6556),a=i(8483),o=i(9783),s=i(3218),l=i(1704),h=i(6390);t.exports=function u(t,e,i,c,p){t!==e&&a(e,(function(a,l){if(p||(p=new n),s(a))o(t,e,l,i,u,c,p);else{var d=c?c(h(t,l),a,l+"",t,e,p):undefined;d===undefined&&(d=a),r(t,l,d)}}),l)}},9783:(t,e,i)=>{var n=i(6556),r=i(4626),a=i(7133),o=i(278),s=i(8517),l=i(5694),h=i(1469),u=i(9246),c=i(4144),p=i(3560),d=i(3218),f=i(8630),g=i(6719),_=i(6390),m=i(9881);t.exports=function(t,e,i,y,v,L,b){var k=_(t,i),M=_(e,i),x=b.get(M);if(x)n(t,i,x);else{var w=L?L(k,M,i+"",t,e,b):undefined,C=w===undefined;if(C){var P=h(M),E=!P&&c(M),S=!P&&!E&&g(M);w=M,P||E||S?h(k)?w=k:u(k)?w=o(k):E?(C=!1,w=r(M,!0)):S?(C=!1,w=a(M,!0)):w=[]:f(M)||l(M)?(w=k,l(k)?w=m(k):d(k)&&!p(k)||(w=s(M))):C=!1}C&&(b.set(M,w),v(w,M,y,L,b),b["delete"](M)),n(t,i,w)}}},5976:(t,e,i)=>{var n=i(6557),r=i(5357),a=i(61);t.exports=function(t,e){return a(r(t,e,n),t+"")}},6560:(t,e,i)=>{var n=i(5703),r=i(8777),a=i(6557),o=r?function(t,e){return r(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:a;t.exports=o},2545:t=>{t.exports=function(t,e){for(var i=-1,n=Array(t);++i<t;)n[i]=e(i);return n}},531:(t,e,i)=>{var n=i(2705),r=i(9932),a=i(1469),o=i(3448),s=n?n.prototype:undefined,l=s?s.toString:undefined;t.exports=function h(t){if("string"==typeof t)return t;if(a(t))return r(t,h)+"";if(o(t))return l?l.call(t):"";var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},1717:t=>{t.exports=function(t){return function(e){return t(e)}}},1811:(t,e,i)=>{var n=i(1469),r=i(5403),a=i(5514),o=i(9833);t.exports=function(t,e){return n(t)?t:r(t,e)?[t]:a(o(t))}},4318:(t,e,i)=>{var n=i(1149);t.exports=function(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}},4626:(t,e,i)=>{t=i.nmd(t);var n=i(5639),r=e&&!e.nodeType&&e,a=r&&t&&!t.nodeType&&t,o=a&&a.exports===r?n.Buffer:undefined,s=o?o.allocUnsafe:undefined;t.exports=function(t,e){if(e)return t.slice();var i=t.length,n=s?s(i):new t.constructor(i);return t.copy(n),n}},7133:(t,e,i)=>{var n=i(4318);t.exports=function(t,e){var i=e?n(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.length)}},278:t=>{t.exports=function(t,e){var i=-1,n=t.length;for(e||(e=Array(n));++i<n;)e[i]=t[i];return e}},8363:(t,e,i)=>{var n=i(4865),r=i(9465);t.exports=function(t,e,i,a){var o=!i;i||(i={});for(var s=-1,l=e.length;++s<l;){var h=e[s],u=a?a(i[h],t[h],h,i,t):undefined;u===undefined&&(u=t[h]),o?r(i,h,u):n(i,h,u)}return i}},4429:(t,e,i)=>{var n=i(5639)["__core-js_shared__"];t.exports=n},1463:(t,e,i)=>{var n=i(5976),r=i(6612);t.exports=function(t){return n((function(e,i){var n=-1,a=i.length,o=a>1?i[a-1]:undefined,s=a>2?i[2]:undefined;for(o=t.length>3&&"function"==typeof o?(a--,o):undefined,s&&r(i[0],i[1],s)&&(o=a<3?undefined:o,a=1),e=Object(e);++n<a;){var l=i[n];l&&t(e,l,n,o)}return e}))}},5063:t=>{t.exports=function(t){return function(e,i,n){for(var r=-1,a=Object(e),o=n(e),s=o.length;s--;){var l=o[t?s:++r];if(!1===i(a[l],l,a))break}return e}}},8777:(t,e,i)=>{var n=i(852),r=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=r},1957:(t,e,i)=>{var n="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;t.exports=n},5050:(t,e,i)=>{var n=i(7019);t.exports=function(t,e){var i=t.__data__;return n(e)?i["string"==typeof e?"string":"hash"]:i.map}},852:(t,e,i)=>{var n=i(8458),r=i(7801);t.exports=function(t,e){var i=r(t,e);return n(i)?i:undefined}},5924:(t,e,i)=>{var n=i(5569)(Object.getPrototypeOf,Object);t.exports=n},9607:(t,e,i)=>{var n=i(2705),r=Object.prototype,a=r.hasOwnProperty,o=r.toString,s=n?n.toStringTag:undefined;t.exports=function(t){var e=a.call(t,s),i=t[s];try{t[s]=undefined;var n=!0}catch(l){}var r=o.call(t);return n&&(e?t[s]=i:delete t[s]),r}},7801:t=>{t.exports=function(t,e){return null==t?undefined:t[e]}},222:(t,e,i)=>{var n=i(1811),r=i(5694),a=i(1469),o=i(5776),s=i(1780),l=i(327);t.exports=function(t,e,i){for(var h=-1,u=(e=n(e,t)).length,c=!1;++h<u;){var p=l(e[h]);if(!(c=null!=t&&i(t,p)))break;t=t[p]}return c||++h!=u?c:!!(u=null==t?0:t.length)&&s(u)&&o(p,u)&&(a(t)||r(t))}},1789:(t,e,i)=>{var n=i(4536);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:(t,e,i)=>{var n=i(4536),r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var i=e[t];return"__lodash_hash_undefined__"===i?undefined:i}return r.call(e,t)?e[t]:undefined}},1327:(t,e,i)=>{var n=i(4536),r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?e[t]!==undefined:r.call(e,t)}},1866:(t,e,i)=>{var n=i(4536);t.exports=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=n&&e===undefined?"__lodash_hash_undefined__":e,this}},8517:(t,e,i)=>{var n=i(3118),r=i(5924),a=i(5726);t.exports=function(t){return"function"!=typeof t.constructor||a(t)?{}:n(r(t))}},5776:t=>{var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,i){var n=typeof t;return!!(i=null==i?9007199254740991:i)&&("number"==n||"symbol"!=n&&e.test(t))&&t>-1&&t%1==0&&t<i}},6612:(t,e,i)=>{var n=i(7813),r=i(8612),a=i(5776),o=i(3218);t.exports=function(t,e,i){if(!o(i))return!1;var s=typeof e;return!!("number"==s?r(i)&&a(e,i.length):"string"==s&&e in i)&&n(i[e],t)}},5403:(t,e,i)=>{var n=i(1469),r=i(3448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var i=typeof t;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=t&&!r(t))||(o.test(t)||!a.test(t)||null!=e&&t in Object(e))}},7019:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:(t,e,i)=>{var n,r=i(4429),a=(n=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},5726:t=>{var e=Object.prototype;t.exports=function(t){var i=t&&t.constructor;return t===("function"==typeof i&&i.prototype||e)}},7040:t=>{t.exports=function(){this.__data__=[],this.size=0}},4125:(t,e,i)=>{var n=i(8470),r=Array.prototype.splice;t.exports=function(t){var e=this.__data__,i=n(e,t);return!(i<0)&&(i==e.length-1?e.pop():r.call(e,i,1),--this.size,!0)}},2117:(t,e,i)=>{var n=i(8470);t.exports=function(t){var e=this.__data__,i=n(e,t);return i<0?undefined:e[i][1]}},7518:(t,e,i)=>{var n=i(8470);t.exports=function(t){return n(this.__data__,t)>-1}},4705:(t,e,i)=>{var n=i(8470);t.exports=function(t,e){var i=this.__data__,r=n(i,t);return r<0?(++this.size,i.push([t,e])):i[r][1]=e,this}},4785:(t,e,i)=>{var n=i(1989),r=i(8407),a=i(7071);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||r),string:new n}}},1285:(t,e,i)=>{var n=i(5050);t.exports=function(t){var e=n(this,t)["delete"](t);return this.size-=e?1:0,e}},6e3:(t,e,i)=>{var n=i(5050);t.exports=function(t){return n(this,t).get(t)}},9916:(t,e,i)=>{var n=i(5050);t.exports=function(t){return n(this,t).has(t)}},5265:(t,e,i)=>{var n=i(5050);t.exports=function(t,e){var i=n(this,t),r=i.size;return i.set(t,e),this.size+=i.size==r?0:1,this}},4523:(t,e,i)=>{var n=i(8306);t.exports=function(t){var e=n(t,(function(t){return 500===i.size&&i.clear(),t})),i=e.cache;return e}},4536:(t,e,i)=>{var n=i(852)(Object,"create");t.exports=n},3498:t=>{t.exports=function(t){var e=[];if(null!=t)for(var i in Object(t))e.push(i);return e}},1167:(t,e,i)=>{t=i.nmd(t);var n=i(1957),r=e&&!e.nodeType&&e,a=r&&t&&!t.nodeType&&t,o=a&&a.exports===r&&n.process,s=function(){try{var t=a&&a.require&&a.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(e){}}();t.exports=s},2333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5569:t=>{t.exports=function(t,e){return function(i){return t(e(i))}}},5357:(t,e,i)=>{var n=i(6874),r=Math.max;t.exports=function(t,e,i){return e=r(e===undefined?t.length-1:e,0),function(){for(var a=arguments,o=-1,s=r(a.length-e,0),l=Array(s);++o<s;)l[o]=a[e+o];o=-1;for(var h=Array(e+1);++o<e;)h[o]=a[o];return h[e]=i(l),n(t,this,h)}}},5639:(t,e,i)=>{var n=i(1957),r="object"==typeof self&&self&&self.Object===Object&&self,a=n||r||Function("return this")();t.exports=a},6390:t=>{t.exports=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}},61:(t,e,i)=>{var n=i(6560),r=i(1275)(n);t.exports=r},1275:t=>{var e=Date.now;t.exports=function(t){var i=0,n=0;return function(){var r=e(),a=16-(r-n);if(n=r,a>0){if(++i>=800)return arguments[0]}else i=0;return t.apply(undefined,arguments)}}},7465:(t,e,i)=>{var n=i(8407);t.exports=function(){this.__data__=new n,this.size=0}},3779:t=>{t.exports=function(t){var e=this.__data__,i=e["delete"](t);return this.size=e.size,i}},7599:t=>{t.exports=function(t){return this.__data__.get(t)}},4758:t=>{t.exports=function(t){return this.__data__.has(t)}},4309:(t,e,i)=>{var n=i(8407),r=i(7071),a=i(3369);t.exports=function(t,e){var i=this.__data__;if(i instanceof n){var o=i.__data__;if(!r||o.length<199)return o.push([t,e]),this.size=++i.size,this;i=this.__data__=new a(o)}return i.set(t,e),this.size=i.size,this}},5514:(t,e,i)=>{var n=i(4523),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,o=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(r,(function(t,i,n,r){e.push(n?r.replace(a,"$1"):i||t)})),e}));t.exports=o},327:(t,e,i)=>{var n=i(3448);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},346:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(i){}try{return t+""}catch(i){}}return""}},5703:t=>{t.exports=function(t){return function(){return t}}},7813:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},7361:(t,e,i)=>{var n=i(7786);t.exports=function(t,e,i){var r=null==t?undefined:n(t,e);return r===undefined?i:r}},8721:(t,e,i)=>{var n=i(8565),r=i(222);t.exports=function(t,e){return null!=t&&r(t,e,n)}},6557:t=>{t.exports=function(t){return t}},5694:(t,e,i)=>{var n=i(9454),r=i(7005),a=Object.prototype,o=a.hasOwnProperty,s=a.propertyIsEnumerable,l=n(function(){return arguments}())?n:function(t){return r(t)&&o.call(t,"callee")&&!s.call(t,"callee")};t.exports=l},1469:t=>{var e=Array.isArray;t.exports=e},8612:(t,e,i)=>{var n=i(3560),r=i(1780);t.exports=function(t){return null!=t&&r(t.length)&&!n(t)}},9246:(t,e,i)=>{var n=i(8612),r=i(7005);t.exports=function(t){return r(t)&&n(t)}},4144:(t,e,i)=>{t=i.nmd(t);var n=i(5639),r=i(5062),a=e&&!e.nodeType&&e,o=a&&t&&!t.nodeType&&t,s=o&&o.exports===a?n.Buffer:undefined,l=(s?s.isBuffer:undefined)||r;t.exports=l},3560:(t,e,i)=>{var n=i(4239),r=i(3218);t.exports=function(t){if(!r(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1780:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},8630:(t,e,i)=>{var n=i(4239),r=i(5924),a=i(7005),o=Function.prototype,s=Object.prototype,l=o.toString,h=s.hasOwnProperty,u=l.call(Object);t.exports=function(t){if(!a(t)||"[object Object]"!=n(t))return!1;var e=r(t);if(null===e)return!0;var i=h.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&l.call(i)==u}},3448:(t,e,i)=>{var n=i(4239),r=i(7005);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==n(t)}},6719:(t,e,i)=>{var n=i(8749),r=i(1717),a=i(1167),o=a&&a.isTypedArray,s=o?r(o):n;t.exports=s},1704:(t,e,i)=>{var n=i(4636),r=i(313),a=i(8612);t.exports=function(t){return a(t)?n(t,!0):r(t)}},8306:(t,e,i)=>{var n=i(3369);function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var i=function(){var n=arguments,r=e?e.apply(this,n):n[0],a=i.cache;if(a.has(r))return a.get(r);var o=t.apply(this,n);return i.cache=a.set(r,o)||a,o};return i.cache=new(r.Cache||n),i}r.Cache=n,t.exports=r},2492:(t,e,i)=>{var n=i(2980),r=i(1463)((function(t,e,i){n(t,e,i)}));t.exports=r},5062:t=>{t.exports=function(){return!1}},9881:(t,e,i)=>{var n=i(8363),r=i(1704);t.exports=function(t){return n(t,r(t))}},9833:(t,e,i)=>{var n=i(531);t.exports=function(t){return null==t?"":n(t)}},2676:function(t){t.exports=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}var n=function(){function t(t,e){this.next=null,this.key=t,this.data=e,this.left=null,this.right=null}return t}();function r(t,e){return t>e?1:t<e?-1:0}function a(t,e,i){for(var r=new n(null,null),a=r,o=r;;){var s=i(t,e.key);if(s<0){if(null===e.left)break;if(i(t,e.left.key)<0){var l=e.left;if(e.left=l.right,l.right=e,null===(e=l).left)break}o.left=e,o=e,e=e.left}else{if(!(s>0))break;if(null===e.right)break;if(i(t,e.right.key)>0&&(l=e.right,e.right=l.left,l.left=e,null===(e=l).right))break;a.right=e,a=e,e=e.right}}return a.right=e.left,o.left=e.right,e.left=r.right,e.right=r.left,e}function o(t,e,i,r){var o=new n(t,e);if(null===i)return o.left=o.right=null,o;var s=r(t,(i=a(t,i,r)).key);return s<0?(o.left=i.left,o.right=i,i.left=null):s>=0&&(o.right=i.right,o.left=i,i.right=null),o}function s(t,e,i){var n=null,r=null;if(e){var o=i((e=a(t,e,i)).key,t);0===o?(n=e.left,r=e.right):o<0?(r=e.right,e.right=null,n=e):(n=e.left,e.left=null,r=e)}return{left:n,right:r}}function l(t,e,i){return null===e?t:(null===t||((e=a(t.key,e,i)).left=t),e)}function h(t,e,i,n,r){if(t){n(e+(i?"└── ":"├── ")+r(t)+"\n");var a=e+(i?"    ":"│   ");t.left&&h(t.left,a,!1,n,r),t.right&&h(t.right,a,!0,n,r)}}var u=function(){function t(t){void 0===t&&(t=r),this._root=null,this._size=0,this._comparator=t}return t.prototype.insert=function(t,e){return this._size++,this._root=o(t,e,this._root,this._comparator)},t.prototype.add=function(t,e){var i=new n(t,e);null===this._root&&(i.left=i.right=null,this._size++,this._root=i);var r=this._comparator,o=a(t,this._root,r),s=r(t,o.key);return 0===s?this._root=o:(s<0?(i.left=o.left,i.right=o,o.left=null):s>0&&(i.right=o.right,i.left=o,o.right=null),this._size++,this._root=i),this._root},t.prototype.remove=function(t){this._root=this._remove(t,this._root,this._comparator)},t.prototype._remove=function(t,e,i){var n;return null===e?null:0===i(t,(e=a(t,e,i)).key)?(null===e.left?n=e.right:(n=a(t,e.left,i)).right=e.right,this._size--,n):e},t.prototype.pop=function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=a(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null},t.prototype.findStatic=function(t){for(var e=this._root,i=this._comparator;e;){var n=i(t,e.key);if(0===n)return e;e=n<0?e.left:e.right}return null},t.prototype.find=function(t){return this._root&&(this._root=a(t,this._root,this._comparator),0!==this._comparator(t,this._root.key))?null:this._root},t.prototype.contains=function(t){for(var e=this._root,i=this._comparator;e;){var n=i(t,e.key);if(0===n)return!0;e=n<0?e.left:e.right}return!1},t.prototype.forEach=function(t,e){for(var i=this._root,n=[],r=!1;!r;)null!==i?(n.push(i),i=i.left):0!==n.length?(i=n.pop(),t.call(e,i),i=i.right):r=!0;return this},t.prototype.range=function(t,e,i,n){for(var r=[],a=this._comparator,o=this._root;0!==r.length||o;)if(o)r.push(o),o=o.left;else{if(a((o=r.pop()).key,e)>0)break;if(a(o.key,t)>=0&&i.call(n,o))return this;o=o.right}return this},t.prototype.keys=function(){var t=[];return this.forEach((function(e){var i=e.key;return t.push(i)})),t},t.prototype.values=function(){var t=[];return this.forEach((function(e){var i=e.data;return t.push(i)})),t},t.prototype.min=function(){return this._root?this.minNode(this._root).key:null},t.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},t.prototype.minNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.left;)t=t.left;return t},t.prototype.maxNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.right;)t=t.right;return t},t.prototype.at=function(t){for(var e=this._root,i=!1,n=0,r=[];!i;)if(e)r.push(e),e=e.left;else if(r.length>0){if(e=r.pop(),n===t)return e;n++,e=e.right}else i=!0;return null},t.prototype.next=function(t){var e=this._root,i=null;if(t.right){for(i=t.right;i.left;)i=i.left;return i}for(var n=this._comparator;e;){var r=n(t.key,e.key);if(0===r)break;r<0?(i=e,e=e.left):e=e.right}return i},t.prototype.prev=function(t){var e=this._root,i=null;if(null!==t.left){for(i=t.left;i.right;)i=i.right;return i}for(var n=this._comparator;e;){var r=n(t.key,e.key);if(0===r)break;r<0?e=e.left:(i=e,e=e.right)}return i},t.prototype.clear=function(){return this._root=null,this._size=0,this},t.prototype.toList=function(){return d(this._root)},t.prototype.load=function(t,e,i){void 0===e&&(e=[]),void 0===i&&(i=!1);var n=t.length,r=this._comparator;if(i&&_(t,e,0,n-1,r),null===this._root)this._root=c(t,e,0,n),this._size=n;else{var a=g(this.toList(),p(t,e),r);n=this._size+n,this._root=f({head:a},0,n)}return this},t.prototype.isEmpty=function(){return null===this._root},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),t.prototype.toString=function(t){void 0===t&&(t=function(t){return String(t.key)});var e=[];return h(this._root,"",!0,(function(t){return e.push(t)}),t),e.join("")},t.prototype.update=function(t,e,i){var n=this._comparator,r=s(t,this._root,n),a=r.left,h=r.right;n(t,e)<0?h=o(e,i,h,n):a=o(e,i,a,n),this._root=l(a,h,n)},t.prototype.split=function(t){return s(t,this._root,this._comparator)},t}();function c(t,e,i,r){var a=r-i;if(a>0){var o=i+Math.floor(a/2),s=t[o],l=e[o],h=new n(s,l);return h.left=c(t,e,i,o),h.right=c(t,e,o+1,r),h}return null}function p(t,e){for(var i=new n(null,null),r=i,a=0;a<t.length;a++)r=r.next=new n(t[a],e[a]);return r.next=null,i.next}function d(t){for(var e=t,i=[],r=!1,a=new n(null,null),o=a;!r;)e?(i.push(e),e=e.left):i.length>0?e=(e=o=o.next=i.pop()).right:r=!0;return o.next=null,a.next}function f(t,e,i){var n=i-e;if(n>0){var r=e+Math.floor(n/2),a=f(t,e,r),o=t.head;return o.left=a,t.head=t.head.next,o.right=f(t,r+1,i),o}return null}function g(t,e,i){for(var r=new n(null,null),a=r,o=t,s=e;null!==o&&null!==s;)i(o.key,s.key)<0?(a.next=o,o=o.next):(a.next=s,s=s.next),a=a.next;return null!==o?a.next=o:null!==s&&(a.next=s),r.next}function _(t,e,i,n,r){if(!(i>=n)){for(var a=t[i+n>>1],o=i-1,s=n+1;;){do{o++}while(r(t[o],a)<0);do{s--}while(r(t[s],a)>0);if(o>=s)break;var l=t[o];t[o]=t[s],t[s]=l,l=e[o],e[o]=e[s],e[s]=l}_(t,e,i,s,r),_(t,e,s+1,n,r)}}var m=function(t,e){return t.ll.x<=e.x&&e.x<=t.ur.x&&t.ll.y<=e.y&&e.y<=t.ur.y},y=function(t,e){if(e.ur.x<t.ll.x||t.ur.x<e.ll.x||e.ur.y<t.ll.y||t.ur.y<e.ll.y)return null;var i=t.ll.x<e.ll.x?e.ll.x:t.ll.x,n=t.ur.x<e.ur.x?t.ur.x:e.ur.x;return{ll:{x:i,y:t.ll.y<e.ll.y?e.ll.y:t.ll.y},ur:{x:n,y:t.ur.y<e.ur.y?t.ur.y:e.ur.y}}},v=Number.EPSILON;v===undefined&&(v=Math.pow(2,-52));var L=v*v,b=function(t,e){if(-v<t&&t<v&&-v<e&&e<v)return 0;var i=t-e;return i*i<L*t*e?0:t<e?-1:1},k=function(){function e(){t(this,e),this.reset()}return i(e,[{key:"reset",value:function(){this.xRounder=new M,this.yRounder=new M}},{key:"round",value:function(t,e){return{x:this.xRounder.round(t),y:this.yRounder.round(e)}}}]),e}(),M=function(){function e(){t(this,e),this.tree=new u,this.round(0)}return i(e,[{key:"round",value:function(t){var e=this.tree.add(t),i=this.tree.prev(e);if(null!==i&&0===b(e.key,i.key))return this.tree.remove(t),i.key;var n=this.tree.next(e);return null!==n&&0===b(e.key,n.key)?(this.tree.remove(t),n.key):t}}]),e}(),x=new k,w=function(t,e){return t.x*e.y-t.y*e.x},C=function(t,e){return t.x*e.x+t.y*e.y},P=function(t,e,i){var n={x:e.x-t.x,y:e.y-t.y},r={x:i.x-t.x,y:i.y-t.y},a=w(n,r);return b(a,0)},E=function(t){return Math.sqrt(C(t,t))},S=function(t,e,i){var n={x:e.x-t.x,y:e.y-t.y},r={x:i.x-t.x,y:i.y-t.y};return w(r,n)/E(r)/E(n)},O=function(t,e,i){var n={x:e.x-t.x,y:e.y-t.y},r={x:i.x-t.x,y:i.y-t.y};return C(r,n)/E(r)/E(n)},D=function(t,e,i){return 0===e.y?null:{x:t.x+e.x/e.y*(i-t.y),y:i}},R=function(t,e,i){return 0===e.x?null:{x:i,y:t.y+e.y/e.x*(i-t.x)}},B=function(t,e,i,n){if(0===e.x)return R(i,n,t.x);if(0===n.x)return R(t,e,i.x);if(0===e.y)return D(i,n,t.y);if(0===n.y)return D(t,e,i.y);var r=w(e,n);if(0==r)return null;var a={x:i.x-t.x,y:i.y-t.y},o=w(a,e)/r,s=w(a,n)/r;return{x:(t.x+s*e.x+(i.x+o*n.x))/2,y:(t.y+s*e.y+(i.y+o*n.y))/2}},T=function(){function e(i,n){t(this,e),i.events===undefined?i.events=[this]:i.events.push(this),this.point=i,this.isLeft=n}return i(e,null,[{key:"compare",value:function(t,i){var n=e.comparePoints(t.point,i.point);return 0!==n?n:(t.point!==i.point&&t.link(i),t.isLeft!==i.isLeft?t.isLeft?1:-1:j.compare(t.segment,i.segment))}},{key:"comparePoints",value:function(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}}]),i(e,[{key:"link",value:function(t){if(t.point===this.point)throw new Error("Tried to link already linked events");for(var e=t.point.events,i=0,n=e.length;i<n;i++){var r=e[i];this.point.events.push(r),r.point=this.point}this.checkForConsuming()}},{key:"checkForConsuming",value:function(){for(var t=this.point.events.length,e=0;e<t;e++){var i=this.point.events[e];if(i.segment.consumedBy===undefined)for(var n=e+1;n<t;n++){var r=this.point.events[n];r.consumedBy===undefined&&i.otherSE.point.events===r.otherSE.point.events&&i.segment.consume(r.segment)}}}},{key:"getAvailableLinkedEvents",value:function(){for(var t=[],e=0,i=this.point.events.length;e<i;e++){var n=this.point.events[e];n!==this&&!n.segment.ringOut&&n.segment.isInResult()&&t.push(n)}return t}},{key:"getLeftmostComparator",value:function(t){var e=this,i=new Map,n=function(n){var r=n.otherSE;i.set(n,{sine:S(e.point,t.point,r.point),cosine:O(e.point,t.point,r.point)})};return function(t,e){i.has(t)||n(t),i.has(e)||n(e);var r=i.get(t),a=r.sine,o=r.cosine,s=i.get(e),l=s.sine,h=s.cosine;return a>=0&&l>=0?o<h?1:o>h?-1:0:a<0&&l<0?o<h?-1:o>h?1:0:l<a?-1:l>a?1:0}}}]),e}(),I=0,j=function(){function e(i,n,r,a){t(this,e),this.id=++I,this.leftSE=i,i.segment=this,i.otherSE=n,this.rightSE=n,n.segment=this,n.otherSE=i,this.rings=r,this.windings=a}return i(e,null,[{key:"compare",value:function(t,e){var i=t.leftSE.point.x,n=e.leftSE.point.x,r=t.rightSE.point.x,a=e.rightSE.point.x;if(a<i)return 1;if(r<n)return-1;var o=t.leftSE.point.y,s=e.leftSE.point.y,l=t.rightSE.point.y,h=e.rightSE.point.y;if(i<n){if(s<o&&s<l)return 1;if(s>o&&s>l)return-1;var u=t.comparePoint(e.leftSE.point);if(u<0)return 1;if(u>0)return-1;var c=e.comparePoint(t.rightSE.point);return 0!==c?c:-1}if(i>n){if(o<s&&o<h)return-1;if(o>s&&o>h)return 1;var p=e.comparePoint(t.leftSE.point);if(0!==p)return p;var d=t.comparePoint(e.rightSE.point);return d<0?1:d>0?-1:1}if(o<s)return-1;if(o>s)return 1;if(r<a){var f=e.comparePoint(t.rightSE.point);if(0!==f)return f}if(r>a){var g=t.comparePoint(e.rightSE.point);if(g<0)return 1;if(g>0)return-1}if(r!==a){var _=l-o,m=r-i,y=h-s,v=a-n;if(_>m&&y<v)return 1;if(_<m&&y>v)return-1}return r>a?1:r<a||l<h?-1:l>h?1:t.id<e.id?-1:t.id>e.id?1:0}}]),i(e,[{key:"replaceRightSE",value:function(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}},{key:"bbox",value:function(){var t=this.leftSE.point.y,e=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<e?t:e},ur:{x:this.rightSE.point.x,y:t>e?t:e}}}},{key:"vector",value:function(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}},{key:"isAnEndpoint",value:function(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}},{key:"comparePoint",value:function(t){if(this.isAnEndpoint(t))return 0;var e=this.leftSE.point,i=this.rightSE.point,n=this.vector();if(e.x===i.x)return t.x===e.x?0:t.x<e.x?1:-1;var r=(t.y-e.y)/n.y,a=e.x+r*n.x;if(t.x===a)return 0;var o=(t.x-e.x)/n.x,s=e.y+o*n.y;return t.y===s?0:t.y<s?-1:1}},{key:"getIntersection",value:function(t){var e=this.bbox(),i=t.bbox(),n=y(e,i);if(null===n)return null;var r=this.leftSE.point,a=this.rightSE.point,o=t.leftSE.point,s=t.rightSE.point,l=m(e,o)&&0===this.comparePoint(o),h=m(i,r)&&0===t.comparePoint(r),u=m(e,s)&&0===this.comparePoint(s),c=m(i,a)&&0===t.comparePoint(a);if(h&&l)return c&&!u?a:!c&&u?s:null;if(h)return u&&r.x===s.x&&r.y===s.y?null:r;if(l)return c&&a.x===o.x&&a.y===o.y?null:o;if(c&&u)return null;if(c)return a;if(u)return s;var p=B(r,this.vector(),o,t.vector());return null===p?null:m(n,p)?x.round(p.x,p.y):null}},{key:"split",value:function(t){var i=[],n=t.events!==undefined,r=new T(t,!0),a=new T(t,!1),o=this.rightSE;this.replaceRightSE(a),i.push(a),i.push(r);var s=new e(r,o,this.rings.slice(),this.windings.slice());return T.comparePoints(s.leftSE.point,s.rightSE.point)>0&&s.swapEvents(),T.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),n&&(r.checkForConsuming(),a.checkForConsuming()),i}},{key:"swapEvents",value:function(){var t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(var e=0,i=this.windings.length;e<i;e++)this.windings[e]*=-1}},{key:"consume",value:function(t){for(var i=this,n=t;i.consumedBy;)i=i.consumedBy;for(;n.consumedBy;)n=n.consumedBy;var r=e.compare(i,n);if(0!==r){if(r>0){var a=i;i=n,n=a}if(i.prev===n){var o=i;i=n,n=o}for(var s=0,l=n.rings.length;s<l;s++){var h=n.rings[s],u=n.windings[s],c=i.rings.indexOf(h);-1===c?(i.rings.push(h),i.windings.push(u)):i.windings[c]+=u}n.rings=null,n.windings=null,n.consumedBy=i,n.leftSE.consumedBy=i.leftSE,n.rightSE.consumedBy=i.rightSE}}},{key:"prevInResult",value:function(){return this._prevInResult!==undefined||(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}},{key:"beforeState",value:function(){if(this._beforeState!==undefined)return this._beforeState;if(this.prev){var t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState}},{key:"afterState",value:function(){if(this._afterState!==undefined)return this._afterState;var t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};for(var e=this._afterState.rings,i=this._afterState.windings,n=this._afterState.multiPolys,r=0,a=this.rings.length;r<a;r++){var o=this.rings[r],s=this.windings[r],l=e.indexOf(o);-1===l?(e.push(o),i.push(s)):i[l]+=s}for(var h=[],u=[],c=0,p=e.length;c<p;c++)if(0!==i[c]){var d=e[c],f=d.poly;if(-1===u.indexOf(f))if(d.isExterior)h.push(f);else{-1===u.indexOf(f)&&u.push(f);var g=h.indexOf(d.poly);-1!==g&&h.splice(g,1)}}for(var _=0,m=h.length;_<m;_++){var y=h[_].multiPoly;-1===n.indexOf(y)&&n.push(y)}return this._afterState}},{key:"isInResult",value:function(){if(this.consumedBy)return!1;if(this._isInResult!==undefined)return this._isInResult;var t=this.beforeState().multiPolys,e=this.afterState().multiPolys;switch(q.type){case"union":var i=0===t.length,n=0===e.length;this._isInResult=i!==n;break;case"intersection":var r,a;t.length<e.length?(r=t.length,a=e.length):(r=e.length,a=t.length),this._isInResult=a===q.numMultiPolys&&r<a;break;case"xor":var o=Math.abs(t.length-e.length);this._isInResult=o%2==1;break;case"difference":var s=function(t){return 1===t.length&&t[0].isSubject};this._isInResult=s(t)!==s(e);break;default:throw new Error("Unrecognized operation type found ".concat(q.type))}return this._isInResult}}],[{key:"fromRing",value:function(t,i,n){var r,a,o,s=T.comparePoints(t,i);if(s<0)r=t,a=i,o=1;else{if(!(s>0))throw new Error("Tried to create degenerate segment at [".concat(t.x,", ").concat(t.y,"]"));r=i,a=t,o=-1}return new e(new T(r,!0),new T(a,!1),[n],[o])}}]),e}(),A=function(){function e(i,n,r){if(t(this,e),!Array.isArray(i)||0===i.length)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=n,this.isExterior=r,this.segments=[],"number"!=typeof i[0][0]||"number"!=typeof i[0][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var a=x.round(i[0][0],i[0][1]);this.bbox={ll:{x:a.x,y:a.y},ur:{x:a.x,y:a.y}};for(var o=a,s=1,l=i.length;s<l;s++){if("number"!=typeof i[s][0]||"number"!=typeof i[s][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var h=x.round(i[s][0],i[s][1]);h.x===o.x&&h.y===o.y||(this.segments.push(j.fromRing(o,h,this)),h.x<this.bbox.ll.x&&(this.bbox.ll.x=h.x),h.y<this.bbox.ll.y&&(this.bbox.ll.y=h.y),h.x>this.bbox.ur.x&&(this.bbox.ur.x=h.x),h.y>this.bbox.ur.y&&(this.bbox.ur.y=h.y),o=h)}a.x===o.x&&a.y===o.y||this.segments.push(j.fromRing(o,a,this))}return i(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,i=this.segments.length;e<i;e++){var n=this.segments[e];t.push(n.leftSE),t.push(n.rightSE)}return t}}]),e}(),G=function(){function e(i,n){if(t(this,e),!Array.isArray(i))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new A(i[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(var r=1,a=i.length;r<a;r++){var o=new A(i[r],this,!1);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.interiorRings.push(o)}this.multiPoly=n}return i(e,[{key:"getSweepEvents",value:function(){for(var t=this.exteriorRing.getSweepEvents(),e=0,i=this.interiorRings.length;e<i;e++)for(var n=this.interiorRings[e].getSweepEvents(),r=0,a=n.length;r<a;r++)t.push(n[r]);return t}}]),e}(),N=function(){function e(i,n){if(t(this,e),!Array.isArray(i))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{"number"==typeof i[0][0][0]&&(i=[i])}catch(s){}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(var r=0,a=i.length;r<a;r++){var o=new G(i[r],this);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.polys.push(o)}this.isSubject=n}return i(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,i=this.polys.length;e<i;e++)for(var n=this.polys[e].getSweepEvents(),r=0,a=n.length;r<a;r++)t.push(n[r]);return t}}]),e}(),z=function(){function e(i){t(this,e),this.events=i;for(var n=0,r=i.length;n<r;n++)i[n].segment.ringOut=this;this.poly=null}return i(e,null,[{key:"factory",value:function(t){for(var i=[],n=0,r=t.length;n<r;n++){var a=t[n];if(a.isInResult()&&!a.ringOut){for(var o=null,s=a.leftSE,l=a.rightSE,h=[s],u=s.point,c=[];o=s,s=l,h.push(s),s.point!==u;)for(;;){var p=s.getAvailableLinkedEvents();if(0===p.length){var d=h[0].point,f=h[h.length-1].point;throw new Error("Unable to complete output ring starting at [".concat(d.x,",")+" ".concat(d.y,"]. Last matching segment found ends at")+" [".concat(f.x,", ").concat(f.y,"]."))}if(1===p.length){l=p[0].otherSE;break}for(var g=null,_=0,m=c.length;_<m;_++)if(c[_].point===s.point){g=_;break}if(null===g){c.push({index:h.length,point:s.point});var y=s.getLeftmostComparator(o);l=p.sort(y)[0].otherSE;break}var v=c.splice(g)[0],L=h.splice(v.index);L.unshift(L[0].otherSE),i.push(new e(L.reverse()))}i.push(new e(h))}}return i}}]),i(e,[{key:"getGeom",value:function(){for(var t=this.events[0].point,e=[t],i=1,n=this.events.length-1;i<n;i++){var r=this.events[i].point,a=this.events[i+1].point;0!==P(r,t,a)&&(e.push(r),t=r)}if(1===e.length)return null;var o=e[0],s=e[1];0===P(o,t,s)&&e.shift(),e.push(e[0]);for(var l=this.isExteriorRing()?1:-1,h=this.isExteriorRing()?0:e.length-1,u=this.isExteriorRing()?e.length:-1,c=[],p=h;p!=u;p+=l)c.push([e[p].x,e[p].y]);return c}},{key:"isExteriorRing",value:function(){if(this._isExteriorRing===undefined){var t=this.enclosingRing();this._isExteriorRing=!t||!t.isExteriorRing()}return this._isExteriorRing}},{key:"enclosingRing",value:function(){return this._enclosingRing===undefined&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}},{key:"_calcEnclosingRing",value:function(){for(var t=this.events[0],e=1,i=this.events.length;e<i;e++){var n=this.events[e];T.compare(t,n)>0&&(t=n)}for(var r=t.segment.prevInResult(),a=r?r.prevInResult():null;;){if(!r)return null;if(!a)return r.ringOut;if(a.ringOut!==r.ringOut)return a.ringOut.enclosingRing()!==r.ringOut?r.ringOut:r.ringOut.enclosingRing();r=a.prevInResult(),a=r?r.prevInResult():null}}}]),e}(),U=function(){function e(i){t(this,e),this.exteriorRing=i,i.poly=this,this.interiorRings=[]}return i(e,[{key:"addInterior",value:function(t){this.interiorRings.push(t),t.poly=this}},{key:"getGeom",value:function(){var t=[this.exteriorRing.getGeom()];if(null===t[0])return null;for(var e=0,i=this.interiorRings.length;e<i;e++){var n=this.interiorRings[e].getGeom();null!==n&&t.push(n)}return t}}]),e}(),F=function(){function e(i){t(this,e),this.rings=i,this.polys=this._composePolys(i)}return i(e,[{key:"getGeom",value:function(){for(var t=[],e=0,i=this.polys.length;e<i;e++){var n=this.polys[e].getGeom();null!==n&&t.push(n)}return t}},{key:"_composePolys",value:function(t){for(var e=[],i=0,n=t.length;i<n;i++){var r=t[i];if(!r.poly)if(r.isExteriorRing())e.push(new U(r));else{var a=r.enclosingRing();a.poly||e.push(new U(a)),a.poly.addInterior(r)}}return e}}]),e}(),V=function(){function e(i){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:j.compare;t(this,e),this.queue=i,this.tree=new u(n),this.segments=[]}return i(e,[{key:"process",value:function(t){var e=t.segment,i=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(e),i;var n=t.isLeft?this.tree.insert(e):this.tree.find(e);if(!n)throw new Error("Unable to find segment #".concat(e.id," ")+"[".concat(e.leftSE.point.x,", ").concat(e.leftSE.point.y,"] -> ")+"[".concat(e.rightSE.point.x,", ").concat(e.rightSE.point.y,"] ")+"in SweepLine tree. Please submit a bug report.");for(var r=n,a=n,o=undefined,s=undefined;o===undefined;)null===(r=this.tree.prev(r))?o=null:r.key.consumedBy===undefined&&(o=r.key);for(;s===undefined;)null===(a=this.tree.next(a))?s=null:a.key.consumedBy===undefined&&(s=a.key);if(t.isLeft){var l=null;if(o){var h=o.getIntersection(e);if(null!==h&&(e.isAnEndpoint(h)||(l=h),!o.isAnEndpoint(h)))for(var u=this._splitSafely(o,h),c=0,p=u.length;c<p;c++)i.push(u[c])}var d=null;if(s){var f=s.getIntersection(e);if(null!==f&&(e.isAnEndpoint(f)||(d=f),!s.isAnEndpoint(f)))for(var g=this._splitSafely(s,f),_=0,m=g.length;_<m;_++)i.push(g[_])}if(null!==l||null!==d){var y=null;y=null===l?d:null===d||T.comparePoints(l,d)<=0?l:d,this.queue.remove(e.rightSE),i.push(e.rightSE);for(var v=e.split(y),L=0,b=v.length;L<b;L++)i.push(v[L])}i.length>0?(this.tree.remove(e),i.push(t)):(this.segments.push(e),e.prev=o)}else{if(o&&s){var k=o.getIntersection(s);if(null!==k){if(!o.isAnEndpoint(k))for(var M=this._splitSafely(o,k),x=0,w=M.length;x<w;x++)i.push(M[x]);if(!s.isAnEndpoint(k))for(var C=this._splitSafely(s,k),P=0,E=C.length;P<E;P++)i.push(C[P])}}this.tree.remove(e)}return i}},{key:"_splitSafely",value:function(t,e){this.tree.remove(t);var i=t.rightSE;this.queue.remove(i);var n=t.split(e);return n.push(i),t.consumedBy===undefined&&this.tree.insert(t),n}}]),e}(),K="undefined"!=typeof process&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,H="undefined"!=typeof process&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6,q=new(function(){function e(){t(this,e)}return i(e,[{key:"run",value:function(t,e,i){q.type=t,x.reset();for(var n=[new N(e,!0)],r=0,a=i.length;r<a;r++)n.push(new N(i[r],!1));if(q.numMultiPolys=n.length,"difference"===q.type)for(var o=n[0],s=1;s<n.length;)null!==y(n[s].bbox,o.bbox)?s++:n.splice(s,1);if("intersection"===q.type)for(var l=0,h=n.length;l<h;l++)for(var c=n[l],p=l+1,d=n.length;p<d;p++)if(null===y(c.bbox,n[p].bbox))return[];for(var f=new u(T.compare),g=0,_=n.length;g<_;g++)for(var m=n[g].getSweepEvents(),v=0,L=m.length;v<L;v++)if(f.insert(m[v]),f.size>K)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");for(var b=new V(f),k=f.size,M=f.pop();M;){var w=M.key;if(f.size===k){var C=w.segment;throw new Error("Unable to pop() ".concat(w.isLeft?"left":"right"," SweepEvent ")+"[".concat(w.point.x,", ").concat(w.point.y,"] from segment #").concat(C.id," ")+"[".concat(C.leftSE.point.x,", ").concat(C.leftSE.point.y,"] -> ")+"[".concat(C.rightSE.point.x,", ").concat(C.rightSE.point.y,"] from queue. ")+"Please file a bug report.")}if(f.size>K)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");if(b.segments.length>H)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");for(var P=b.process(w),E=0,S=P.length;E<S;E++){var O=P[E];O.consumedBy===undefined&&f.insert(O)}k=f.size,M=f.pop()}x.reset();var D=z.factory(b.segments);return new F(D).getGeom()}}]),e}()),J=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return q.run("union",t,i)},Y=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return q.run("intersection",t,i)},X=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return q.run("xor",t,i)},Z=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return q.run("difference",t,i)};return{union:J,intersection:Y,xor:X,difference:Z}}()},2582:function(t){t.exports=function(){"use strict";function t(t,n,r,a,o){!function s(t,i,n,r,a){for(;r>n;){if(r-n>600){var o=r-n+1,l=i-n+1,h=Math.log(o),u=.5*Math.exp(2*h/3),c=.5*Math.sqrt(h*u*(o-u)/o)*(l-o/2<0?-1:1);s(t,i,Math.max(n,Math.floor(i-l*u/o+c)),Math.min(r,Math.floor(i+(o-l)*u/o+c)),a)}var p=t[i],d=n,f=r;for(e(t,n,i),a(t[r],p)>0&&e(t,n,r);d<f;){for(e(t,d,f),d++,f--;a(t[d],p)<0;)d++;for(;a(t[f],p)>0;)f--}0===a(t[n],p)?e(t,n,f):e(t,++f,r),f<=i&&(n=f+1),i<=f&&(r=f-1)}}(t,n,r||0,a||t.length-1,o||i)}function e(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function i(t,e){return t<e?-1:t>e?1:0}var n=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function r(t,e,i){if(!i)return e.indexOf(t);for(var n=0;n<e.length;n++)if(i(t,e[n]))return n;return-1}function a(t,e){o(t,0,t.children.length,e,t)}function o(t,e,i,n,r){r||(r=f(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var a=e;a<i;a++){var o=t.children[a];s(r,t.leaf?n(o):o)}return r}function s(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function l(t,e){return t.minX-e.minX}function h(t,e){return t.minY-e.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function c(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function d(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function f(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function g(e,i,n,r,a){for(var o=[i,n];o.length;)if(!((n=o.pop())-(i=o.pop())<=r)){var s=i+Math.ceil((n-i)/r/2)*r;t(e,s,i,n,a),o.push(i,s,s,n)}}return n.prototype.all=function(){return this._all(this.data,[])},n.prototype.search=function(t){var e=this.data,i=[];if(!d(t,e))return i;for(var n=this.toBBox,r=[];e;){for(var a=0;a<e.children.length;a++){var o=e.children[a],s=e.leaf?n(o):o;d(t,s)&&(e.leaf?i.push(o):p(t,s)?this._all(o,i):r.push(o))}e=r.pop()}return i},n.prototype.collides=function(t){var e=this.data;if(!d(t,e))return!1;for(var i=[];e;){for(var n=0;n<e.children.length;n++){var r=e.children[n],a=e.leaf?this.toBBox(r):r;if(d(t,a)){if(e.leaf||p(t,a))return!0;i.push(r)}}e=i.pop()}return!1},n.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0;e<t.length;e++)this.insert(t[e]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var n=this.data;this.data=i,i=n}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},n.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},n.prototype.clear=function(){return this.data=f([]),this},n.prototype.remove=function(t,e){if(!t)return this;for(var i,n,a,o=this.data,s=this.toBBox(t),l=[],h=[];o||l.length;){if(o||(o=l.pop(),n=l[l.length-1],i=h.pop(),a=!0),o.leaf){var u=r(t,o.children,e);if(-1!==u)return o.children.splice(u,1),l.push(o),this._condense(l),this}a||o.leaf||!p(o,s)?n?(i++,o=n.children[i],a=!1):o=null:(l.push(o),h.push(i),i=0,n=o,o=o.children[0])}return this},n.prototype.toBBox=function(t){return t},n.prototype.compareMinX=function(t,e){return t.minX-e.minX},n.prototype.compareMinY=function(t,e){return t.minY-e.minY},n.prototype.toJSON=function(){return this.data},n.prototype.fromJSON=function(t){return this.data=t,this},n.prototype._all=function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},n.prototype._build=function(t,e,i,n){var r,o=i-e+1,s=this._maxEntries;if(o<=s)return a(r=f(t.slice(e,i+1)),this.toBBox),r;n||(n=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/Math.pow(s,n-1))),(r=f([])).leaf=!1,r.height=n;var l=Math.ceil(o/s),h=l*Math.ceil(Math.sqrt(s));g(t,e,i,h,this.compareMinX);for(var u=e;u<=i;u+=h){var c=Math.min(u+h-1,i);g(t,u,c,l,this.compareMinY);for(var p=u;p<=c;p+=l){var d=Math.min(p+l-1,c);r.children.push(this._build(t,p,d,n-1))}}return a(r,this.toBBox),r},n.prototype._chooseSubtree=function(t,e,i,n){for(;n.push(e),!e.leaf&&n.length-1!==i;){for(var r=1/0,a=1/0,o=void 0,s=0;s<e.children.length;s++){var l=e.children[s],h=u(l),c=(p=t,d=l,(Math.max(d.maxX,p.maxX)-Math.min(d.minX,p.minX))*(Math.max(d.maxY,p.maxY)-Math.min(d.minY,p.minY))-h);c<a?(a=c,r=h<r?h:r,o=l):c===a&&h<r&&(r=h,o=l)}e=o||e.children[0]}var p,d;return e},n.prototype._insert=function(t,e,i){var n=i?t:this.toBBox(t),r=[],a=this._chooseSubtree(n,this.data,e,r);for(a.children.push(t),s(a,n);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(n,r,e)},n.prototype._split=function(t,e){var i=t[e],n=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,n);var o=this._chooseSplitIndex(i,r,n),s=f(i.children.splice(o,i.children.length-o));s.height=i.height,s.leaf=i.leaf,a(i,this.toBBox),a(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(i,s)},n.prototype._splitRoot=function(t,e){this.data=f([t,e]),this.data.height=t.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},n.prototype._chooseSplitIndex=function(t,e,i){for(var n,r,a,s,l,h,c,p=1/0,d=1/0,f=e;f<=i-e;f++){var g=o(t,0,f,this.toBBox),_=o(t,f,i,this.toBBox),m=(r=g,a=_,s=void 0,l=void 0,h=void 0,c=void 0,s=Math.max(r.minX,a.minX),l=Math.max(r.minY,a.minY),h=Math.min(r.maxX,a.maxX),c=Math.min(r.maxY,a.maxY),Math.max(0,h-s)*Math.max(0,c-l)),y=u(g)+u(_);m<p?(p=m,n=f,d=y<d?y:d):m===p&&y<d&&(d=y,n=f)}return n||i-e},n.prototype._chooseSplitAxis=function(t,e,i){var n=t.leaf?this.compareMinX:l,r=t.leaf?this.compareMinY:h;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,r)&&t.children.sort(n)},n.prototype._allDistMargin=function(t,e,i,n){t.children.sort(n);for(var r=this.toBBox,a=o(t,0,e,r),l=o(t,i-e,i,r),h=c(a)+c(l),u=e;u<i-e;u++){var p=t.children[u];s(a,t.leaf?r(p):p),h+=c(a)}for(var d=i-e-1;d>=e;d--){var f=t.children[d];s(l,t.leaf?r(f):f),h+=c(l)}return h},n.prototype._adjustParentBBoxes=function(t,e,i){for(var n=i;n>=0;n--)s(e[n],t)},n.prototype._condense=function(t){for(var e=t.length-1,i=void 0;e>=0;e--)0===t[e].children.length?e>0?(i=t[e-1].children).splice(i.indexOf(t[e]),1):this.clear():a(t[e],this.toBBox)},n}()}},e={};function i(n){var r=e[n];if(r!==undefined)return r.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);i(414)})();;
/**
 * Attach functionality for Leaflet Widget behaviours.
 */
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.leaflet_widget = {
    attach: function (context, settings) {
      $.each(settings.leaflet_widget, function (map_id, widgetSettings) {
        $('#' + map_id, context).each(function () {
          let map = $(this);
          // If the attached context contains any leaflet maps with widgets, make sure we have a
          // Drupal.leaflet_widget object.
          if (map.data('leaflet_widget') === undefined) {
            let lMap = drupalSettings.leaflet[map_id].lMap;
            map.data('leaflet_widget', new Drupal.leaflet_widget(map, lMap, widgetSettings));
          }
          else {
            // If we already had a widget, update map to make sure that WKT and map are synchronized.
            map.data('leaflet_widget').update_map();
            map.data('leaflet_widget').update_input_state();
          }
        });
      });
    }
  };

  Drupal.leaflet_widget = function (map_container, lMap, widgetSettings) {

    // A FeatureGroup is required to store editable layers
    this.drawnItems = new L.LayerGroup();

    this.settings = widgetSettings;
    this.mapid = this.settings.map_id;
    this.settings.path_style = this.settings.path ? JSON.parse(this.settings.path) : {};

    this.container = $(map_container).parent();
    this.json_selector = this.settings.jsonElement;
    this.layers = [];

    if (widgetSettings['langcode']) {
      lMap.pm.setLang(widgetSettings['langcode']);
    }
    this.map = undefined;

    this.set_leaflet_map(lMap);

    // If map is initialised (or re-initialised) then use the new instance.
    this.container.on('leafletMapInit', $.proxy(function (event, _m, lMap) {
      this.set_leaflet_map(lMap);
    }, this));

    // Update map whenever the input field is changed.
    this.container.on('change', this.json_selector, $.proxy(this.update_map, this));

    // Show, hide, mark read-only.
    this.update_input_state();
  };

  /**
   * Set the leaflet map object.
   */
  Drupal.leaflet_widget.prototype.set_leaflet_map = function (map) {
    if (map !== undefined) {
      this.map = map;
      map.addLayer(this.drawnItems);

      if (this.settings.scrollZoomEnabled) {
        map.on('focus', function () {
          map.scrollWheelZoom.enable();
        });
        map.on('blur', function () {
          map.scrollWheelZoom.disable();
        });
      }

      // Adjust toolbar to show defaultMarker or circleMarker.
      this.settings.toolbarSettings.drawMarker = false;
      this.settings.toolbarSettings.drawCircleMarker = false;
      if (this.settings.toolbarSettings.marker === "defaultMarker") {
        this.settings.toolbarSettings.drawMarker = 1;
      } else if (this.settings.toolbarSettings.marker === "circleMarker") {
        this.settings.toolbarSettings.drawCircleMarker = 1;
      }
      map.pm.addControls(this.settings.toolbarSettings);

      map.on('pm:create', function(event){
        let layer = event.layer;
        this.drawnItems.addLayer(layer);
        layer.pm.enable({ allowSelfIntersection: false });
        this.update_text();
        // Listen to changes on the new layer
        this.add_layer_listeners(layer);
      }, this);
      this.update_map();
    }
  };

  /**
   * Update the WKT text input field.disableGlobalEditMode()
   */
  Drupal.leaflet_widget.prototype.update_text = function () {
    if (this.drawnItems.getLayers().length === 0) {
      $(this.json_selector, this.container).val('');
    }
    else {
      let json_string = JSON.stringify(this.drawnItems.toGeoJSON());
      $(this.json_selector, this.container).val(json_string);
    }
    this.container.trigger("change");
  };

  /**
   * Set visibility and readonly attribute of the input element.
   */
  Drupal.leaflet_widget.prototype.update_input_state = function () {
    $('.form-item.form-type-textarea, .form-item.form-type--textarea', this.container).toggle(!this.settings.inputHidden);
    $(this.json_selector, this.container).prop('readonly', this.settings.inputReadonly);
  };

  /**
   * Add/Set Listeners to the Drawn Map Layers.
   */
  Drupal.leaflet_widget.prototype.add_layer_listeners = function (layer) {

    // Listen to changes on the layer.
    layer.on('pm:edit', function(event) {
      this.update_text();
    }, this);

    // Listen to changes on the layer.
    layer.on('pm:update', function(event) {
      this.update_text();
    }, this);

    // Listen to drag events on the layer.
    layer.on('pm:dragend', function(event) {
      this.update_text();
    }, this);

    // Listen to cut events on the layer.
    layer.on('pm:cut', function(event) {
      this.drawnItems.removeLayer(event.originalLayer);
      this.drawnItems.addLayer(event.layer);
      this.update_text();
    }, this);

    // Listen to remove events on the layer.
    layer.on('pm:remove', function(event) {
      this.drawnItems.removeLayer(event.layer);
      this.update_text();
    }, this);

  };

  /**
   * Update the leaflet map from text.
   */
  Drupal.leaflet_widget.prototype.update_map = function () {
    let self = this;
    let value = $(this.json_selector, this.container).val();

    // Always clear the layers in drawnItems on map updates.
    this.drawnItems.clearLayers();

    // Nothing to do if we don't have any data.
    if (value.length === 0) {

      // If no layer available, locate the user position.
      if (this.settings.locate && !this.settings.map_position.force) {
        this.map.locate({setView: true, maxZoom: 18});
      }

      return;
    }

    try {
      let layerOpts = {
        style: function (feature) {
          return self.settings.path_style;
        }
      };
      // Use circleMarkers if specified.
      if (self.settings.toolbarSettings.marker === "circleMarker") {
        layerOpts.pointToLayer = function (feature, latlng) {
          return L.circleMarker(latlng);
        };
      }
      // Apply styles to pm drawn items.
      this.map.pm.setGlobalOptions({
        pathOptions: self.settings.path_style
      });
      let obj = L.geoJson(JSON.parse(value), layerOpts);
      // See https://github.com/Leaflet/Leaflet.draw/issues/398
      obj.eachLayer(function(layer) {
        if (typeof layer.getLayers === "function") {
          let subLayers = layer.getLayers();
          for (let i = 0; i < subLayers.length; i++) {
            this.drawnItems.addLayer(subLayers[i]);
            this.add_layer_listeners(subLayers[i]);
          }
        }
        else {
          this.drawnItems.addLayer(layer);
          this.add_layer_listeners(layer);
        }

      }, this);

      // Pan the map to the feature
      if (this.settings.autoCenter) {
        let start_zoom;
        let start_center;
        if (obj.getBounds !== undefined && typeof obj.getBounds === 'function') {
          // For objects that have defined bounds or a way to get them
          let bounds = obj.getBounds();
          this.map.fitBounds(bounds);
          // Update the map start zoom and center, for correct working of Map Reset control.
          start_zoom = this.map.getBoundsZoom(bounds);
          start_center = bounds.getCenter();

          // In case of Map Zoom Forced, use the custom Map Zoom set.
          if (this.settings.map_position.force && this.settings.map_position.zoom) {
            start_zoom = this.settings.map_position.zoom;
            this.map.setZoom(start_zoom );
          }

        } else if (obj.getLatLng !== undefined && typeof obj.getLatLng === 'function') {
          this.map.panTo(obj.getLatLng());
          // Update the map start center, for correct working of Map Reset control.
          start_center = this.map.getCenter();
          start_zoom = this.map.getZoom();
        }

        // In case of map initial position not forced, and zooFiner not null/neutral,
        // adapt the Map Zoom and the Start Zoom accordingly.
        if (!this.settings.map_position.force && this.settings.map_position.hasOwnProperty('zoomFiner') && parseInt(this.settings.map_position['zoomFiner']) !== 0) {
          start_zoom += parseFloat(this.settings.map_position['zoomFiner']);
          this.map.setView(start_center, start_zoom);
        }

        Drupal.Leaflet[this.mapid].start_zoom = start_zoom;
        Drupal.Leaflet[this.mapid].start_center = start_center;

      }
    } catch (error) {
      if (window.console) console.error(error.message);
    }
  };

})(jQuery, Drupal, drupalSettings);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };
  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);
      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }
    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }
  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    placement -= window["scroll".concat(horizontal ? 'X' : 'Y')] || document.documentElement["scroll".concat(horizontal ? 'Left' : 'Top')] || 0;
    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;
      case 'left':
        displacement = placement + $el.outerWidth();
        break;
      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;
      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;
      default:
        displacement = 0;
    }
    return displacement;
  }
  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll("[data-offset-".concat(edge, "]"));
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];
      if (el.style.display === 'none') {
        continue;
      }
      var displacement = parseInt(el.getAttribute("data-offset-".concat(edge)), 10);
      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }
      edgeOffset = Math.max(edgeOffset, displacement);
    }
    return edgeOffset;
  }
  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }
  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }
  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;
      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };
  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,
    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);
  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };
    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      $item.toggleClass('open', switcher);
      $toggle.toggleClass('open', switcher);
      $toggle.find('.action').each(function (index, element) {
        element.textContent = switcher ? ui.handleClose : ui.handleOpen;
      });
    }
    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      toggleList($item);
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }
    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }
      event.stopPropagation();
    }
    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          var $link = $box.find('a');
          options.text = Drupal.t('@label', {
            '@label': $link.length ? $link[0].textContent : ''
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }
    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass("level-".concat(level));
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }
    function openActiveItem($menu) {
      var pathItem = $menu.find("a[href=\"".concat(window.location.pathname, "\"]"));
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find("a[href=\"".concat(activeItem, "\"]")).addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }
    return this.each(function (selector) {
      var menu = once('toolbar-menu', this);
      if (menu.length) {
        var $menu = $(menu);
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);
        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        openActiveItem($menu);
      }
    });
  };
  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return "<button class=\"".concat(options.class, "\"><span class=\"action\">").concat(options.action, "</span> <span class=\"label\">").concat(options.text, "</span></button>");
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });
  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      once('toolbar', '#toolbar-administration', context).forEach(function (toolbar) {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });
        Drupal.toolbar.models.toolbarModel = model;
        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: toolbar,
          model: model
        });
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));
        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(toolbar).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem("Drupal.toolbar.subtrees.".concat(theme), JSON.stringify(subtrees));
          model.set('areSubtreesLoaded', true);
        });
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();
        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });
        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });
        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }
        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');
            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', "".concat(height, "px"));
              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', "".concat(newHeight, "px"));
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };
  Drupal.toolbar = {
    views: {},
    models: {},
    mql: {},
    setSubtrees: new $.Deferred(),
    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });
          if (!mql.matches || !model.get('orientation')) {
            model.set({
              orientation: 'vertical'
            }, {
              validate: true
            });
          }
          break;
        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;
        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, {
            validate: true
          });
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;
        default:
          break;
      }
    }
  };
  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };
  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,
      activeTray: null,
      isOriented: false,
      isFixed: false,
      areSubtreesLoaded: false,
      isViewportOverflowConstrained: false,
      orientation: 'horizontal',
      locked: false,
      isTrayToggleVisible: true,
      height: null,
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;
      var subtrees = this.model.get('subtrees');
      Object.keys(subtrees || {}).forEach(function (id) {
        $(once('toolbar-subtrees', _this.$el.find("#toolbar-link-".concat(id)))).after(subtrees[id]);
      });
      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;
      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', {
          '@action': action
        });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);
      this.$el.find('.toolbar-tray .toolbar-lining').has('.toolbar-menu').append(Drupal.theme('toolbarOrientationToggle'));
      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);
      $('body').css({
        'padding-top': this.model.get('height')
      });
      $('html').css({
        'scroll-padding-top': this.model.get('height')
      });
      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      $('body').removeClass('toolbar-loading');
      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }
      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;
        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';
      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }
      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });
      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));
      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);
      $(this.model.previous('activeTray')).removeClass('is-active');
      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }
        var $tray = this.$el.find("[data-toolbar-tray=\"".concat(name, "\"].toolbar-tray"));
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }
      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');
      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass("toolbar-tray-".concat(orientation));
      var iconClass = "toolbar-icon-toggle-".concat(orientation);
      var iconAntiClass = "toolbar-icon-toggle-".concat(antiOrientation);
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      var $orientationToggleButton = $orientationToggle.find('button');
      $orientationToggleButton[0].value = antiOrientation;
      $orientationToggleButton.attr('title', this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);
      $orientationToggleButton[0].textContent = this.strings[antiOrientation];
      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      $trays.filter('.toolbar-tray-vertical.is-active').attr("data-offset-".concat(edge), '');
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');
      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url("toolbar/subtrees/".concat(subtreesHash));
        var cachedSubtreesHash = localStorage.getItem("Drupal.toolbar.subtreesHash.".concat(theme));
        var cachedSubtrees = JSON.parse(localStorage.getItem("Drupal.toolbar.subtrees.".concat(theme)));
        var isVertical = this.model.get('orientation') === 'vertical';
        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
          localStorage.removeItem("Drupal.toolbar.subtreesHash.".concat(theme));
          localStorage.removeItem("Drupal.toolbar.subtrees.".concat(theme));
          Drupal.ajax({
            url: endpoint
          }).execute();
          localStorage.setItem("Drupal.toolbar.subtreesHash.".concat(theme), subtreesHash);
        }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, Drupal, _ref) {
  var tabbable = _ref.tabbable,
    isTabbable = _ref.isTabbable;
  function TabbingManager() {
    this.stack = [];
  }
  function TabbingContext(options) {
    $.extend(this, {
      level: null,
      $tabbableElements: $(),
      $disabledElements: $(),
      released: false,
      active: false,
      trapFocus: false
    }, options);
  }
  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$trapFocus = _ref2.trapFocus,
        trapFocus = _ref2$trapFocus === void 0 ? false : _ref2$trapFocus;
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }
      var tabbableElements = [];
      $(elements).each(function (index, rootElement) {
        tabbableElements = [].concat(_toConsumableArray(tabbableElements), _toConsumableArray(tabbable(rootElement)));
        if (isTabbable(rootElement)) {
          tabbableElements = [].concat(_toConsumableArray(tabbableElements), [rootElement]);
        }
      });
      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $(tabbableElements),
        trapFocus: trapFocus
      });
      this.stack.push(tabbingContext);
      tabbingContext.activate();
      $(document).trigger('drupalTabbingConstrained', tabbingContext);
      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }
      this.stack.splice(toActivate + 1);
      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      var $disabledSet = $(tabbable(document.body)).not($set);
      tabbingContext.$disabledElements = $disabledSet;
      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }
      $disabledSet.prop('tabindex', -1).prop('autofocus', false);
      var $hasFocus = $set.filter('[autofocus]').eq(-1);
      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
      if ($set.length && tabbingContext.trapFocus) {
        $set.last().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            $set.first().focus();
          }
        });
        $set.first().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && event.shiftKey) {
            event.preventDefault();
            $set.last().focus();
          }
        });
      }
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      tabbingContext.$tabbableElements.first().off('keydown.focus-trap');
      tabbingContext.$tabbableElements.last().off('keydown.focus-trap');
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
          $el[0].removeAttribute('tabindex');
        }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }
        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });
  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });
  if (Drupal.tabbingManager) {
    return;
  }
  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };
  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }
    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });
    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }
  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if (once('contextualToolbar-init', 'body').length) {
        initContextualToolbar(context);
      }
    }
  };
  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,
      isVisible: false,
      contextualCount: 0,
      tabbingContext: null
    },
    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);
      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));
      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');
      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }
        tabbingContext.release();
      }
      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));
      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;
  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }
  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var toolbarEscape = once('escapeAdmin', '[data-toolbar-escape-admin]');
      if (toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $(toolbarEscape).attr('href', escapeAdminPath);
        } else {
          toolbarEscape[0].textContent = Drupal.t('Home');
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
