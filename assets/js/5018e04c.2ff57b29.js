"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9862],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),y=i,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},377:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={title:"Use with TypeScript",position:6},p=void 0,l={unversionedId:"intro/typescript",id:"intro/typescript",title:"Use with TypeScript",description:"Middy can be used with TypeScript with typings built in in every official package.",source:"@site/docs/intro/06-typescript.md",sourceDirName:"intro",slug:"/intro/typescript",permalink:"/docs/intro/typescript",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/intro/06-typescript.md",tags:[],version:"current",lastUpdatedAt:1654381206,formattedLastUpdatedAt:"6/4/2022",sidebarPosition:6,frontMatter:{title:"Use with TypeScript",position:6},sidebar:"tutorialSidebar",previous:{title:"Handling Errors",permalink:"/docs/intro/handling-errors"},next:{title:"Plugins",permalink:"/docs/intro/plugins"}},s=[],u={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Middy can be used with TypeScript with typings built in in every official package."),(0,o.kt)("p",null,"Here's an example of how you might be using Middy with TypeScript for a Lambda receiving events from API Gateway:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import middy from '@middy/core'\nimport { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'\n\nasync function lambdaHandler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {\n  // the returned response will be checked against the type `APIGatewayProxyResult`\n  return {\n    statusCode: 200,\n    body: `Hello from ${event.path}`\n  }\n}\n\nlet handler = middy(lambdaHandler)\nhandler\n  .use(someMiddleware)\n  .use(someOtherMiddleware)\n\nexport default handler\n")),(0,o.kt)("p",null,"You can also ",(0,o.kt)("a",{parentName:"p",href:"/docs/writing-middlewares/intro"},"write custom middlewares with TypeScript"),"."))}d.isMDXComponent=!0}}]);