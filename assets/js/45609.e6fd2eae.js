"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45609],{18607:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(79973),r=a(67294),l=a(86010),i=a(70301),c=a(51384),o="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",v="sidebarItemLinkActive_12pM",g=a(54416);function p(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:v},e.title))}))))}var h=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,c=e.children,o=(0,n.Z)(e,h),s=t&&t.items.length>0;return r.createElement(i.Z,o,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},a))))}},16509:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),l=a(51384),i="image_1yU8";var c=function(e){var t=e.author,a=t.name,r=t.title,c=t.url,o=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(l.Z,{className:"avatar__photo-link avatar__photo",href:c},n.createElement("img",{className:i,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(l.Z,{href:c,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},o="authorCol_1R69";function s(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",o),key:t},n.createElement(c,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}},95122:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(67294),r=a(37027),l=a(18607),i=a(91891),c=a(54416),o=a(51384);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(3978),u=a(89492);var d=function(e){var t,a=e.content,c=e.sidebar,o=a.frontMatter,d=a.assets,v=a.metadata,g=v.title,p=v.description,h=v.nextItem,f=v.prevItem,E=v.date,b=v.tags,_=v.authors,N=o.hide_table_of_contents,Z=o.keywords,k=o.toc_min_heading_level,y=o.toc_max_heading_level,L=null!=(t=d.image)?t:o.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:c,toc:!N&&a.toc&&a.toc.length>0?n.createElement(u.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:y}):void 0},n.createElement(r.Z,{title:g,description:p,keywords:Z,image:L},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:E}),_.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),b.length>0&&n.createElement("meta",{property:"article:tag",content:b.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:o,assets:d,metadata:v,isBlogPostPage:!0},n.createElement(a,null)),(h||f)&&n.createElement(s,{nextItem:h,prevItem:f}))}},76725:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(54416),l=a(23779),i=a(3978);function c(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.kM.common.editThisPage},n.createElement(l.Z,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},60153:function(e,t,a){a.d(t,{N:function(){return d},Z:function(){return v}});var n=a(79973),r=a(74034),l=a(67294),i=a(86010),c=a(54416),o=a(3978),s="anchorWithStickyNavbar_31ik",m="anchorWithHideOnScrollNavbar_3R7-",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?d:(t=e,function(e){var a,d=e.id,v=(0,n.Z)(e,u),g=(0,o.LU)().navbar.hideOnScroll;return d?l.createElement(t,(0,r.Z)({},v,{className:(0,i.Z)("anchor",(a={},a[m]=g,a[s]=!g,a)),id:d}),v.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+d,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,v)});var t}},23779:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(74034),r=a(79973),l=a(67294),i=a(86010),c="iconEdit_2_ui",o=["className"],s=function(e){var t=e.className,a=(0,r.Z)(e,o);return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},83949:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(74034),r=a(79973),l=a(67294),i=a(9932),c=a(51384),o=a(48235),s=a(60153),m=a(86010),u=a(3978),d="details_1VDD";function v(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,n.Z)({},t,{className:(0,m.Z)("alert alert--info",d,t.className)}))}var g=["mdxType","originalType"];var p={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var n=e.props,i=(n.mdxType,n.originalType,(0,r.Z)(n,g));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(o.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){var t,a=e.children;return(0,l.isValidElement)(a)&&(0,l.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:l.createElement(o.Z,(0,l.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==a})));return l.createElement(v,(0,n.Z)({},e,{summary:a}),r)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},89492:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(74034),r=a(79973),l=a(67294),i=a(86010),c=a(14569),o="tableOfContents_35-E",s=["className"];var m=function(e){var t=e.className,a=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(c.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},14569:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(74034),r=a(79973),l=a(67294),i=a(3978),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function s(e){var t=e.toc,a=e.className,s=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,v=void 0===d?void 0:d,g=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,r.Z)(e,c),f=(0,i.LU)(),E=null!=g?g:f.tableOfContents.minHeadingLevel,b=null!=p?p:f.tableOfContents.maxHeadingLevel,_=(0,i.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:b}),N=(0,l.useMemo)((function(){if(u&&v)return{linkClassName:u,linkActiveClassName:v,minHeadingLevel:E,maxHeadingLevel:b}}),[u,v,E,b]);return(0,i.Si)(N),l.createElement(o,(0,n.Z)({toc:_,className:s,linkClassName:u},h))}},19004:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),l=a(51384),i="tag_1Okp",c="tagRegular_3MiF",o="tagWithCount_1HU1";var s=function(e){var t,a=e.permalink,s=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[c]=!m,t[o]=m,t))},s,m&&n.createElement("span",null,m))}},21192:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),l=a(54416),i=a(19004),c="tags_2ga9",o="tag_11ep";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);