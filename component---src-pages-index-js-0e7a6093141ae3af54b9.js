(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=g(t);return p[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+c+s+o+a+r+t+n+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=c.default.createElement(R,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?c.default.createElement("picture",null,i(r),o):o})),R=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,g=e.placeholderClassName,p=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,x=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:O?1:0,transition:C?"opacity "+b+"ms":"none"},o),z="boolean"==typeof v?"lightgray":v,P={transitionDelay:b+"ms"},_=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&P,o,f),q={title:t,alt:this.state.isVisible?"":a,style:_,className:g,itemProp:y};if(p){var j=p,T=m(p);return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),z&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&P)}),T.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:q,imageVariants:j,generateSources:I}),T.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:q,imageVariants:j,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,S(j),c.default.createElement(R,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:w},T,{imageVariants:j}))}}))}if(h){var M=h,W=m(h),F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete F.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},z&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},C&&P)}),W.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:q,imageVariants:M,generateSources:I}),W.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:q,imageVariants:M,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,S(M),c.default.createElement(R,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:w},W,{imageVariants:M}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),z=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});C.propTypes={resolutions:V,sizes:z,fixed:d.default.oneOfType([V,d.default.arrayOf(V)]),fluid:d.default.oneOfType([z,d.default.arrayOf(z)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=C;t.default=P},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("I/Z2"),s=(a("GsLf"),a("xfY5"),a("+ZDr")),o=a.n(s);a("lw3w"),a("emEt").default.enqueue;var l=a("ma3e");function c(){var e=n.data;return i.a.createElement("div",{className:"header-main"},i.a.createElement("h1",null,e.site.siteMetadata.title),i.a.createElement("div",{className:"social-media"},i.a.createElement("a",{href:"https://www.github.com/HerreraManuel",className:"icon"},i.a.createElement(l.a,{size:45})),i.a.createElement("a",{href:"https://www.linkedin.com/in/herrera-manuel",className:"icon"},i.a.createElement(l.b,{size:45}))),i.a.createElement("span",{className:"links"},i.a.createElement(o.a,{to:"/"},"About Me"),"|",i.a.createElement(o.a,{to:"/projects"},"Projects")),i.a.createElement("hr",null))}t.a=function(e){return i.a.createElement("div",null,i.a.createElement(c,null),i.a.createElement("div",{className:"content-main"},e.children))}},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),l=a("czNK"),c=a("ZD67"),d=a("0/R4"),u=a("s5qY"),f=a("s5qY"),g=!i.ActiveXObject&&"ActiveXObject"in i,m=o.getWeak,p=Object.isExtensible,h=c.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(d(e)){var t=m(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(u(this,"WeakMap"),e,t)}},E=e.exports=a("4LiD")("WeakMap",v,b,c,!0,!0);f&&g&&(l((r=c.getConstructor(v,"WeakMap")).prototype,b),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=E.prototype,a=t[e];s(t,e,(function(t,i){if(d(t)&&!p(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},GsLf:function(e,t,a){},"I/Z2":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Manuel Herrera"}}}}')},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("bWfx"),a("ioFf"),a("V+eJ"),a("91GP");var r=a("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(i),s=function(){return(s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(a[r[i]]=e[r[i]])}return a};function l(e){return function(t){return r.createElement(c,s({attr:s({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,s({key:a},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var a,i=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var n=e.attr,l=e.title,c=o(e,["attr","title"]);return r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:s({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==n?r.createElement(n.Consumer,null,(function(e){return t(e)})):t(i)}},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},PJXx:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return l}));var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),s=(a("PJXx"),a("9eSz")),o=a.n(s),l="1439282624";t.default=function(e){return console.log(l),i.a.createElement(n.a,null,i.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{class:"side"},i.a.createElement("div",{className:"images"},i.a.createElement(o.a,{className:"img",fluid:e.data.file.childImageSharp.fluid})),i.a.createElement("h5",null,"Location: Sacramento, California"),i.a.createElement("h5",null,"Degree: California State University, Sacramento")),i.a.createElement("div",{class:"main"},i.a.createElement("p",null,"Hi,"),i.a.createElement("p",null,"At some point in time, I'll have enough experience to fill out this space. For now, here is a list of technologies and languages I have worked with:"),i.a.createElement("img",{className:"logos",src:"./logos/react.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/python-original.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/cplusplus-original.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/android-original.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/atlassian.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/csharp-original.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/docker-icon.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/gatsby.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/java-original-wordmark.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/mongodb-original-wordmark.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/postgresql.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/linux-original.svg"}),i.a.createElement("img",{className:"logos",src:"./logos/typescript-icon.svg"}))))}},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),l=a("SlkY"),c=a("CkkT"),d=a("aagx"),u=a("s5qY"),f=c(5),g=c(6),m=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var c=e((function(e,r){o(e,c,t,"_i"),e._t=t,e._i=m++,e._l=void 0,null!=r&&l(r,a,e[n],e)}));return r(c.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?p(u(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?p(u(this,t)).has(e):a&&d(a,this._i)}}),c},def:function(e,t,a){var r=i(n(t),!0);return!0===r?p(e).set(t,a):r[e._i]=a,e},ufstore:p}},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},qncB:function(e,t,a){var r=a("XKFU"),i=a("vhPU"),n=a("eeVq"),s=a("/e88"),o="["+s+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(e,t,a){var i={},o=n((function(){return!!s[e]()||"​"!="​"[e]()})),l=i[e]=o?t(u):s[e];a&&(i[a]=l),r(r.P+r.F*o,"String",i)},u=d.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),i=a.n(r),n=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},xfY5:function(e,t,a){"use strict";var r=a("dyZX"),i=a("aagx"),n=a("LZWt"),s=a("Xbzi"),o=a("apmT"),l=a("eeVq"),c=a("kJMx").f,d=a("EemH").f,u=a("hswa").f,f=a("qncB").trim,g=r.Number,m=g,p=g.prototype,h="Number"==n(a("Kuth")(p)),v="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var a,r,i,n=(t=v?t.trim():f(t,3)).charCodeAt(0);if(43===n||45===n){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var s,l=t.slice(2),c=0,d=l.length;c<d;c++)if((s=l.charCodeAt(c))<48||s>i)return NaN;return parseInt(l,r)}}return+t};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof g&&(h?l((function(){p.valueOf.call(a)})):"Number"!=n(a))?s(new m(b(t)),a,g):b(t)};for(var E,y=a("nh4g")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;y.length>S;S++)i(m,E=y[S])&&!i(g,E)&&u(g,E,d(m,E));g.prototype=p,p.constructor=g,a("KroJ")(r,"Number",g)}}}]);
//# sourceMappingURL=component---src-pages-index-js-0e7a6093141ae3af54b9.js.map