"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33819],{96727:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],c={keywords:["ISCP","Smart Contracts","Core Concepts","Table of Contents"],description:"IOTA Smart Contract Protocol Documentation Overview",image:"/img/logo/WASP_logo_dark.png"},s="ISCP",l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"ISCP",description:"IOTA Smart Contract Protocol Documentation Overview",source:"@site/external/wasp/documentation/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/wasp/overview",tags:[],version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","Core Concepts","Table of Contents"],description:"IOTA Smart Contract Protocol Documentation Overview",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",next:{title:"Smart Contracts",permalink:"/wasp/guide/core_concepts/smart-contracts"}},u=[{value:"Scaling and Fees",id:"scaling-and-fees",children:[]},{value:"Custom Chains",id:"custom-chains",children:[]},{value:"Flexibility",id:"flexibility",children:[]},{value:"What is Wasp?",id:"what-is-wasp",children:[]}],h={toc:u};function p(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iscp"},"ISCP"),(0,r.kt)("p",null,"ISCP stands for IOTA Smart Contract Protocol. It is IOTA's solution for running smart contracts on top of the IOTA tangle. With ISCP we bring scalable and flexible smart contracts into the IOTA ecosystem by allowing anyone to spin up a smart contract blockchain and anchor it to the IOTA tangle. "),(0,r.kt)("p",null,"Allowing multiple blockchains to anchor to the tangle will solve several problems with smart contracts."),(0,r.kt)("h3",{id:"scaling-and-fees"},"Scaling and Fees"),(0,r.kt)("p",null,"Due to the ordered structure and execution time of a smart contract, a single blockchain can only handle so many transactions per second before it needs to decide on which transactions it needs to postpone until other blocks are produced, as there is no processing power available for them on that chain. This eventually results in high fees on many chains, and limited functionality. "),(0,r.kt)("p",null,"As we allow many chains (which can communicate with other chains) to be anchored to the IOTA tangle, we can simply add additional chains once this becomes a problem. This results in lower fees over solutions that just use a single blockchain for all their smart contracts. "),(0,r.kt)("h3",{id:"custom-chains"},"Custom Chains"),(0,r.kt)("p",null,"Given that anyone can start a new chain, and set the rules for that chain, a lot is possible. Not only do you have full control over how the fees are handled on the chain you set up, but you also have full control over the validators and access to your chain. You can even spin up a private blockchain with no public data besides the state hash that is anchored to the main IOTA tangle. This allows parties that need private blockchains to use the security of the public IOTA network without actually exposing their blockchain to the public."),(0,r.kt)("h3",{id:"flexibility"},"Flexibility"),(0,r.kt)("p",null,"You can run multiple types of virtual machines on any chain. We are starting with ",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/docs/book/"},"Rust/WASM")," based smart contracts, followed by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.6/"},"Solidity/EVM")," based smart contracts, but eventually all kinds of virtual machines can be supported in a ISCP chain depending on the demand. "),(0,r.kt)("p",null,"ISCP is more complex compared to conventional smart contracts, but this provides freedom and flexibility to allow the usage of smart contracts in a wide range of use cases."),(0,r.kt)("h2",{id:"what-is-wasp"},"What is Wasp?"),(0,r.kt)("p",null,"Wasp is the node software that we have built to let you validate smart contracts as a part of a committee while using a virtual machine of your choice. Multiple Wasp nodes connect and form a committee of validators. When they reach consensus on a virtual machine state-change, they anchor that state change to the IOTA tangle, making it immutable."))}p.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(m,i(i({ref:e},u),{},{components:n})):o.createElement(m,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);