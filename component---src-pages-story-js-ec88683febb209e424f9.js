(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8oxB":function(e,t){var a,n,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(a===setTimeout)return setTimeout(e,0);if((a===s||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:s}catch(e){a=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var i,l=[],m=!1,u=-1;function d(){m&&i&&(m=!1,i.length?l=i.concat(l):u=-1,l.length&&f())}function f(){if(!m){var e=c(d);m=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,m=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];l.push(new p(e,t)),1!==l.length||m||c(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"8ujH":function(e,t,a){a("pIFo"),a("V+eJ"),a("f3/d");var n=a("GTTd")("jsonp");e.exports=function(e,t,a){"function"==typeof t&&(a=t,t={});t||(t={});var o,c,i=t.prefix||"__jp",l=t.name||i+r++,m=t.param||"callback",u=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;u&&(c=setTimeout((function(){p(),a&&a(new Error("Timeout"))}),u));function p(){o.parentNode&&o.parentNode.removeChild(o),window[l]=s,c&&clearTimeout(c)}return window[l]=function(e){n("jsonp got",e),p(),a&&a(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+m+"="+d(l)).replace("?&","?"),n('jsonp req "%s"',e),(o=document.createElement("script")).src=e,f.parentNode.insertBefore(o,f),function(){window[l]&&p()}};var r=0;function s(){}},G04T:function(e,t,a){"use strict";a("pIFo"),a("VRzm"),a("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var n,r=a("8ujH"),s=(n=r)&&n.__esModule?n:{default:n},o=a("H/qo");var c=function(e){return new Promise((function(t,a){return(0,s.default)(e,{param:"c",timeout:3500},(function(e,n){e&&a(e),n&&t(n)}))}))},i=function(e){var t="";for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=a.substring(0,6)?a:a.toUpperCase();t=t.concat("&"+n+"="+e[a])}return t};t.default=function(e,t,a){var n=(0,o.validate)(e),r=encodeURIComponent(e);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var s="https://vijayverma.us14.list-manage.com/subscribe post?u=ed1f62133209766c02f08fd47&amp;id=c4285438c3";arguments.length<3&&"string"==typeof t?s=t:"string"==typeof a&&(s=a),s=s.replace(/\/post/g,"/post-json");var l="&EMAIL="+r+i(t),m=""+s+l;return c(m)}},GTTd:function(e,t,a){(function(n){function r(){var e;try{e=t.storage.debug}catch(a){}return!e&&void 0!==n&&"env"in n&&(e={}.DEBUG),e}a("pIFo"),a("Oyvg"),a("SRfc"),(t=e.exports=a("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var a=this.useColors;if(e[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+e[0]+(a?"%c ":" ")+"+"+t.humanize(this.diff),!a)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var r=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(s=r))})),e.splice(s,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(a){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,a("8oxB"))},"H/qo":function(e,t,a){"use strict";a("dZ+Y"),a("KKXr");var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},QXP7:function(e,t){var a=1e3,n=60*a,r=60*n,s=24*r,o=365.25*s;function c(e,t,a){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+a:Math.ceil(e/t)+" "+a+"s"}e.exports=function(e,t){t=t||{};var i,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*o;case"days":case"day":case"d":return c*s;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?c(i=e,s,"day")||c(i,r,"hour")||c(i,n,"minute")||c(i,a,"second")||i+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=a)return Math.round(e/a)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},bRoh:function(e,t,a){var n;function r(e){function a(){if(a.enabled){var e=a,r=+new Date,s=r-(n||r);e.diff=s,e.prev=n,e.curr=r,n=r;for(var o=new Array(arguments.length),c=0;c<o.length;c++)o[c]=arguments[c];o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var i=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,(function(a,n){if("%%"===a)return a;i++;var r=t.formatters[n];if("function"==typeof r){var s=o[i];a=r.call(e,s),o.splice(i,1),i--}return a})),t.formatArgs.call(e,o),(a.log||t.log||console.log.bind(console)).apply(e,o)}}return a.namespace=e,a.enabled=t.enabled(e),a.useColors=t.useColors(),a.color=function(e){var a,n=0;for(a in e)n=(n<<5)-n+e.charCodeAt(a),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(a),a}a("Oyvg"),a("KKXr"),a("2Spj"),a("pIFo"),(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var a=("string"==typeof e?e:"").split(/[\s,]+/),n=a.length,r=0;r<n;r++)a[r]&&("-"===(e=a[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var a,n;for(a=0,n=t.skips.length;a<n;a++)if(t.skips[a].test(e))return!1;for(a=0,n=t.names.length;a<n;a++)if(t.names[a].test(e))return!0;return!1},t.humanize=a("QXP7"),t.names=[],t.skips=[],t.formatters={}},h1Gf:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),o=a("Bl7J"),c=a("vrFN"),i=(a("9eSz"),a("G04T"),function(){return r.a.createElement("section",{className:"work story"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section-info"},r.a.createElement("h1",null,"story."),r.a.createElement("p",null,"I like to think of myself as a design-chef who also happens to love sharing the recipes.")),r.a.createElement("div",{className:"work-wrap "},r.a.createElement("div",{className:"story-box"},r.a.createElement("div",{className:"story-title"},r.a.createElement("a",{href:"https://medium.com/zomato-technology/zomatos-new-sushi-design-system-d7f4f98664c5",className:"article"},r.a.createElement("h1",null,"Zomato’s new Sushi Design System"),r.a.createElement("p",null,"All new Zomato design system to create a smooth and amazing experience for our users."),r.a.createElement("div",{className:"meta"},r.a.createElement("h4",null,"Sep 10, 2019"))))),r.a.createElement("div",{className:"story-box"},r.a.createElement("div",{className:"story-title"},r.a.createElement("a",{href:"https://medium.com/zomato-technology/why-we-switched-to-figma-as-the-primary-design-tool-at-zomato-1aa8fa931b0a",className:"article"},r.a.createElement("h1",null,"Why we switched to Figma as the primary design tool at Zomato"),r.a.createElement("p",null,"Figma makes it so much easier to design together at Zomato."),r.a.createElement("div",{className:"meta"},r.a.createElement("h4",null,"Sep 10, 2019"))))),r.a.createElement("div",{className:"story-box"},r.a.createElement("div",{className:"story-title"},r.a.createElement("a",{href:"https://medium.muz.li/top-5-geometric-fonts-for-modern-ui-6c67bef7e67a",className:"article"},r.a.createElement("h1",null,"Top 5 geometric fonts for modern UI"),r.a.createElement("p",null,"Choosing the “right” font for your design is very important. Every font has specific design…."),r.a.createElement("div",{className:"meta"},r.a.createElement("h4",null,"March 11, 2019"))))),r.a.createElement("div",{className:"story-box"},r.a.createElement("div",{className:"story-title"},r.a.createElement("a",{href:"https://blog.vanila.io/my-design-journey-as-a-product-designer-c6ca991fdc7c",className:"article"},r.a.createElement("h1",null,"My design journey as a product designer"),r.a.createElement("p",null,"A quick story about, how I started my design journey and joined Zomato."),r.a.createElement("div",{className:"meta"},r.a.createElement("h4",null,"Dec 28, 2018")))))),r.a.createElement("div",{className:"story-sub"},r.a.createElement("div",{className:"btns h-btns see-all"},r.a.createElement("a",{href:"https://medium.com/@realvjy",className:"btn btn-outline"},"See other stories."))),r.a.createElement("div",{className:"story-sub"},r.a.createElement("div",{className:"form"},r.a.createElement("h1",null,"Get design recipes from the master chef"),r.a.createElement("p",null,"Subscribe to the newsletter to get exclusive updates & digital art inspiration in your inbox."),r.a.createElement("div",{id:"mc_embed_signup"},r.a.createElement("form",{action:"https://vijayverma.us14.list-manage.com/subscribe/post?u=ed1f62133209766c02f08fd47&id=c4285438c3",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",novalidate:!0},r.a.createElement("div",{id:"mc_embed_signup_scroll",className:"newsletter"},r.a.createElement("div",{className:"mc-field-group"},r.a.createElement("label",{for:"mce-EMAIL",style:{display:"none"}},"Email Address "),r.a.createElement("div",{className:"inputbox"},r.a.createElement("input",{type:"email",placeholder:"Your email address please",name:"EMAIL",className:"required email",id:"mce-EMAIL"}))),r.a.createElement("div",{className:"sub-action"},r.a.createElement("div",{id:"mce-responses",className:"clear"},r.a.createElement("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),r.a.createElement("div",{clasNames:"response",id:"mce-success-response",style:{display:"none"}})),r.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},r.a.createElement("input",{type:"text",name:"b_ed1f62133209766c02f08fd47_c4285438c3",tabindex:"-1",value:""})),r.a.createElement("div",{className:"clear"},r.a.createElement("input",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"button sub-button"}))))))))))}),l=a("W/9C");a.d(t,"pageQuery",(function(){return u}));var m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title;e.allMarkdownRemark.edges;return r.a.createElement(o.a,{location:this.props.location,title:t},r.a.createElement(c.a,{title:"vijay verma - stories"}),r.a.createElement("section",{className:"header_section"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",null,r.a.createElement(s.Link,{to:"/",className:"brand"},r.a.createElement("img",{src:"/realvjy.svg",className:"logo"})),r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu-links"},r.a.createElement("li",{className:"active"},r.a.createElement("a",{href:"/story"},"story.")),r.a.createElement("li",null,r.a.createElement("a",{href:"/work"},"work.")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contact"},"contact."))),r.a.createElement("ul",{className:"menu-social"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://dribbble.com/realvjy",target:"__blank"},r.a.createElement("img",{src:"/dribbble.svg"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://instagram.com/realvjy",target:"__blank"},r.a.createElement("img",{src:"/insta.svg"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/realvjy",target:"__blank"},r.a.createElement("img",{src:"/twitter.svg"})))))))),r.a.createElement(i,null),r.a.createElement(l.a,null))},n}(r.a.Component),u=(t.default=m,"2785444898")}}]);
//# sourceMappingURL=component---src-pages-story-js-ec88683febb209e424f9.js.map