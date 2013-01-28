if(!window.SyntaxHighlighter)var SyntaxHighlighter=function(){var c={defaults:{"class-name":"","first-line":1,highlight:null,"smart-tabs":!0,"tab-size":4,ruler:!1,gutter:!0,toolbar:!0,collapse:!1,"auto-links":!0,light:!1,"wrap-lines":!0},config:{clipboardSwf:null,toolbarItemWidth:16,toolbarItemHeight:16,bloggerMode:!1,stripBrs:!1,tagName:"pre",strings:{expandSource:"expand source",viewSource:"view source",copyToClipboard:"copy to clipboard",copyToClipboardConfirmation:"The code is in your clipboard now",
print:"print",help:"?",alert:"SyntaxHighlighter\n\n",noBrush:"Can't find brush for: ",brushNotHtmlScript:"Brush wasn't configured for html-script option: ",aboutDialog:"@ABOUT@"},debug:!1},vars:{discoveredBrushes:null,spaceWidth:null,printFrame:null,highlighters:{}},brushes:{},regexLib:{multiLineCComments:/\/\*[\s\S]*?\*\//gm,singleLineCComments:/\/\/.*$/gm,singleLinePerlComments:/#.*$/gm,doubleQuotedString:/"(?:\.|(\\\")|[^\""\n])*"/g,singleQuotedString:/'(?:\.|(\\\')|[^\''\n])*'/g,multiLineDoubleQuotedString:/"(?:\.|(\\\")|[^\""])*"/g,
multiLineSingleQuotedString:/'(?:\.|(\\\')|[^\''])*'/g,url:/\w+:\/\/[\w-.\/?%&=]*/g,phpScriptTags:{left:/(&lt;|<)\?=?/g,right:/\?(&gt;|>)/g},aspScriptTags:{left:/(&lt;|<)%=?/g,right:/%(&gt;|>)/g},scriptScriptTags:{left:/(&lt;|<)\s*script.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*script\s*(&gt;|>)/gi}},toolbar:{create:function(a){var b=document.createElement("DIV"),d=c.toolbar.items;b.className="toolbar";for(var e in d){var f=new d[e](a),g=f.create();a.toolbarCommands[e]=f;g!=null&&(typeof g=="string"&&(g=
c.toolbar.createButton(g,a.id,e)),g.className+="item "+e,b.appendChild(g))}return b},createButton:function(a,b,d){var e=document.createElement("a"),f=e.style,g=c.config,h=g.toolbarItemWidth,g=g.toolbarItemHeight;e.href="#"+d;e.title=a;e.highlighterId=b;e.commandName=d;e.innerHTML=a;if(isNaN(h)==!1)f.width=h+"px";if(isNaN(g)==!1)f.height=g+"px";e.onclick=function(a){try{c.toolbar.executeCommand(this,a||window.event,this.highlighterId,this.commandName)}catch(b){c.utils.alert(b.message)}return!1};return e},
executeCommand:function(a,b,d,e,f){var d=c.vars.highlighters[d],g;return d==null||(g=d.toolbarCommands[e])==null?null:g.execute(a,b,f)},items:{expandSource:function(a){this.create=function(){return a.getParam("collapse")!=!0?void 0:c.config.strings.expandSource};this.execute=function(b){var d=a.div;b.parentNode.removeChild(b);d.className=d.className.replace("collapsed","")}},viewSource:function(a){this.create=function(){return c.config.strings.viewSource};this.execute=function(){var b=c.utils.fixInputString(a.originalCode).replace(/</g,
"&lt;"),d=c.utils.popup("","_blank",750,400,"location=0, resizable=1, menubar=0, scrollbars=1"),b=c.utils.unindent(b);d.document.write("<pre>"+b+"</pre>");d.document.close()}},copyToClipboard:function(a){var b,d=a.id;this.create=function(){function a(b){var d="",c;for(c in b)d+="<param name='"+c+"' value='"+b[c]+"'/>";return d}function f(a){var b="",d;for(d in a)b+=" "+d+"='"+a[d]+"'";return b}var g=c.config;if(g.clipboardSwf==null)return null;var h={width:g.toolbarItemWidth,height:g.toolbarItemHeight,
id:d+"_clipboard",type:"application/x-shockwave-flash",title:c.config.strings.copyToClipboard},i={allowScriptAccess:"always",wmode:"transparent",flashVars:"highlighterId="+d,menu:"false"},g=g.clipboardSwf,h=/msie/i.test(navigator.userAgent)?"<object"+f({classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"})+f(h)+">"+a(i)+a({movie:g})+"</object>":"<embed"+f(h)+f(i)+f({src:g})+"/>";b=document.createElement("div");
b.innerHTML=h;return b};this.execute=function(b,d,g){switch(g.command){case "get":if(b=c.utils.unindent(c.utils.fixInputString(a.originalCode).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")),window.clipboardData)window.clipboardData.setData("text",b);else return c.utils.unindent(b);case "ok":c.utils.alert(c.config.strings.copyToClipboardConfirmation);break;case "error":c.utils.alert(g.message)}}},printSource:function(a){this.create=function(){return c.config.strings.print};this.execute=
function(){var b=document.createElement("IFRAME"),d=null;c.vars.printFrame!=null&&document.body.removeChild(c.vars.printFrame);c.vars.printFrame=b;b.style.cssText="position:absolute;width:0px;height:0px;left:-500px;top:-500px;";document.body.appendChild(b);d=b.contentWindow.document;(function(a,b){for(var d=b.getElementsByTagName("link"),c=0;c<d.length;c++)d[c].rel.toLowerCase()=="stylesheet"&&/shCore\.css$/.test(d[c].href)&&a.write('<link type="text/css" rel="stylesheet" href="'+d[c].href+'"></link>')})(d,
window.document);d.write('<div class="'+a.div.className.replace("collapsed","")+' printing">'+a.div.innerHTML+"</div>");d.close();b.contentWindow.focus();b.contentWindow.print()}},about:function(){this.create=function(){return c.config.strings.help};this.execute=function(){var a=c.utils.popup("","_blank",500,250,"scrollbars=0"),b=a.document;b.write(c.config.strings.aboutDialog);b.close();a.focus()}}}},utils:{guid:function(a){return a+Math.round(Math.random()*1E6).toString()},merge:function(a,b){var d=
{},c;for(c in a)d[c]=a[c];for(c in b)d[c]=b[c];return d},toBoolean:function(a){switch(a){case "true":return!0;case "false":return!1}return a},popup:function(a,b,d,c,f){f+=", left="+(screen.width-d)/2+", top="+(screen.height-c)/2+", width="+d+", height="+c;f=f.replace(/^,/,"");a=window.open(a,b,f);a.focus();return a},addEvent:function(a,b,d){a.attachEvent?(a["e"+b+d]=d,a[b+d]=function(){a["e"+b+d](window.event)},a.attachEvent("on"+b,a[b+d])):a.addEventListener(b,d,!1)},alert:function(a){alert(c.config.strings.alert+
a)},findBrush:function(a,b){var d=c.vars.discoveredBrushes,e=null;if(d==null){var d={},f;for(f in c.brushes)if(e=c.brushes[f].aliases,e!=null)for(var g=0;g<e.length;g++)d[e[g]]=f;c.vars.discoveredBrushes=d}e=c.brushes[d[a]];e==null&&b!=!1&&c.utils.alert(c.config.strings.noBrush+a);return e},eachLine:function(a,b){for(var d=a.split("\n"),c=0;c<d.length;c++)d[c]=b(d[c]);return d.join("\n")},createRuler:function(){for(var a=document.createElement("div"),b=document.createElement("div"),d=1;d<=150;)d%
10===0?(a.innerHTML+=d,d+=(d+"").length):(a.innerHTML+="&middot;",d++);b.className="ruler line";b.appendChild(a);return b},trimFirstAndLastLines:function(a){return a.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g,"")},parseParams:function(a){for(var b,d={},c=new XRegExp("^\\[(?<values>(.*?))\\]$"),f=new XRegExp("(?<name>[\\w-]+)\\s*:\\s*(?<value>[\\w-%#]+|\\[.*?\\]|\".*?\"|'.*?')\\s*;?","g");(b=f.exec(a))!=null;){var g=b.value.replace(/^['"]|['"]$/g,"");g!=null&&c.test(g)&&(g=c.exec(g),g=g.values.length>0?g.values.split(/\s*,\s*/):
[]);d[b.name]=g}return d},decorate:function(a,b){if(a==null||a.length==0||a=="\n")return a;a=a.replace(/</g,"&lt;");a=a.replace(/ {2,}/g,function(a){for(var b="",c=0;c<a.length-1;c++)b+="&nbsp;";return b+" "});b!=null&&(a=c.utils.eachLine(a,function(a){if(a.length==0)return"";var c="",a=a.replace(/^(&nbsp;| )+/,function(a){c=a;return""});return a.length==0?c:c+'<code class="'+b+'">'+a+"</code>"}));return a},padNumber:function(a,b){for(var d=a.toString();d.length<b;)d="0"+d;return d},measureSpace:function(){var a=
document.createElement("div"),b;b=0;var d=document.body;b=c.utils.guid("measureSpace");a.innerHTML='<div class="syntaxhighlighter"><div class="lines"><div class="line"><div class="content"><span class="block"><span id="'+b+'">&nbsp;</span></span></div></div></div></div>';d.appendChild(a);b=document.getElementById(b);/opera/i.test(navigator.userAgent)?(b=window.getComputedStyle(b,null),b=parseInt(b.getPropertyValue("width"))):b=b.offsetWidth;d.removeChild(a);return b},processTabs:function(a,b){for(var d=
"",c=0;c<b;c++)d+=" ";return a.replace(/\t/g,d)},processSmartTabs:function(a,b){a.split("\n");for(var d="",e=0;e<50;e++)d+="                    ";return a=c.utils.eachLine(a,function(a){if(a.indexOf("\t")==-1)return a;for(var c=0;(c=a.indexOf("\t"))!=-1;)a=a.substr(0,c)+d.substr(0,b-c%b)+a.substr(c+1,a.length);return a})},fixInputString:function(a){var b=/<br\s*\/?>|&lt;br\s*\/?&gt;/gi;c.config.bloggerMode==!0&&(a=a.replace(b,"\n"));c.config.stripBrs==!0&&(a=a.replace(b,""));return a},trim:function(a){return a.replace(/\s*$/g,
"").replace(/^\s*/,"")},unindent:function(a){for(var b=c.utils.fixInputString(a).split("\n"),d=/^\s*/,e=1E3,f=0;f<b.length&&e>0;f++){var g=b[f];if(c.utils.trim(g).length!=0){g=d.exec(g);if(g==null)return a;e=Math.min(g[0].length,e)}}if(e>0)for(f=0;f<b.length;f++)b[f]=b[f].substr(e);return b.join("\n")},matchesSortCallback:function(a,b){if(a.index<b.index)return-1;else if(a.index>b.index)return 1;else if(a.length<b.length)return-1;else if(a.length>b.length)return 1;return 0},getMatches:function(a,
b){function d(a,b){return[new c.Match(a[0],a.index,b.css)]}for(var e=null,f=[],g=b.func?b.func:d;(e=b.regex.exec(a))!=null;)f=f.concat(g(e,b));return f},processUrls:function(a){return a.replace(c.regexLib.url,function(a){return'<a href="'+a+'">'+a+"</a>"})}},highlight:function(a,b){function d(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b}var e=b?[b]:d(document.getElementsByTagName(c.config.tagName)),f=null;if(e.length!==0)for(var g=0;g<e.length;g++){var h=e[g],i=c.utils.parseParams(h.className),
i=c.utils.merge(a,i),f=i.brush;if(f!=null){if(i["html-script"]=="true")f=new c.HtmlScript(f);else if(f=c.utils.findBrush(f))f=new f;else continue;f.highlight(h.innerHTML,i);i=f.div;if(c.config.debug)i=document.createElement("textarea"),i.value=f.div.innerHTML,i.style.width="70em",i.style.height="30em";h.parentNode.replaceChild(i,h)}}},all:function(a){c.utils.addEvent(window,"load",function(){c.highlight(a)})},Match:function(a,b,c){this.value=a;this.index=b;this.length=a.length;this.css=c}};c.Match.prototype.toString=
function(){return this.value};c.HtmlScript=function(a){function b(a,b){for(var c=0;c<a.length;c++)a[c].index+=b}var d=c.utils.findBrush(a),e=new c.brushes.Xml;if(d!=null)d=new d,this.xmlBrush=e,d.htmlScript==null?c.utils.alert(c.config.strings.brushNotHtmlScript+a):e.regexList.push({regex:d.htmlScript.code,func:function(a){for(var e=a.code,h=[],i=d.regexList,r=a.index+a.left.length,m=d.htmlScript,k,l=0;l<i.length;l++)k=c.utils.getMatches(e,i[l]),b(k,r),h=h.concat(k);m.left!=null&&a.left!=null&&(k=
c.utils.getMatches(a.left,m.left),b(k,a.index),h=h.concat(k));m.right!=null&&a.right!=null&&(k=c.utils.getMatches(a.right,m.right),b(k,a.index+a[0].lastIndexOf(a.right)),h=h.concat(k));return h}})};c.HtmlScript.prototype.highlight=function(a,b){this.xmlBrush.highlight(a,b);this.div=this.xmlBrush.div};c.Highlighter=function(){};c.Highlighter.prototype={getParam:function(a,b){var d=this.params[a];return c.utils.toBoolean(d==null?b:d)},create:function(a){return document.createElement(a)},findMatches:function(a,
b){var d=[];if(a!=null)for(var e=0;e<a.length;e++)d=d.concat(c.utils.getMatches(b,a[e]));return d=d.sort(c.utils.matchesSortCallback)},removeNestedMatches:function(){for(var a=this.matches,b=0;b<a.length;b++)if(a[b]!==null)for(var c=a[b],e=c.index+c.length,f=b+1;f<a.length&&a[b]!==null;f++){var g=a[f];if(g!==null)if(g.index>e)break;else g.index==c.index&&g.length>c.length?this.matches[b]=null:g.index>=c.index&&g.index<e&&(this.matches[f]=null)}},createDisplayLines:function(a){for(var b=a.split(/\n/g),
d=parseInt(this.getParam("first-line")),e=(d+b.length).toString().length,f=this.getParam("highlight",[]),a="",g=0;g<b.length;g++){var h=b[g],i=/^(&nbsp;|\s)+/.exec(h),r="line alt"+(g%2==0?1:2),m=c.utils.padNumber(d+g,e),k=f.indexOf((d+g).toString())!=-1,l=null;i!=null?(l=i[0].toString(),h=h.substr(l.length),l=l.replace(/&nbsp;/g," "),i=c.vars.spaceWidth*l.length):i=0;h=c.utils.trim(h);h.length==0&&(h="&nbsp;");k&&(r+=" highlighted");a+='<div class="'+r+'"><code class="number">'+m+'.</code><span class="content">'+
(l!=null?'<code class="spaces">'+l.replace(/\s/g,"&nbsp;")+"</code>":"")+'<span class="block" style="margin-left: '+i+'px !important;">'+h+"</span></span></div>"}return a},processMatches:function(a,b){for(var d=0,e="",f=c.utils.decorate,g=0;g<b.length;g++){var h=b[g];h===null||h.length===0||(e+=f(a.substr(d,h.index-d),"plain")+f(h.value,h.css),d=h.index+h.length)}e+=f(a.substr(d),"plain");return e},highlight:function(a,b){var d=c.vars,e;this.params={};this.bar=this.code=this.lines=this.div=null;this.toolbarCommands=
{};this.id=c.utils.guid("highlighter_");d.highlighters[this.id]=this;a===null&&(a="");if(d.spaceWidth===null)d.spaceWidth=c.utils.measureSpace();this.params=c.utils.merge(c.defaults,b||{});if(this.getParam("light")==!0)this.params.toolbar=this.params.gutter=!1;this.div=d=this.create("DIV");this.lines=this.create("DIV");this.lines.className="lines";className="syntaxhighlighter";d.id=this.id;this.getParam("collapse")&&(className+=" collapsed");this.getParam("gutter")==!1&&(className+=" nogutter");this.getParam("wrap-lines")==
!1&&(this.lines.className+=" no-wrap");className+=" "+this.getParam("class-name");d.className=className;this.originalCode=a;this.code=c.utils.trimFirstAndLastLines(a).replace(/\r/g," ");e=this.getParam("tab-size");this.code=this.getParam("smart-tabs")==!0?c.utils.processSmartTabs(this.code,e):c.utils.processTabs(this.code,e);this.code=c.utils.unindent(this.code);if(this.getParam("toolbar")){this.bar=this.create("DIV");this.bar.className="bar";this.bar.appendChild(c.toolbar.create(this));d.appendChild(this.bar);
var f=this.bar,g=function(){f.className=f.className.replace("show","")};d.onmouseover=function(){g();f.className+=" show"};d.onmouseout=function(){g()}}this.getParam("ruler")&&d.appendChild(c.utils.createRuler());d.appendChild(this.lines);this.matches=this.findMatches(this.regexList,this.code);this.removeNestedMatches();a=this.processMatches(this.code,this.matches);a=this.createDisplayLines(c.utils.trim(a));this.getParam("auto-links")&&(a=c.utils.processUrls(a));this.lines.innerHTML=a},getKeywords:function(a){a=
a.replace(/^\s+|\s+$/g,"").replace(/\s+/g,"\\b|\\b");return"\\b"+a+"\\b"},forHtmlScript:function(a){this.htmlScript={left:{regex:a.left,css:"script"},right:{regex:a.right,css:"script"},code:new XRegExp("(?<left>"+a.left.source+")(?<code>.*?)(?<right>"+a.right.source+")","sgi")}}};return c}();if(!Array.indexOf)Array.prototype.indexOf=function(c,a){for(var b=a=Math.max(a||0,0);b<this.length;b++)if(this[b]==c)return b;return-1};
window.XRegExp||function(){var c=RegExp.prototype.exec,a=String.prototype.replace,b=/(?:[^\\([#\s.]+|\\(?!k<[\w$]+>|[pP]{[^}]+})[\S\s]?|\((?=\?(?!#|<[\w$]+>)))+|(\()(?:\?(?:(#)[^)]*\)|<([$\w]+)>))?|\\(?:k<([\w$]+)>|[pP]{([^}]+)})|(\[\^?)|([\S\s])/g,d=/^(?:\s+|#.*)+/,e=/^(?:[?*+]|{\d+(?:,\d*)?})/,f=/&&\[\^?/g,g=/]/g,h=/()??/.exec("")[1]!==void 0,i={};XRegExp=function(h,m){if(h instanceof RegExp){if(m!==void 0)throw TypeError("can't supply flags when constructing one RegExp from another");return h.addFlags()}var m=
m||"",k=m.indexOf("s")>-1,l=m.indexOf("x")>-1,o=!1,p=[],n=[],j,q;for(b.lastIndex=0;j=c.call(b,h);)if(j[2])e.test(h.slice(b.lastIndex))||n.push("(?:)");else if(j[1])p.push(j[3]||null),j[3]&&(o=!0),n.push("(");else if(j[4]){a:{for(q=0;q<p.length;q++)if(p[q]===j[4])break a;q=-1}n.push(q>-1?"\\"+(q+1)+(isNaN(h.charAt(b.lastIndex))?"":"(?:)"):j[0])}else j[5]?n.push(i.unicode?i.unicode.get(j[5],j[0].charAt(1)==="P"):j[0]):j[6]?h.charAt(b.lastIndex)==="]"?(n.push(j[6]==="["?"(?!)":"[\\S\\s]"),b.lastIndex++):
(q=XRegExp.matchRecursive("&&"+h.slice(j.index),f,g,"",{escapeChar:"\\"})[0],n.push(j[6]+q+"]"),b.lastIndex+=q.length+1):j[7]?k&&j[7]==="."?n.push("[\\S\\s]"):l&&d.test(j[7])?(j=c.call(d,h.slice(b.lastIndex-1))[0].length,e.test(h.slice(b.lastIndex-1+j))||n.push("(?:)"),b.lastIndex+=j-1):n.push(j[7]):n.push(j[0]);k=RegExp(n.join(""),a.call(m,/[sx]+/g,""));k._x={source:h,captureNames:o?p:null};return k};XRegExp.addPlugin=function(a,b){i[a]=b};RegExp.prototype.exec=function(b){var d=c.call(this,b),e;
if(d){h&&d.length>1&&(b=RegExp("^"+this.source+"$(?!\\s)",this.getNativeFlags()),a.call(d[0],b,function(){for(e=1;e<arguments.length-2;e++)arguments[e]===void 0&&(d[e]=void 0)}));if(this._x&&this._x.captureNames)for(e=1;e<d.length;e++)(b=this._x.captureNames[e-1])&&(d[b]=d[e]);this.global&&this.lastIndex>d.index+d[0].length&&this.lastIndex--}return d}}();
RegExp.prototype.getNativeFlags=function(){return(this.global?"g":"")+(this.ignoreCase?"i":"")+(this.multiline?"m":"")+(this.extended?"x":"")+(this.sticky?"y":"")};RegExp.prototype.addFlags=function(c){c=new XRegExp(this.source,(c||"")+this.getNativeFlags());if(this._x)c._x={source:this._x.source,captureNames:this._x.captureNames?this._x.captureNames.slice(0):null};return c};RegExp.prototype.call=function(c,a){return this.exec(a)};RegExp.prototype.apply=function(c,a){return this.exec(a[0])};
XRegExp.cache=function(c,a){var b="/"+c+"/"+(a||"");return XRegExp.cache[b]||(XRegExp.cache[b]=new XRegExp(c,a))};XRegExp.escape=function(c){return c.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,"\\$&")};
XRegExp.matchRecursive=function(c,a,b,d,e){var e=e||{},f=e.escapeChar,e=e.valueNames,d=d||"",g=d.indexOf("g")>-1,h=d.indexOf("i")>-1,i=d.indexOf("m")>-1,r=d.indexOf("y")>-1,d=d.replace(/y/g,""),a=a instanceof RegExp?a.global?a:a.addFlags("g"):new XRegExp(a,"g"+d),b=b instanceof RegExp?b.global?b:b.addFlags("g"):new XRegExp(b,"g"+d),d=[],m=0,k=0,l=0,o=0,p,n,j;if(f){if(f.length>1)throw SyntaxError("can't supply more than one escape character");if(i)throw TypeError("can't supply escape character when using the multiline flag");
j=XRegExp.escape(f);j=RegExp("^(?:"+j+"[\\S\\s]|(?:(?!"+a.source+"|"+b.source+")[^"+j+"])+)+",h?"i":"")}for(;;){a.lastIndex=b.lastIndex=l+(f?(j.exec(c.slice(l))||[""])[0].length:0);h=a.exec(c);i=b.exec(c);h&&i&&(h.index<=i.index?i=null:h=null);if(h||i)k=(h||i).index,l=(h?a:b).lastIndex;else if(!m)break;if(r&&!m&&k>o)break;if(h)m++||(p=k,n=l);else if(i&&m){if(!--m&&(e?(e[0]&&p>o&&d.push([e[0],c.slice(o,p),o,p]),e[1]&&d.push([e[1],c.slice(p,n),p,n]),e[2]&&d.push([e[2],c.slice(n,k),n,k]),e[3]&&d.push([e[3],
c.slice(k,l),k,l])):d.push(c.slice(n,k)),o=l,!g))break}else throw a.lastIndex=b.lastIndex=0,Error("subject data contains unbalanced delimiters");k===l&&l++}g&&!r&&e&&e[0]&&c.length>o&&d.push([e[0],c.slice(o),o,c.length]);a.lastIndex=b.lastIndex=0;return d};
SyntaxHighlighter.brushes.CSS=function(){this.regexList=[{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\#[a-fA-F0-9]{3,6}/g,css:"value"},{regex:/(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,css:"value"},{regex:/!important/g,css:"color3"},{regex:RegExp("\\b([a-z_]|)"+"ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index".replace(/ /g,
"(?=:)\\b|\\b([a-z_\\*]|\\*|)")+"(?=:)\\b","gm"),css:"keyword"},{regex:RegExp("\\b"+"above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow".replace(/ /g,
"(?!-)(?!:)\\b|\\b()")+":\\b","g"),css:"value"},{regex:RegExp(this.getKeywords("[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif"),"g"),css:"color1"}];this.forHtmlScript({left:/(&lt;|<)\s*style.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*style\s*(&gt;|>)/gi})};SyntaxHighlighter.brushes.CSS.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.CSS.aliases=["css"];
SyntaxHighlighter.brushes.CSharp=function(){this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,func:function(c){var a=c[0].indexOf("///")==0?"color1":"comments";return[new SyntaxHighlighter.Match(c[0],c.index,a)]}},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/^\s*#.*/gm,css:"preprocessor"},{regex:RegExp(this.getKeywords("abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach get goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed set short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual void while"),
"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.CSharp.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.CSharp.aliases=["c#","c-sharp","csharp"];
SyntaxHighlighter.brushes.JScript=function(){this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\s*#.*/gm,css:"preprocessor"},{regex:RegExp(this.getKeywords("break case catch continue default delete do else false  for function if in instanceof new null return super switch this throw true try typeof var while with"),
"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags)};SyntaxHighlighter.brushes.JScript.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.JScript.aliases=["js","jscript","javascript"];
SyntaxHighlighter.brushes.Php=function(){this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\$\w+/g,css:"variable"},{regex:RegExp(this.getKeywords("abs acos acosh addcslashes addslashes array_change_key_case array_chunk array_combine array_count_values array_diff array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill array_filter array_flip array_intersect array_intersect_assoc array_intersect_key array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map array_merge array_merge_recursive array_multisort array_pad array_pop array_product array_push array_rand array_reduce array_reverse array_search array_shift array_slice array_splice array_sum array_udiff array_udiff_assoc array_udiff_uassoc array_uintersect array_uintersect_assoc array_uintersect_uassoc array_unique array_unshift array_values array_walk array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists closedir closelog copy cos cosh count count_chars date decbin dechex decoct deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br parse_ini_file parse_str parse_url passthru pathinfo readlink realpath rewind rewinddir rmdir round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime strtoupper strtr strval substr substr_compare"),
"gmi"),css:"functions"},{regex:RegExp(this.getKeywords("__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__"),"gmi"),css:"constants"},{regex:RegExp(this.getKeywords("and or xor array as break case cfunction class const continue declare default die do else elseif enddeclare endfor endforeach endif endswitch endwhile extends for foreach function include include_once global if new old_function return static switch use require require_once var while abstract interface public implements extends private protected throw"),
"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags)};SyntaxHighlighter.brushes.Php.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Php.aliases=["php"];
SyntaxHighlighter.brushes.Xml=function(){this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:new XRegExp("(\\&lt;|<)!--\\s*.*?\\s*--(\\&gt;|>)","gm"),css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:function(c){var a=SyntaxHighlighter.Match,b=c[0],d=(new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg")).exec(b),e=[];if(c.attributes!=null)for(var f,g=new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)",
"xg");(f=g.exec(b))!=null;)e.push(new a(f.name,c.index+f.index,"color1")),e.push(new a(f.value,c.index+f.index+f[0].indexOf(f.value),"string"));d!=null&&e.push(new a(d.name,c.index+d[0].indexOf(d.name),"keyword"));return e}}]};SyntaxHighlighter.brushes.Xml.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Xml.aliases=["xml","xhtml","xslt","html","xhtml"];
