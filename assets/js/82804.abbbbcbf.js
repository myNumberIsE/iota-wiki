"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[82804],{20830:function(e,t,n){n.d(t,{W:function(){return a}});var r=n(67294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},51384:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(79973),a=n(67294),o=n(73727),i=n(6832),l=n(71699),c=n(19901),u=(0,a.createContext)({collectLink:function(){}}),s=n(51402),d=n(79861),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,v=e.to,h=e.href,b=e.activeClassName,g=e.isActive,p=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,w=(0,r.Z)(e,m),Z=(0,i.Z)().siteConfig,C=Z.trailingSlash,y=Z.baseUrl,_=(0,s.C)().withBaseUrl,S=(0,a.useContext)(u),N=v||h,L=(0,l.Z)(N),I=null==N?void 0:N.replace("pathname://",""),T=void 0!==I?(n=I,k&&function(e){return e.startsWith("/")}(n)?_(n):n):void 0;T&&L&&(T=(0,d.applyTrailingSlash)(T,{trailingSlash:C,baseUrl:y}));var B=(0,a.useRef)(!1),A=f?o.OL:o.rU,D=c.Z.canUseIntersectionObserver,M=(0,a.useRef)();(0,a.useEffect)((function(){return!D&&L&&null!=T&&window.docusaurus.prefetch(T),function(){D&&M.current&&M.current.disconnect()}}),[M,T,D,L]);var P=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,U=!T||!L||P;return T&&L&&!P&&!p&&S.collectLink(T),U?a.createElement("a",Object.assign({href:T},N&&!L&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(A,Object.assign({},w,{onMouseEnter:function(){B.current||null==T||(window.docusaurus.preload(T),B.current=!0)},innerRef:function(e){var t,n;D&&e&&L&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),n())}))})),M.current.observe(t))},to:T||""},f&&{isActive:g,activeClassName:b}))}},71699:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},51402:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(6832),a=n(71699);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},78168:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,i=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:i,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},70301:function(e,t,n){n.d(t,{Z:function(){return le}});var r=n(67294),a=n(86010),o=n(5977),i=n(54416),l=n(3978),c="skipToContent_1oUP";function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,l.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&u(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.createElement(i.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=n(74034),m=n(79973),f=["width","height","color","strokeWidth","className"];function v(e){var t=e.width,n=void 0===t?21:t,a=e.height,o=void 0===a?21:a,i=e.color,l=void 0===i?"currentColor":i,c=e.strokeWidth,u=void 0===c?1.2:c,s=(e.className,(0,m.Z)(e,f));return r.createElement("svg",(0,d.Z)({viewBox:"0 0 15 15",width:n,height:o},s),r.createElement("g",{stroke:l,strokeWidth:u},r.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}var h="announcementBar_3WsW",b="announcementBarPlaceholder_2m9F",g="announcementBarClose_38nx",p="announcementBarContent_3EUC";var E=function(){var e=(0,l.nT)(),t=e.isActive,n=e.close,o=(0,l.LU)().announcementBar;if(!t)return null;var c=o.content,u=o.backgroundColor,s=o.textColor,d=o.isCloseable;return r.createElement("div",{className:h,style:{backgroundColor:u,color:s},role:"banner"},d&&r.createElement("div",{className:b}),r.createElement("div",{className:p,dangerouslySetInnerHTML:{__html:c}}),d?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",g),onClick:n,"aria-label":(0,i.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(v,{width:14,height:14,strokeWidth:3.1})):null)},k=n(27458),w=n(5086),Z=n(26266),C=n(98565);var y=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},_=n(27213),S=n(57617),N=n(52807),L=n(90974),I=["width","height","className"],T=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,o=void 0===a?30:a,i=e.className,l=(0,m.Z)(e,I);return r.createElement("svg",(0,d.Z)({className:i,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},l),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},B={toggle:"toggle_3Zt9",navbarHideable:"navbarHideable_2qcr",navbarHidden:"navbarHidden_3yey",navbarSidebarToggle:"navbarSidebarToggle_wkoY"},A="right";function D(){return(0,l.LU)().navbar.items}function M(){var e=(0,l.LU)().colorMode.disableSwitch,t=(0,Z.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function P(e){var t=e.sidebarShown,n=e.toggleSidebar;y(t);var o=D(),c=M(),u=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,l.g8)())?void 0:t({toggleSidebar:a}),i=(0,l.D9)(o),c=(0,r.useState)((function(){return!1})),u=c[0],s=c[1];(0,r.useEffect)((function(){o&&!i&&s(!0)}),[o,i]);var d=!!o;return(0,r.useEffect)((function(){d?n||s(!0):s(!1)}),[n,d]),{shown:u,hide:(0,r.useCallback)((function(){s(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(L.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(w.Z,{className:B.navbarSidebarToggle,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(v,{color:"var(--ifm-color-emphasis-600)",className:B.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":u.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(N.Z,(0,d.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:u.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),u.content)))}var U=function(){var e,t=(0,l.LU)().navbar,n=t.hideOnScroll,o=t.style,i=function(){var e=(0,_.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],o=n[1];(0,l.Rb)((function(){if(a)return o(!1),!1}));var i=(0,r.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:i,shown:a}}(),c=M(),u=(0,S.gA)(),s=(0,C.Z)(n),m=s.navbarRef,f=s.isNavbarVisible,v=D(),h=v.some((function(e){return"search"===e.type})),b=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:A)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:A)}))}}(v),g=b.leftItems,p=b.rightItems;return r.createElement("nav",{ref:m,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":i.shown},e[B.navbarHideable]=n,e[B.navbarHidden]=n&&!f,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||u)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:i.toggle,onKeyDown:i.toggle},r.createElement(T,null)),r.createElement(L.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),g.map((function(e,t){return r.createElement(N.Z,(0,d.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},p.map((function(e,t){return r.createElement(N.Z,(0,d.Z)({},e,{key:t}))})),!c.disabled&&r.createElement(w.Z,{className:B.toggle,checked:c.isDarkTheme,onChange:c.toggle}),!h&&r.createElement(k.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:i.toggle}),i.shouldRender&&r.createElement(P,{sidebarShown:i.shown,toggleSidebar:i.toggle}))},O=n(32577),R=n(19901),W=(0,l.WA)("theme"),x="light",j="dark",V=function(e){return e===j?j:x},H=function(e){(0,l.WA)("theme").set(V(e))},z=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return R.Z.canUseDOM?V(document.documentElement.getAttribute("data-theme")):V(e)}(t)),i=o[0],c=o[1],u=(0,r.useCallback)((function(){c(x),H(x)}),[]),s=(0,r.useCallback)((function(){c(j),H(j)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",V(i))}),[i]),(0,r.useEffect)((function(){if(!n)try{var e=W.get();null!==e&&c(V(e))}catch(t){console.error(t)}}),[n,c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?j:x)}))}),[n,a]),{isDarkTheme:i===j,setLightTheme:u,setDarkTheme:s}},q=n(15502);var F=function(e){var t=z(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(q.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},K="docusaurus.tab.",Q=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,l.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,l._f)().forEach((function(t){if(t.startsWith(K)){var n=t.substring(K.length);e[n]=(0,l.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},G=n(54179);var Y=function(e){var t=Q(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(G.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function J(e){var t=e.children;return r.createElement(F,null,r.createElement(l.pl,null,r.createElement(Y,null,r.createElement(l.OC,null,r.createElement(l.L5,null,r.createElement(l.Cn,null,t))))))}var X=n(9932),$=n(6832),ee=n(51402);function te(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(X.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var ne=n(37027);function re(){var e=(0,$.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,l.l5)();return r.createElement(X.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ae(e){var t=e.permalink,n=(0,$.Z)().siteConfig.url,a=function(){var e=(0,$.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,ee.Z)(t)}(),i=t?""+n+t:a;return r.createElement(X.Z,null,r.createElement("meta",{property:"og:url",content:i}),r.createElement("link",{rel:"canonical",href:i}))}function oe(e){var t=(0,$.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,i=a.localeConfigs,c=(0,l.LU)(),u=c.metadatas,s=c.image,m=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,g=(0,ee.Z)(n),p=(0,l.pe)(m),E=o,k=i[o].direction;return r.createElement(r.Fragment,null,r.createElement(X.Z,null,r.createElement("html",{lang:E,dir:k}),n&&r.createElement("link",{rel:"shortcut icon",href:g}),r.createElement("title",null,p),r.createElement("meta",{property:"og:title",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),s&&r.createElement(ne.Z,{image:s}),v&&r.createElement(ne.Z,{image:v}),r.createElement(ne.Z,{description:f,keywords:h}),r.createElement(ae,null),r.createElement(re,null),r.createElement(te,(0,d.Z)({tag:l.HX,locale:o},b)),r.createElement(X.Z,null,u.map((function(e,t){return r.createElement("meta",(0,d.Z)({key:"metadata_"+t},e))}))))}var ie=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var le=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,i=e.pageClassName;return ie(),r.createElement(J,null,r.createElement(oe,e),r.createElement(s,null),r.createElement(E,null),r.createElement(U,null),r.createElement("div",{className:(0,a.Z)(l.kM.wrapper.main,o,i)},t),!n&&r.createElement(O.Z,null))}},90974:function(e,t,n){var r=n(74034),a=n(79973),o=n(67294),i=n(51384),l=n(34455),c=n(51402),u=n(6832),s=n(3978),d=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,u.Z)().siteConfig.title,n=(0,s.LU)().navbar,m=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,b=e.titleClassName,g=(0,a.Z)(e,d),p=(0,c.Z)(v.href||"/"),E={light:(0,c.Z)(v.src),dark:(0,c.Z)(v.srcDark||v.src)},k=o.createElement(l.Z,{sources:E,alt:v.alt||m||t});return o.createElement(i.Z,(0,r.Z)({to:p},g,v.target&&{target:v.target}),v.src&&(h?o.createElement("div",{className:h},k):o.createElement(o.Fragment,null,k)),null!=m&&o.createElement("b",{className:b},m))}},36673:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(74034),a=n(79973),o=n(67294),i=n(78358),l=n(57617),c=n(86010);n(61142),n(36508),n(62437);var u=n(3978),s=n(79861),d=["docId","label","docsPluginId"];function m(e){var t,n=e.docId,m=e.label,f=e.docsPluginId,v=(0,a.Z)(e,d),h=(0,l.Iw)(f),b=h.activeVersion,g=h.activeDoc,p=(0,u.J)(f).preferredVersion,E=(0,l.yW)(f),k=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,s.uniq)([b,p,E].filter(Boolean)),n),w=v.mobile?"menu__link--active":"navbar__link--active";return o.createElement(i.Z,(0,r.Z)({exact:!0},v,{className:(0,c.Z)(v.className,(t={},t[w]=(null==g?void 0:g.sidebar)&&g.sidebar===k.sidebar,t)),activeClassName:w,label:null!=m?m:k.id,to:k.path}))}},74493:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(74034),a=n(79973),o=n(67294),i=n(78358),l=n(61142),c=n(57617),u=n(3978),s=n(54416),d=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,b=e.dropdownItemsBefore,g=e.dropdownItemsAfter,p=(0,a.Z)(e,d),E=(0,c.Iw)(v),k=(0,c.gB)(v),w=(0,c.yW)(v),Z=(0,u.J)(v),C=Z.preferredVersion,y=Z.savePreferredVersionName;var _,S=(_=k.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){y(e.name)}}})),[].concat(b,_,g)),N=null!=(t=null!=(n=E.activeVersion)?n:C)?t:w,L=f&&S?(0,s.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):N.label,I=f&&S?void 0:m(N).path;return S.length<=1?o.createElement(i.Z,(0,r.Z)({},p,{mobile:f,label:L,to:I,isActive:h?function(){return!1}:void 0})):o.createElement(l.Z,(0,r.Z)({},p,{mobile:f,label:L,to:I,items:S,isActive:h?function(){return!1}:void 0}))}},39693:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(74034),a=n(79973),o=n(67294),i=n(78358),l=n(57617),c=n(3978),u=["label","to","docsPluginId"];function s(e){var t,n=e.label,s=e.to,d=e.docsPluginId,m=(0,a.Z)(e,u),f=(0,l.zu)(d),v=(0,c.J)(d).preferredVersion,h=(0,l.yW)(d),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,p=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.createElement(i.Z,(0,r.Z)({},m,{label:g,to:p}))}},36508:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(74034),a=n(79973),o=n(67294),i=n(61142),l=["width","height"],c=function(e){var t=e.width,n=void 0===t?20:t,i=e.height,c=void 0===i?20:i,u=(0,a.Z)(e,l);return o.createElement("svg",(0,r.Z)({viewBox:"0 0 20 20",width:n,height:c,"aria-hidden":"true"},u),o.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(6832),s=n(3978),d="iconLanguage_3vod",m=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,f=(0,a.Z)(e,m),v=(0,u.Z)().i18n,h=v.currentLocale,b=v.locales,g=v.localeConfigs,p=(0,s.l5)();function E(e){return g[e].label}var k=b.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),w=[].concat(n,k,l),Z=t?"Languages":E(h);return o.createElement(i.Z,(0,r.Z)({},f,{href:"#",mobile:t,label:o.createElement("span",null,o.createElement(c,{className:d}),o.createElement("span",null,Z)),items:w}))}},62437:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(27458);function o(e){return e.mobile?null:r.createElement(a.Z,null)}},37027:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(9932),o=n(3978),i=n(51402);function l(e){var t=e.title,n=e.description,l=e.keywords,c=e.image,u=e.children,s=(0,o.pe)(t),d=(0,i.C)().withBaseUrl,m=c?d(c,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,s),t&&r.createElement("meta",{property:"og:title",content:s}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),l&&r.createElement("meta",{name:"keywords",content:Array.isArray(l)?l.join(","):l}),m&&r.createElement("meta",{property:"og:image",content:m}),m&&r.createElement("meta",{name:"twitter:image",content:m}),u)}},34455:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(74034),a=n(79973),o=n(67294),i=n(86010),l=n(5730),c=n(26266),u={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},s=["sources","className","alt"],d=function(e){var t=(0,l.Z)(),n=(0,c.Z)().isDarkTheme,d=e.sources,m=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,s),b=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,b.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:d[e],alt:v,className:(0,i.Z)(u.themedImage,u["themedImage--"+e],m)},h))})))}},54179:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},98565:function(e,t,n){var r=n(67294),a=n(3978);t.Z=function(e){var t=(0,r.useState)(e),n=t[0],o=t[1],i=(0,r.useRef)(!1),l=(0,r.useRef)(0),c=(0,r.useCallback)((function(e){null!==e&&(l.current=e.getBoundingClientRect().height)}),[]);return(0,a.RF)((function(t,n){if(e){var r=t.scrollY;if(r<l.current)o(!0);else if(i.current)i.current=!1;else{var a=null==n?void 0:n.scrollY,c=document.documentElement.scrollHeight-l.current,u=window.innerHeight;a&&r>=a?o(!1):r+u<c&&o(!0)}}})),(0,a.SL)((function(t){if(e)return t.location.hash?(i.current=!0,void o(!1)):void o(!0)})),{navbarRef:c,isNavbarVisible:n}}},27213:function(e,t,n){var r=n(67294),a=n(19901),o="desktop",i="mobile",l="ssr";function c(){return a.Z.canUseDOM?window.innerWidth>996?o:i:l}t.Z=function(){var e=(0,r.useState)((function(){return c()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},27458:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(74034),a=n(79973),o=n(67294),i=n(73935),l=n(6832),c=n(5977),u=n(51402),s=n(51384),d=n(9932),m=n(53158);function f(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var v=n(20830);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g="Ctrl";var p=o.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,a=b(e,["translations"]),i=r.buttonText,l=void 0===i?"Search":i,c=r.buttonAriaLabel,u=void 0===c?"Search":c,s=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":g:null}),[]);return o.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":u},a,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(v.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},l)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==s&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},s===g?o.createElement(f,null):s),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),E=n(57617),k=n(3978);function w(){var e=function(){var e=(0,l.Z)().i18n,t=(0,E._r)(),n=(0,E.WS)(),r=(0,k.Oh)(),a=[k.HX].concat(Object.keys(t).map((function(e){var a,o,i=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,l=r[e],c=t[e].versions.find((function(e){return e.isLast})),u=null!=(o=null!=i?i:l)?o:c;return(0,k.os)(e,u.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var Z=n(54416),C="searchBox_1Doo",y=["contextualSearch"],_=null;function S(e){var t=e.hit,n=e.children;return o.createElement(s.Z,{to:t.url},n)}function N(e){var t=e.state,n=e.onClose,r=(0,m.Z)().generateSearchPageLink;return o.createElement(s.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function L(e){var t,s,m=e.contextualSearch,f=(0,a.Z)(e,y),v=(0,l.Z)().siteMetadata,h=w(),b=null!=(t=null==(s=f.searchParameters)?void 0:s.facetFilters)?t:[],g=m?[].concat(h,b):b,E=Object.assign({},f.searchParameters,{facetFilters:g}),k=(0,u.C)().withBaseUrl,L=(0,c.k6)(),I=(0,o.useRef)(null),T=(0,o.useRef)(null),B=(0,o.useState)(!1),A=B[0],D=B[1],M=(0,o.useState)(null),P=M[0],U=M[1],O=(0,o.useCallback)((function(){return _?Promise.resolve():Promise.all([n.e(44300).then(n.bind(n,44300)),Promise.all([n.e(40532),n.e(46945)]).then(n.bind(n,46945)),Promise.all([n.e(40532),n.e(46301)]).then(n.bind(n,46301))]).then((function(e){var t=e[0].DocSearchModal;_=t}))}),[]),R=(0,o.useCallback)((function(){O().then((function(){I.current=document.createElement("div"),document.body.insertBefore(I.current,document.body.firstChild),D(!0)}))}),[O,D]),W=(0,o.useCallback)((function(){D(!1),I.current.remove()}),[D]),x=(0,o.useCallback)((function(e){O().then((function(){D(!0),U(e.key)}))}),[O,D,U]),j=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;L.push(t)}}).current,V=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:k(""+t.pathname+t.hash)})}))})).current,H=(0,o.useMemo)((function(){return function(e){return o.createElement(N,(0,r.Z)({},e,{onClose:W}))}}),[W]),z=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e}),[v.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,a=e.onInput,i=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),i&&i.current===document.activeElement&&a&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&a(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,a,i])}({isOpen:A,onOpen:R,onClose:W,onInput:x,searchButtonRef:T});var q=(0,Z.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(d.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:C},o.createElement(p,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:R,ref:T,translations:{buttonText:q,buttonAriaLabel:q}})),A&&(0,i.createPortal)(o.createElement(_,(0,r.Z)({onClose:W,initialScrollY:window.scrollY,initialQuery:P,navigator:j,transformItems:V,hitComponent:S,resultsFooterComponent:H,transformSearchClient:z},f,{searchParameters:E})),I.current))}var I=function(){var e=(0,l.Z)().siteConfig;return o.createElement(L,e.themeConfig.algolia)}},53158:function(e,t,n){var r=n(5977),a=n(6832),o=n(67294);t.Z=function(){var e=(0,r.k6)(),t=(0,a.Z)().siteConfig.baseUrl,n=(0,o.useState)(""),i=n[0],l=n[1];return(0,o.useEffect)((function(){var e,t=null!=(e=new URLSearchParams(window.location.search).get("q"))?e:"";l(t)}),[]),{searchQuery:i,setSearchQuery:(0,o.useCallback)((function(t){var n=new URLSearchParams(window.location.search);t?n.set("q",t):n.delete("q"),e.replace({search:n.toString()}),l(t)}),[e]),generateSearchPageLink:(0,o.useCallback)((function(e){return t+"search?q="+encodeURIComponent(e)}),[t])}}},54357:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},79861:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(54357);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(45479);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},45479:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);