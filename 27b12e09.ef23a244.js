(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||p[u]||c;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),c=(n(0),n(132)),i={id:"installing",title:"Installing NodeCG",sidebar_label:"Installing"},l={unversionedId:"installing",id:"installing",isDocsHomePage:!1,title:"Installing NodeCG",description:"Install",source:"@site/docs/installing.md",slug:"/installing",permalink:"/docs/installing",editUrl:"https://github.com/nodecg/docs/edit/master/docs/installing.md",version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1600619674,sidebar_label:"Installing",sidebar:"mainSidebar",previous:{title:"What is NodeCG?",permalink:"/docs/what-is-nodecg"},next:{title:"Creating Bundles",permalink:"/docs/creating-bundles"}},o=[{value:"Install",id:"install",children:[]},{value:"Start",id:"start",children:[]},{value:"Installing bundles",id:"installing-bundles",children:[{value:"GitHub",id:"github",children:[]},{value:"BitBucket",id:"bitbucket",children:[]},{value:"Other Providers",id:"other-providers",children:[]}]}],b={rightToc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"install"},"Install"),Object(c.b)("p",null,"There are two methods to install NodeCG: cloning from GitHub or using the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nodecg/nodecg-cli"}),"nodecg-cli"),"."),Object(c.b)("p",null,"Install ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://nodejs.org/"}),"Node.js (version 8.3 or greater) & npm (version 2 or greater)"),".  "),Object(c.b)("p",null,"Using ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nodecg/nodecg-cli"}),"nodecg-cli"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --global nodecg-cli\nmkdir nodecg\ncd nodecg\nnodecg setup\n")),Object(c.b)("p",null,"Cloning from GitHub:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/nodecg/nodecg.git\ncd nodecg\nnpm install --production\n")),Object(c.b)("h2",{id:"start"},"Start"),Object(c.b)("p",null,"Run ",Object(c.b)("inlineCode",{parentName:"p"},"node index.js")," or ",Object(c.b)("inlineCode",{parentName:"p"},"nodecg start")," in the root nodecg folder."),Object(c.b)("p",null,"Open the dashboard (",Object(c.b)("inlineCode",{parentName:"p"},"http://localhost:9090")," by default)."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"When running NodeCG in production, ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," or ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Unitech/pm2"}),"pm2")," are recommended."))),Object(c.b)("h2",{id:"installing-bundles"},"Installing bundles"),Object(c.b)("p",null,"NodeCG's individual graphics packages are called ",Object(c.b)("em",{parentName:"p"},"bundles"),". They can be installed either from the command-line\n(via ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/nodecg-cli"}),Object(c.b)("em",{parentName:"a"},"nodecg-cli")),"), or by simply placing the folder into the ",Object(c.b)("inlineCode",{parentName:"p"},"./bundles")," directory."),Object(c.b)("p",null,"The easiest way to install bundles is via the command-line using ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/nodecg-cli"}),"nodecg-cli"),".\nYou will need to install ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/nodecg-cli"}),"nodecg-cli")," before you can use the ",Object(c.b)("inlineCode",{parentName:"p"},"nodecg"),"\nterminal commands."),Object(c.b)("h3",{id:"github"},"GitHub"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nodecg install lange/lange-notify\n")),Object(c.b)("h3",{id:"bitbucket"},"BitBucket"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nodecg install bitbucket:username/repo-name\n")),Object(c.b)("h3",{id:"other-providers"},"Other Providers"),Object(c.b)("p",null,"Enter the git URL."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nodecg install https://gitlab.com/username/repo-name.git\n")),Object(c.b)("p",null,"Bundles are just directories inside the ",Object(c.b)("inlineCode",{parentName:"p"},"./bundles")," folder.\nThey can always be added and removed by simply moving them into or out of that folder.\nAvoid installing or uninstalling bundles while NodeCG is running."))}d.isMDXComponent=!0}}]);