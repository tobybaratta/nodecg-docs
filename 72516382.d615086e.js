(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{132:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=p(r),m=n,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return r?o.a.createElement(f,c(c({ref:t},i),{},{components:r})):o.a.createElement(f,c({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(132)),s={id:"custom-routes",title:"Custom Routes",sidebar_label:"Custom Routes"},c={unversionedId:"custom-routes",id:"custom-routes",isDocsHomePage:!1,title:"Custom Routes",description:"NodeCG uses express for its routing, and exposes a helper for creating routes easily:",source:"@site/docs/custom-routes.md",slug:"/custom-routes",permalink:"/docs/custom-routes",editUrl:"https://github.com/nodecg/docs/edit/master/docs/custom-routes.md",version:"current",lastUpdatedBy:"Keiichiro Amemiya",lastUpdatedAt:1600350574,sidebar_label:"Custom Routes",sidebar:"mainSidebar",previous:{title:"Screenshot Testing Graphics",permalink:"/docs/screenshot-testing"},next:{title:"Error Reporting with Sentry.io",permalink:"/docs/sentry"}},u=[],i={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"NodeCG uses ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://expressjs.com/"}),"express")," for its routing, and exposes a helper for creating routes easily:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// bundles/my-bundle/extension.js\n\nmodule.exports = function (nodecg) {\n    const router = nodecg.Router();\n\n    router.get('/customroute', (req, res) => {\n        res.send('OK!');\n    });\n\n    nodecg.mount('/my-bundle', router); // The route '/my-bundle/customroute` is now available\n};\n")))}p.isMDXComponent=!0}}]);