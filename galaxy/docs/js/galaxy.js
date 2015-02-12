$(document).ready(function(){
/* State Handlers
* These keep track of all the triggers and states that Galaxy uses on its JavaScript
* enhanced elements. */
$('[st-role="trigger"]').on('click',function(event){
	event.stopPropagation();
	var $this = $(this),
		whichGroup = $this.attr('st-group'),
		$whichTriggers = $('[st-role="trigger"][st-group="' + whichGroup + '"]'),
		whichState = $this.attr('st-state'),
		stateRemove = $this.attr('st-remove'),
		isReady = $this.is('[st-ready]'),
		isRemove = $this.is('[st-remove]'),
		isRestricted = $this.is('[st-restrict]'),
		$toggleTarget = $('[st-role="target"][st-group="' + whichGroup + '"]'),      
		$removeTarget = $('.' + stateRemove + '[st-role="target"]'),
		$inactiveTriggers = $('[st-remove="' + stateRemove + '"][st-role="trigger"]');
	if((isReady && ($this.attr('st-ready') === 'true')) || !isReady ){
		if(isRestricted){
			if($this.attr('st-restrict') === 'off'){
				$toggleTarget.removeClass(whichState);
				$whichTriggers.removeClass('active');
			}
			else if($this.attr('st-restrict') === 'on'){
				$toggleTarget.addClass(whichState);
				$whichTriggers.addClass('active');
			}
		}
		else {
			if(!$this.hasClass('active')){
				$inactiveTriggers.removeClass('active');
				$whichTriggers.addClass('active');
			}
			else{
				$whichTriggers.removeClass('active');
				if(isRemove){
					$whichTriggers.addClass('active');
				}
			}
			$removeTarget.removeClass(stateRemove);
			$toggleTarget.toggleClass(whichState);  
		}
		
	}
});

/* Create Anonymous Function
* Verify performance concerns - what event handlers are active at any given time - removing
* and adding bindings declare variables only if they are relevant to the the current
* situation (reducing lookup). Is it okay that this is in the global name space? */

$('[st-role="activate"]').on('click',function(){
	var whichToggle = $(this).attr('st-group');
	$('[st-role="trigger"][st-group="' + whichToggle + '"]').attr('st-ready','true');
});

$('[st-role="target"]').on('click',function(event){
	event.stopPropagation();
});


// Preload links
var InstantClick=function(e,t){function S(e){var t=e.indexOf("#");if(t<0){return e}return e.substr(0,t)}function x(e){while(e.nodeName!="A"){e=e.parentNode}return e}function T(e){do{if(!e.hasAttribute){break}if(e.hasAttribute("data-instant")){return false}if(e.hasAttribute("data-no-instant")){return true}}while(e=e.parentNode);return false}function N(e){do{if(!e.hasAttribute){break}if(e.hasAttribute("data-no-instant")){return false}if(e.hasAttribute("data-instant")){return true}}while(e=e.parentNode);return false}function C(e,t){for(var n=0;n<E[e].length;n++){E[e][n](t)}}function k(t,n,i,o){e.documentElement.replaceChild(n,e.body);if(i){history.pushState(null,null,i);var u=i.indexOf("#"),a=u>-1&&e.getElementById(i.substr(u+1)),f=0;if(a){while(a.offsetParent){f+=a.offsetTop;a=a.offsetParent}}scrollTo(0,f);s=S(i)}else{scrollTo(0,o)}if(r&&e.title==t){e.title=t+String.fromCharCode(160)}else{e.title=t}B();q.done();C("change",false)}function L(){v=false;m=false}function A(e){return e.replace(/<noscript[\s\S]+<\/noscript>/gi,"")}function O(e){F(x(e.target).href)}function M(e){var t=x(e.target);t.addEventListener("mouseout",P);if(!w){F(t.href)}else{o=t.href;u=setTimeout(F,w)}}function _(e){var t=x(e.target);if(b){t.removeEventListener("mousedown",O)}else{t.removeEventListener("mouseover",M)}F(t.href)}function D(e){if(e.which>1||e.metaKey||e.ctrlKey){return}e.preventDefault();I(x(e.target).href)}function P(){if(u){clearTimeout(u);u=false;return}if(!v||m){return}f.abort();L()}function H(){if(f.readyState<4){return}if(f.status==0){return}d.ready=+(new Date)-d.start;C("receive");if(f.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var t=e.implementation.createHTMLDocument("");t.documentElement.innerHTML=A(f.responseText);c=t.title;p=t.body;var n=S(l);a[n]={body:p,title:c,scrollY:n in a?a[n].scrollY:0};var r=t.head.children,i=0,s,o;for(var u=r.length-1;u>=0;u--){s=r[u];if(s.hasAttribute("data-instant-track")){o=s.getAttribute("href")||s.getAttribute("src")||s.innerHTML;for(var v=g.length-1;v>=0;v--){if(g[v]==o){i++}}}}if(i!=g.length){h=true}}else{h=true}if(m){m=false;I(l)}}function B(n){var r=e.getElementsByTagName("a"),i,o=t.protocol+"//"+t.host;for(var u=r.length-1;u>=0;u--){i=r[u];if(i.target||i.hasAttribute("download")||i.href.indexOf(o+"/")!=0||i.href.indexOf("#")>-1&&S(i.href)==s||(y?!N(i):T(i))){continue}i.addEventListener("touchstart",_);if(b){i.addEventListener("mousedown",O)}else{i.addEventListener("mouseover",M)}i.addEventListener("click",D)}if(!n){var a=e.body.getElementsByTagName("script"),f,l,c,h;for(u=0,j=a.length;u<j;u++){f=a[u];if(f.hasAttribute("data-no-instant")){continue}l=e.createElement("script");if(f.src){l.src=f.src}if(f.innerHTML){l.innerHTML=f.innerHTML}c=f.parentNode;h=f.nextSibling;c.removeChild(f);c.insertBefore(l,h)}}}function F(e){if(!b&&"display"in d&&+(new Date)-(d.start+d.display)<100){return}if(u){clearTimeout(u);u=false}if(!e){e=o}if(v&&(e==l||m)){return}v=true;m=false;l=e;p=false;h=false;d={start:+(new Date)};C("fetch");f.open("GET",e);f.send()}function I(e){if(!("display"in d)){d.display=+(new Date)-d.start}if(u){if(l&&l!=e){t.href=e;return}F(e);q.start(0,true);C("wait");m=true;return}if(!v||m){t.href=e;return}if(h){t.href=l;return}if(!p){q.start(0,true);C("wait");m=true;return}a[s].scrollY=pageYOffset;L();k(c,p,l)}function U(){if(s){return}if(!R){C("change",true);return}for(var n=arguments.length-1;n>=0;n--){var r=arguments[n];if(r===true){y=true}else if(r=="mousedown"){b=true}else if(typeof r=="number"){w=r}}s=S(t.href);a[s]={body:e.body,title:e.title,scrollY:pageYOffset};var i=e.head.children,o,u;for(var n=i.length-1;n>=0;n--){o=i[n];if(o.hasAttribute("data-instant-track")){u=o.getAttribute("href")||o.getAttribute("src")||o.innerHTML;g.push(u)}}f=new XMLHttpRequest;f.addEventListener("readystatechange",H);B(true);q.init();C("change",true);addEventListener("popstate",function(){var e=S(t.href);if(e==s){return}if(!(e in a)){t.href=t.href;return}a[s].scrollY=pageYOffset;s=e;k(a[e].title,a[e].body,false,a[e].scrollY)})}function z(e,t){E[e].push(t)}var n=navigator.userAgent,r=n.indexOf(" CriOS/")>-1,i="createTouch"in e,s,o,u,a={},f,l=false,c=false,h=false,p=false,d={},v=false,m=false,g=[],y,b,w,E={fetch:[],receive:[],wait:[],change:[]};var q=function(){function u(){t=e.createElement("div");t.id="instantclick";n=e.createElement("div");n.id="instantclick-bar";n.className="instantclick-bar";t.appendChild(n);var s=["Webkit","Moz","O"];r="transform";if(!(r in n.style)){for(var o=0;o<3;o++){if(s[o]+"Transform"in n.style){r=s[o]+"Transform"}}}var u="transition";if(!(u in n.style)){for(var o=0;o<3;o++){if(s[o]+"Transition"in n.style){u="-"+s[o].toLowerCase()+"-"+u}}}var a=e.createElement("style");a.innerHTML="#instantclick{position:"+(i?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+u+":opacity .25s .1s}"+".instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;"+u+":all .25s}";e.head.appendChild(a);if(i){p();addEventListener("resize",p);addEventListener("scroll",p)}}function a(n,r){s=n;if(e.getElementById(t.id)){e.body.removeChild(t)}t.style.opacity="1";if(e.getElementById(t.id)){e.body.removeChild(t)}c();if(r){setTimeout(f,0)}clearTimeout(o);o=setTimeout(l,500)}function f(){s=10;c()}function l(){s+=1+Math.random()*2;if(s>=98){s=98}else{o=setTimeout(l,500)}c()}function c(){n.style[r]="translate("+s+"%)";if(!e.getElementById(t.id)){e.body.appendChild(t)}}function h(){if(e.getElementById(t.id)){clearTimeout(o);s=100;c();t.style.opacity="0";return}a(s==100?0:s);setTimeout(h,0)}function p(){t.style.left=pageXOffset+"px";t.style.width=innerWidth+"px";t.style.top=pageYOffset+"px";var e="orientation"in window&&Math.abs(orientation)==90,n=innerWidth/screen[e?"height":"width"]*2;t.style[r]="scaleY("+n+")"}var t,n,r,s,o;return{init:u,start:a,done:h}}();var R="pushState"in history&&(!n.match("Android")||n.match("Chrome/"))&&t.protocol!="file:";return{supported:R,init:U,on:z}}(document,location);InstantClick.init();
});