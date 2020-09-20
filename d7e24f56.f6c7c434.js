(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),i=(a(0),a(132)),o={id:"performance-tips",title:"Performance Tips",sidebar_label:"Performance"},s={unversionedId:"performance-tips",id:"performance-tips",isDocsHomePage:!1,title:"Performance Tips",description:"Be careful which CSS properties you animate",source:"@site/docs/performance-tips.md",slug:"/performance-tips",permalink:"/docs/performance-tips",editUrl:"https://github.com/nodecg/docs/edit/master/docs/performance-tips.md",version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1600619674,sidebar_label:"Performance",sidebar:"mainSidebar",previous:{title:"Replicant Validation",permalink:"/docs/replicant-schemas"},next:{title:"Making Dashboard Dialogs",permalink:"/docs/making-dialogs"}},c=[{value:"Be careful which CSS properties you animate",id:"be-careful-which-css-properties-you-animate",children:[]},{value:"Minimize active <code>&lt;video&gt;</code> tags",id:"minimize-active-video-tags",children:[]},{value:"Use sprite sheets when appropriate",id:"use-sprite-sheets-when-appropriate",children:[]},{value:"A <code>&lt;div&gt;</code> is (generally) faster than a picture or video",id:"a-div-is-generally-faster-than-a-picture-or-video",children:[]},{value:"Minimize alpha pixels",id:"minimize-alpha-pixels",children:[]},{value:"Avoid multiple CSS masks",id:"avoid-multiple-css-masks",children:[]},{value:"Compress your images",id:"compress-your-images",children:[]},{value:"Keep <code>&lt;canvas&gt;</code> tags above 256x257 total pixels",id:"keep-canvas-tags-above-256x257-total-pixels",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"be-careful-which-css-properties-you-animate"},"Be careful which CSS properties you animate"),Object(i.b)("p",null,"Many CSS properties trigger ",Object(i.b)("inlineCode",{parentName:"p"},"layout")," events when changed. That means that changing one property can sometimes cause\nthe entire page to be re-rendered, which imposes a significant performance hit. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://csstriggers.com/"}),"CSS Triggers")," is a website\nthat lets you quickly check which CSS properties are expensive to animate. (Spoilers: ",Object(i.b)("inlineCode",{parentName:"p"},"transform")," and ",Object(i.b)("inlineCode",{parentName:"p"},"opacity")," are just about the only\nCSS properties that can be freely maniuplated with little overhead)."),Object(i.b)("h3",{id:"minimize-active-video-tags"},"Minimize active ",Object(i.b)("inlineCode",{parentName:"h3"},"<video>")," tags"),Object(i.b)("p",null,"For animations that are always the same, pre-rendering them as webm video (which supports alpha transparency)\nis an option. However, care must be taken to remove these ",Object(i.b)("inlineCode",{parentName:"p"},"<video>")," nodes from the DOM when they are not in use.\nEven if a ",Object(i.b)("inlineCode",{parentName:"p"},"<video>")," tag is not currently playing, simply having it in the DOM can impact performance."),Object(i.b)("h3",{id:"use-sprite-sheets-when-appropriate"},"Use sprite sheets when appropriate"),Object(i.b)("p",null,"For short pre-rendered animations, a sprite sheet might be the best solution.\nIf done right, they can be smaller in size and perform better than their ",Object(i.b)("inlineCode",{parentName:"p"},"<video>")," counterpart.\nThere are many libraries and tools out there for sprite sheet creation, but\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.createjs.com/#!/EaselJS"}),"EaselJS")," (javascript Canvas2D library) and\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.codeandweb.com/texturepacker"}),"TexturePacker")," (sprite sheet creation program) are a good place to start."),Object(i.b)("h3",{id:"a-div-is-generally-faster-than-a-picture-or-video"},"A ",Object(i.b)("inlineCode",{parentName:"h3"},"<div>")," is (generally) faster than a picture or video"),Object(i.b)("p",null,"Videos and sprite sheets can be nice shortcuts to speed up production time, but if your graphic is\nstruggling to maintain a solid framerate then you may need to consider breaking it down into smaller parts.\nA handful of ",Object(i.b)("inlineCode",{parentName:"p"},"<div>"),"s will generally perform better than a video or sprite sheet, as long as you aren't\napplying too many performance-intensive CSS styles. Use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://csstriggers.com/"}),"CSS Triggers")," as a reference to\nknow how expensive it is to animate various CSS properties."),Object(i.b)("h3",{id:"minimize-alpha-pixels"},"Minimize alpha pixels"),Object(i.b)("p",null,"Alpha (transparency) is expensive to render. Try to keep your images and videos with alpha cropped as much as possible."),Object(i.b)("h3",{id:"avoid-multiple-css-masks"},"Avoid multiple CSS masks"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.html5rocks.com/en/tutorials/masking/adobe/"}),"CSS masks")," have their uses, but layering\nmultiple masks in a scene can lead to significant performance reductions.\nWhen possible, use a culling ",Object(i.b)("inlineCode",{parentName:"p"},"div")," with ",Object(i.b)("inlineCode",{parentName:"p"},"overflow: hidden")," instead."),Object(i.b)("h3",{id:"compress-your-images"},"Compress your images"),Object(i.b)("p",null,"Compressed images won't help framerate, but they will improve load times.\nCompressing your PNGs with a service such as ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://tinypng.com/"}),"TinyPNG")," can result in dramatically\nreduced filesizes. Be careful when compressing images with subtle gradients, as some detail may be lost."),Object(i.b)("h3",{id:"keep-canvas-tags-above-256x257-total-pixels"},"Keep ",Object(i.b)("inlineCode",{parentName:"h3"},"<canvas>")," tags above 256x257 total pixels"),Object(i.b)("p",null,"In Chrome, ",Object(i.b)("inlineCode",{parentName:"p"},"<canvas>")," tags are only hardware accelerated when their total size is at least 256x257 pixels.\nBelow this size, canvases are software rasterized and can severely reduce the framerate and performance of a graphic."),Object(i.b)("p",null,"Sources:\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/NPSQdiXSK4w"}),"1"),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://chromium.googlesource.com/external/Webkit/+/f10c2d38aefd143134545e397bc49c8e305d3ba8/Source/WebCore/page/Settings.cpp#133"}),"2")))}l.isMDXComponent=!0},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(a),b=r,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||i;return a?n.a.createElement(u,s(s({ref:t},p),{},{components:a})):n.a.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);